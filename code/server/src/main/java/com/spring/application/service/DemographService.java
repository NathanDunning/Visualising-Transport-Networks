package com.spring.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.application.model.AreaDemograph;
import com.spring.application.repository.DemographRepository;

@Service
public class DemographService {
	@Autowired
    private DemographRepository demoRepo;
	
	public List<AreaDemograph> findAllAreaGeoCode() {
		return demoRepo.findAllAreaGeoCode();
	}
	
	public List<Object> findAllAreaLatLng() {
		return demoRepo.findAllAreaLatLng();
	}
}
