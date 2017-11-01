var ms = ms || {};
ms.common=((ctx)=>{
	var init=(ctx)=>{
		ms.session.init(ctx);
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		if(sessionStorage.getItem('email')===null){
	
		}else{
			$('#loginBu').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','account').removeAttr('data-toggle','').removeAttr('data-target','').text('로그아웃');
			$('#account').click(()=>{
			
			$('#account').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','loginBu').removeAttr('data-toggle','').removeAttr('data-target','').text('로그인');
			sessionStorage.clear();
			$('body').empty();
			ms.common.init(ctx);
			
			});
		}
		
		$('#loginBu').click(()=>{
				$('body').empty();
				location.reload();
				skyAir.common.init(ctx);
				$('#home-container').removeClass('#home-container').addClass('.homecontent').css("background-image", "url(//content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=2000px:599px&quality=80)");
			      $('#first').removeClass('#first').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg?resize=500px:600px&quality=50)");
			      $('#two').removeClass('#two').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/a60a89126ed3f927d123c815b610298d/GettyImages-475335963.jpg?resize=600px:600px&quality=50)");
			      $('#three').removeClass('#three').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg?resize=450px:603px&quality=50)");
			      $('#ssssssss').css("background-image","url(https://css.skyscnr.com/inspiration/static/embeddableMap/svg_map_20170525.svg)"); 
			      $('#saleone').removeClass('#saleone').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/3d13492ebf1c1b0ac415bea8e172b960/GettyImages-505532917.jpg?resize=500px:600px&quality=50)");
			      $('#saletwo').removeClass('#saletwo').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/7adba3a46af3ca29695f96937d19fcf1/GettyImages-149127892.jpg?resize=500px:600px&quality=50)");
			      $('#saleth').removeClass('#saleth').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg?resize=500px:600px&quality=50)");
			      
			});


		$('#ms-airli').click(()=>{
			var ctx=$$('x');
			
			 if(sessionStorage.getItem('email')===null){
				 $('body').empty();
				 location.reload();
				 skyAir.common.init(ctx);
					$('#home-container').removeClass('#home-container').addClass('.homecontent').css("background-image", "url(//content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=2000px:599px&quality=80)");
				      $('#first').removeClass('#first').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg?resize=500px:600px&quality=50)");
				      $('#two').removeClass('#two').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/a60a89126ed3f927d123c815b610298d/GettyImages-475335963.jpg?resize=600px:600px&quality=50)");
				      $('#three').removeClass('#three').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg?resize=450px:603px&quality=50)");
				      $('#ssssssss').css("background-image","url(https://css.skyscnr.com/inspiration/static/embeddableMap/svg_map_20170525.svg)"); 
				      $('#saleone').removeClass('#saleone').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/3d13492ebf1c1b0ac415bea8e172b960/GettyImages-505532917.jpg?resize=500px:600px&quality=50)");
				      $('#saletwo').removeClass('#saletwo').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/7adba3a46af3ca29695f96937d19fcf1/GettyImages-149127892.jpg?resize=500px:600px&quality=50)");
				      $('#saleth').removeClass('#saleth').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg?resize=500px:600px&quality=50)");
			  	      /* location.reload(); */
			  	   
				}else{
					 $('body').empty();
					 skyAir.common.init(ctx);
						$('#home-container').removeClass('#home-container').addClass('.homecontent').css("background-image", "url(//content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=2000px:599px&quality=80)");
					      $('#first').removeClass('#first').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg?resize=500px:600px&quality=50)");
					      $('#two').removeClass('#two').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/a60a89126ed3f927d123c815b610298d/GettyImages-475335963.jpg?resize=600px:600px&quality=50)");
					      $('#three').removeClass('#three').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg?resize=450px:603px&quality=50)");
					      $('#ssssssss').css("background-image","url(https://css.skyscnr.com/inspiration/static/embeddableMap/svg_map_20170525.svg)"); 
					      $('#saleone').removeClass('#saleone').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/3d13492ebf1c1b0ac415bea8e172b960/GettyImages-505532917.jpg?resize=500px:600px&quality=50)");
					      $('#saletwo').removeClass('#saletwo').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/7adba3a46af3ca29695f96937d19fcf1/GettyImages-149127892.jpg?resize=500px:600px&quality=50)");
					      $('#saleth').removeClass('#saleth').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg?resize=500px:600px&quality=50)");
					      $('#loginBu').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','account').removeAttr('data-toggle','').removeAttr('data-target','').text('로그아웃');
					      $('#account').click(()=>{
					    	  
					    	  sessionStorage.clear();
					    	  location.reload();
					      });
				}
	  	    
		});
	    $('#ms-carli').click(e=>{
	    	  var ctx=$$('x');
	    	  e.preventDefault();
	    	  if(sessionStorage.getItem('email')===null){
	    		  
	    	  }else{
	    		  var _admin = sessionStorage.getItem('email');
	              $.ajax({
	              	url :ctx+'/adminCheck',
	                  method : 'post',
	                  dataType:'json',
	                  data : JSON.stringify({
	                    	  'email' : _admin                    	
	                  }),
	                  contentType : 'application/json',
	                  success : (data)=>{
	                	  if(data.email===null){
	                		  
	                	  }else{
	                		  if(sessionStorage.getItem('email')===data.email){
	                    		  $('body').empty();
	                        	  hyunseok.hello.init(ctx);  
	                    	  }else{
	                    		  
	                    	  }
	                	  }
	                  },
	                  error : (x,s,m)=>{
	                     alert('관리자 탭 에러'+m+'\n x에러: '+x+'\n s 에러'+s);
	                  }
	               });
	    	    
	    	  }
	      });
		$('#identity').click(()=>{
			
			var ctx=$$('x');
		  		  $('body').empty();
		      	  skyAir.common.init(ctx);
		      	  $('#home-container').removeClass('#home-container').addClass('.homecontent').css("background-image", "url(//content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=2000px:599px&quality=80)");
			      $('#first').removeClass('#first').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg?resize=500px:600px&quality=50)");
			      $('#two').removeClass('#two').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/a60a89126ed3f927d123c815b610298d/GettyImages-475335963.jpg?resize=600px:600px&quality=50)");
			      $('#three').removeClass('#three').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg?resize=450px:603px&quality=50)");
			      $('#ssssssss').css("background-image","url(https://css.skyscnr.com/inspiration/static/embeddableMap/svg_map_20170525.svg)"); 
			      $('#saleone').removeClass('#saleone').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/3d13492ebf1c1b0ac415bea8e172b960/GettyImages-505532917.jpg?resize=500px:600px&quality=50)");
			      $('#saletwo').removeClass('#saletwo').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/7adba3a46af3ca29695f96937d19fcf1/GettyImages-149127892.jpg?resize=500px:600px&quality=50)");
			      $('#saleth').removeClass('#saleth').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg?resize=500px:600px&quality=50)");
			      if(sessionStorage.getItem('email')===null){
			    	  location.reload();
					}else{
						$('#loginBu').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','account').removeAttr('data-toggle','').removeAttr('data-target','').text('로그아웃');
						
					}
			      $('#account').click(()=>{
			    	  sessionStorage.clear();
			    	  location.reload();
			      });
		});
	
		var today=new Date();
		$('#sd-placeholder').datepicker({
			defaultDate:today,
			dayNames:["일", "월", "화", "수", "목", "금", "토"],
			dayNamesMin:["일", "월", "화", "수", "목", "금", "토"],
			monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			dateFormat:"yy. mm. dd.",
			minDate:"+0d",
			onClose: function(selectedDate) {
				if($("#ed-placeholder").val() < selectedDate){
					var sdate=$('#sd-placeholder').datepicker('getDate');
					$("#ed-placeholder").val($.datepicker.formatDate("yy. mm. dd.",sdate));
					$("#ed").val($.datepicker.formatDate("yy. mm. dd.",sdate));
					$('#sd').val($.datepicker.formatDate("yy-mm-dd",sdate));
				}else{
					$('#sd').val($.datepicker.formatDate("yy-mm-dd",$('#sd-placeholder').datepicker('getDate')));
					$("#ed").val($.datepicker.formatDate("yy. mm. dd.",$('#sd-placeholder').datepicker('getDate')));
				};
	        }
		});
		$('#ed-placeholder').datepicker({
			defaultDate:today,
			dayNames:["일", "월", "화", "수", "목", "금", "토"],
			dayNamesMin:["일", "월", "화", "수", "목", "금", "토"],
			monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			dateFormat:"yy. mm. dd.",
			minDate:"+0d",
			onClose: function(selectedDate) {
				if($("#sd-placeholder").val() < selectedDate){
					var edate=$('#ed-placeholder').datepicker('getDate');
					$("#sd-placeholder").val($.datepicker.formatDate("yy. mm. dd.",edate));
					$("#sd").val($.datepicker.formatDate("yy. mm. dd.",edate));
					$('#ed').val($.datepicker.formatDate("yy-mm-dd",edate));
				}else{
					$("#sd-placeholder").val($.datepicker.formatDate("yy. mm. dd.",$('#ed-placeholder').datepicker('getDate')));
					$('#ed').val($.datepicker.formatDate("yy-mm-dd",$('#ed-placeholder').datepicker('getDate')));
				};
	        }
		});

		sessionStorage.setItem('sdate',$('#sd').val());
		sessionStorage.setItem('edate',$('#ed').val());
		$('<button/>')
			.insertAfter('#q')
			.attr({id:'clear-search',type:'button',tabindex:'-1'})
			.addClass('destination-clear hidden');
		
		$('#q').bind('input',()=>{
			if($('#q').val()===""){
				$('#clear-search')
				.removeClass('destination-clear')
				.addClass('destination-clear hidden');
			}else{
				$('#clear-search')
				.removeClass('destination-clear hidden')
				.addClass('destination-clear')
				.click(()=>{
					$('#q').val("");
					$('#clear-search')
					.removeClass('destination-clear')
					.addClass('destination-clear hidden')
					$('.autocomplete-suggestions').css('display','none');
				});
			};
		});
		
		$('<button/>')
			.appendTo('#div-search')
			.attr('id','submit-search')
			.addClass("hotel-cta-main-lg")
			.text('호텔 검색')
			.click((e)=>{
				if($('#q').val()!=""){
					e.preventDefault();
					ms.searchList.searchSuggestion($('#q').val());
					ms.chooseResult.init($('#q').val(),sessionStorage.getItem('sdate'),sessionStorage.getItem('edate'),$('#na').val(),$('#nr').val());
				}else{
					e.preventDefault();
					alert('도시 이름을 검색해 주세요');
			};
		});
	};
	var setContentView=()=>{
		$('#category-flights').addClass('lang-ko page-hotelsesi action-hotelsindex   default-layout scaffold-font-size   spring-clean month-view-spring-clean     no-touch');
		$('#category-flights').append(ms.hotelUI.index(ms.hotelUI.navbar(),ms.hotelUI.content(),ms.hotelUI.footer()));
	};
	return {init:init};
})();

