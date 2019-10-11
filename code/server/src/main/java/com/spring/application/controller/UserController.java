package com.spring.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.application.model.User;
import com.spring.application.repository.UserRepository;
import com.spring.application.security.SecurityServiceImpl;

@Controller
public class UserController {
	
	@Autowired
    private UserRepository userRepository;
	@Autowired
    private SecurityServiceImpl securityService;
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Object> currentLoginUserDetails(){
    	 return new ResponseEntity(userRepository.findByEmail(securityService.findLoggedInUsername()), HttpStatus.OK);
    }
	
	@RequestMapping(value = "/get/users", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getUsers(){
    	 //return new ResponseEntity(userRepository.findUsers(), HttpStatus.OK);
		User user = userRepository.findUsers();
		//System.out.println("USER : " + user.getEmail());
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

}
