package com.spring.application.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.spring.application.model.Bus;

public interface BusRepository extends PagingAndSortingRepository<Bus, Long> {
	
	public static final String FIND_BUS = "SELECT * FROM bus_from limit 1";

    @Query(value = FIND_BUS, nativeQuery = true)
    Bus findBus();

}