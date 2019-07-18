package com.spring.application.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.spring.application.model.User;

@Transactional
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
	
	public static final String FIND_USERS = "SELECT * FROM user limit 1";

    @Query(value = FIND_USERS, nativeQuery = true)
    User findUsers();

    User findByEmail(@Param("email") String email);

}
