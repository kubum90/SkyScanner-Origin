package com.web.sky.map.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy @Component
public class GMap {
	String  flag,latlng,airport,departcity;
	int seq;
}
