package com.web.sky.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Data
@Lazy
@Component
public class Member {
	private String email, surname, firstName, country, regdate, oldPassword, newPassword, password;
	private int budget, news_seq, authority;

}