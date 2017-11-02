package com.web.sky.hotel;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Data
@Lazy
@Component
public class HotelBoard {
	private String article_name, hotel_service, article_date, location, hotel, general, room, guest_type, atomosphere,
			internet, email;
	private int article_seq;

}
