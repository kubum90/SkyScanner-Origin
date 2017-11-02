package com.web.sky.flight;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Data
@Lazy
@Component
public class Flight {
	private String flightNo, airline, cabin_class, departCity, arriveCity;
	private int price;

}