ms.searchList=((q)=>{
	var searchSuggestion=(q)=>{
		$.ajax({
			url:'/sky/suggest',
			method : 'post',
			dataType : 'json',
			data : JSON.stringify({
				'destination' : q
			}),
			contentType : 'application/json',
			success:(data)=>{
			},
			error : (x,s,m)=>{
				alert('ajax 통신 에러'+m);
			}
		});
	};
	
	return {searchSuggestion:searchSuggestion}
})();

// 2번 페이지
ms.chooseResult=((q,sdp,edp,na,nr)=>{
	var init=(q,sdp,edp,na,nr)=>{
		onCreate(q,sdp,edp,na,nr);
	};
	
	var onCreate=(q,sdp,edp,na,nr)=>{
	setContentView(q,sdp,edp,na,nr);
	$('#authentication-link').click(()=>{ 
		
		/*
		 * $('body').append(ms.hotelUI.modal()); $('#idModal').modal();
		 */
		var ctx=$$('x');
		location.reload();
		$('body').empty();
	    skyAir.common.init(ctx);
	    $('#home-container').removeClass('#home-container').addClass('.homecontent').css("background-image", "url(//content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=2000px:599px&quality=80)");
		$('#first').removeClass('#first').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg?resize=500px:600px&quality=50)");
		$('#two').removeClass('#two').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/a60a89126ed3f927d123c815b610298d/GettyImages-475335963.jpg?resize=600px:600px&quality=50)");
		$('#three').removeClass('#three').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg?resize=450px:603px&quality=50)");
		$('#ssssssss').css("background-image","url(https://css.skyscnr.com/inspiration/static/embeddableMap/svg_map_20170525.svg)"); 
		$('#saleone').removeClass('#saleone').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/3d13492ebf1c1b0ac415bea8e172b960/GettyImages-505532917.jpg?resize=500px:600px&quality=50)");
		$('#saletwo').removeClass('#saletwo').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/7adba3a46af3ca29695f96937d19fcf1/GettyImages-149127892.jpg?resize=500px:600px&quality=50)");
		$('#saleth').removeClass('#saleth').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg?resize=500px:600px&quality=50)");
	});
	$('#identity').click(()=>{
		var ctx=$$('x');
		/* location.reload(); */
		$('body').empty();
	    skyAir.common.init(ctx);
	    $('#home-container').removeClass('#home-container').addClass('.homecontent').css("background-image", "url(//content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=2000px:599px&quality=80)");
		$('#first').removeClass('#first').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg?resize=500px:600px&quality=50)");
		$('#two').removeClass('#two').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/a60a89126ed3f927d123c815b610298d/GettyImages-475335963.jpg?resize=600px:600px&quality=50)");
		$('#three').removeClass('#three').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg?resize=450px:603px&quality=50)");
		$('#ssssssss').css("background-image","url(https://css.skyscnr.com/inspiration/static/embeddableMap/svg_map_20170525.svg)"); 
		$('#saleone').removeClass('#saleone').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/3d13492ebf1c1b0ac415bea8e172b960/GettyImages-505532917.jpg?resize=500px:600px&quality=50)");
		$('#saletwo').removeClass('#saletwo').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/7adba3a46af3ca29695f96937d19fcf1/GettyImages-149127892.jpg?resize=500px:600px&quality=50)");
		$('#saleth').removeClass('#saleth').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg?resize=500px:600px&quality=50)");
		 if(sessionStorage.getItem('email')===null){
				
			}else{
				$('#loginBu').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','account').removeAttr('data-toggle','').removeAttr('data-target','').text('로그아웃');
				
			}
	});
	
	$('#ms-airli').click(()=>{
		var ctx=$$('x');
		// ㄴㄴ
	  		  $('body').empty();
	      	  skyAir.common.init(ctx);
	      	$('#home-container').removeClass('#home-container').addClass('.homecontent').css("background-image", "url(//content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=2000px:599px&quality=80)");
		      $('#first').removeClass('#first').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg?resize=500px:600px&quality=50)");
		      $('#two').removeClass('#two').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/a60a89126ed3f927d123c815b610298d/GettyImages-475335963.jpg?resize=600px:600px&quality=50)");
		      $('#three').removeClass('#three').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg?resize=450px:603px&quality=50)");
		      $('#ssssssss').css("background-image","url(https://css.skyscnr.com/inspiration/static/embeddableMap/svg_map_20170525.svg)"); 
		      $('#saleone').removeClass('#saleone').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/3d13492ebf1c1b0ac415bea8e172b960/GettyImages-505532917.jpg?resize=500px:600px&quality=50)");
		      $('#saletwo').removeClass('#saletwo').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/7adba3a46af3ca29695f96937d19fcf1/GettyImages-149127892.jpg?resize=500px:600px&quality=50)");
		      $('#saleth').removeClass('#saleth').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg?resize=500px:600px&quality=50)");
		     
		      if(sessionStorage.getItem('email')===null){
					
			  }else{
					$('#loginBu').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','account').removeAttr('data-toggle','').removeAttr('data-target','').text('로그아웃');
					
			  }
		   
	  });
		$('#ms-carli').click(()=>{
			var ctx=$$('x');
		  	$('body').empty();
		    hyunseok.hello.init(ctx);
		});
		
	};
	
	var setContentView=(q,sdp,edp,na,nr)=>{
	$('#category-flights').empty();
	$('#category-flights').addClass('lang-ko page-hotelsesi action-hotelsindex   default-layout scaffold-font-size   spring-clean month-view-spring-clean     no-touch');
	$('#category-flights').append(ms.hotelUI.index(ms.hotelUI.navbar(),ms.chooseResultUI.content(q),ms.hotelUI.footer()));
	hlist(q,sdp,edp,na,nr);
	};
	
	var hlist=(q,sdp,edp,na,nr)=>{
		$.ajax({
			url:'/sky/suggest',
			method : 'post',
			dataType : 'json',
			data : JSON.stringify({
				'destination' : q
			}),
			contentType : 'application/json',
			success:(data)=>{
				var li='';
				if(data.sgst!=null){
					li='<div id="hlistli" class="dym-card">'
						+'	<h2>추천 호텔</h2>'
						+'	<ol name="dym-chs" class="dym-group">';
					$.each(data.sgst,(i,val)=>{
						li+='		<li class="dym-item ">'
							+'	<a data-icon="forward after" data-track-dym-result="true" data-name="<strong>'+val.destination+'</strong>" data-class="" data-eid="27538638">'
							+'				<h3 class="dym-item-title">검색어에 가까운 지역 =><strong>'+val.destination+'</strong></h3>'
							+'				<p class="dym-item-geo KR flag">'
							+'					<img src="//images.skyscnr.com/sttc/hotels-front-end/common/img/country_flags/KR.gif">'
							+'					<strong class="dym-poi-type">'+val.hotelName+'</strong> --- <strong>'+val.price+' 원</strong>'
							+'				</p>'
							+'			</a>'
							+'		</li>'
					});
					li+='</ol>'
						+'</div>'
				}else{
					li='<div id="hlistli" class="dym-card"><h1>검색어에 맞는 호텔이 없습니다.</h1></div>'
				};
					$('#chooseHt').append(li);
					$('.dym-item a').click(()=>{
						ms.hotelRecommand.init(q,sdp,edp,na,nr);
					});
			},
			error : (x,s,m)=>{
				alert('ajax 통신 에러'+m);
			}
		});
	};
	return {init:init,hlist:hlist};
})();

