package com.web.sky.hotel;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Data
@Lazy
@Component
public class Hotel {
	private String hotelName, destination, district, guest, rate, numberOfRoom, count;
	private int price, hotelSeq;

	public String getHotel_name() {
		return hotelName;
	}

	public void setHotel_name(String hotel_name) {
		this.hotelName = hotel_name;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getGuest() {
		return guest;
	}

	public void setGuest(String guest) {
		this.guest = guest;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

}