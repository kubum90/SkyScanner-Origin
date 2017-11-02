package com.web.sky.constants;

import org.springframework.stereotype.Component;

@Component
public class DB {

	public static final String MARIADB_DRIVER = "org.mariadb.jdbc.Driver";
	public static final String MARIADB_URL = "jdbc:mariadb://localhost:3306/skydb";
	public static final String USERNAME = "skyer";
	public static final String PASSWORD = "hanbit";
	public static final String MEMBER_PASSWORD = "password";
	public static final String TABLE_MEMBER = "Member";
	public static final String EMAIL = "email";
	public static final String SIRNAME = "sirname";
	public static final String FIRST_NAME = "first_name";
	public static final String COUNTRY = "country";
	public static final String REGDATE = "regdate";
	public static final String BUDGET = "budget";
	public static final String NEWS_SEQ = "news_seq";

}
