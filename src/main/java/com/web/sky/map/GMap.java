package com.web.sky.map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Lazy
@Component
public class GMap {
	private String lat, lng, airport, departcity;
	public int seq;
}