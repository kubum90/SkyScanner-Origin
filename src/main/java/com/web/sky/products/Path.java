package com.web.sky.products;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Lazy
@Component
public class Path {
	private String ctx, img, js, css;
}
