package com.guia.java_quick_guide.dto;

import com.guia.java_quick_guide.model.User;

public record UserResponseDTO(Long id, String email) {

    public UserResponseDTO(User user) {
        this(user.getId(), user.getEmail());
    }
}
