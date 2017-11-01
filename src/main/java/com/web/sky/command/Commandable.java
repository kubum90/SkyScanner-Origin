package com.web.sky.command;

import org.springframework.stereotype.Component;

@Component
public interface Commandable {
	public void process();
}
