package com.web.sky.command;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class ResultMap {

	private String email, sirName, firstName, country, regdate, password;
	private int budget, newsSeq, authority;
}
