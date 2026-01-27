package com.guia.java_quick_guide.service;

import com.guia.java_quick_guide.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationService implements UserDetailsService {

    @Autowired
    UserRepository repository;

    // Esse método é obrigatório da interface UserDetailsService.
    // Chamado pelo Spring Security no momento do login para validar as credenciais.
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Busca no banco de dados usando o campo email )
        return repository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado com o email: " + username));
    }
}