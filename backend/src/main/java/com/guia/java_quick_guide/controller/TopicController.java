package com.guia.java_quick_guide.controller;


import com.guia.java_quick_guide.model.Topic;
import com.guia.java_quick_guide.repository.TopicRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/topics")
@CrossOrigin(origins = "*")
public class TopicController {

    @Autowired
    private TopicRepository repository;

    @GetMapping
    public List<Topic> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Topic criar(@Valid @RequestBody Topic topic) {
        return repository.save(topic);
    }

}
