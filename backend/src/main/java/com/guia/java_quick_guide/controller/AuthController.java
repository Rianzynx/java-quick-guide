package com.guia.java_quick_guide.controller;


import com.guia.java_quick_guide.dto.LoginResponseDTO;
import com.guia.java_quick_guide.model.User;
import com.guia.java_quick_guide.repository.UserRepository;
import com.guia.java_quick_guide.service.TokenService;
import jakarta.validation.Valid;
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
    public ResponseEntity<?> login(@RequestBody @Valid LoginResponseDTO data) {
        // Tenta buscar o usuário sem lançar Exception de erro 500
        var userOptional = repository.findByEmail(data.email());

        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("E-mail ou senha incorretos");
        }

        User user = userOptional.get();

        // Compara a senha
        if (encoder.matches(data.password(), user.getPassword())) {
            String token = tokenService.generateToken(user);

            // Retorna um JSON, não apenas uma String pura, para o React ler melhor
            return ResponseEntity.ok(Map.of(
                    "token", token,
                    "name", user.getName(),
                    "email", user.getEmail()
            ));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("E-mail ou senha incorretos");
    }
}

