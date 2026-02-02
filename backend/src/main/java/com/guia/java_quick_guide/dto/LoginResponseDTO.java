package com.guia.java_quick_guide.dto;

import jakarta.validation.constraints.NotBlank;

public record LoginResponseDTO(
        @NotBlank
        String email,

        @NotBlank
        String password
) {}