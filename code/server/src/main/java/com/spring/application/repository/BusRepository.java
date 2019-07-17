package com.spring.application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.spring.application.model.Bus;

public interface BusRepository extends PagingAndSortingRepository<Bus, Long> {

	public static final String FIND_BUS = "SELECT * FROM bus_from limit 1";
	public static final String FIND_BUS_DETAILS = "SELECT * FROM bus_from where time>=?1 and time<=?2 and date=?3 ;";

	@Query(value = FIND_BUS, nativeQuery = true)
	Bus findBus();

	@Query(value = FIND_BUS_DETAILS, nativeQuery = true)
	List<Bus> findBusDetails(@Param("from_time") int from_time, @Param("to_time") int to_time, @Param("date") String date);

}