package com.spring.application.model;

public class Request {

	private String city;

	private int from_time;

	private int to_time;

	private String date;

	//Introducing the dummy constructor
    public Request() {
    }
    
	public Request(String city, int from_time, int to_time, String date) {
		this.city = city;
		this.from_time = from_time;
		this.to_time = to_time;
		this.date = date;
	}
	
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getFrom_time() {
		return from_time;
	}

	public void setFrom_time(int from_time) {
		this.from_time = from_time;
	}

	public int getTo_time() {
		return to_time;
	}

	public void setTo_time(int to_time) {
		this.to_time = to_time;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	public String toString() {
		return "{\"city\":\"" + this.city + "\",\"from_time\":" + this.getFrom_time() + ",\"to_time\":"+ this.getTo_time() +",\"date\":\""+ this.getDate() +"\"}";
	}

}
