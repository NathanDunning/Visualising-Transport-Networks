package com.spring.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.application.model.Car;
import com.spring.application.service.CarService;

@Controller
public class CarController {
	
	@Autowired
    private CarService carService;
		
	@CrossOrigin
	@RequestMapping(value = "/get/cars/one", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getCar(){
    	 //return new ResponseEntity(userRepository.findUsers(), HttpStatus.OK);
		Car car = carService.findCar();
        return new ResponseEntity<>(car,HttpStatus.OK);
    }
	
}