package com.spring.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.example.model.Greetings;
import com.spring.example.model.User;
import com.spring.example.repository.UserRepository;
import com.spring.example.security.SecurityService;
import com.spring.example.security.SecurityServiceImpl;

@Controller
public class UserController {
	
	@Autowired
    private UserRepository userRepository;
	@Autowired
    private SecurityServiceImpl securityService;
	
	@CrossOrigin(origins = "http://localhost:8081")
	@RequestMapping(value = "/home", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Object> currentLoginUserDetails(){
    	System.out.println("----------- inside home ----------------");
    	 return new ResponseEntity(userRepository.findByEmail(securityService.findLoggedInUsername()), HttpStatus.OK);
    }
	
	@CrossOrigin(origins = "http://localhost:8081")
	@RequestMapping(value = "/get/users", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getUsers(){
    	 //return new ResponseEntity(userRepository.findUsers(), HttpStatus.OK);
		User user = userRepository.findUsers();
		System.out.println("USER : " + user.getEmail());
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
	
	@RequestMapping(value = "/hello", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> hello(){
        return new ResponseEntity<>("Hello world from spring!!!!!",HttpStatus.OK);
    }

}
