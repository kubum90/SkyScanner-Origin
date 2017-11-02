<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=utl-8;" pageEncoding="utf-8" />
<meta name="naver-site-verification" content="6167224616b73fdc74cb66877ba110f876133557" />
<meta name="theme-color" content="#ffffff" />
<meta name="msapplication-TileColor" content="#21c4d9" />
<meta name="msapplication-TileImage" content="//logos.skyscnr.com/framework/images/icons/mstile-144x144.png" />
<title>SkyScanner</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.skyscanner.net/svcs/onboarding/component/user-account-service/release/css/common.min.css">
<link rel="stylesheet" href="https://secure.skyscanner.net/svcs/onboarding/component/account-settings-management/release/css/account-settings-management.min.css">
<link rel="stylesheet" type="text/css" href="//css.skyscnr.com/sttc/scaffolding/css/core.c009a78a.css">
<link rel="stylesheet" type="text/css" href="//css.skyscnr.com/sttc/scaffolding/css/accountspage.b2633252.css">
<link rel="stylesheet" type="text/css" href="//www.skyscanner.net/svcs/onboarding/component/newsletter/dist/css/newsletter.min.embed.css">
<link rel="stylesheet" href="//js.skyscnr.com/sttc/oc-registry/components/header/0.4.42/build/static/css/main.dc7e0f67.css">
<link rel="dns-prefetch" href="https://secure.skyscanner.net">
<link rel="icon" type="image/png" href="//logos.skyscnr.com/framework/images/icons/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="//logos.skyscnr.com/framework/images/icons/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="//logos.skyscnr.com/framework/images/icons/favicon-32x32.png" sizes="32x32" />
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.js"></script>
<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="Stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="//css.skyscnr.com/flightsearch/static/searchsummary.min.64a28d9143471a75152a.css" />
<link rel="stylesheet" type="text/css" href="//css.skyscnr.com/flightsearch/static/searchcontrols.min.64a28d9143471a75152a.css" />
<link rel="stylesheet" type="text/css" href="//css.skyscnr.com/flightsearch/static/results.min.64a28d9143471a75152a.css" />
<link rel="stylesheet" type="text/css" href="//css.skyscnr.com/flightsearch/static/results.min.c9028785a3421556dffe.css">
<link rel="stylesheet" type="text/css" href="//css.skyscnr.com/flightsearch/static/searchsummary.min.6a0b73772bb0bb739eac.css" />
<link rel="stylesheet" type="text/css" href="//css.skyscnr.com/flightsearch/static/results.min.6a0b73772bb0bb739eac.css" />
<link rel="stylesheet" href="https://css.skyscnr.com/sttc/strevda-runtime/css/setup_en-gb.4cfe42ed32eb7fb33f9e6d642888527a.css">
<link rel="stylesheet" href="https://css.skyscnr.com/sttc/strevda-runtime/css/setup_en-gb.ef20547872b74efc4bdd64e76e12aba1.css">
<link rel="stylesheet" href="https://www.skyscanner.co.kr/hsc/css/homepage.f1831df1bc2940ae9c01f554f5760871.css">
<link rel=stylesheet type="text/css" href="https://css.skyscnr.com/inspiration/static/4262/inspirationTimeline/inspirationTimeline.min.css" />
<link rel="stylesheet" type="text/css" href="https://css.skyscnr.com/sttc/scaffolding/css/core.c009a78a.css" />
<link rel="stylesheet" type="text/css" href="https://css.skyscnr.com/flightsearch/static/searchcontrols.min.6a0b73772bb0bb739eac.css" />
<link rel="stylesheet" href="https://css.skyscnr.com/sttc/hotels-front-end/athome/css/athome-146003980d2564b187e5c37f170a54f7.css">
<link rel="stylesheet" href="https://www.skyscanner.co.kr/hsc/css/confidence_panels.22553f81ed27b25d6d3f17e15bee451b.css">
<link rel="manifest" href="/android-chrome-manifest.json">
<link rel="apple-touch-icon" sizes="57x57" href="//logos.skyscnr.com/framework/images/icons/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="//logos.skyscnr.com/framework/images/icons/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="//logos.skyscnr.com/framework/images/icons/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" 	href="//logos.skyscnr.com/framework/images/icons/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="//logos.skyscnr.com/framework/images/icons/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="//logos.skyscnr.com/framework/images/icons/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="//logos.skyscnr.com/framework/images/icons/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="//logos.skyscnr.com/framework/images/icons/apple-touch-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="//logos.skyscnr.com/framework/images/icons/apple-touch-icon-180x180.png" />
<link rel="mask-icon" href="//logos.skyscnr.com/framework/images/icons/website_icon.svg" color="#454750">
<link rel="icon" type="image/png" href="//logos.skyscnr.com/framework/images/icons/android-chrome-192x192.png" sizes="192x192" />
<link rel="stylesheet" href="//css.skyscnr.com/sttc/hotels-front-end/homepage/css/homepage-80b3db305f83f09454334bf13bf75229.css">
<link rel="stylesheet" href="//css.skyscnr.com/sttc/hotels-front-end/searchcontrols/css/search-controls-48aa7395abc10f9a60424b64c95998a2.css">
<link rel="stylesheet" href="//css.skyscnr.com/sttc/hotels-front-end/searchresults/css/search-results-d2d629d87d3bf1f6ff60e4608713e8d9.css">
<link rel="stylesheet" href="//css.skyscnr.com/sttc/hotels-front-end/destinations/css/destinations-bed4bae33ccf12a5b20adacc94418fe2.css">
<link rel="stylesheet" type="text/css" href="//css.skyscnr.com/sttc/scaffolding/css/core.c009a78a.css" />
<link rel="stylesheet" href="//css.skyscnr.com/sttc/hotels-front-end/disambiguation/css/disambiguation-d795e58e7f093815f92e09ad1d5b3de0.css">
<style type="text/css">
#d__fFH {
	position: absolute;
	top: -5000px;
	left: -5000px
}

