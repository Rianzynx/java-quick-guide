package com.guia.java_quick_guide.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "topics")
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O título é obrigatório")
    @Column(unique = true, nullable = false)
    private String title;

    @NotBlank(message = "A descrição não deve estar vazia")
    @Column(columnDefinition = "TEXT")
    private String description;

    @NotBlank(message = "A categória é obrigatória")
    private String category;

    private String level;

    @Column(columnDefinition = "TEXT")
    private String useCase;

    @Column(columnDefinition = "TEXT")
    private String code;
}
