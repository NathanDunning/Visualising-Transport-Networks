package com.spring.application.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

public interface SecurityService {
    String findLoggedInUsername();
    Collection<GrantedAuthority> findLoggedInUserRole();
    boolean isLoggedInUserAdmin();

    void autologin(String username, String password);
}