// 3번 페이지
ms.hotelRecommand=((q,sdp,edp,na,nr)=>{
	var init=(q,sdp,edp,na,nr)=>{
		onCreate(q,sdp,edp,na,nr);
	};
	var onCreate=(q,sdp,edp,na,nr)=>{
		setContentView(q,sdp,edp,na,nr);
		
		$('#payHotelBtn')
			.click((e)=>{
				e.preventDefault();
				$.ajax({
					url : '/sky/hotelReservation',
					method : 'post',
					dataType : 'json',
					data : JSON.stringify({
						'email' : $('#userMail').val(),
						'password' : $('#pw').val(),
						'hotelName' : $('#rht').val()
					}),
					contentType : 'application/json',
					success : (data)=>{
						alert(data.r);
					},
					error : (x,s,m)=>{
						alert('예약 ajax 통신 실패! :'+m);
					}
				});
		});
		
		$('#hotel-sort').change((e)=>{
			e.preventDefault();
			$('#results-list').empty();
			hotelList(q,sdp,edp,na,nr,$('#hotel-sort').val());
			// 호텔 상세리스트에서 로그인
		
		});
	};
	$('#sort-and-view-wrapper').append('<p class="search-summary"><strong>"'+q+'"</strong>에 대한 검색 결과 <strong>"'+$('#results-list ol li').length+'"</strong>개</p>');
	var setContentView=(q,sdp,edp,na,nr)=>{
		$('#category-flights').empty();
		$('#category-flights').append(ms.hotelUI.index(ms.hotelUI.navbar(),ms.hotelRecommandUI.content(q,sdp,edp,na,nr),ms.hotelUI.footer()));
		$('#ms-airli').click(()=>{
			var ctx=$$('x');
			// ㄴㄴ
		  	$('body').empty();
		  	 	
		    skyAir.common.init(ctx);
		    $('#home-container').removeClass('#home-container').addClass('.homecontent').css("background-image", "url(//content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=2000px:599px&quality=80)");
			$('#first').removeClass('#first').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg?resize=500px:600px&quality=50)");
			$('#two').removeClass('#two').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/a60a89126ed3f927d123c815b610298d/GettyImages-475335963.jpg?resize=600px:600px&quality=50)");
			$('#three').removeClass('#three').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg?resize=450px:603px&quality=50)");
			$('#ssssssss').css("background-image","url(https://css.skyscnr.com/inspiration/static/embeddableMap/svg_map_20170525.svg)"); 
			$('#saleone').removeClass('#saleone').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/3d13492ebf1c1b0ac415bea8e172b960/GettyImages-505532917.jpg?resize=500px:600px&quality=50)");
			$('#saletwo').removeClass('#saletwo').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/7adba3a46af3ca29695f96937d19fcf1/GettyImages-149127892.jpg?resize=500px:600px&quality=50)");
			$('#saleth').removeClass('#saleth').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg?resize=500px:600px&quality=50)");
			
		});
		$('#loginBu').click(()=>{
			
			var ctx=$$('x');
			location.reload(); 	
		  	$('body').empty();
		    skyAir.common.init(ctx);
		    $('#home-container').removeClass('#home-container').addClass('.homecontent').css("background-image", "url(//content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=2000px:599px&quality=80)");
			$('#first').removeClass('#first').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg?resize=500px:600px&quality=50)");
			$('#two').removeClass('#two').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/a60a89126ed3f927d123c815b610298d/GettyImages-475335963.jpg?resize=600px:600px&quality=50)");
			$('#three').removeClass('#three').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg?resize=450px:603px&quality=50)");
			$('#ssssssss').css("background-image","url(https://css.skyscnr.com/inspiration/static/embeddableMap/svg_map_20170525.svg)"); 
			$('#saleone').removeClass('#saleone').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/3d13492ebf1c1b0ac415bea8e172b960/GettyImages-505532917.jpg?resize=500px:600px&quality=50)");
			$('#saletwo').removeClass('#saletwo').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/7adba3a46af3ca29695f96937d19fcf1/GettyImages-149127892.jpg?resize=500px:600px&quality=50)");
			$('#saleth').removeClass('#saleth').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg?resize=500px:600px&quality=50)");
		});
		
	$('#ms-carli').click(()=>{
		var ctx=$$('x');
	  		  $('body').empty();
	      	  hyunseok.hello.init(ctx);
	    });
	$('#identity').click(()=>{
		var ctx=$$('x');
			  location.reload();
	  		  $('body').empty();
	      	  skyAir.common.init(ctx);
	      	  $('#home-container').removeClass('#home-container').addClass('.homecontent').css("background-image", "url(//content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=2000px:599px&quality=80)");
		      $('#first').removeClass('#first').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg?resize=500px:600px&quality=50)");
		      $('#two').removeClass('#two').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/a60a89126ed3f927d123c815b610298d/GettyImages-475335963.jpg?resize=600px:600px&quality=50)");
		      $('#three').removeClass('#three').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg?resize=450px:603px&quality=50)");
		      $('#ssssssss').css("background-image","url(https://css.skyscnr.com/inspiration/static/embeddableMap/svg_map_20170525.svg)"); 
		      $('#saleone').removeClass('#saleone').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/3d13492ebf1c1b0ac415bea8e172b960/GettyImages-505532917.jpg?resize=500px:600px&quality=50)");
		      $('#saletwo').removeClass('#saletwo').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/7adba3a46af3ca29695f96937d19fcf1/GettyImages-149127892.jpg?resize=500px:600px&quality=50)");
		      $('#saleth').removeClass('#saleth').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg?resize=500px:600px&quality=50)");
		      if(sessionStorage.getItem('email')===null){
					
				}else{
					$('#loginBu').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','account').removeAttr('data-toggle','').removeAttr('data-target','').text('로그아웃');	
				}   
	});
	$('body').append(ms.paymentUI.payModal());
	hotelList(q,sdp,edp,na,nr,'hotel_name');
	filter();
	};
	var hotelList = (q,sdp,edp,na,nr,range)=>{
		$.ajax({
			url : '/sky/recommandView/'+range,
			method : 'post',
			dataType : 'json',
			data : JSON.stringify({
				'destination' : q
			}),
			contentType : 'application/json',
			success : (data)=>{
				var hlist='<ol class="results available">'
					$.each(data.rview,(i,val)=>{
						hlist+='<li class="hotel-card   clearfix" id="hotel_'+i+'" data-has-official-partner="false" data-hotel-id="'+val.hotelSeq+'" data-hotel-name="'+val.hotelName+'" data-hotel-city-id="27538638" data-hotel-city="n/a" data-hotel-reviews="true" data-hotel-images="5" data-hotel-customer-rating="'+val.rating+'" data-num-reviews="" data-official-price-position="-1" data-total-prices="1">'
						+'	<a class="hotel-thumbnail hotel-details-link" data-inlinetab="gallery">'
						+'	<img src="//d3ba47lalua02r.cloudfront.net/available/197876569/rmt.jpg">'
						+'	<img class="lazy-htile" src="//d3ba47lalua02r.cloudfront.net/available/138110764/rmt.jpg" data-original="//d3ba47lalua02r.cloudfront.net/available/138110764/rmt.jpg" style="display: block;">'
						+'	<img class="lazy-htile" src="//d3ba47lalua02r.cloudfront.net/available/99435022/rmt.jpg" data-original="//d3ba47lalua02r.cloudfront.net/available/99435022/rmt.jpg" style="display: block;">'
						+'	<img class="lazy-htile" src="//d3ba47lalua02r.cloudfront.net/available/99435016/rmt.jpg" data-original="//d3ba47lalua02r.cloudfront.net/available/99435016/rmt.jpg" style="display: block;">'
						+'	<img class="lazy-htile" src="//d3ba47lalua02r.cloudfront.net/available/99435111/rmt.jpg" data-original="//d3ba47lalua02r.cloudfront.net/available/99435111/rmt.jpg" style="display: block;">'
						+'	</a>'
						+'	<div class="hotel-content">'
						+'	<div class="hotel-meta clearfix">'
						+'	<div class="hotel-title-map-link">'
						+'	<h2 id="h2_'+i+'" style="text-align:center;">'+val.hotelName+'</h2>'
						+'	</div>'
						+'	<a class="hotel-details hotel-details-link">'
						+'	<div class="hotel-review " >'
						+'	<span class="" style="text: 50px"> 평점: '+val.rate+'점</span>'
						+'	</div>'
						+'		<div style="position:relative; padding: 50px 0px 0px 0px;">'
						+'			<h3><p><strong>편의 시설:</strong>'+val.facility+'</p></h3>'
						+'			<h3><p><strong>환불 정책:</strong>'+val.refundPolicy+'</p></h3>'
						+'		</div>'
						+'	</a>'
						+'	</div>'
						+'	<div class="hotel-deals">'
						+'	<div class="price_column ">'
						+'	<div class="deal_meta price_meta price_format_total">'
						+'	<span class="price price_total price_full">'
						+'1인 당 가격:	₩ '+val.price
						+'	</span>'
						+'	</div>'
						+'	<div id="payDiv_'+i+'" class="deal_meta cta_meta">'
						+'	</div>'
						+'	</div>'
						+'	</div>'
						+'	</div>'
						;
					});
					hlist+='</li></ol>'
					$('#results-list').append(hlist);
					
					$.each(data.rview,(i,v)=>{
						$('<button onclick="alert(\''+getBtnName()+'\')" />')
						.appendTo($('#payDiv_'+i))
						.attr({"id":'paymentBtn_'+v.hotelName,"name":v.hotelName,"type":"button","data-toggle":"modal","data-target":"payModal"})
						.addClass("hotel-cta-main")
						.text("결제하기")
						.click((e)=>{
							e.preventDefault();
							$('#payModal').modal({'backdrop' : 'static'});
						});
					});
					
					$('#results-list').append(ms.hotelRecommandUI.pgnav(q,data.rview.length));
					$('#results-list-layout').attr("data-pivot-name",q);
					$('#results-list-layout').attr("data-results-count",data.rview.length);
			},
			error : (x,s,m)=>{
				console.log('hotelList ajax 통신 실패! : '+m);
			}
		});
	};
	
	var getBtnName = ()=>{
		$(document).ready(()=>{
			$(this).attr("name");
		});
	};
	
	
	var filter =()=>{
		$.ajax({
			url : '/sky/filter',
			method : 'post',
			dataType : 'json',
			contentType : 'application/json',
			success : (data)=>{
				console.log(data.filter.refundPolicy);
				console.log(data.filter.breakfast);
				console.log(data.filter.facility);
			},
			error : (x,s,m)=>{
				alert('필터링 ajax 통신 실패: '+m);
			}
		});
	};
	return {init:init,filter:filter,hotelList:hotelList};
})();


/* skyUI */
ms.LoginUI={
		login:()=>{
			return '<div id="loginModal" class="modal fade" id="myModal" role="dialog">'
			+'  <div class="modal-dialog"> '
			+'  Modal content'
			+'    <div class="modal-content">'
			+'      <div class="modal-header" style="padding:35px 50px;">'
			+'      <button type="button" class="close" data-dismiss="modal">&times;</button>'
			+'      <span class=""></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
			+'      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 로그인 또는 회원가입'
			+'      </div>'
			+'      <div class="modal-body" style="padding:80px 50px; float: left;">'
			+'        <span class="social social-facebook"></span>'
			+'        <button type="submit" class="btn btn-success btn-block" style="background-color: blue;" data-dismiss="modal">Login By FaceBook</button>'
			+'        <p style="position:absolute; width: 110%; padding: 50px 10px 0px 0px;">Not a member? <a href="#">Sign Up</a></p>'
			+'        <p style="position:absolute; padding: 110px 0px 0px 0px;">Forgot <a href="#">Password?</a></p>'
			+'      </div>'
			+'      <div class="modal-body" style="padding:80px 50px; float: right;">'
			+'        <form role="form">'
			+'          <div class="form-group">'
			+'            <label for="usrname"><span class="glyphicon glyphicon-envelope"></span> Username</label>'
			+'            <input type="text" class="form-control" id="usrname" placeholder="Enter email">'
			+'          </div>'
			+'          <div class="form-group">'
			+'            <label for="psw"><span class="glyphicon glyphicon-lock"></span> Password</label>'
			+'            <input type="text" class="form-control" id="psw" placeholder="Enter password">'
			+'          </div>'
			+'          <div class="checkbox">'
			+'            <label><input type="checkbox" value="" checked>Remember me</label>'
			+'          </div>'
			+'          <button type="submit" class="btn btn-success btn-block" data-dismiss="modal"><span class="glyphicon glyphicon-off"></span> Login</button>'
			+'        </form>'
			+'      </div>'
			+'      <div class="modal-footer" style="">'
			+'      </div>'
			+'    </div>'
			+'  </div>'
			+'</div>'
			;
		}
};

