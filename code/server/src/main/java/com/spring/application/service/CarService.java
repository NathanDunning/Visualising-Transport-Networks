package com.spring.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.application.model.Bus;
import com.spring.application.model.Car;
import com.spring.application.model.Request;
import com.spring.application.repository.CarRepository;

@Service
public class CarService {
	@Autowired
    private CarRepository carRepo;
	
	public Car findCar() {
		return carRepo.findCar();
	}
	
	public List<Car> findCarTravelDetails(Request carRequest) {
		List<Car> car = carRepo.findCarDetails(carRequest.getFrom_time(), carRequest.getTo_time(), carRequest.getDate());
		return car;
	}
}
