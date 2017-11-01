package com.web.sky.service;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
@FunctionalInterface
public interface IListService {
	public List<?> execute(Object o);
}
