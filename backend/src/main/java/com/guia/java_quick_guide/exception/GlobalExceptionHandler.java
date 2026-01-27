package com.guia.java_quick_guide.infra;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@RestControllerAdvice // Esta anotação diz ao Spring para monitorar todos os Controllers
public class GlobalExceptionHandler {

    // trata erros de "nao encontrado" (ex: buscar tópico que não existe)
    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<String> handle404(NoSuchElementException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Erro: O recurso solicitado não foi encontrado.");
    }

    // trata erros de URLs que não existem
    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<String> handleRouteNotFound(NoResourceFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Erro: Esta rota não existe na nossa API.");
    }

    // trata erros de tentativa de duplicar e-mail
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleRuntime(RuntimeException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    // se algo der muito errado, cai aqui
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handle500(Exception ex) {
        ex.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Erro interno: Algo deu errado no servidor. Tente novamente mais tarde.");
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> erros = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
                erros.put(error.getField(), error.getDefaultMessage())
        );
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(erros);
    }
}