package com.spring.application.repository;

import java.sql.Timestamp;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.spring.application.model.Bus;

@Transactional
public interface BusRepository extends PagingAndSortingRepository<Bus, Long> {

	public static final String FIND_BUS = "SELECT * FROM bus_from limit 1";
	public static final String FIND_BUS_DETAILS = "SELECT * FROM bus_from where time>=?1 and time<=?2 and date=?3 ;";
	public static final String FIND_ALL_BUS_DETAILS = "SELECT DISTINCT lat, lng FROM bus_from";
	public static final String FIND_CITIES = "SELECT distinct city FROM bus_from";
	public static final String FIND_TIME = "SELECT distinct time FROM bus_from order by time";
	public static final String FIND_DATE = "SELECT distinct date FROM bus_from order by date";

	@Query(value = FIND_BUS, nativeQuery = true)
	Bus findBus();

	@Query(value = FIND_BUS_DETAILS, nativeQuery = true)
	List<Bus> findBusDetails(@Param("from_time") int from_time, @Param("to_time") int to_time, @Param("date") String date);

	@Query(value = FIND_ALL_BUS_DETAILS, nativeQuery = true)
	List<Object> findAllBusDetails();

	@Query(value = FIND_CITIES, nativeQuery = true)
	List<Object> findCities();

	@Query(value = FIND_TIME, nativeQuery = true)
	List<Object> findTime();

	@Query(value = FIND_DATE, nativeQuery = true)
	List<Timestamp> findDate();
}