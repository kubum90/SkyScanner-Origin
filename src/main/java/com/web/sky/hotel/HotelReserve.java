package com.web.sky.hotel;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Data
@Lazy
@Component
public class HotelReserve {
	private String hotel_name, email;
	private int hotel_reserve_no;

}
