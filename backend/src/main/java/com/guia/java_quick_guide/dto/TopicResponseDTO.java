package com.guia.java_quick_guide.dto;

import com.guia.java_quick_guide.model.Topic;

public record TopicResponseDTO(Long id, String title, String category) {

    public TopicResponseDTO(Topic topic) {
        this(topic.getId(), topic.getTitle(), topic.getCategory());
    }
}
