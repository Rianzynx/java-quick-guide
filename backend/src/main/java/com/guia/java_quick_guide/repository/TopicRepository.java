package com.guia.java_quick_guide.repository;

import com.guia.java_quick_guide.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopicRepository extends JpaRepository<Topic, Long>{

}
