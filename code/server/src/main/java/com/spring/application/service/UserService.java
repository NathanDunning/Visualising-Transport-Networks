package com.spring.application.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.application.model.Role;
import com.spring.application.model.User;
import com.spring.application.repository.RoleRepository;
import com.spring.application.repository.UserRepository;


@Service
public class UserService {
		@Autowired
	    private final UserRepository userRepository;
		
		@Autowired
	    private final RoleRepository roleRepository;
		
		@Autowired
	    private final BCryptPasswordEncoder bCryptPasswordEncoder;
	    
	    public UserService(UserRepository userRepository, RoleRepository roleRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
	    	this.userRepository = userRepository;
	    	this.roleRepository = roleRepository;
	    	this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	    }
	    
	    

		public void save(User user,boolean encoded) {
			Set<Role> roleSet = new HashSet<>();
			Set<Role> userRoles = user.getRoles();
			if (userRoles != null) {
				for (Role roleValues : user.getRoles()) {
					Role role = roleRepository.findByRole(roleValues.getRole());
					
					if (role != null)
						roleSet.add(role);
					else
						roleSet.add(new Role(roleValues.getRole()));
				}
				user.setRoles(roleSet);
			}
			if(user.getPassword() != null && !encoded)
				user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
			userRepository.save(user);
		}

	    public User findByEmail(String email) {

	        return userRepository.findByEmail(email);
	    }

}
