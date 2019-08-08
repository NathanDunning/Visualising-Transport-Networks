package com.spring.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.application.model.Bus;
import com.spring.application.model.Request;
import com.spring.application.repository.BusRepository;

@Service
public class BusService {
	@Autowired
    private BusRepository busRepo;
	
	public Bus findOneBus() {
		return busRepo.findBus();
	}
	
	public List<Bus> findBusTravelDetails(Request busRequest) {
		List<Bus> bus = busRepo.findBusDetails(busRequest.getFrom_time(), busRequest.getTo_time(), busRequest.getDate());
		return bus;
	}
	
	public List<Object> findCities() {
		List<Object> cities = busRepo.findCities();
		return cities;
	}
	
	public List<Object> findTime() {
		List<Object> time = busRepo.findTime();
		return time;
	}
}
