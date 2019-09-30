package com.spring.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.application.model.AreaDemograph;
import com.spring.application.service.DemographService;

@Controller
public class DemographController {

	@Autowired
	private DemographService demoService;

	@RequestMapping(value = "/get/area/geocodes", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<?> getOneBus() {
		// return new ResponseEntity(userRepository.findUsers(), HttpStatus.OK);
		List<AreaDemograph> areaGeocodes = demoService.findAllAreaGeoCode();
		return new ResponseEntity<>(areaGeocodes, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/get/area/latlng", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<?> getLatLng() {
		// return new ResponseEntity(userRepository.findUsers(), HttpStatus.OK);
		List<Object> areaGeocodes = demoService.findAllAreaLatLng();
		return new ResponseEntity<>(areaGeocodes, HttpStatus.OK);
	}

}
