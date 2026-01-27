package com.guia.java_quick_guide;

import com.guia.java_quick_guide.model.Topic;
import com.guia.java_quick_guide.repository.TopicRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JavaQuickGuideApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaQuickGuideApplication.class, args);
	}


}
