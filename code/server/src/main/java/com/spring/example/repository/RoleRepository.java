package com.spring.example.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.spring.example.model.Role;


public interface RoleRepository extends PagingAndSortingRepository<Role, Long> {

    Role findByRole(String role);
}

