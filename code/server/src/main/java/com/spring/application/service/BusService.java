package com.spring.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.application.model.Bus;
import com.spring.application.repository.BusRepository;

@Service
public class BusService {
	@Autowired
    private BusRepository busRepo;
	
	public Bus findBus() {
		return busRepo.findBus();
	}
}
