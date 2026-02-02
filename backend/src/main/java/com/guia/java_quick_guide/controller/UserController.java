package com.guia.java_quick_guide.controller;

import com.guia.java_quick_guide.dto.RegisterDTO;
import com.guia.java_quick_guide.dto.UserResponseDTO;
import com.guia.java_quick_guide.model.User;
import com.guia.java_quick_guide.model.UserRole;
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
    public ResponseEntity<List<UserResponseDTO>> listar() {
        List<User> usuarios = repository.findAll();

        List<UserResponseDTO> response = usuarios.stream()
                .map(UserResponseDTO::new)
                .toList();

        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> criar(@Valid @RequestBody RegisterDTO data) {
        try {

            // Verifica se o email já existe para evitar erro 500 de duplicata
            if(repository.existsByEmail(data.email())) {
                return ResponseEntity.status(409).build();
            }

            // Converte o DTO para a Entity User
            User user = new User();
            user.setName(data.name());
            user.setEmail(data.email());
            user.setPassword(encoder.encode(data.password()));

            user.setRole(UserRole.User);

            User userSalvo = repository.save(user);

            return ResponseEntity.ok(new UserResponseDTO(userSalvo));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
}
