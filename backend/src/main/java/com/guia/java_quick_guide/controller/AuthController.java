package com.guia.java_quick_guide.controller;


import com.guia.java_quick_guide.model.User;
import com.guia.java_quick_guide.repository.UserRepository;
import com.guia.java_quick_guide.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private TokenService tokenService;


    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Map<String, String> data) {
        // Busca o usuario
        var userOptional = repository.findByEmail(data.get("email"));

        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário não encontrado");
        }

        var user = userOptional.get();

        // Verifica a senha
        if (encoder.matches(data.get("password"), user.getPassword())) {
            String token = tokenService.generateToken(user);
            // Retorna o token em um Map para virar um JSON { "token": "..." }
            return ResponseEntity.ok(Map.of("token", token));
        }

        // Se a senha estiver errada, retorna 401
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Senha inválida");
    }
}

