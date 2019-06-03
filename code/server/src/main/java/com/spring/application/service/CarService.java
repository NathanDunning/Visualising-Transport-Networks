package com.spring.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.application.model.Car;
import com.spring.application.repository.CarRepository;

@Service
public class CarService {
	@Autowired
    private CarRepository carRepo;
	
	public Car findCar() {
		return carRepo.findCar();
	}
}
