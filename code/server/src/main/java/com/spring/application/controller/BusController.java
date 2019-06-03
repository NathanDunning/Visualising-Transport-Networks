package com.spring.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.application.model.Bus;
import com.spring.application.repository.BusRepository;
import com.spring.application.service.BusService;

@Controller
public class BusController {
	
	@Autowired
    private BusService busService;
		
	@CrossOrigin
	@RequestMapping(value = "/get/buses/one", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getBus(){
    	 //return new ResponseEntity(userRepository.findUsers(), HttpStatus.OK);
		Bus bus = busService.findBus();
        return new ResponseEntity<>(bus,HttpStatus.OK);
    }
	
}
