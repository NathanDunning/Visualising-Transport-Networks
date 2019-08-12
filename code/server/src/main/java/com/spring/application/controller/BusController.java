package com.spring.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.application.model.Bus;
import com.spring.application.model.Request;
import com.spring.application.service.BusService;

@Controller
public class BusController {
	
	@Autowired
    private BusService busService;
		
	@CrossOrigin
	@RequestMapping(value = "/get/buses/one", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getOneBus(){
    	 //return new ResponseEntity(userRepository.findUsers(), HttpStatus.OK);
		Bus bus = busService.findOneBus();
        return new ResponseEntity<>(bus,HttpStatus.OK);
    }
	
	@RequestMapping(value = "/get/bus/travelDetails", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> getBus(@RequestBody Request busRequest){
		List<Bus> bus = busService.findBusTravelDetails(busRequest);
        return new ResponseEntity<>(bus,HttpStatus.OK);
    }
	
	@RequestMapping(value = "/get/cities", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getCities(){
		List<Object> cities = busService.findCities();
        return new ResponseEntity<>(cities,HttpStatus.OK);
    }
	
	@RequestMapping(value = "/get/time", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getTime(){
		List<Object> time = busService.findTime();
        return new ResponseEntity<>(time,HttpStatus.OK);
    }
	
	@RequestMapping(value = "/get/dates", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getDates(){
		List<Object> time = busService.findDate();
        return new ResponseEntity<>(time,HttpStatus.OK);
    }
}
