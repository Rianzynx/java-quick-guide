package com.guia.java_quick_guide.controller;


import com.guia.java_quick_guide.model.User;
import com.guia.java_quick_guide.repository.UserRepository;
import com.guia.java_quick_guide.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public String login(@RequestBody Map<String, String> data) {
        User user = repository.findByEmail(data.get("email")).orElseThrow(() -> new RuntimeException("Usuario não encontrado"));

        if(encoder.matches(data.get("password"), user.getPassword())) {
            return tokenService.generateToken(user);
        }

        return "Senha invalida";
    }
}