#d__fF {
	font-family: serif;
	font-size: 200px;
	visibility: hidden
}

#bcvbawuuxbecwvzrurtabfdsstve {
	display: none !important
}
</style>
<style type="text/css" media="print">
.usabilla_live_button_container {
	display: none;
}
</style>
<link rel="stylesheet" href="https://css.skyscnr.com/sttc/strevda-runtime/css/setup_en-gb.e4274f5c8646a1ebc8bb3517d433a1e4.css">
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" href="${path.css}/sky.css" />
<script src="${path.js}/mooseung.js"></script>
<script src="${path.js}/yerin.js"></script>
<script src="${path.js}/kwanghoe.js"></script>
<script src="${path.js}/hyunseok.js"></script>
<script src="${path.js}/template.js"></script>
</head>
<body id="category-flights"
	class="lang-ko page-home action-index   default-layout    spring-clean month-view-spring-clean">
	<div class="modal fade" id="myModal" role="dialog">
		<div class="modal-dialog">
			Modal content
			<div class="modal-content">
				<div class="modal-header" style="padding: 35px 50px;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<span class=""></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					로그인 또는 회원가입
				</div>
				<div class="modal-body" style="padding: 80px 50px; float: left;">
					<button type="submit" class="btn btn-success btn-block"
						style="background-color: blue;" data-dismiss="modal">Login
						By FaceBook</button>
					<p
						style="position: absolute; width: 110%; padding: 50px 10px 0px 0px;">
						Not a member? <a id="joinmm" href="#"><b id="signup"
							style="color: red;">Sign Up</b></a>
					</p>
				</div>
				<div class="modal-body" style="padding: 80px 50px; float: right;">
					<form role="form">
						<div class="form-group">
							<label for="usrname"><span
								class="glyphicon glyphicon-envelope"></span> Username</label> <input
								type="text" class="form-control" id="usrname"
								placeholder="Enter email">
						</div>
						<div class="form-group">
							<label for="psw"><span class="glyphicon glyphicon-lock"></span>
								Password</label> <input type="password" class="form-control" id="psw"
								placeholder="Enter password">
						</div>
						<div class="checkbox">
							<label><input type="checkbox" value="" checked>Remember
								me</label>
						</div>
						<button id="loginBtn" type="submit"
							class="btn btn-success btn-block" data-dismiss="modal">
							<span class="glyphicon glyphicon-off"></span> Login
						</button>
					</form>
				</div>
				<div class="modal-footer" style=""></div>
			</div>
		</div>
	</div>
	<div class="modal hide" id="myModal">
		<div class="modal-header">
			<a class="close" data-dismiss="modal">×</a>
			<h3>Add Contact</h3>
			<div id="errors_notification"></div>
		</div>
		<div class="modal-body"></div>
		<div class="modal-footer"></div>
	</div>
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">Modal title</h4>
				</div>
				<div class="modal-body"></div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>
	<div id="wrapper"></div>
	<div id="container"></div>
</body>
<script>
	/* hyunseok.hello.init('${path.ctx}');  */
	skyAir.common.init('${path.ctx}');
	/* ms.common.init('${path.ctx}'); */
	function join() {
		alert('로그인 클릭');
		$('.modal-content').empty();
		$('.modal-content')
				.html(
						'<div class="modal-body" style="padding:40px 50px;">'
								+ '        <form role="form">'
								+ '          <div class="form-group">'
								+ '            <label for="usrname"><span class="glyphicon glyphicon-envelope"></span> E-MAIL</label>'
								+ '            <input type="text" class="form-control" id="usrname" placeholder="Enter email">'
								+ '          </div>'
								+ '          <div class="form-group">'
								+ '            <label for="psw"><span class="glyphicon glyphicon-lock"></span> Password</label>'
								+ '            <input type="text" class="form-control" id="psw" placeholder="Enter password">'
								+ '          </div>'
								+ '          <button type="submit" class="btn btn-success btn-block" data-dismiss="modal"><span class="glyphicon glyphicon-off"></span> JOIN</button>'
								+ '        </form>' + '      </div>'
								+ '      <div class="modal-footer" style="">'
								+ '      </div>');
	};
	function findpass() {
		$('.modal-content').empty();
		$('.modal-content')
				.html(
						'<div class="modal-body" style="padding:80px 50px 80px 50px;">'
								+ '        <form role="form">'
								+ '          <div class="form-group">'
								+ '            <label for="usrname"><span class="glyphicon glyphicon-envelope"></span> Username</label>'
								+ '            <input type="text" class="form-control" id="usrname" placeholder="Enter email">'
								+ '          </div>'
								+ '          <button type="submit" class="btn btn-success btn-block" data-dismiss="modal"><span class="glyphicon glyphicon-off"></span>FINDPASS</button>'
								+ '        </form>' + '      </div>'
								+ '      <div class="modal-footer" style="">'
								+ '      </div>');
	};
</script>
</html>
