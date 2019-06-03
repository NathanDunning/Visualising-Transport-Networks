package com.spring.application.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.spring.application.model.Car;

public interface CarRepository extends PagingAndSortingRepository<Car, Long> {
	
	public static final String FIND_CAR = "SELECT * FROM car_from limit 1";

    @Query(value = FIND_CAR, nativeQuery = true)
    Car findCar();

}