ms.hotelUI ={
	modal : ()=>{
		return '<!--Modal-->'
		+'<div class="modal fade" id="idModal" role="dialog">'
		+'<div class="modal-dialog">'
		+'<!--Modal content-->'
		+'<div class="modal-content" >'
		+'      <div class="modal-header" style="padding:35px 50px;">'
		+'      <button type="button" class="close" data-dismiss="modal">&times;</button>'	    			
		+'      <span class=""></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
		+'      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b style="font-size:15px;">로그인 또는 회원가입</b>'
		+'      </div>'
		+'      <div class="modal-body" style="padding:80px 50px; float: left;">'
		+'        <button type="submit" class="btn btn-success btn-block" style="background-color: blue;" data-dismiss="modal">Login By FaceBook</button>'		    			
		+'      </div>'
		+'      <div class="modal-body" style="padding:80px 50px; float: right;">'
		+'        <form role="form">'
		+'          <div class="form-group">'
		+'            <label for="usrname"><span class="glyphicon glyphicon-envelope"></span> Username</label>'
		+'            <input type="text" class="form-control" id="usrname" placeholder="Enter email">'
		+'          </div>'
		+'          <div class="form-group">'
		+'            <label for="psw"><span class="glyphicon glyphicon-lock"></span> Password</label>'
		+'            <input type="password" class="form-control" id="psw" placeholder="Enter password">'
		+'          </div>'
		+'          <div class="checkbox">'
		+'            <label><input type="checkbox" value="" checked>Remember me</label>'
		+'          </div>'
		+'          <button id="loginBtn" type="submit" class="btn btn-success btn-block" data-dismiss="modal"><span class="glyphicon glyphicon-off"></span> Login</button>'
		+'        </form>'
		+'      </div>'
		+'      <div class="modal-footer" style="">'
		+'      </div>'
		+'    </div>    '
	
	},
	index : (x,y,z)=>{
	/* ms.hotelUI.navbar(), ms.hotelUI.content(), ms.hotelUI.footer() */
	return '<div id="pagewrap" class="clearfix">'
	+'	<div class="wrap h1-heading"><h1 id="h1-heading">호텔 | 스카이스캐너 - 스카이스캐너에서 호텔 검색 및 비교</h1></div><link rel="stylesheet" href="//js.skyscnr.com/sttc/oc-registry/components/header/0.4.42/build/static/css/main.dc7e0f67.css"><script>;</script>'
	+'	<div id="header-root">'
	+'	<header class="Header-1_1R81">'
	+x
	+'	</header>'
	+'	</div>'
	+y
	+z
	+'	<div class="wrap legal-info">'
	+'	<p id="copyright" class="asian-lang-font-reset">'
	+'    	<span>© Skyscanner Ltd 2002-2017</span>'
	+'	</p>'
	+'	</div>'
	+'</div>'
	},
	navbar : ()=>{
	return '<div id="hotelNavbar" class="Header__wrapper-2KwQq clearfix wrap">'
	+'<nav class="SecondaryNav-3MUje">'
	+'<ul class="SecondaryNav__list-1lEyp">'
	+'<li class="SecondaryNav__help-19EmT SecondaryNav__item-25SJ- SecondaryNav__item--small-_0Qtf"><a class="bpk-link-143_C" id="ss-header-links-faq">도움말</a></li>'
	+'<li class="SecondaryNav__culture-selector-TeNdM culture-info SecondaryNav__item-25SJ-"><button type="button" class="bpk-button-30cpF bpk-button--secondary-lyMj0"><img class="SecondaryNav__country-flag-2Bn20" src="https://images.skyscnr.com/images/country/flag/header/kr.png">ko-KR ₩ KRW</button></li>'
	+'<li class="SecondaryNav__account-2N-Uf SecondaryNav__item-25SJ-"><button id="loginBu" type="button" class="bpk-button-30cpF bpk-button--secondary-lyMj0"><span id="authentication-link" class="login global-header_secondary-nav-account">로그인</span></button></li>'
	+'</ul>'
	+'</nav>'
	+'<div id="identity" class="Header__logo-wrapper-26Akq"><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211 36" class="bpk-logo bpk-logo__inline Logo__svg-l3cXE" data-reactid="24"><path d="M70.187 14.115a.577.577 0 0 1-.765.365c-.969-.373-2.065-.64-3.09-.64-1.764 0-3.426.53-3.426 2.296 0 .954.53 1.449 2.227 1.98l1.236.387c2.473.776 3.533 1.907 3.533 4.096 0 3.778-2.65 6.358-7.452 6.358-1.887 0-3.501-.296-4.87-.773-.333-.116-.493-.486-.394-.825l.565-1.96c.094-.325.456-.479.77-.353 1.237.5 2.608.839 3.822.839 2.156 0 3.673-.742 3.673-2.474 0-1.024-.706-1.411-2.296-1.907l-1.343-.423c-2.367-.777-3.427-2.19-3.427-4.45 0-3.851 3.216-5.933 7.454-5.933 1.275 0 2.732.285 3.947.702.335.114.497.486.394.824l-.558 1.891zm8.347-10.082c.33 0 .575.3.514.623l-2.6 13.436c2.45-1.787 4.59-3.887 6.48-6.324a1.27 1.27 0 0 1 1.007-.494h2.828c.272 0 .423.307.267.53-1.859 2.621-3.986 5.04-6.237 6.993l3.582 9.017a.434.434 0 0 1-.402.592h-3.005a.915.915 0 0 1-.854-.595l-2.465-6.717c-.662.446-1.346.859-2.049 1.237l-1.046 5.451a.772.772 0 0 1-.753.624h-2.582a.523.523 0 0 1-.512-.624l4.49-23.126a.768.768 0 0 1 .756-.624h2.581v.001zm13.213 7.24c.33 0 .577.302.514.626l-1.75 9.019c-.142.67-.283 1.518-.283 2.332 0 1.058.6 1.766 2.013 1.766 1.378 0 3.001-.601 4.203-1.73l2.245-11.388a.774.774 0 0 1 .756-.624h2.582c.329 0 .575.3.511.625l-2.314 11.88c-.283 1.377-.6 2.931-.882 4.168C97.999 33.528 95.456 36 90.369 36c-1.12 0-2.235-.14-3.205-.4a.687.687 0 0 1-.494-.818l.442-1.804a.616.616 0 0 1 .738-.461c.733.175 1.571.304 2.343.304 3.005 0 4.768-1.272 5.404-4.732l.25-1.308c-1.307 1.13-3.252 1.872-5.087 1.872-2.968 0-4.557-1.483-4.557-3.85 0-1.413.283-2.968.6-4.59l1.61-8.313a.773.773 0 0 1 .755-.626h2.579v-.001zm23.306 2.855a.577.577 0 0 1-.765.366c-.968-.374-2.066-.642-3.09-.642-1.764 0-3.424.532-3.424 2.297 0 .954.527 1.449 2.223 1.98l1.237.387c2.472.776 3.533 1.907 3.533 4.097 0 3.778-2.65 6.358-7.452 6.358-1.885 0-3.502-.297-4.868-.774-.334-.116-.494-.486-.397-.825l.567-1.96c.093-.325.457-.479.77-.353 1.236.5 2.607.839 3.82.839 2.155 0 3.674-.742 3.674-2.474 0-1.024-.705-1.411-2.294-1.907l-1.346-.423c-2.365-.777-3.424-2.19-3.424-4.45 0-3.851 3.214-5.933 7.454-5.933 1.275 0 2.73.285 3.946.702.332.114.494.486.393.824l-.557 1.891zm15.075.387a.526.526 0 0 1-.735.323c-.93-.425-1.982-.668-3.181-.668-3.743 0-6.007 3.216-6.007 7.313.036 2.439.92 4.063 3.676 4.098 1.22.03 2.493-.217 3.644-.613.282-.096.59.101.556.396l-.243 2.058a1.044 1.044 0 0 1-.692.868c-1.28.445-2.675.681-4.254.681-4.593 0-6.747-2.613-6.747-6.924 0-6.108 3.462-11.335 10.101-11.335 1.61 0 2.97.3 4.075.775.343.151.52.533.415.893l-.608 2.135zm2.814-1.969a.92.92 0 0 1 .618-.85c1.692-.565 3.828-.984 5.685-.984 3.531 0 5.827 1.059 5.827 4.132 0 .635-.106 1.413-.281 2.26l-1.377 7.24c-.213 1.087-.108 1.695.362 1.933.288.145.53.422.464.739l-.207 1.017c-.08.392-.377.716-.769.8a6.464 6.464 0 0 1-1.264.14c-1.592 0-2.367-.743-2.472-2.05h-.106c-1.165 1.272-2.93 2.05-5.017 2.05-3.001 0-4.943-1.518-4.943-4.556 0-4.098 3.25-7.03 10.526-7.03h.955c.104-.53.174-1.06.174-1.448 0-1.413-.707-2.05-2.93-2.05-1.415 0-3.112.338-4.713.883a.432.432 0 0 1-.572-.421l.04-1.805zm6.762 7.595c-3.567 0-6.182 1.165-6.182 3.743 0 1.132.673 1.838 2.191 1.838 1.447 0 2.967-.742 3.92-1.731l.775-3.85h-.704zm12.01-8.867c.341 0 .608.293.574.634l-.115 1.204h.034c1.73-1.449 3.957-2.4 6.111-2.4 2.685 0 4.45 1.552 4.45 4.026 0 1.2-.175 2.188-.387 3.319l-1.859 9.726a.774.774 0 0 1-.754.624h-2.582a.521.521 0 0 1-.512-.624l1.714-8.879c.178-.882.32-1.872.32-2.472 0-1.306-.708-1.977-2.192-1.977-1.623 0-3.461.845-4.767 2.082l-2.142 11.246a.77.77 0 0 1-.752.624h-2.581a.523.523 0 0 1-.516-.624l3.045-15.884a.768.768 0 0 1 .752-.625h2.159zm17.485 0a.58.58 0 0 1 .575.634l-.117 1.204h.035c1.731-1.449 3.955-2.4 6.109-2.4 2.686 0 4.452 1.552 4.452 4.026 0 1.2-.178 2.188-.388 3.319l-1.86 9.726a.772.772 0 0 1-.754.624h-2.582a.525.525 0 0 1-.515-.624l1.72-8.879c.176-.882.317-1.872.317-2.472 0-1.306-.707-1.977-2.191-1.977-1.624 0-3.46.845-4.768 2.082l-2.14 11.246a.771.771 0 0 1-.755.624h-2.582a.525.525 0 0 1-.516-.624l3.047-15.884a.768.768 0 0 1 .755-.625h2.158zm16.53 10.208c-.06.517-.05 1.04.035 1.555.318 1.73 1.66 2.578 3.92 2.578 1.578 0 3.234-.243 4.689-.706.28-.089.57.126.532.418l-.235 1.955c-.046.382-.289.721-.654.849-1.6.559-3.41.84-5.11.84-4.873 0-7.24-2.084-7.24-6.816 0-4.099 1.34-7.877 4.239-9.89 1.448-1.026 3.25-1.553 5.51-1.553 4.097 0 5.898 2.328 5.898 5.792 0 1.193-.142 2.781-.471 4.388-.073.355-.402.59-.764.59h-10.349zm7.416-2.79c.18-.668.275-1.357.283-2.049 0-1.59-.705-2.72-2.506-2.72-2.614 0-4.205 1.908-4.769 4.769h6.992zm10.495-7.418a.59.59 0 0 1 .588.634l-.098 1.38h.07c1.308-1.59 3.217-2.402 5.017-2.402a7.2 7.2 0 0 1 .514.016c.337.021.527.376.426.697l-.715 2.285c-.113.365-.468.597-.85.613-1.784.077-3.508.587-4.674 1.406l-2.28 11.88a.773.773 0 0 1-.756.624h-2.58a.524.524 0 0 1-.515-.624l3.046-15.884a.77.77 0 0 1 .752-.625h2.055zM28.247 14.713c4.78-4.781 11.05-7.158 17.318-7.152l.05.001c.57 1.336.901 2.763.978 4.214a20.283 20.283 0 0 0-1-.025l-.028.002-.026-.002a20.127 20.127 0 0 0-14.322 5.933 20.126 20.126 0 0 0-5.934 14.321l.003.072H21.09c-.017-6.282 2.361-12.572 7.156-17.365l.001.001zm24.843 8.02c.03-.329.046-.662.046-.999 0-1.604-.369-3.12-1.023-4.473a16.159 16.159 0 0 0-6.548-1.371 16.06 16.06 0 0 0-11.43 4.715 16.063 16.063 0 0 0-4.716 11.473h4.21c-.018-3.08 1.132-6.162 3.475-8.505a11.87 11.87 0 0 1 8.25-3.473v-.003l.211.002.213-.002v.003c2.597.038 5.183.913 7.312 2.633zm-42.019-4.917l-.002-.017.002.017zm40.225 8.491a8.011 8.011 0 0 0-5.518-2.353v.002l-.213-.002-.212.002v-.002a8.014 8.014 0 0 0-5.517 2.353 8.02 8.02 0 0 0-2.35 5.772h4.04c.265-1.35.51-2.032 1.28-2.803a3.83 3.83 0 0 1 2.76-1.11 3.83 3.83 0 0 1 2.76 1.11c.263.264.473.558.642.869a10.095 10.095 0 0 0 2.851-3.258 7.998 7.998 0 0 0-.523-.58zm-34.17 5.7c0-14.844 11.382-27.026 25.895-28.301A12.408 12.408 0 0 0 34.164 0c-6.382 0-11.64 4.8-12.368 10.985a7.013 7.013 0 0 0-3.737-1.074c-3.89 0-7.432 3.892-6.988 7.905a7.562 7.562 0 1 0-4.603 14.183c.287.05.582.08.883.08h9.775v-.074.002zM11.06 17.718l.009.08-.009-.08z" data-reactid="25"></path></svg></a>'
	+'<li class="SecondaryNav__menu-393l9 toggle-touch-menu SecondaryNav__item-25SJ-" id="toggle-touch-menu" data-reactid="17"><button class="SecondaryNav__menu-button-30qZJ" data-reactid="18"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="width:1.5rem;height:1.5rem;" class="SecondaryNav__menu-icon-2RdSm bpk-icon--rtl-support-6bwD-" data-reactid="19"><path d="M20 8H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zm1 4c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1zm0 5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1z" data-reactid="20"></path></svg><span class="visually-hidden" data-reactid="21">탐색 메뉴</span></button></li>'
	+'</div>'
	+'<nav id="PrimaryNav" class="PrimaryNav-2IMAs">'
	+'<ul class="PrimaryNav__list-16-_W">'
	+'<li class="HeaderTab-2DhXr"><a id="ms-airli" class="js-header-tab HeaderTab__link-o2SAi"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="width:1.5rem;height:1.5rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--mobile-1srLF bpk-icon--rtl-support-6bwD-" data-reactid="31"><path d="M17.8 20.1l.6-.6c.2-.2.3-.5.2-.8l-2.2-9.3 4.1-4.2c.5-.5.5-1.3 0-1.9-.5-.5-1.4-.5-1.9 0l-4.2 4.1-9.1-2c-.3-.1-.6 0-.8.2l-.6.6c-.4.4-.3 1.1.2 1.4l7.2 3.2-3.7 3.7-2.3-.8c-.3-.1-.6 0-.8.2L3 15.2l4.2 1.6L8.8 21l1.3-1.5c.2-.2.3-.6.2-.8l-.8-2.3 3.7-3.7 3.2 7.2c.3.5 1 .6 1.4.2z" data-reactid="32"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="width:1.125rem;height:1.125rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--desktop-1e6kR bpk-icon--rtl-support-6bwD-" data-reactid="33"><path d="M17.8 20.1l.6-.6c.2-.2.3-.5.2-.8l-2.2-9.3 4.1-4.2c.5-.5.5-1.3 0-1.9-.5-.5-1.4-.5-1.9 0l-4.2 4.1-9.1-2c-.3-.1-.6 0-.8.2l-.6.6c-.4.4-.3 1.1.2 1.4l7.2 3.2-3.7 3.7-2.3-.8c-.3-.1-.6 0-.8.2L3 15.2l4.2 1.6L8.8 21l1.3-1.5c.2-.2.3-.6.2-.8l-.8-2.3 3.7-3.7 3.2 7.2c.3.5 1 .6 1.4.2z" data-reactid="34"></path></svg><span class="HeaderTab__text-ZVTEX" data-reactid="35">&nbsp;항공권</span></a></li>'
	+'<li class="HeaderTab-2DhXr"><a id="ms-skyli" class="js-header-tab HeaderTab__link-o2SAi HeaderTab__link--active-1vNee"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="width:1.5rem;height:1.5rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--active-30Ao7 HeaderTab__icon--mobile-1srLF bpk-icon--rtl-support-6bwD-" data-reactid="40"><path d="M8 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m11-3.9h-6c-1.1 0-2 .9-2 2V12h10v-1.9c0-1.1-.9-2-2-2m3 5.9c0-.6-.4-1-1-1H5V5.5C5 4.7 4.3 4 3.5 4S2 4.7 2 5.5v13c0 .8.7 1.5 1.5 1.5S5 19.3 5 18.5V16h14v2.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V14z" data-reactid="41"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="width:1.125rem;height:1.125rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--active-30Ao7 HeaderTab__icon--desktop-1e6kR bpk-icon--rtl-support-6bwD-" data-reactid="42"><path d="M8 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m11-3.9h-6c-1.1 0-2 .9-2 2V12h10v-1.9c0-1.1-.9-2-2-2m3 5.9c0-.6-.4-1-1-1H5V5.5C5 4.7 4.3 4 3.5 4S2 4.7 2 5.5v13c0 .8.7 1.5 1.5 1.5S5 19.3 5 18.5V16h14v2.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V14z" data-reactid="43"></path></svg><span class="HeaderTab__text-ZVTEX" data-reactid="44">&nbsp;호텔</span></a></li>'
	+'<li class="HeaderTab-2DhXr"><a id="ms-carli" class="js-header-tab HeaderTab__link-o2SAi"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="width:1.5rem;height:1.5rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--mobile-1srLF bpk-icon--rtl-support-6bwD-" data-reactid="49"><path d="M3 20c0 .5.5 1 1 1h2c.5 0 1-.5 1-1v-2H3v2zm14 0c0 .5.5 1 1 1h2c.5 0 1-.5 1-1v-2h-4v2zm1.2-15.1C17.8 3.8 17 3 15.8 3H8.1c-.9 0-1.9.7-2.2 1.9L4 10.3c-.6.3-1 1-1 1.7v5h18v-5c0-.7-.4-1.4-1-1.7l-1.8-5.4zm-10.8.7c.1-.4.4-.6.8-.6h7.6c.4 0 .7.3.8.6L18 10H6l1.4-4.4zM6.5 15c-.8 0-1.5-.7-1.5-1.5S5.7 12 6.5 12s1.5.7 1.5 1.5S7.3 15 6.5 15zm11 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" data-reactid="50"></path></svg><span class="HeaderTab__text-ZVTEX" data-reactid="53">&nbsp;관리자</span></a></li>'
	+'</ul>'
	
	+'</nav>'
	+'</div>'
	
	},
	
	content : ()=>{
	var now=new Date();
	var content = '<div id="content-wrap" class="wrap clearfix" style="margin-top:0%">'
	+'<div id="search-form-wrapper" class="search-form-wrappersearch-form-wrappersearch-form-wrapper">'
	+'<div id="searchBG" class="search-bg" data-original="//images.skyscnr.com/sttc/hotels-front-end/searchcontrols/img/homepage-banner-2017-spring.jpeg" style="display: block; background-image: url(&quot;//images.skyscnr.com/sttc/hotels-front-end/searchcontrols/img/homepage-banner-2017-spring.jpeg&quot;);"></div>'
	+'<header class="hotel-search-form-header header-always-visible">'
	            +'<h2>호텔, 아파트 및 호스텔</h2>'
	            +'<p>스카이스캐너는 최적의 상품을 무료로 찾아드립니다.</p>'
	        +'</header>'
	        +'<form id="hotel-search-form" class="hotel-search-form">'
	        +'<label class="field destination">'
	        +'호텔 상품 찾기'
	        +'<input type="text" name="q" id="q" placeholder="목적지 또는 호텔명을 입력하십시오." value="" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">'
	        +'<div id="empty-destination-box" class="hotel-search-form--error">'
	        +'<div class="text">목적지 또는 호텔명을 입력해 주십시오.</div>'
	        +'</div>'
	        +'</label>'
	        +'<fieldset class="field dates">'
	        +'<label for="sd-placeholder" class="field checkin">'
	        +'체크인'
	        +'<input id="sd-placeholder" type="text" value="'+now.getFullYear()+'. '+(now.getMonth()+1)+'. '+now.getDate()+'." readonly="readonly">'
	        +'<input id="sd" name="sd" type="hidden" value="'+now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+'">'
	        +'</label>'
	        +'<label for="ed-placeholder" class="field checkout">'
	        +'체크아웃'
	        +'<input id="ed-placeholder" type="text" value="'+now.getFullYear()+'. '+(now.getMonth()+1)+'. '+(now.getDate()+1)+'." readonly="readonly">'
	        +'<input id="ed" name="ed" type="hidden" value="'+now.getFullYear()+'-'+(now.getMonth()+1)+'-'+(now.getDate()+1)+'">'
	        +'</label>'
	        +'<div id="long-stay-box" class="hotel-search-form--error">'
	        +'<div class="text">죄송합니다., 30박 이상 체류는 지원하지 않습니다.</div>'
	        +'</div>'
	        +'</fieldset>'
	        +'<fieldset class="field accommodation">'
	        +'<label class="field guests">'
	        +'투숙객'
	        +'<select id="na" name="na">'
	        +'<option value="1" selected="selected">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>'
	        +'</select>'
	        +'</label>'
	        +'<label class="field rooms">'
	        +'객실'
	        +'<select id="nr" name="nr">'
	        +'<option value="1" selected="selected">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>'
	        +'</select>'
	        +'</label>'
	        +'</fieldset>'
	        +'<div id="div-search" class="field submit ">'
	+'</div>'
	+'<input type="hidden" name="bpt_eid" id="query_id" value="">'
	+'<input type="hidden" name="fhids" id="fhids" value="">'
	+'<input id="urldis" name="urldis" type="hidden" value="/hotels/s/" disabled="disabled">'
	+'<input id="urlres" name="urlres" type="hidden" value="/hotels/q/" disabled="disabled">'
	+'</form>'
	+'</div>'
	+'</br></br></br></br></br></br>'
	+ '<section id="confidence" class="provider-logos">'
	+'<div class="confidence-wrapper">'
	        +'<h2>스카이스캐너는 전 세계 호텔 제휴사를 검색하여 다음을 포함한 최고의 상품을 찾아드립니다.</h2>'
	        +'<ol class="clearfix">'
	                +'<li class="provider-logo"><span style="background-image: url(//images.skyscnr.com/sttc/hotels-front-end/homepage/img/partners_logos/h_bc.png);"></span></li>'
	                +'<li class="provider-logo"><span style="background-image: url(//images.skyscnr.com/sttc/hotels-front-end/homepage/img/partners_logos/h_hi.png);"></span></li>'
	                +'<li class="provider-logo"><span style="background-image: url(//images.skyscnr.com/sttc/hotels-front-end/homepage/img/partners_logos/h_hc.png);"></span></li>'
	                +'<li class="provider-logo"><span style="background-image: url(//images.skyscnr.com/sttc/hotels-front-end/homepage/img/partners_logos/h_hy.png);"></span></li>'
	                +'<li class="provider-logo"><span style="background-image: url(//images.skyscnr.com/sttc/hotels-front-end/homepage/img/partners_logos/h_xp.png);"></span></li>'
	                +'<li class="provider-logo"><span style="background-image: url(//images.skyscnr.com/sttc/hotels-front-end/homepage/img/partners_logos/h_ic.png);"></span></li>'
	            +'</ol>'
	            +'</div>'
	    +'</section>'
	    +'<section id="common-content" class="common-content">'
	        +'<div class="common-content-wrapper">'
	            +'<ul class="clearfix">'
	                +'<li class="usp" id="value-statement" data-icon="searchLarge before">'
	                +'<h3>검색</h3>'
	                +'<p>1,200,000개 이상의 호텔, 아파트 및 호스텔.</p>'
	                +'</li>'
	                +'<li class="usp" data-icon="compareLarge before">'
	                +'<h3>비교</h3>'
	                +'<p>가격, 위치, 평가 및 여러 가지 기준을 적용합니다.</p>'
	                +'</li>'
	                +'<li class="usp" data-icon="saveLarge before">'
	                +' <h3>할인받기</h3>'
	                +'<p>이상적인 호텔의 최저가를 찾아드립니다.</p>'
	                +'</li>'
	            +' </ul>'
	        +'</div>'
	    +'</section>'
	    +'<div id="pageView" data-url="/HOTELSHOMEPAGE"></div>'
	    +'<div id="destination-wrapper" class="destinations_wrapper">'
	+'    <div id="destination" class="destinations">'
	+'        <h2><strong>영감이 필요하신가요?</strong> 엄선된 지역의 호텔을 둘러 보십시오.</h2>'
	+'        <ul class="clearfix">'
	var arr=[
	{img: 'https://content.skyscnr.com/17aa2e2dc4eb4bc182a0a65957007fa3/GettyImages-106535239.jpg', city: '오사카', country : '일본'},
	{img: 'https://content.skyscnr.com/48a389f8137372a0eb0394896b8cd140/cjua_488471333.jpg', city: '제주', country: '대한민국'},
	{img: 'https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg', city: '후쿠오카', country: '일본'},
	{img: 'https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg', city: '도쿄', country: '일본'},
	{img: 'https://content.skyscnr.com/05accaec28ad48ea37b4c5e13bbbfa7b/GettyImages-166140632.jpg', city: '타이페이', country: '대만'},
	{img: 'https://content.skyscnr.com/30bd07fd3b3ce435239f89253401d73f/GettyImages-538012031.jpg', city: '홍콩', country: '중국'},
	{img: 'https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg', city: '방콕', country: '태국'},
	{img: 'https://content.skyscnr.com/0ccd022e5d074467344ac3d01d5d1df7/GettyImages-178793470.jpg', city: '다낭', country: '베트남'},
	{img: 'https://content.skyscnr.com/1017dd4cef7a773021e1b335b3410d30/GettyImages-487828389.jpg', city: '런던', country: '영국'}
	];
	$.each(arr,(i,val)=>{
	content+='                <li class="destination" id="destination_">'
	+'                    <a>'
	+'	<div class="destination_thumb" data-original="'+val.img+'" style="display: block; background-image: url(&quot;'+val.img+'&quot;);"></div>'
	+'                        <div class="destination_cta" data-icon="forwardBlue after">'
	+'                            <h4>'+val.city+'</h4>'
	+'                            <p>'+val.country+'</p>'
	+'                        </div>'
	+'                    </a>'
	+'                </li>'
	});
	content+='</ul>'
	+'    </div>'
	+'</div>'
	+'</div>'
	return content;
	},
	
	footer : ()=>{
	return '<footer id="footer">'
	+'    <div class="footer-content">'
	+'        <div class="wrap clearfix">'
	+'            <div class="tablet-left-column">'
	+'                <section id="explore-block">'
	+'                    <h3>탐색</h3>'
	+'                        <ul>'
	+'                        	<li class="clearfix"><a id="ss-footer-links-city-links" href="https://www.skyscanner.co.kr/hotels/all-cities">도시</a>'
	+'                        	</li>'
	+'                        	<li class="clearfix"><a id="ss-footer-links-flights" href="/">항공권</a>'
	+'                        	</li>'
	+'                        	<li class="clearfix"><a id="ss-footer-links-hotels" href="/hotels">호텔</a>'
	+'                        	</li>'
	+'                        	<li class="clearfix"><a id="ss-footer-links-apps" href="/mobile.html">앱</a></li>'
	+'                        	</ul>'
	+'                </section>'
	+'                <section id="tools-block">'
	+'                    <h3>파트너</h3>'
	+'                    <ul>'
	+'                    <li class="clearfix"><a id="ss-footer-links-workwithus" href="https://partners.skyscanner.net/">스카이스캐너와 협력</a></li>'
	+'                    <li class="clearfix"><a id="ss-footer-links-partneranalytics" href="https://partners.skyscanner.net/partner-analytics/">파트너 분석</a></li>'
	+'<li class="clearfix"><a id="ss-footer-links-footeradvertising" href="https://partners.skyscanner.net/advertising/">스카이스캐너와 광고하기</a></li>'
	+'<li class="clearfix"><a id="ss-footer-links-travelinsight" href="https://partners.skyscanner.net/travel-insight/">여행 인사이트</a></li>'
	+'                            <li class="clearfix"><a id="ss-footer-links-affiliate" href="http://en.business.skyscanner.net/">제휴사</a></li>'
	+'                        <li class="clearfix"><a id="ss-footer-links-whitelabel" href="https://en.business.skyscanner.net/en-gb/products/white-label/">화이트 라벨</a></li>'
	+'                        <li class="clearfix"><a id="ss-footer-links-api" href="https://en.business.skyscanner.net/en-gb/products/travel-apis/">여행 API</a></li>'
	+'                        <li class="clearfix"><a id="ss-footer-links-whitelabel" href="https://en.business.skyscanner.net/developers/">개발자</a></li>'
	+'                    </ul>'
	+'                </section>'
	+'            </div>'
	+'            <div class="tablet-right-column">'
	+'                <section id="company-block">'
	+'                    <h3>회사</h3>'
	+'                    <ul>'
	+'                        <li class="clearfix"><a href="/aboutskyscanner.aspx">스카이스캐너 소개</a></li>'
	+'                        <li class="clearfix"><a href="/companydetails.aspx">회사 정보</a></li>'
	+'                        <li class="clearfix"><a href="http://www.skyscanner.net/jobs">채용 정보</a></li>'
	+'                            <li class="clearfix"><a id="ss-footer-links-media" rel="nofollow" href="/media">미디어</a></li>'
	+'                            <li class="clearfix"><a id="news-link" href="/news/">여행 특징 및 뉴스</a></li>'
	+'                        <li class="clearfix"><a href="/cookiepolicy.aspx" id="ss-footer-links-cookie" rel="nofollow">쿠키 정책</a></li>'
	+'                        <li class="clearfix"><a href="/privacypolicy.aspx" id="ss-footer-links-privacy" rel="nofollow">개인정보처리방침</a></li>'
	+'                        <li class="clearfix"><a href="/termsofservice.aspx" id="ss-footer-links-terms">서비스 약관</a></li>'
	+'                            <li class="clearfix"><a href="/customer-charter" id="ss-footer-links-customer-charter">서비스 정책</a></li>'
	+'                    </ul>'
	+'                </section>'
	+'                <section id="help-block">'
	+'                    <h3>도움말</h3>'
	+'                    <ul>'
	+'                        <li class="clearfix"><a id="ss-footer-links-faq" target="_blank" href="https://hotelshelp.skyscanner.net/hc/ko/?skyDBG=2">도움말</a></li>'
	+'                    </ul>'
	+'                </section>'
	+'            </div>'
	+'        </div>'
	+'    </div>'
	+'<div class="wrap clearfix">'
	+'        <section class="footer-content-light">'
	+'                    <h3>전세계 사이트</h3>'
	+'                    <ul id="language-links" class="visible asian-lang-font-reset">'
	+'                            <li class="gb"><a href="https://www.skyscanner.net/hotels" rel="alternate"><span>Hotels</span></a></li>'
	+'                            <li class="au"><a href="https://www.skyscanner.com.au/hotels" rel="alternate"><span>Hotels</span></a></li>'
	+'                            <li class="cn"><a href="http://www.tianxun.com/hotels" rel="alternate"><span>酒店</span></a></li>'
	+'                            <li class="hk"><a href="https://www.skyscanner.com.hk/hotels" rel="alternate"><span>旅館</span></a></li>'
	+'                            <li class="in"><a href="https://www.skyscanner.co.in/hotels" rel="alternate"><span>Hotels</span></a></li>'
	+'                            <li class="id"><a href="https://www.skyscanner.co.id/hotel" rel="alternate"><span>Hotel</span></a></li>'
	+'                            <li class="jp"><a href="https://www.skyscanner.jp/hotels" rel="alternate"><span>ホテル</span></a></li>'
	+'                            <li class="my"><a href="https://www.skyscanner.com.my/hotels" rel="alternate"><span>Hotels</span></a></li>'
	+'                            <li class="mx"><a href="https://www.espanol.skyscanner.com/hotels" rel="alternate"><span>Hoteles</span></a></li>'
	+'                            <li class="nz"><a href="https://www.skyscanner.co.nz/hotels" rel="alternate"><span>Hotels</span></a></li>'
	+'                            <li class="ph"><a href="https://www.skyscanner.com.ph/hotels" rel="alternate"><span>Hotels</span></a></li>'
	+'                            <li class="ru"><a href="https://www.skyscanner.ru/hotels" rel="alternate"><span>Отели</span></a></li>'
	+'                            <li class="sg"><a href="https://www.skyscanner.com.sg/hotels" rel="alternate"><span>Hotels</span></a></li>'
	+'                            <li class="kr"><a href="https://www.skyscanner.co.kr/hotels" rel="alternate"><span>호텔</span></a></li>'
	+'                            <li class="tw"><a href="https://www.skyscanner.com.tw/hotels" rel="alternate"><span>旅館</span></a></li>'
	+'                            <li class="th"><a href="https://www.skyscanner.co.th/hotels" rel="alternate"><span>โรงแรม</span></a></li>'
	+'                            <li class="us"><a href="https://www.skyscanner.com/hotels" rel="alternate"><span>Hotels Deals in Popular Cities</span></a></li>'
	+'                            <li class="vn"><a href="https://www.skyscanner.com.vn/hotels" rel="alternate"><span>Khách sạn</span></a></li>'
	+'                    </ul>'
	+'<form action="/r/FooterPost/?clientController=HotelsESI&amp;clientAction=HotelsIndex" class="clearfix" id="footer-flag-nav-form" method="post">'
	+'	<select name="language-links-mini" id="language-links-mini">'
	+'                            <option value="" selected="selected">옵션을 선택하세요.</option>'
	+'                                <option value="https://www.skyscanner.net/hotels" class="gb">(GB)Hotels</option>'
	+'                                <option value="https://www.skyscanner.com.au/hotels" class="au">(AU)Hotels</option>'
	+'                                <option value="http://www.tianxun.com/hotels" class="cn">(CN)酒店</option>'
	+'                                <option value="https://www.skyscanner.com.hk/hotels" class="hk">(HK)旅館</option>'
	+'                                <option value="https://www.skyscanner.co.in/hotels" class="in">(IN)Hotels</option>'
	+'                                <option value="https://www.skyscanner.co.id/hotel" class="id">(ID)Hotel</option>'
	+'                                <option value="https://www.skyscanner.jp/hotels" class="jp">(JP)ホテル</option>'
	+'                                <option value="https://www.skyscanner.com.my/hotels" class="my">(MY)Hotels</option>'
	+'                                <option value="https://www.espanol.skyscanner.com/hotels" class="mx">(MX)Hoteles</option>'
	+'                                <option value="https://www.skyscanner.co.nz/hotels" class="nz">(NZ)Hotels</option>'
	+'                                <option value="https://www.skyscanner.com.ph/hotels" class="ph">(PH)Hotels</option>'
	+'                                <option value="https://www.skyscanner.ru/hotels" class="ru">(RU)Отели</option>'
	+'                                <option value="https://www.skyscanner.com.sg/hotels" class="sg">(SG)Hotels</option>'
	+'                                <option value="https://www.skyscanner.co.kr/hotels" class="kr">(KR)호텔</option>'
	+'                                <option value="https://www.skyscanner.com.tw/hotels" class="tw">(TW)旅館</option>'
	+'                                <option value="https://www.skyscanner.co.th/hotels" class="th">(TH)โรงแรม</option>'
	+'                                <option value="https://www.skyscanner.com/hotels" class="us">(US)Hotels Deals in Popular Cities</option>'
	+'                                <option value="https://www.skyscanner.com.vn/hotels" class="vn">(VN)Khách sạn</option>'
	+'                        </select>'
	+'                        <button id="flag-go" class="wc-button">'
	+'                            <span class="wc-button-text">이동</span>'
	+'                        </button>'
	+'</form>        </section>'
	+'    </div>'
	+'</footer>'
	},
	suggestions : (q,d)=>{
		var sgst = '<div class="autocomplete-suggestions" style="position: absolute; top: 370px; left: 427.5px; width: 524px; max-height: 350px; z-index: 9999; display: '+d+';">'
		var arr=[
			{c:q,p:q,type:'도시'},
			{c:q,p:'Mapo-gu',type:'구역'},
			{c:q,p:'웨스틴 조선 호텔',type:'호텔'},
		];
		$.each(arr,(i,val)=>{
		if(i=0){
			sgst+='<div class="autocomplete-suggestion" data-index="'+i+'">'
			+'	<p><strong>'+val.c+'</strong></p><small>'
			+'	<span class="location">'+val.c+'특별시, 대한민국</span>'
			+'	<span class="type">'+val.type+'</span></small>'
			+'	</div>'
		}else{
			sgst+='<div class="autocomplete-suggestion" data-index="'+i+'">'
			+'	<p>'+val.p+'</p>'
			+'	<small><span class="location"><strong>'+val.c+'</strong>, 서울특별시, 대한민국</span><span class="type">'+val.type+'</span></small>'
			+'	</div>'
			};
		});
		sgst+='<div class="autocomplete-see-more"><a>더 보기</a>'
		+'	</div>'
		+'</div>'
		return sgst;
	}
};

