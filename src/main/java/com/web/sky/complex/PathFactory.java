package com.web.sky.complex;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import com.web.sky.products.Path;

@Component
@Lazy
public class PathFactory {
	public static Path create() {
		Path path = new Path();
		path.setCtx(((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest()
				.getContextPath());
		path.setImg(path.getCtx() + "/resources/img");
		path.setCss(path.getCtx() + "/resources/css");
		path.setJs(path.getCtx() + "/resources/js");
		return path;
	}

}
