package com.web.sky.hotel;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Data
@Lazy
@Component
public class HotelOption {
	private String hotel_name, refund, policy, breakfast, facility;

}
