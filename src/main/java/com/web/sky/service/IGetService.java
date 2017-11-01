package com.web.sky.service;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
@FunctionalInterface
public interface IGetService {
	public Object execute(Object o);
}
