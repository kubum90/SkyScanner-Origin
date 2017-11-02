package com.web.sky.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Data
@Lazy
@Component
public class NewsLetter {
	private boolean regular_info, new_feature, recommend_car, recommend_hotel, recommend_flight, partner_info;
	private int news_seq;

}
