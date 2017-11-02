package com.web.sky.hotel;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Lazy
@Component
public class RespMap {
	private String hotelSite, hotelName, destination, district, numberOfRoom, articleName, hotelService, articleDate,
			location, hotelGeneral, room, guest_type, atomosphere, internet, email, refundPolicy, breakfast, facility,
			hotel_reserve_no, sirname, firstName, country, regdate, password, count;

	public String getHotelSite() {
		return hotelSite;
	}

	public void setHotelSite(String hotelSite) {
		this.hotelSite = hotelSite;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
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

	public String getNumberOfRoom() {
		return numberOfRoom;
	}

	public void setNumberOfRoom(String numberOfRoom) {
		this.numberOfRoom = numberOfRoom;
	}

	public String getArticleName() {
		return articleName;
	}

	public void setArticleName(String articleName) {
		this.articleName = articleName;
	}

	public String getHotelService() {
		return hotelService;
	}

	public void setHotelService(String hotelService) {
		this.hotelService = hotelService;
	}

	public String getArticleDate() {
		return articleDate;
	}

	public void setArticleDate(String articleDate) {
		this.articleDate = articleDate;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getHotelGeneral() {
		return hotelGeneral;
	}

	public void setHotelGeneral(String hotelGeneral) {
		this.hotelGeneral = hotelGeneral;
	}

	public String getRoom() {
		return room;
	}

	public void setRoom(String room) {
		this.room = room;
	}

	public String getGuest_type() {
		return guest_type;
	}

	public void setGuest_type(String guest_type) {
		this.guest_type = guest_type;
	}

	public String getAtomosphere() {
		return atomosphere;
	}

	public void setAtomosphere(String atomosphere) {
		this.atomosphere = atomosphere;
	}

	public String getInternet() {
		return internet;
	}

	public void setInternet(String internet) {
		this.internet = internet;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRefundPolicy() {
		return refundPolicy;
	}

	public void setRefundPolicy(String refundPolicy) {
		this.refundPolicy = refundPolicy;
	}

	public String getBreakfast() {
		return breakfast;
	}

	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}

	public String getFacility() {
		return facility;
	}

	public void setFacility(String facility) {
		this.facility = facility;
	}

	public String getHotel_reserve_no() {
		return hotel_reserve_no;
	}

	public void setHotel_reserve_no(String hotel_reserve_no) {
		this.hotel_reserve_no = hotel_reserve_no;
	}

	public String getSirname() {
		return sirname;
	}

	public void setSirname(String sirname) {
		this.sirname = sirname;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getRegdate() {
		return regdate;
	}

	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCount() {
		return count;
	}

	public void setCount(String count) {
		this.count = count;
	}

	public int getHotelSeq() {
		return hotelSeq;
	}

	public void setHotelSeq(int hotelSeq) {
		this.hotelSeq = hotelSeq;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getGuest() {
		return guest;
	}

	public void setGuest(int guest) {
		this.guest = guest;
	}

	public int getArticle_seq() {
		return article_seq;
	}

	public void setArticle_seq(int article_seq) {
		this.article_seq = article_seq;
	}

	private int hotelSeq, rate, price, guest, article_seq;
}