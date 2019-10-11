package com.spring.application.model;

import java.util.List;
import java.util.Map;

public class Request {

	private String from_time;

	private String to_time;

	private String date;

	private Map<String, List<List<Double>>> suburb_travel_points;

	// Introducing the dummy constructor
	public Request() {
	}

	public Request(String from_time, String to_time, String date) {
		this.from_time = from_time;
		this.to_time = to_time;
		this.date = date;
	}

	public String getFrom_time() {
		return from_time;
	}

	public void setFrom_time(String from_time) {
		this.from_time = from_time;
	}

	public String getTo_time() {
		return to_time;
	}

	public void setTo_time(String to_time) {
		this.to_time = to_time;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	
	public Map<String, List<List<Double>>> getSuburb_travel_points() {
		return suburb_travel_points;
	}

	public void setSuburb_travel_points(Map<String, List<List<Double>>> suburb_travel_points) {
		this.suburb_travel_points = suburb_travel_points;
	}

	public String toString() {
		return "{\"from_time\":" + this.getFrom_time() + ",\"to_time\":" + this.getTo_time() + ",\"date\":\""
				+ this.getDate() + "\"}";
	}

}
