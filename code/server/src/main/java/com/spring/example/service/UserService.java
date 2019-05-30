package com.spring.example.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.example.model.Role;
import com.spring.example.model.User;
import com.spring.example.repository.RoleRepository;
import com.spring.example.repository.UserRepository;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

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