/* chooseResult UI */
ms.chooseResultUI={
	content : (search)=>{
		return '<div id="content-wrap" class="wrap clearfix" style="margin-top:0%">'
			+'<div id="did-you-mean" class="hotel-page-wrapper">'
			+'     <div id="criteria">'
			+'       <div class="clarification">"<strong>'+search+'</strong>" 검색에 가장 알맞은 항목을 선택하세요.</div>'
			+'     </div>'
			+'     <div id="chooseHt" class="dym-section dym-results">'
			+'     </div>'
			+' </div>'
			+'</div>';
	}
};

/* ms.hotelRecommandUI */
ms.hotelRecommandUI={
		
	content : (q,sdp,edp,na,nr)=>{
	return '<div id="content-wrap" class="wrap clearfix" style="margin-top:0%">'
	+ms.hotelRecommandUI.criteria(sdp,edp,na,nr)
	+'	<div id="results-list-layout" class="hotel-page-wrapper clearfix hotel-prices-complete  displayed-price-total" data-update_status="complete" data-pivot-lat="37.566535" data-pivot-lon="126.9779692" data-pivot-marker="//logos.skyscnr.com/sttc/hotels-front-end/common/img/static_map/city-center.gif" data-pivot-name="" data-results-count="" data-results-available="939" data-update-percent="100" data-last_update="">'
	+ms.hotelRecommandUI.filter()
	+ms.hotelRecommandUI.hotels()
	+'	</div>'
	+'</div>';
	
	},
	criteria : (sdp,edp,na,nr)=>{
		return '<div id="criteria" class="search_controls search_controls_criteria hotel-criteria hotel_layout springClean ">'
		+' <div id="criteria-header" class="hotel-criteria-header clearfix">'
		+'   <button id="new-search" class="hotel-cta-secondary" data-icon="searchBlue before" type="button">'
		+'   <span class="hotel-cta-text">수정하기</span>'
		+'   </button>'
		+'   <div class="hotel-criteria-destination">추천 호텔</div>'
		+'   <div class="hotel-criteria-date" data-icon="calendarSmall before">'
		+'     <span class="check-in">'+sdp+'</span> - <span class="check-out">'+edp+'</span>'
		+'   </div>'
		+'   <div class="hotel-criteria-occupancy" data-icon="adult before">'
		+'     <span class="guests">투숙객 '+na+'명</span>, <span class="rooms">객실 '+nr+'개</span>'
		+'   </div>'
		+' </div>'
		+' <div id="search-form-wrapper" class="hotel-search-form-wrapper springClean  ">'
		+' </div>'
		+'</div>';
	},
	
	filter : ()=>{
	var flt='<div id="results-extra" class="results-extra">'
	    +'<div id="inline-map" style="background-image: url(//maps.googleapis.com/maps/api/staticmap?size=252x196&amp;maptype=roadmap&amp;sensor=false&amp;language=ko-KR&amp;region=KR&amp;scale=2&amp;center=37.54450829805%2C127.00580611825&amp;visible=37.5751227791%2C127.0356872678%7C37.513893817%2C126.9759249687&amp;markers=scale%3A2%7Csize%3Amid%7Cicon%3Ahttp%3A%2F%2Fwww.skyscanner.net%2Fhotels%2Fstatic%2Fcommon%2Fimg%2Fstatic_map%2Fcity-center.gif%7C37.566535%2C126.9779692&amp;markers=scale%3A2%7Cicon%3Ahttp%3A%2F%2Fwww.skyscanner.net%2Fhotels%2Fstatic%2Fcommon%2Fimg%2Fstatic_map%2Fmap-pin.png%7C37.5683%2C126.9768%7C37.5645%2C126.9796%7C37.564%2C126.9857%7C37.5725%2C126.9843%7C37.5618%2C126.9871%7C37.5751%2C126.9812%7C37.5552%2C126.9759%7C37.5625%2C126.9926%7C37.5644%2C126.9958%7C37.5663%2C126.9963%7C37.5602%2C127.0025%7C37.5561%2C127.0055%7C37.5704%2C127.0088%7C37.5396%2C126.9965%7C37.5139%2C127.0357&amp;key=AIzaSyD1HNuACWxQJ296sPgoUreH-QnxGysv5cM&amp;signature=kt7gwL0JQ-PyxwMjK0zbbNtZAJg=)" alt="지도 위에서 보기" data-map-trigger="Static Map"></div>'
	    +'<div id="filter" class="listing">'
	    +'    <header class="listing-header">'
	    +'        <ul>'
	    +'            <li><h4>필터링 기준</h4></li>'
	    +'            <li><button id="btn-filter-cancel" class="hotel-cta-secondary">취소</button></li>'
	    +'            <li><button id="btn-filter-apply" class="hotel-cta-secondary">적용</button></li>'
	    +'        </ul>'
	    +'        <p class="accommodation-shown">'
	    +'            <button id="btn-deselect-all-mobile" class="btn-deselect-all">모든 필터 재설정</button>'
	    +'        </p>'
	    +'    </header>'
	    +'<button id="btn-deselect-all-desktop" class="btn-deselect-all">모든 필터 재설정</button>'
	    +'<div id="filter-inner" class="listing-inner">'
        +'<button id="btn-deselect-all-unknown" class="btn-deselect-all">모든 필터 재설정</button>';
	var arr =[
		{cate:'refund_policy',text:'환불 정책'},
		{cate:'breakfast',text:'아침 식사 여부'},
		{cate:'facility',text:'편의 시설'}
		];
		var t=0;
		var arr1=[{span:'1-100',amount:'2'},{span:'101-200',amount:'3'},{span:'201-300',amount:'4'},{span:'301-400',amount:'5'},{span:'401-500',amount:'8'}];
		var arr2=[{span:'신촌',amount:'1'},{span:'홍대',amount:'4'},{span:'여의도',amount:'2'},{span:'강남',amount:'3'},{span:'용산',amount:'12'},{span:'이태원',amount:'10'}];
		var arr3=[{span:'취소 불가',amount:'4'},{span:'반만 환불',amount:'5'},{span:'취소 가능',amount:'5'}];
		$.each(arr,(i,val)=>{
		var temp="";
		if(i==0){temp=arr1}else if(i==1){temp=arr2}else{temp=arr3};
		flt+='<dl id="filter-'+val.cate+'" class="expanded">'
			+'	<dt><a data-icon="upBlue after" href="javascript:void(0)">'+val.text+'</a></dt>'
			+'		<dd>'
			+'			<ol>'
		var dlid='filter-'+val.cate;
		$.each(temp,(i,val)=>{
		flt+='<li id="filter_PR_BK_'+i+'">'
	                            +'<label for="'+dlid+'-input-PR_BK_'+i+'">'
	                        +'<span class="filter-control">'
	                        +' <input id="'+dlid+'-input-PR_BK_'+i+'" type="checkbox" name="'+dlid+'" value="PR_BK_'+i+'">'
	                        +'</span>'
	                        +'    <span class="filter-meta-range">'
	                        +'        <span>'+val.span+'</span>'
	                        +'        <span class="filter-meta-amount"> ('+val.amount+')</span>'
	                        +'    </span>'
	                        +'</label>'
	                        +'</li>'
		});
		flt+='</ol></dd></dl>'
		});
		flt+='</div></div></div>'
		return flt;
	},
	hotels : ()=>{
			var hts= '<div class="results-list-wrapper">'
			+'<div id="progress_top" class="hotel_progress hidden">'
			+'   <div class="track">'
			+'       <p class="bar" style="width: 100%;"></p>'
			+'   </div>'
			+'</div>'
			+''
			+'<div id="sort-and-view-wrapper" class="sort-and-view-wrapper">'
			+'   <ol class="sort-and-view">'
			+'       <li id="tab_filter" class="tab_item">'
			+'           <button class="hotel-cta-secondary" id="btn-filter">필터</button>'
			+'       </li>'
			+'       <li id="tab_sort" class="tab_item">'
			+'           <button class="hotel-cta-secondary" id="btn-sort">정렬</button>'
			+'           <div id="sort" class="listing hidden">'
			+'             <header class="listing-header">'
			+'               <ul>'
			+'                 <li><h4>정렬 기준</h4></li>'
			+'                 <li><button id="btn-sort-cancel" class="hotel-cta-secondary">취소</button></li>'
			+'                 <li><button id="btn-sort-apply" class="hotel-cta-secondary">적용</button></li>'
			+'               </ul>'
			+'             </header>'
			+'             <div id="sort-inner" class="listing-inner">'
			+'               <ol>'
			;
			var a=[
				{l:'hotel_name',p:'이름 순서대로'},
				{l:'price desc',p:'가격(높은 순서대로)'},
				{l:'price asc',p:'가격(낮은 순서대로)'},
				{l:'rate desc',p:'투숙객 별점'},
				];
			$.each(a,(i,v)=>{
				if(i=0){
					hts+='                   <li class="sort-item_'+v.l+' selected">'
						+'                     <label for="sort-'+v.l+'" class="sort-control-label">'
						+'                       <input id="sort-'+v.l+'" class="sort-control" type="radio" name="sort" value="'+v.l+'" checked="checked">'
						+'                       '+v.p+''
						+'                     </label>'
						+'                   </li>'
				}else{
					hts+='                   <li class="sort-item_'+v.l+'">'
					+'                     <label for="sort-'+v.l+'" class="sort-control-label">'
					+'                       <input id="sort-'+v.l+'" class="sort-control" type="radio" name="sort" value="'+v.l+'">'
					+'                       '+v.p+''
					+'                     </label>'
					+'                   </li>'
				};
			});
			hts+='               </ol>'
			+'             </div>'
			+'           </div>'
			+'           <label id="lbl-hotel-sort" for="hotel-sort">정렬 기준</label>'
			+'           <select id="hotel-sort" name="sort">'
			;
			var b=[
				{l:'hotel_name',p:'이름 순서대로'},
				{l:'price desc',p:'가격(높은 순서대로)'},
				{l:'price asc',p:'가격(낮은 순서대로)'},
				{l:'rate desc',p:'투숙객 별점'},
				];
			$.each(b,(i,v)=>{
				if(i=0){
					hts+='<option class="sort-item_'+v.l+'" value="'+v.l+'" selected="">'+v.p+'</option>'
				}else{
					hts+='<option class="sort-item_'+v.l+'" value="'+v.l+'">'+v.p+'</option>'
				};
			});
			hts+='</select>'
			+'       </li>'
			+'       <li id="tab_map" class="tab_item map map-trigger">'
			+'           <button data-icon="view-map before" class="hotel-cta-secondary" id="btn-map"><span class="label">지도</span></button>'
			+'       </li>'
			+'   </ol>'
			+'</div>'
			+''
			+'<div class="price-description-msg">'
			+'   <div class="price-per-room-msg" id="price-description-msg-total">'
			+'       1박, 투숙객 1명, 객실 1개 기준 총 가격'
			+'   </div>'
			+'   <div class="price-per-room-msg" id="price-description-msg-room-night">'
			+'       투숙객 1명에 대한 객실별 1박 가격'
			+'   </div>'
			+'<div class="price-policy-msg">세금 및 수수료 모두 포함(지방세 제외)</div>'
			+'</div>'
			+''
			+'<div id="results-list" class="results-list" data-urlupdate="/hotels/frontend/searchresults/update" data-urlgallery="/hotels/frontend/searchresults/gallery" data-urlmap="/hotels/frontend/searchresults/map" data-lazyimg="//logos.skyscnr.com/sttc/hotels-front-end/common/img/spinner-tide.gif">'
			+'</div>'
			+'</div>';
			return hts;
		},
	pgnav : (q,count)=>{
	return '<nav class="pagination ">'
	+' <div class="pagination_inner">'
	+' <p class="pagination-summary">'
	+' <strong>'+q+'</strong>에 대한 검색 결과 <strong>'+count+'</strong>개,'
	+' 정렬 기준'
	+' <strong>가장 인기있는 내용</strong>'
	+' </p>'
	+' <ol class="hbox">'
	+' <li class="btn-prev"><button data-page="">&nbsp;</button></li>'
	+' <li data-page="1" class="selected">1</li>'
	+' <li><button data-page="2">2</button></li>'
	+' <li><button data-page="3">3</button></li>'
	+' <li>…</li>'
	+' <li><button data-page="5">5</button></li>'
	+' <li class="btn-next"><button data-page="2">&nbsp;</button></li>'
	+' </ol>'
	+' </div>'
	+' </nav>' 
	}
};

