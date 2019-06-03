package com.spring.application.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.spring.application.model.Role;


public interface RoleRepository extends PagingAndSortingRepository<Role, Long> {

    Role findByRole(String role);
}

