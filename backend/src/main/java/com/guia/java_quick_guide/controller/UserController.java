package com.guia.java_quick_guide.controller;

import com.guia.java_quick_guide.dto.UserResponseDTO;
import com.guia.java_quick_guide.model.User;
import com.guia.java_quick_guide.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder encoder;

    @GetMapping
    public List<User> listar() {
        return repository.findAll();
    }

    @PostMapping
    public ResponseEntity<UserResponseDTO> criar(@Valid @RequestBody User user) {
        try {
            user.setPassword(encoder.encode(user.getPassword()));
            User userSalvo = repository.save(user);
            return ResponseEntity.ok(new UserResponseDTO(userSalvo));
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }

    }
}
