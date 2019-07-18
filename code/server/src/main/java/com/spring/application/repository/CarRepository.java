package com.spring.application.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.spring.application.model.Car;

@Transactional
public interface CarRepository extends PagingAndSortingRepository<Car, Long> {
	
	public static final String FIND_CAR = "SELECT * FROM car_from limit 1";
	public static final String FIND_CAR_DETAILS = "SELECT * FROM car_from where time>=?1 and time<=?2 and date=?3 ;";

    @Query(value = FIND_CAR, nativeQuery = true)
    Car findCar();
    
    @Query(value = FIND_CAR_DETAILS, nativeQuery = true)
	List<Car> findCarDetails(@Param("from_time") int from_time, @Param("to_time") int to_time, @Param("date") String date);


}