ms.paymentUI={
	payModal : ()=>{
		return 	'<!--Modal-->'
	      +'<div class="modal fade" id="payModal" role="dialog">'
	      +'<div class="modal-dialog">'
	      +'<!--Modal content-->'
	      +'<div class="modal-content" >'
	      +'      <div class="modal-header" style="padding:35px 50px;">'
	      +'      <button type="button" class="close" data-dismiss="modal">&times;</button>'                
	      +'      	<b style="font-size:30px;">호텔 예약 하기</b>'
	      +'      </div>'
	      +'      <div class="modal-body" style="padding:40px 25px;">'
	      +'        <form role="form">'
	      +'		<input id="rht" type="hidden" value="">'
	      +'          <div class="form-group">'
	      +'            <label for="usrMail"><span class="glyphicon glyphicon-envelope"></span> User Email</label>'
	      +'            <input type="text" class="form-control" id="userMail" placeholder="Enter email">'
	      +'          </div>'
	      +'          <div class="form-group">'
	      +'            <label for="pw"><span class="glyphicon glyphicon-lock"></span> Password</label>'
	      +'            <input type="password" class="form-control" id="pw" placeholder="Enter password">'
	      +'          </div>'
	      +'          <button id="payHotelBtn" type="submit" class="btn btn-success btn-block" data-dismiss="modal"><span class="glyphicon glyphicon-home"></span>예  약  하  기</button>'
	      +'        </form>'
	      +'      </div>'
	      +'      <div class="modal-footer" style="">'
	      +'      </div>'
	      +'    </div>'
	}
};
/* session */
ms.session={
	init:(x)=>{
	sessionStorage.setItem('x',x);
	sessionStorage.setItem('j',x+'/resources/js');
	sessionStorage.setItem('c',x+'/resources/css');
	sessionStorage.setItem('i',x+'/resources/img');
	},
	getPath : (x)=>{
	return sessionStorage.getItem(x);
	}
};
var $$=function(x){return ms.session.getPath(x)};