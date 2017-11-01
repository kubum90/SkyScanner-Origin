
var skyAir=skyAir || {};

skyAir.common=(()=>{
   var init=(ctx)=>{
	   var n,num;
	   skyAir.session.init(ctx);
	   
	   window.onload = function(){
	      $('#home-container').removeClass('#home-container').addClass('.homecontent').css("background-image", "url(//content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=2000px:599px&quality=80)");
	      $('#first').removeClass('#first').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/853dd1ece19afb1f46dabe8485021767/GettyImages-564760601.jpg?resize=500px:600px&quality=50)");
	      $('#two').removeClass('#two').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/a60a89126ed3f927d123c815b610298d/GettyImages-475335963.jpg?resize=600px:600px&quality=50)");
	      $('#three').removeClass('#three').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/bc42cc80dd1447615ee441e2020cbe2c/GettyImages-126509194.jpg?resize=450px:603px&quality=50)");
	      $('#ssssssss').css("background-image","url(https://css.skyscnr.com/inspiration/static/embeddableMap/svg_map_20170525.svg)"); 
	      $('#saleone').removeClass('#saleone').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/3d13492ebf1c1b0ac415bea8e172b960/GettyImages-505532917.jpg?resize=500px:600px&quality=50)");
	      $('#saletwo').removeClass('#saletwo').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/7adba3a46af3ca29695f96937d19fcf1/GettyImages-149127892.jpg?resize=500px:600px&quality=50)");
	      $('#saleth').removeClass('#saleth').addClass('.image hi-res-image-loaded').css("background-image","url(https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg?resize=500px:600px&quality=50)");
	  }
      onCreate();
      $('#airli').click(()=>{
    	  if(sessionStorage.getItem('email')===null){
	
	}else{
	$('#loginBu').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','account').removeAttr('data-toggle','').removeAttr('data-target','').text('로그아웃');	
	}
    	  
  	  $('#account').click(()=>{
  	  sessionStorage.clear();
  	  location.reload();
  	  });
});
      $('#skhot').click(()=>{
    	  $('body').empty();
        	  ms.common.init(ctx);
      });
      $('#adminhi').click(e=>{
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
    	  if(sessionStorage.getItem('email')===null){
	
	}else{
	$('#loginBu').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','account').removeAttr('data-toggle','').removeAttr('data-target','').text('로그아웃');
	
	}
    	  $('#account').click(()=>{
    	  sessionStorage.clear();
    	  location.reload();
    	  });
      });
      $('.bpk-text').click(e=>{
    	 
    	 if(sessionStorage.getItem('depart')!=null){
    	 if(sessionStorage.getItem('ret')!=null){
    	 if(sessionStorage.getItem('n')!=null){
    	 $('body').empty();
    	 skyAir.ticket.init(ctx);
    	 sessionStorage.removeItem('depart');
    	 sessionStorage.removeItem('ret');
    	 sessionStorage.removeItem('n');
    	 e.preventDefault();
    	 }
    	 if(sessionStorage.getItem('n')===null){
    	 
    	 }
    	 }
    	 if(sessionStorage.getItem('ret')===null){
    	 
    	 }
    	 }
    	 if(sessionStorage.getItem('depart')===null){
    	 
    	 }
    	  if(sessionStorage.getItem('email')===null){
				
			}else{
				$('#loginBut').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','account').removeAttr('data-toggle','').removeAttr('data-target','').text('로그아웃');		
			}
    	 
      });
     

      $('#loginBtn').click(e=>{
      	
      	
      	var i = $('#usrname').val();
      	var p = $('#psw').val();
      	e.preventDefault();
          $.ajax({
          	url :ctx+'/login',
              method : 'post',
              dataType:'json',
              data : JSON.stringify({
                	  'email' : i,
                	  'password' : p
              }),
              contentType : 'application/json',
              success : (data)=>{
              	
              	
              	if(data.bean.email===null){
              	
              	}else{
              	
              	sessionStorage.setItem('email',data.bean.email);
              	
              	$('#loginBu').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','account').removeAttr('data-toggle','').removeAttr('data-target','').text('로그아웃');
              
              	}     
              	$('#account').click(()=>{
                
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
                 /*alert('로그인 할 사람 패스워드: '+data.password);*/
              },
              error : (x,s,m)=>{
                 alert('글 게시시 에러발생'+m+'\n x에러: '+x+'\n s에러'+s);
              }
           });
      });
      
      $('#signup').click(()=>{
      	
      	var signup='<div class="modal-body" style="padding:40px 50px;">'
      	+'<a style="margin-left:100%;" class="clos" data-dismiss="modal">×</a>'
  	+'        <form role="form">'
  	+'          <div class="form-group">'
  	+'            <label for="usrname"><span class="glyphicon glyphicon-envelope"></span> E-MAIL</label>'
  	+'            <input type="text" class="form-control" id="usrname" placeholder="Enter email">'
  	+'          </div>'
  	+'          <div class="form-group">'
  	+'            <label for="psw"><span class="glyphicon glyphicon-lock"></span> Password</label>'
  	+'            <input type="text" class="form-control" id="psw" placeholder="Enter password">'
  	+'          </div>'
  	+'          <button id="goJoin" type="submit" class="btn btn-success btn-block" data-dismiss="modal"><span class="glyphicon glyphicon-off"></span> JOIN</button>'
  	+'    <br />'
  	+'        </form>'
  	+'      </div>'
  	+'      <div class="modal-footer" style="">'
  	+'      </div>';
      	$('.modal-content').empty();
      	$('.modal-content').append(signup);	
      	$('.clos').click(()=>{
      	location.reload();
      	});
      
      	$('#goJoin').click(e=>{
    	e.preventDefault();
    	
    	var _email = $('#usrname').val();
    	var _pw = $('#psw').val();
    	$.ajax({
    	url:ctx+'/join',
    	method:'post',
    	dataType:'json',
    	data:JSON.stringify({
                	  'email' : _email,
                  	  'password' : _pw
                }),
                contentType : 'application/json',
                success : (data)=>{
                	location.reload();
                	
            
                   
                },
                error : (x,s,m)=>{
                   alert('가입 에러'+m+'\n x에러: '+x+'\n s에러'+s);
                }
    		});
    	});
    	
      });
      
     
   };
	   var onCreate=()=>{
	   setContentView();
	  
	   
	   $('#pagewrap').append(skyAir.Head.popover());
	    $('#js-trad-cabin-class-travellers-toggle').click(()=>{
	    	   $('#popover')
	    	   .removeClass('popover pax-cabin-class hidden')
	    	   .addClass('.popover pax-cabin-class')
	    	   
	       });
	    $('.popover-hide').click(()=>{
	    	$('#popover')
	    	.removeClass('popover pax-cabin-class')
	    	.addClass('popover pax-cabin-class hidden')
	    });
	  
	
	   $('#js-origin-input').click(e=>{
	    e.preventDefault();
	    $.ajax({
	        url :$$('x')+'/search',
	        method : 'post',
	        dataType:'json',
	        contentType : 'application/json',
	        success : (data)=>{
	        	alert('항공리스트'+data.list);
	        }
	     
	     });
	    $(document).ready(()=>{
	    	    $( "#js-origin-input" ).autocomplete({
	    	      source: data.list
	    	    });
	    	  } );
	});
	    $( function() {
	    	    var availableTags = [
	    	      "인천공항(ICN)",
	    	      "미국(US)",
	    	      "일본(JP)",
	    	      "중국(CN)",
	    	      "스위스(CH)"
	    	    ];
	    	    $( "#js-destination-input" ).autocomplete({
	    	      source: availableTags
	    	    });
	    	  } );
	
	$('#js-depart-input').datepicker({
	dayNames:["일", "월", "화", "수", "목", "금", "토"],
	dayNamesMin:["일", "월", "화", "수", "목", "금", "토"],
	monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	dateFormat:"yy. mm. dd.",
	minDate:"+0d",
	onClose: function(selectedDate) {
	if($("#js-return-input").val() < selectedDate){
	$("#js-depart-input").datepicker( "option", "selectedDate", selectedDate );
	};
	sessionStorage.setItem('depart',$('#js-depart-input').val());
	sessionStorage.setItem('depart1',$('#js-depart-input').val());
	}
	});
	$('#js-return-input').datepicker({
	dayNames:["일", "월", "화", "수", "목", "금", "토"],
	dayNamesMin:["일", "월", "화", "수", "목", "금", "토"],
	monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	dateFormat:"yy. mm. dd.",
	minDate:"+1d",
	onClose: function(selectedDate) {
	if($("#js-depart-input").val() > selectedDate){
	$("#js-return-input").datepicker( "option", "selectedDate", selectedDate+1 );
	};
	sessionStorage.setItem('ret',$('#js-return-input').val());
	sessionStorage.setItem('ret1',$('#js-return-input').val());
	            }
	});
	
	    $('#js-places-toggle').click(()=>{
	    	var temp;
	    	temp=$('#js-origin-input').val();
	    	$('#js-origin-input').val($('#js-destination-input').val());
	    	$('#js-destination-input').val(temp);
	    });
	  
	    $('#increment').click(()=>{
	        var n = $('#increment').index(this);
	        var num = $("#js-adults:eq("+n+")").val();
	        if(num<8){
	        num = $("#js-adults:eq("+n+")").val(num*1+1);
	        sessionStorage.setItem('n', $("#js-adults:eq("+n+")").val());
	        }
	    });
	    $('#decrement').click(()=>{
	    	var n = $('#decrement').index(this);
	        var num = $("#js-adults:eq("+n+")").val();
	        if(num>0){
	        num = $("#js-adults:eq("+n+")").val(num*1-1);
	        sessionStorage.setItem('n', $("#js-adults:eq("+n+")").val());
	        }
	    });

	   };
   var setContentView=()=>{
       $('title').append('스카이스캐너-항공권,호텔,렌트카 최저가 비교 예약 ');
       $('body').append('<div id="pagewrap" class="clearfix">'
             +'<div class="wrap h1-heading">'
             +'</div>'
             +'<link rel="stylesheet" href="https://js.skyscnr.com/sttc/oc-registry/components/header/0.4.42/build/static/css/main.dc7e0f67.css"><script>;</script>' 
             +'<div id="header-root"><header class="Header-1_1R8" data-reactroot="" data-reactid="1" data-react-checksum="451503947"><div class="Header__wrapper-2KwQq clearfix wrap" data-reactid="2"><nav class="SecondaryNav-3MUje" data-reactid="3"><ul class="SecondaryNav__list-1lEyp" data-reactid="4"><li class="SecondaryNav__help-19EmT SecondaryNav__item-25SJ- SecondaryNav__item--small-_0Qtf" data-reactid="5"><a class="bpk-link-143_C" href="https://help.skyscanner.net/hc/ko" target="_blank" id="ss-header-links-faq" data-reactid="6">도움말</a></li><li class="SecondaryNav__culture-selector-TeNdM culture-info SecondaryNav__item-25SJ-" id="culture-info" data-reactid="7"><button type="button" class="bpk-button-30cpF bpk-button--secondary-lyMj0" data-reactid="8"><img class="SecondaryNav__country-flag-2Bn20" src="https://images.skyscnr.com/images/country/flag/header/kr.png" alt="KR" title="KR" data-reactid="9"/><!-- react-text: 10 --> <!-- /react-text --><!-- react-text: 11 -->ko-KR<!-- /react-text --><!-- react-text: 12 --> <!-- /react-text --><!-- react-text: 13 -->₩ KRW<!-- /react-text --></button></li><li class="SecondaryNav__account-2N-Uf SecondaryNav__item-25SJ-" id="login-button-container" data-reactid="14"><button id="loginBu" type="button" class="bpk-button-30cpF bpk-button--secondary-lyMj0" data-reactid="15"" data-toggle="modal" data-target="#myModal">로그인</button></li><li class="SecondaryNav__menu-393l9 toggle-touch-menu SecondaryNav__item-25SJ-" id="toggle-touch-menu" data-reactid="17"><button class="SecondaryNav__menu-button-30qZJ" data-reactid="18"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="width:1.5rem;height:1.5rem;" class="SecondaryNav__menu-icon-2RdSm bpk-icon--rtl-support-6bwD-" data-reactid="19"><path d="M20 8H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zm1 4c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1zm0 5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1z" data-reactid="20"></path></svg><span class="visually-hidden" data-reactid="21">탐색 메뉴</span></button></li></ul></nav><div id="identity" class="Header__logo-wrapper-26Akq" data-reactid="22"><a class="Logo-38wHj" data-reactid="23"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211 36" class="bpk-logo bpk-logo__inline Logo__svg-l3cXE" data-reactid="24"><path d="M70.187 14.115a.577.577 0 0 1-.765.365c-.969-.373-2.065-.64-3.09-.64-1.764 0-3.426.53-3.426 2.296 0 .954.53 1.449 2.227 1.98l1.236.387c2.473.776 3.533 1.907 3.533 4.096 0 3.778-2.65 6.358-7.452 6.358-1.887 0-3.501-.296-4.87-.773-.333-.116-.493-.486-.394-.825l.565-1.96c.094-.325.456-.479.77-.353 1.237.5 2.608.839 3.822.839 2.156 0 3.673-.742 3.673-2.474 0-1.024-.706-1.411-2.296-1.907l-1.343-.423c-2.367-.777-3.427-2.19-3.427-4.45 0-3.851 3.216-5.933 7.454-5.933 1.275 0 2.732.285 3.947.702.335.114.497.486.394.824l-.558 1.891zm8.347-10.082c.33 0 .575.3.514.623l-2.6 13.436c2.45-1.787 4.59-3.887 6.48-6.324a1.27 1.27 0 0 1 1.007-.494h2.828c.272 0 .423.307.267.53-1.859 2.621-3.986 5.04-6.237 6.993l3.582 9.017a.434.434 0 0 1-.402.592h-3.005a.915.915 0 0 1-.854-.595l-2.465-6.717c-.662.446-1.346.859-2.049 1.237l-1.046 5.451a.772.772 0 0 1-.753.624h-2.582a.523.523 0 0 1-.512-.624l4.49-23.126a.768.768 0 0 1 .756-.624h2.581v.001zm13.213 7.24c.33 0 .577.302.514.626l-1.75 9.019c-.142.67-.283 1.518-.283 2.332 0 1.058.6 1.766 2.013 1.766 1.378 0 3.001-.601 4.203-1.73l2.245-11.388a.774.774 0 0 1 .756-.624h2.582c.329 0 .575.3.511.625l-2.314 11.88c-.283 1.377-.6 2.931-.882 4.168C97.999 33.528 95.456 36 90.369 36c-1.12 0-2.235-.14-3.205-.4a.687.687 0 0 1-.494-.818l.442-1.804a.616.616 0 0 1 .738-.461c.733.175 1.571.304 2.343.304 3.005 0 4.768-1.272 5.404-4.732l.25-1.308c-1.307 1.13-3.252 1.872-5.087 1.872-2.968 0-4.557-1.483-4.557-3.85 0-1.413.283-2.968.6-4.59l1.61-8.313a.773.773 0 0 1 .755-.626h2.579v-.001zm23.306 2.855a.577.577 0 0 1-.765.366c-.968-.374-2.066-.642-3.09-.642-1.764 0-3.424.532-3.424 2.297 0 .954.527 1.449 2.223 1.98l1.237.387c2.472.776 3.533 1.907 3.533 4.097 0 3.778-2.65 6.358-7.452 6.358-1.885 0-3.502-.297-4.868-.774-.334-.116-.494-.486-.397-.825l.567-1.96c.093-.325.457-.479.77-.353 1.236.5 2.607.839 3.82.839 2.155 0 3.674-.742 3.674-2.474 0-1.024-.705-1.411-2.294-1.907l-1.346-.423c-2.365-.777-3.424-2.19-3.424-4.45 0-3.851 3.214-5.933 7.454-5.933 1.275 0 2.73.285 3.946.702.332.114.494.486.393.824l-.557 1.891zm15.075.387a.526.526 0 0 1-.735.323c-.93-.425-1.982-.668-3.181-.668-3.743 0-6.007 3.216-6.007 7.313.036 2.439.92 4.063 3.676 4.098 1.22.03 2.493-.217 3.644-.613.282-.096.59.101.556.396l-.243 2.058a1.044 1.044 0 0 1-.692.868c-1.28.445-2.675.681-4.254.681-4.593 0-6.747-2.613-6.747-6.924 0-6.108 3.462-11.335 10.101-11.335 1.61 0 2.97.3 4.075.775.343.151.52.533.415.893l-.608 2.135zm2.814-1.969a.92.92 0 0 1 .618-.85c1.692-.565 3.828-.984 5.685-.984 3.531 0 5.827 1.059 5.827 4.132 0 .635-.106 1.413-.281 2.26l-1.377 7.24c-.213 1.087-.108 1.695.362 1.933.288.145.53.422.464.739l-.207 1.017c-.08.392-.377.716-.769.8a6.464 6.464 0 0 1-1.264.14c-1.592 0-2.367-.743-2.472-2.05h-.106c-1.165 1.272-2.93 2.05-5.017 2.05-3.001 0-4.943-1.518-4.943-4.556 0-4.098 3.25-7.03 10.526-7.03h.955c.104-.53.174-1.06.174-1.448 0-1.413-.707-2.05-2.93-2.05-1.415 0-3.112.338-4.713.883a.432.432 0 0 1-.572-.421l.04-1.805zm6.762 7.595c-3.567 0-6.182 1.165-6.182 3.743 0 1.132.673 1.838 2.191 1.838 1.447 0 2.967-.742 3.92-1.731l.775-3.85h-.704zm12.01-8.867c.341 0 .608.293.574.634l-.115 1.204h.034c1.73-1.449 3.957-2.4 6.111-2.4 2.685 0 4.45 1.552 4.45 4.026 0 1.2-.175 2.188-.387 3.319l-1.859 9.726a.774.774 0 0 1-.754.624h-2.582a.521.521 0 0 1-.512-.624l1.714-8.879c.178-.882.32-1.872.32-2.472 0-1.306-.708-1.977-2.192-1.977-1.623 0-3.461.845-4.767 2.082l-2.142 11.246a.77.77 0 0 1-.752.624h-2.581a.523.523 0 0 1-.516-.624l3.045-15.884a.768.768 0 0 1 .752-.625h2.159zm17.485 0a.58.58 0 0 1 .575.634l-.117 1.204h.035c1.731-1.449 3.955-2.4 6.109-2.4 2.686 0 4.452 1.552 4.452 4.026 0 1.2-.178 2.188-.388 3.319l-1.86 9.726a.772.772 0 0 1-.754.624h-2.582a.525.525 0 0 1-.515-.624l1.72-8.879c.176-.882.317-1.872.317-2.472 0-1.306-.707-1.977-2.191-1.977-1.624 0-3.46.845-4.768 2.082l-2.14 11.246a.771.771 0 0 1-.755.624h-2.582a.525.525 0 0 1-.516-.624l3.047-15.884a.768.768 0 0 1 .755-.625h2.158zm16.53 10.208c-.06.517-.05 1.04.035 1.555.318 1.73 1.66 2.578 3.92 2.578 1.578 0 3.234-.243 4.689-.706.28-.089.57.126.532.418l-.235 1.955c-.046.382-.289.721-.654.849-1.6.559-3.41.84-5.11.84-4.873 0-7.24-2.084-7.24-6.816 0-4.099 1.34-7.877 4.239-9.89 1.448-1.026 3.25-1.553 5.51-1.553 4.097 0 5.898 2.328 5.898 5.792 0 1.193-.142 2.781-.471 4.388-.073.355-.402.59-.764.59h-10.349zm7.416-2.79c.18-.668.275-1.357.283-2.049 0-1.59-.705-2.72-2.506-2.72-2.614 0-4.205 1.908-4.769 4.769h6.992zm10.495-7.418a.59.59 0 0 1 .588.634l-.098 1.38h.07c1.308-1.59 3.217-2.402 5.017-2.402a7.2 7.2 0 0 1 .514.016c.337.021.527.376.426.697l-.715 2.285c-.113.365-.468.597-.85.613-1.784.077-3.508.587-4.674 1.406l-2.28 11.88a.773.773 0 0 1-.756.624h-2.58a.524.524 0 0 1-.515-.624l3.046-15.884a.77.77 0 0 1 .752-.625h2.055zM28.247 14.713c4.78-4.781 11.05-7.158 17.318-7.152l.05.001c.57 1.336.901 2.763.978 4.214a20.283 20.283 0 0 0-1-.025l-.028.002-.026-.002a20.127 20.127 0 0 0-14.322 5.933 20.126 20.126 0 0 0-5.934 14.321l.003.072H21.09c-.017-6.282 2.361-12.572 7.156-17.365l.001.001zm24.843 8.02c.03-.329.046-.662.046-.999 0-1.604-.369-3.12-1.023-4.473a16.159 16.159 0 0 0-6.548-1.371 16.06 16.06 0 0 0-11.43 4.715 16.063 16.063 0 0 0-4.716 11.473h4.21c-.018-3.08 1.132-6.162 3.475-8.505a11.87 11.87 0 0 1 8.25-3.473v-.003l.211.002.213-.002v.003c2.597.038 5.183.913 7.312 2.633zm-42.019-4.917l-.002-.017.002.017zm40.225 8.491a8.011 8.011 0 0 0-5.518-2.353v.002l-.213-.002-.212.002v-.002a8.014 8.014 0 0 0-5.517 2.353 8.02 8.02 0 0 0-2.35 5.772h4.04c.265-1.35.51-2.032 1.28-2.803a3.83 3.83 0 0 1 2.76-1.11 3.83 3.83 0 0 1 2.76 1.11c.263.264.473.558.642.869a10.095 10.095 0 0 0 2.851-3.258 7.998 7.998 0 0 0-.523-.58zm-34.17 5.7c0-14.844 11.382-27.026 25.895-28.301A12.408 12.408 0 0 0 34.164 0c-6.382 0-11.64 4.8-12.368 10.985a7.013 7.013 0 0 0-3.737-1.074c-3.89 0-7.432 3.892-6.988 7.905a7.562 7.562 0 1 0-4.603 14.183c.287.05.582.08.883.08h9.775v-.074.002zM11.06 17.718l.009.08-.009-.08z" data-reactid="25"></path></svg><span class="visually-hidden" data-reactid="26">Skyscanner</span></a></div><nav id="PrimaryNav" class="PrimaryNav-2IMAs" data-reactid="27"><ul class="PrimaryNav__list-16-_W" data-reactid="28"><li class="HeaderTab-2DhXr" data-reactid="29"><a id="airli" class="js-header-tab HeaderTab__link-o2SAi HeaderTab__link--active-1vNee" data-analytics-name="flights" data-reactid="30"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="width:1.5rem;height:1.5rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--active-30Ao7 HeaderTab__icon--mobile-1srLF bpk-icon--rtl-support-6bwD-" data-reactid="31"><path d="M17.8 20.1l.6-.6c.2-.2.3-.5.2-.8l-2.2-9.3 4.1-4.2c.5-.5.5-1.3 0-1.9-.5-.5-1.4-.5-1.9 0l-4.2 4.1-9.1-2c-.3-.1-.6 0-.8.2l-.6.6c-.4.4-.3 1.1.2 1.4l7.2 3.2-3.7 3.7-2.3-.8c-.3-.1-.6 0-.8.2L3 15.2l4.2 1.6L8.8 21l1.3-1.5c.2-.2.3-.6.2-.8l-.8-2.3 3.7-3.7 3.2 7.2c.3.5 1 .6 1.4.2z" data-reactid="32"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="width:1.125rem;height:1.125rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--active-30Ao7 HeaderTab__icon--desktop-1e6kR bpk-icon--rtl-support-6bwD-" data-reactid="33"><path d="M17.8 20.1l.6-.6c.2-.2.3-.5.2-.8l-2.2-9.3 4.1-4.2c.5-.5.5-1.3 0-1.9-.5-.5-1.4-.5-1.9 0l-4.2 4.1-9.1-2c-.3-.1-.6 0-.8.2l-.6.6c-.4.4-.3 1.1.2 1.4l7.2 3.2-3.7 3.7-2.3-.8c-.3-.1-.6 0-.8.2L3 15.2l4.2 1.6L8.8 21l1.3-1.5c.2-.2.3-.6.2-.8l-.8-2.3 3.7-3.7 3.2 7.2c.3.5 1 .6 1.4.2z" data-reactid="34"></path></svg><span class="HeaderTab__text-ZVTEX" data-reactid="35"><!-- react-text: 36 --> <!-- /react-text --><!-- react-text: 37 -->항공권<!-- /react-text --></span></a></li><li class="HeaderTab-2DhXr" data-reactid="38"><a id="skhot" class="js-header-tab HeaderTab__link-o2SAi" data-analytics-name="hotels" data-reactid="39"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="width:1.5rem;height:1.5rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--mobile-1srLF bpk-icon--rtl-support-6bwD-" data-reactid="40"><path d="M8 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m11-3.9h-6c-1.1 0-2 .9-2 2V12h10v-1.9c0-1.1-.9-2-2-2m3 5.9c0-.6-.4-1-1-1H5V5.5C5 4.7 4.3 4 3.5 4S2 4.7 2 5.5v13c0 .8.7 1.5 1.5 1.5S5 19.3 5 18.5V16h14v2.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V14z" data-reactid="41"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="width:1.125rem;height:1.125rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--desktop-1e6kR bpk-icon--rtl-support-6bwD-" data-reactid="42"><path d="M8 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m11-3.9h-6c-1.1 0-2 .9-2 2V12h10v-1.9c0-1.1-.9-2-2-2m3 5.9c0-.6-.4-1-1-1H5V5.5C5 4.7 4.3 4 3.5 4S2 4.7 2 5.5v13c0 .8.7 1.5 1.5 1.5S5 19.3 5 18.5V16h14v2.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V14z" data-reactid="43"></path></svg><span class="HeaderTab__text-ZVTEX" data-reactid="44"><!-- react-text: 45 --> <!-- /react-text --><!-- react-text: 46 -->호텔<!-- /react-text --></span></a></li><li class="HeaderTab-2DhXr" data-reactid="47"><a id="adminhi" class="js-header-tab HeaderTab__link-o2SAi" data-analytics-name="carhire" data-reactid="48"><span class="HeaderTab__text-ZVTEX" data-reactid="53"><!-- react-text: 54 --> <!-- /react-text --><!-- react-text: 55 -->관리자<!-- /react-text --></span></a></li></ul></nav></div></header></div>'
             +'<div id="trip-shortlist" class="hidden">'
             +'</div>'
             +'<div id="container-trip-planning-refactor" class="trip-planning hidden">'
             +'</div>'   
             +'<div id="content-wrap" class="wrap clearfix" style="margin-top:0%;">'
             +skyAir.Head.navbar()
             +skyAir.Head.trip()
             +skyAir.Head.News()
             +'</div>'
             +skyAir.Head.footer()
             +'</div>'
             
       );
 
   };
   return {init : init};
})();
skyAir.Head={
      navbar:()=>{
         return '<div id="home-container" class="homecontent" style="background-image: url(https://content.skyscnr.com/6bf5a29ce130132f28e912434f295b76/canada-lake-feb.jpg?crop=200px:45px&amp;quality=80)">'
         +'    <div class="wrap-homecontent">'
         +'      <div id="searchcontrol">'
         +'<section id="js-search-controls-container" class="search-controls one-line-search-controls opaque-on-desktop">'
         +'        <form action="#" class="clearfix">'
         +'<section id="js-trip-type" class="search-controls-trip-type multi-city-enabled"><input type="radio" id="js-is-return-input" name="trip-type" value="return" class="visuallyhidden" tabindex="1" checked="checked"><label for="js-is-return-input" class="return-trip checked">왕복</label><input type="radio" id="js-one-way-input" name="trip-type" value="one-way" class="visuallyhidden" tabindex="1"><label for="js-one-way-input" class="one-way-trip ">편도</label><input type="radio" id="js-multi-city-input" name="trip-type" value="multi-destination" class="visuallyhidden" tabindex="1"><label for="js-multi-city-input" class="multi-city-trip ">다구간</label></section>'
         +'            <section class="traditional-search clearfix">'
         +'                <div id="js-places" class="search-controls-places clearfix">'
         +'                    <div class="origin-place">'
         +'                        <label for="js-origin-input" class="place-label">출발지</label>'
         +'                        <input type="text" id="js-origin-input" placeholder="국가, 도시 또는 공항" tabindex="1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" dir="auto">'
         +'                        <label class="nearby-alts sc-checkbox">'
         +'                            <input type="checkbox" id="js-outbound-alts" class="visuallyhidden" />'
         +'                            주변 공항 추가'
         +'                        </label>'
         +'                    </div>'
         +'                    <button type="button" id="js-places-toggle" class="swap-button" title="여기를 클릭하여 장소 변경">'
         +'                        <span class="visuallyhidden">여기를 클릭하여 장소 변경</span>'
         +'                    </button>'
         +'                    <div class="destination-place">'
         +'                        <label for="js-destination-input" class="place-label">도착지</label>'
         +'<input type="text" id="js-destination-input" placeholder="국가, 도시 또는 공항 이름을 입력해 주십시오." tabindex="2" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" dir="auto">'
         +'                        <label class="nearby-alts sc-checkbox">'
         +'                            <input type="checkbox" id="js-inbound-alts" class="visuallyhidden" />'
         +'                            주변 공항 추가'
         +'                        </label>'
         +'                    </div>'
         +'                </div><div id="js-dates" class="search-controls-dates">'
         +'                    <div class="depart">'
         +'                        <label for="js-depart-input">가는날</label>'
         +'                        <input type="text" id="js-depart-input" placeholder="날짜 선택." tabindex="1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" readonly="">'
         +'                    </div>'
         +'                    <div class="return ">'
         +'                        <label for="js-return-input">오는날</label>'
         +'                        <input type="text" id="js-return-input"  placeholder="날짜 선택" tabindex="1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" readonly="">'
         +'                    </div>'
         +'                    <span id="js-depart-summary" class="date-summary"></span>'
         +'                    <span id="js-return-summary" class="date-summary"></span>'
         +'                </div><div id="js-pax-cabin-class" class="search-controls-pax-cabin-class">'
         +'                    <label for="js-trad-cabin-class-travellers-toggle">좌석 등급 및 승객</label>'
         +'                    <button type="button" id="js-trad-cabin-class-travellers-toggle" class="cabin-class-travellers-trigger" tabindex="1">'
         +'                        <span class="down-arrow"></span>'
         +'                        <span> 성인, 일반석</span>'
         +'                    </button>'
         +'                </div>'
         +'                <label class="sc-checkbox prefer-directs">'
         +'                    <input type="checkbox" id="js-prefer-directs" class="visuallyhidden" tabindex="1"> 직항만'
         +'                </label>'
         +'                <button id="searchBtn" class="js-search-button fss-bpk-button fss-bpk-button--large" type="button" tabindex="1">'
         +'                    <span class="bpk-text">항공권 검색&nbsp;</span>'
         +'                    <span class="bpk-icon-lg bpk-icon-pointer bpk-icon-lg--align-to-button"></span>'
         +'                </button>'
        
         +'            </section>'
         +'        </form>'
         +'</section>'
         +'      </div>'
         +'    </div>'
         +'  </div>'
      },
      trip: ()=>{
         return ' <div id="timeline-outer">'
         +'    <div class="wrap clearfix"  style="margin-top:3%">'
         +'        <div class="inspiration-timeline">'
         +'            <ul class="timeline">'
         +'                <li>'
         +'                    <div class="dot timeline-foreground"></div>'
         +'                    <div class="timeline-head">'
         +'                        <h2>인기 도착지</h2>'
         +'                        <time class="time"><span>2017년 11월</span></time>'
         +'                        <div class="origin">'
         +'                            <label for="inspiration-timeline-origin">출발지 서울</label>'
         +'                            <input type="text" id="inspiration-timeline-origin" class="inline-edit" autocomplete="off" tabindex="1" value="">'
         +'                        </div>'
         +'                    </div>'
         +skyAir.Head.root()
         +'                    <div class="alternative-link" data-index="0">'
         +'                        <a href="" class="everywhere-link">Everywhere 검색<span></span> </a>'
         +'                        <a href="" class="map-link timeline-hidden">지도 둘러보기 <spand></span></a>'
         +'                    </div>'
         +'                </li>'
         +'                <li>'
         +'                    <div class="dot timeline-foreground"></div>'
         +'                    <div class="timeline-head">'
         +'                        <h2>아직 결정하지 못하셨나요? 지도 둘러보기</h2>'
         +'                        <time class="time"><span>2018년 1월</span></time>'
         +'                    </div>'
         +skyAir.Head.map()
         +'                    <div class="alternative-link" data-index="1">'
         +'                        <a href="" class="everywhere-link"></a>'
         +'                        <a href="" class="map-link">지도 둘러보기 <span></span></a>'
         +'                    </div>'
         +'                </li>'
         +'                <li>'
         +'                    <div class="dot timeline-foreground"></div>'
         +'                    <div class="timeline-head">'
         +'                        <h2>12월 특가 상품</h2>'
         +'                        <time class="time" datetime="2014-08-28"><span>2017년 12월</span></time>'
         +'                    </div>'
         +skyAir.Head.sale()
         +'                    <div class="alternative-link" data-index="2">'
         +'                        <a href="" class="everywhere-link"></a>'
         +'                        <a href="" class="map-link"></a>'
         +'                    </div>'
         +'                </li>'
         +'            </ul>'
         +'        </div>'
         +'    </div>'
         +'</div>'
      },
      News:()=>{
         return '<div id="second-tier-content-container">'
         +'  <section class="confidence-panels clearfix with-images">'
         +'  <article class="confidence-panel item-0">'
         +'    <div class="panelimage search-world">'
         +'    </div>'
         +'    <div class="heading clearfix">'
         +'      <h3>스카이스캐너</h3>'
         +'    </div>'
         +'    <span class="content">'
         +'<p class="korean-text"><span>스카이스캐너는 수백만개의 항공권 가격을 국내외 항공사와 여행사로부터 비교하여 가장 저렴한 항공권을 쉽고 빠르게 찾아드립니다. 저가항공사, 땡처리, 얼리버드 등의 특가 항공권 또한 검색 할 수 있습니다. 전세계 호텔과 렌터카 가격 비교도 지원합니다. <a href="//www.skyscanner.co.kr/customer-charter/">고객을 먼저 생각하는 당사의 서비스를 더 자세히 알아보세요</a>.</span></p>'
         +'    </span>'
         +'  </article>'
         +'  <article class="confidence-panel item-1">'
         +'    <div class="panelimage price-alerts">'
         +'    </div>'
         +'    <div class="heading clearfix">'
         +'      <h3>여행 뉴스</h3>'
         +'    </div>'
         +'    <span class="content">'
         +'<p class="korean-text"><span>스카이스캐너 <a href="//www.skyscanner.co.kr/news/">뉴스</a>와 함께 전문 여행자가 알려주는 여행 관련 팁, 여행 블로그 포스트를 확인하세요. 경품 및 이벤트의 기회도 놓치지 마세요!</span></p>'
         +'    </span>'
         +'  </article>'
         +'  <article class="confidence-panel item-2">'
         +'    <div class="panelimage app-promo">'
         +'    </div>'
         +'    <div class="heading clearfix">'
         +'      <h3>무료 앱 다운로드</h3>'
         +'    </div>'
         +'    <span class="content">'
         +'<p class="korean-text"><span>전세계 5천만명이 사용하고 있는 앱스토어 평점 5점 만점의 스카이스캐너 앱을 만나보세요.<a>아이폰</a>, <a href="https://www.skyscanner.co.kr/mobile.html">안드로이드</a>, <a href="https://www.skyscanner.co.kr/mobile.html">아이패드</a>를 지원합니다.</span></p>'
         +'    </span>'
         +'  </article>'
         +'  <article class="confidence-panel item-3">'
         +'    <div class="panelimage praise">'
         +'    </div>'
         +'    <div class="heading clearfix">'
         +'      <h3>공식 페이스북 페이지</h3>'
         +'    </div>'
         +'    <span class="content">'
         +'<p class="korean-text"><span>여행 관련 뉴스, 사진, 그리고 이벤트에 관심이 있으시다면 <a href="http://www.facebook.com/SkyscannerKorea">스카이스캐너 공식 페이스북</a>을 방문해 주세요.</span></p>'
         +'    </span>'
         +'  </article>'
         +'</section>'
         +'</div>'
      },
      footer:()=>{
      return '<footer id="footer">'
         +'    <div class="footer-content">'
         +'        <div class="wrap clearfix">'
         +'            <div class="tablet-left-column">'
         +'                <section id="explore-block">'
         +'                    <h3>탐색</h3>'
         +'                        <ul>'
                                         +'<li class="clearfix"><a id="ss-footer-links-city-links" href="https://www.skyscanner.co.kr/flights-to/cheap-flights-to-cities-all.html">도시</a>'
         +'                                        <span class="toggle-indicator">+</span>'
         +'                                        <ul id="city-links" class="asian-lang-font-reset clearfix hidden">'
                                                         +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-CJUA" href="https://www.skyscanner.co.kr/flights-to/cju/cheap-flights-to-jeju-airport.html">제주</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-OSAA" href="https://www.skyscanner.co.kr/flights-to/osaa/cheap-flights-to-osaka.html">오사카</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-SELA" href="https://www.skyscanner.co.kr/flights-to/sela/cheap-flights-to-seoul.html">서울</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-JFUK" href="https://www.skyscanner.co.kr/flights-to/fuk/cheap-flights-to-fukuoka-airport.html">후쿠오카</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-TYOA" href="https://www.skyscanner.co.kr/flights-to/tyoa/cheap-flights-to-tokyo.html">도쿄</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-HKGA" href="https://www.skyscanner.co.kr/flights-to/hkg/cheap-flights-to-hong-kong-international-airport.html">홍콩</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-BKKT" href="https://www.skyscanner.co.kr/flights-to/bkkt/cheap-flights-to-bangkok.html">방콕</a></li>'
         +'                                        </ul>'
         +'                                </li>'
         +'                                <li class="clearfix"><a id="ss-footer-links-city-breaks" href="https://www.skyscanner.co.kr/city-breaks">주말 여행</a>'
         +'                                        <span class="toggle-indicator">+</span>'
         +'                                        <ul id="city-breaks" class="asian-lang-font-reset clearfix hidden">'
                                                         +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-hkga" href="https://www.skyscanner.co.kr/city-breaks/hkga/hong-kong-city-breaks.html">홍콩</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-pusa" href="https://www.skyscanner.co.kr/city-breaks/pusa/busan-city-breaks.html">부산</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-taea" href="https://www.skyscanner.co.kr/city-breaks/taea/daegu-city-breaks.html">대구</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-sela" href="https://www.skyscanner.co.kr/city-breaks/sela/seoul-city-breaks.html">서울</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-cjua" href="https://www.skyscanner.co.kr/city-breaks/cjua/jeju-city-breaks.html">제주</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-tyoa" href="https://www.skyscanner.co.kr/city-breaks/tyoa/tokyo-city-breaks.html">도쿄</a></li>'
         +'                                        </ul>'
         +'                                </li>'
         +'                                <li class="clearfix"><a id="ss-footer-links-airports" href="https://www.skyscanner.co.kr/airports/airports-of-the-world.html">공항</a>'
         +'                                </li>'
                                         +'<li class="clearfix"><a id="ss-footer-links-country-links" href="https://www.skyscanner.co.kr/flights-to/cheap-flights-to-countries-all.html">국가</a>'
         +'                                        <span class="toggle-indicator">+</span>'
         +'                                        <ul id="country-links" class="asian-lang-font-reset clearfix hidden">'
                                                         +'<li class="clearfix"><a id="ss-footer-links-FlightsCountry-KR" href="https://www.skyscanner.co.kr/flights-to/kr/cheap-flights-to-south-korea.html">대한민국</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-FlightsCountry-JP" href="https://www.skyscanner.co.kr/flights-to/jp/cheap-flights-to-japan.html">일본</a></li>'
                                                         +'<li class="clearfix"><a id="ss-footer-links-FlightsCountry-CN" href="https://www.skyscanner.co.kr/flights-to/cn/cheap-flights-to-china.html">중국</a></li>'
         +'                                        </ul>'
         +'                                </li>'
         +'                                <li class="clearfix"><a id="ss-footer-links-airlines" href="https://www.skyscanner.co.kr/airlines-all.html">항공사</a>'
         +'                                </li>'
         +'                                <li class="clearfix"><a id="ss-footer-links-flights" href="/">항공권</a>'
         +'                                </li>'
         +'                                <li class="clearfix"><a id="ss-footer-links-hotels" href="/hotels">호텔</a>'
         +'                                </li>'
         +'                                <li class="clearfix"><a id="ss-footer-links-car-hire" href="https://www.skyscanner.co.kr/car-hire">렌터카</a>'
         +'                                </li>'
         

         +'                            <li class="clearfix"><a id="ss-footer-links-apps" >앱</a></li>'
         +'                        </ul>'
         +'                </section>'
         +'                <section id="tools-block">'
         +'                    <h3>파트너</h3>'
         +'                    <ul>'
         +'                            <li class="clearfix"><a id="ss-footer-links-workwithus" href="https://partners.skyscanner.net/">스카이스캐너와 협력</a></li>'
         +'                            <li class="clearfix"><a id="ss-footer-links-partneranalytics" href="https://partners.skyscanner.net/partner-analytics/">파트너 분석</a></li>'
                                     +'<li class="clearfix"><a id="ss-footer-links-footeradvertising" href="https://partners.skyscanner.net/advertising/">스카이스캐너와 광고하기</a></li>'
         +'                            <li class="clearfix"><a id="ss-footer-links-travelinsight" href="https://partners.skyscanner.net/travel-insight/">여행 인사이트</a></li>'
         +'                            <li class="clearfix"><a id="ss-footer-links-affiliate" href="http://en.business.skyscanner.net/">제휴사</a></li>'
         +'                        <li class="clearfix"><a id="ss-footer-links-whitelabel" href="https://en.business.skyscanner.net/en-gb/products/white-label/">화이트 라벨</a></li>'
         +'                        '
         +'                        <li class="clearfix"><a id="ss-footer-links-api" href="https://en.business.skyscanner.net/en-gb/products/travel-apis/">여행 API</a></li>     '
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
         +'                        <li class="clearfix"><a id="ss-footer-links-faq" target="_blank" href="https://help.skyscanner.net/hc/ko/?skyDBG=1">도움말</a></li>'
         +'                    </ul>'
         +'                </section>'
         +'            </div>'
         +'        </div>'
         +'    </div> '
         +'        <div class="wrap clearfix">'
         +'        <section class="footer-content-light">'
         +'                    <h3>전세계 사이트</h3>'
         +'                    <ul id="language-links" class="visible asian-lang-font-reset">'
         +'                            <li class="gb"><a href="https://www.skyscanner.net/?market=UK&amp;locale=en-GB" rel="alternate"><span>Cheap flights</span></a></li>'
         +'                            <li class="au"><a href="https://www.skyscanner.com.au/?market=AU&amp;locale=en-GB" rel="alternate"><span>Australia - flights</span></a></li>'
         +'                            <li class="cn"><a href="http://www.tianxun.com/?market=CN&amp;locale=zh-CN" rel="alternate"><span>中国 - 机票</span></a></li>'
         +'                            <li class="hk"><a href="https://www.skyscanner.com.hk/?market=HK&amp;locale=zh-TW" rel="alternate"><span>香港 - 機票</span></a></li>'
         +'                            <li class="in"><a href="https://www.skyscanner.co.in/?market=IN&amp;locale=en-GB" rel="alternate"><span>India - Flight tickets</span></a></li>'
                                     +'<li class="id"><a href="https://www.skyscanner.co.id/?market=ID&amp;locale=id-ID" rel="alternate"><span>Indonesia - penerbangan</span></a></li>'
         +'                            <li class="jp"><a href="https://www.skyscanner.jp/?market=JP&amp;locale=ja-JP" rel="alternate"><span>日本 - 航空券</span></a></li>'
         +'                            <li class="my"><a href="https://www.skyscanner.com.my/?market=MY&amp;locale=en-GB" rel="alternate"><span>Malaysia - flights</span></a></li>'
         +'                            <li class="mx"><a href="https://www.espanol.skyscanner.com/?market=MX&amp;locale=es-MX" rel="alternate"><span>México - vuelos</span></a></li>'
         +'                            <li class="nz"><a href="https://www.skyscanner.co.nz/?market=NZ&amp;locale=en-GB" rel="alternate"><span>New Zealand - flights</span></a></li>'
         +'                            <li class="ph"><a href="https://www.skyscanner.com.ph/?market=PH&amp;locale=en-GB" rel="alternate"><span>Philippines - flights</span></a></li>'
         +'                            <li class="ru"><a href="https://www.skyscanner.ru/?market=RU&amp;locale=ru-RU" rel="alternate"><span>Россия - авиабилеты</span></a></li>'
         +'                            <li class="sg"><a href="https://www.skyscanner.com.sg/?market=SG&amp;locale=en-GB" rel="alternate"><span>Singapore - flights</span></a></li>'
         +'                            <li class="kr"><a href="https://www.skyscanner.co.kr/?market=KR&amp;locale=ko-KR" rel="alternate"><span>대한민국 - 항공권</span></a></li>'
         +'                            <li class="tw"><a href="https://www.skyscanner.com.tw/?market=TW&amp;locale=zh-TW" rel="alternate"><span>台灣 - 機票</span></a></li>'
         +'                            <li class="th"><a href="https://www.skyscanner.co.th/?market=TH&amp;locale=th-TH" rel="alternate"><span>ไทย - ตั๋วเครื่องบิน</span></a></li>'
         +'                            <li class="us"><a href="https://www.skyscanner.com/?market=US&amp;locale=en-US" rel="alternate"><span>USA - flights</span></a></li>'
                                    +'<li class="vn"><a href="https://www.skyscanner.com.vn/?market=VN&amp;locale=vi-VN" rel="alternate"><span>Việt Nam - các chuyến bay</span></a></li>'
         +'                    </ul>'
         +'<form action="/r/FooterPost/?clientController=Home&amp;clientAction=Index" class="clearfix" id="footer-flag-nav-form" method="post">                        <select name="language-links-mini" id="language-links-mini">'
         +'                            <option value="" selected="selected">옵션을 선택하세요.</option>'
         +'                                <option value="https://www.skyscanner.net/?market=UK&amp;locale=en-GB" class="gb">(GB)Cheap flights</option>'
         +'                                <option value="https://www.skyscanner.com.au/?market=AU&amp;locale=en-GB" class="au">(AU)Australia - flights</option>'
         +'                                <option value="http://www.tianxun.com/?market=CN&amp;locale=zh-CN" class="cn">(CN)中国 - 机票</option>'
         +'                                <option value="https://www.skyscanner.com.hk/?market=HK&amp;locale=zh-TW" class="hk">(HK)香港 - 機票</option>'
         +'                                <option value="https://www.skyscanner.co.in/?market=IN&amp;locale=en-GB" class="in">(IN)India - Flight tickets</option>'
         +'                                <option value="https://www.skyscanner.co.id/?market=ID&amp;locale=id-ID" class="id">(ID)Indonesia - penerbangan</option>'
         +'                                <option value="https://www.skyscanner.jp/?market=JP&amp;locale=ja-JP" class="jp">(JP)日本 - 航空券</option>'
         +'                                <option value="https://www.skyscanner.com.my/?market=MY&amp;locale=en-GB" class="my">(MY)Malaysia - flights</option>'
         +'                                <option value="https://www.espanol.skyscanner.com/?market=MX&amp;locale=es-MX" class="mx">(MX)México - vuelos</option>'
         +'                                <option value="https://www.skyscanner.co.nz/?market=NZ&amp;locale=en-GB" class="nz">(NZ)New Zealand - flights</option>'
         +'                                <option value="https://www.skyscanner.com.ph/?market=PH&amp;locale=en-GB" class="ph">(PH)Philippines - flights</option>'
         +'                                <option value="https://www.skyscanner.ru/?market=RU&amp;locale=ru-RU" class="ru">(RU)Россия - авиабилеты</option>'
         +'                                <option value="https://www.skyscanner.com.sg/?market=SG&amp;locale=en-GB" class="sg">(SG)Singapore - flights</option>'
         +'                                <option value="https://www.skyscanner.co.kr/?market=KR&amp;locale=ko-KR" class="kr">(KR)대한민국 - 항공권</option>'
         +'                                <option value="https://www.skyscanner.com.tw/?market=TW&amp;locale=zh-TW" class="tw">(TW)台灣 - 機票</option>'
         +'                                <option value="https://www.skyscanner.co.th/?market=TH&amp;locale=th-TH" class="th">(TH)ไทย - ตั๋วเครื่องบิน</option>'
         +'                                <option value="https://www.skyscanner.com/?market=US&amp;locale=en-US" class="us">(US)USA - flights</option>'
         +'                                <option value="https://www.skyscanner.com.vn/?market=VN&amp;locale=vi-VN" class="vn">(VN)Việt Nam - các chuyến bay</option>'
         +'                        </select>'
         +'                        <button id="flag-go" class="wc-button">'
         +'                            <span class="wc-button-text">이동</span>'
         +'                        </button>'
         +'</form>        </section>'
         +'    </div>'
         +'</footer>     '
         +'<div class="wrap legal-info">'
         +'<p id="copyright" class="asian-lang-font-reset">'
         +'    <span>&copy; Skyscanner Ltd 2002-2017</span>'
         +'</p>'
         +'</div>'         
      },
      root:()=>{
    	  return '<div class="shelf timeline-middleground" id="shelf-1">'
          	+'                        <div class="shelf-tiles">'
          	+'                            <div class="tile half full indent">'
          	+'                                 <a>'
         	+'                                    <div class="content" id="first">'
         	+'<div class="scrim"><div class="title-container"><div class="title"><h4><span class=city>서울,</span><span class=country>대한민국</span></h4></div><div class="subtitle"><button class="tertiary"><h4>가격확인</h4></button></div></div></div>'
         	+'</div>'
         	+'                                 </a>'
            +'                            </div><div class="tile quarter indent-wrap ad-tile">'
             +'                                <a>'
             +'                                    <div class="content" id="two">'
         	+'<div class="scrim"><div class="title-container"><div class="title"><h4>취향저격 캘리포니아!</h4></div><div class="subtitle"><button class="tertiary"><h4>기사 보러가기</h4></button></div></div></div>'
         	+' <img class="tracking-pixel invisible" src(unknown)>'
         	+	'<span class="ad-marker">광고</span>'
         	+	'<img class="ad-logo" src(unknown)>'
         	+'</div>'
             +'                                </a>'
             +'                            </div><div class="tile quarter">'
             +'                                <a>'
             +'                                    <div class="content" id="three">'
             +'<div class="scrim"><div class="title-container"><div class="title"><h4><span class=city>일본,</span><span class=country>후쿠오카</span></h4></div><div class="subtitle"><button class="tertiary"><h4>가격확인</h4></button></div></div></div>'
            +' </div>'
             +'                                </a>'
             +'                            </div>'
             +'                        </div>'
             +'                    </div>'
      },
      map:()=>{
    	  return '<div class="shelf timeline-middleground embeddable-map-shelf" id="shelf-2">'
          +'                        <div class="shelf-tiles" >'	
          +'                            <div class="tile full indent full-width svg-map-tile">'
          +'                                <a>'
          +'                                    <div class="content" id="ssssssss">'
          +skyAir.Head.flag()
          +'</div>'
          +'                                </a>'
          +'                            </div>'
          +'                        </div>'
          +'                    </div>'
      },
      sale:()=>{
    	  return '<div class="shelf timeline-middleground" id="shelf-3">'
          +'                        <div class="shelf-tiles">'
          +'                            <div class="tile third full indent">'
          +'                                <a>'
          +'                                    <div class="content" id="saleone">'
          +'<div class="scrim"><div class="title-container"><div class="title"><h4><span class=city>LA,</span><span class=country>미국</span></h4></div><div class="subtitle"><button class="tertiary"><h4>가격확인</h4></button></div></div></div>'
          +'</div>'
          +'                                </a>'
          +'                            </div><div class="tile third indent-wrap">'
          +'                                <a>'
          +'                                    <div class="content" id="saletwo">'
          +'<div class="scrim"><div class="title-container"><div class="title"><h4><span class=city>바르셀로나,</span><span class=country>스페인</span></h4></div><div class="subtitle"><button class="tertiary"><h4>가격확인</h4></button></div></div></div>'
          +' </div>'
          +'                                </a>'
          +'                            </div><div class="tile third">'
          +'                                  <a>'
          +'                                      <div class="content" id="saleth">'
          +'<div class="scrim"><div class="title-container"><div class="title"><h4><span class=city>방콕,</span><span class=country>태국</span></h4></div><div class="subtitle"><button class="tertiary"><h4>가격확인</h4></button></div></div></div>'
          +'</div>'
          +'                                  </a>'
          +'                            </div>'
          +'                        </div>'
          +'                    </div>'
      },
      flag:()=>{
    	  return '<div class="flag-container" style="top: 160.774px; left: 548.803px; z-index: 15;">'
    	  +'<div class="flag-content">'
    	  +'  <p class="flag-name">오사카</p>'
    	  +'</div>'
    	  +'<div class="triangle"></div>'
    	  +'<div class="marker"></div>'
    	  +'</div>'  
    	  +'<div class="flag-container" style="top: 193.645px; left: 508.143px; z-index: 9;">'
    	  +'<div class="flag-content">'
    	  +'  <p class="flag-name">타이페이</p>'
    	  +'</div>'
    	  +'<div class="triangle"></div>'
    	  +'<div class="marker"></div>'
    	  +'</div>'
    	  +'<div class="flag-container" style="top: 228.746px; left: 447.627px; z-index: 5;">'
    	  +'<div class="flag-content">'
    	  +'  <p class="flag-name">방콕</p>'
    	  +'</div>'
    	  +'<div class="triangle"></div>'
    	  +'<div class="marker"></div>'
    	  +'</div>'
    	  +'<div class="flag-container" style="top: 102.3px; left: 161.2px; z-index: 19;">'
    	  +'<div class="flag-content">'
    	  +'  <p class="flag-name">파리</p>'
    	  +'</div>'
    	  +'<div class="triangle"></div>'
    	  +'<div class="marker"></div>'
    	  +'</div>'
      },
      popover:()=>{
    	return '<div id="popover" class="popover pax-cabin-class" style="position: absolute; top: 295.333px; left: 780.333px;"><header class="clearfix">'
    /*	+'  <span class="popover-title">좌석 등급 및 승객</span>'*/
    /*	+'  <button type="button" class="popover-hide">완료</button>'*/
    	+'</header>'
    	+'<div class="popover-content clearfix">'
    	/*+'  <button type="button" class="popover-hide ">완료</button>'*/
    	+'<label for="js-cabin-class-dropdown">좌석 등급</label><select id="js-cabin-class-dropdown" class="cabin-class-dropdown hidden" tabindex="1"><option value="Economy">일반석</option><option value="PremiumEconomy">프리미엄 일반석</option><option value="Business">비즈니스석</option><option value="First">일등석</option></select><div id="js-cabin-class-economy-only" class="cabin-class-economy-only"><p><strong>검색하신 노선은 일반석 가격만 보여 드릴 수 있습니다.</strong></p><p>비즈니스석 및 일등석 옵션을 보려면 정확한 날짜 및/또는 도착지 도시 이름을 알려주세요.</p></div><div id="js-travellers" class="traveller-nudgers"><label for="js-adults" value="1" class="traveller-label">성인</label>'
    	+'<button type="button" id="decrement" class="decrement adults" data-selector="#js-adults" tabindex="1">−</button>'
    	+'<input type="text" id="js-adults" readonly="" value="0">'
    	+'<button type="button" id="increment" class="increment adults" data-selector="#js-adults" tabindex="1">+</button>'
    	+'<span>만 16세 이상</span>'
    	+'<span>만 0 - 15세</span><div class="childAges"><div id="childDiv-0" class="hidden">'
    	+'<label for="childAge-0" class="traveller-label">유/소아&nbsp;1 나이</label>'
    	+'<select id="childAge-0" class="childAge" data-selector="0"><option value="-1">-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option></select>'
    	+'</div><div id="childDiv-1" class="hidden">'
    	+'<label for="childAge-1" class="traveller-label">유/소아&nbsp;2 나이</label>'
    	+'<select id="childAge-1" class="childAge" data-selector="1"><option value="-1">-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option></select>'
    	+'</div><div id="childDiv-2" class="hidden">'
    	+'<label for="childAge-2" class="traveller-label">유/소아&nbsp;3 나이</label>'
    	+'<select id="childAge-2" class="childAge" data-selector="2"><option value="-1">-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option></select>'
    	+'</div><div id="childDiv-3" class="hidden">'
    	+'<label for="childAge-3" class="traveller-label">유/소아&nbsp;4 나이</label>'
    	+'<select id="childAge-3" class="childAge" data-selector="3"><option value="-1">-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option></select>'
    	+'</div><div id="childDiv-4" class="hidden">'
    	+'<label for="childAge-4" class="traveller-label">유/소아&nbsp;5 나이</label>'
    	+'<select id="childAge-4" class="childAge" data-selector="4"><option value="-1">-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option></select>'
    	+'</div><div id="childDiv-5" class="hidden">'
    	+'<label for="childAge-5" class="traveller-label">유/소아&nbsp;6 나이</label>'
    	+'<select id="childAge-5" class="childAge" data-selector="5"><option value="-1">-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option></select>'
    	+'</div><div id="childDiv-6" class="hidden">'
    	+'<label for="childAge-6" class="traveller-label">유/소아&nbsp;7 나이</label>'
    	+'<select id="childAge-6" class="childAge" data-selector="6"><option value="-1">-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option></select>'
    	+'</div><div id="childDiv-7" class="hidden">'
    	+'<label for="childAge-7" class="traveller-label">유/소아&nbsp;8 나이</label>'
    	+'<select id="childAge-7" class="childAge" data-selector="7"><option value="-1">-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option></select>'
    	+'</div></div></div><div class="passengers-legal"><p class="top">여행 시 탑승객의 나이는 예약된 연령 범주에 부합해야 합니다. 항공사는 만 18세 미만의 단독 여행 탑승객에 대한 제한이 있습니다.</p><p class="bottom">유/소아 동반 여행 시 연령 제한과 정책은 항공사별로 다를 수 있으니 예약하기 전에 해당 항공사와 확인하시기 바랍니다.</p></div> <button type="button" class="popover-hide" id="confirmBtn">완료</button></div></div>'
      }
    
     
};



skyAir.ticket=(()=>{
	var search,column,dir,count;
	var a;
	var init=function(ctx){
	count=0;
	a=-1;
	onCreate();
	};
	var onCreate=function(){
	$(document).ready(function(){
	//$('#pagewrap').append(skyAir.timeline.modaldal());
	$.ajax({
	url:$$('x')+'/price',
	method:'post',
	datatype:'json',
	contentType:'application/json',
	success:(x)=>{
	skyAir.ticket.price(x.price);
	}
	});
	
	});
	setContentView();
	  	
	$('#identity').click(()=>{
		alert('skyscanner');
		var ctx=$$('x');
	 if(sessionStorage.getItem('email')===null) {
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
	 $('#airli').click(()=>{
	 var ctx=$$('x');
	 if(sessionStorage.getItem('email')===null){
	
	}else{
	$('#loginBu').attr('class','bpk-button-30cpF bpk-button--secondary-lyMj0').attr('id','account').removeAttr('data-toggle','').removeAttr('data-target','').text('로그아웃');
	
	}
	 
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
	      $('#skhot').click(()=>{
	    	  var ctx=$$('x');
	    	  $('body').empty();
	        	  ms.common.init(ctx);
	      });
	      $('#adminhi').click(()=>{
	    	  var ctx=$$('x');
	    	  $('body').empty();
	        	  hyunseok.hello.init(ctx);
	      });
	      $('#flight-controls-content dt ol li').removeAttr("checked");
	      $('#multi').click(e=>{
	    	  //$('input[name=all]').attr("checked","true");
	    	  e.preventDefault();
	    	  $.ajax({
	  url:$$('x')+'/choice',
	  method:'post',
	  dataType: 'json',
	  contentType:'application/json',
	  success:(x)=>{
	  $('#flylist').empty();
	  skyAir.ticket.fly(x.place);
	      }
	  });
	  });
	  $('#icn').click(e=>{

	  search='ICN';	 
	  e.preventDefault();
	
	  });
	  $('#gmp').click(e=>{
	 // $('input[name=gmp]').Attr("checked","true");
	  search='GMP';
	/*	  if(count<2){
	  count=count+1;
	  }else{alert('노빠꾸')}
	  */
	  e.preventDefault();
	  });
	  
	  $('#kal').click(e=>{
	//  $('input[name=kal]').Attr("checked","true");
	  column='대한항공';
	  a=a+1;
	  e.preventDefault();
	$.ajax({
	url:$$('x')+'/flight',
	method:'post',
	
	dataType: 'json',
	data : JSON.stringify({
	                'search' : search,
	                'column' : column,
	                'dir' :dir,
	                'a':a
	                   }),
	contentType:'application/json',
	success:(x)=>{
	$('#flylist').empty();
	  skyAir.ticket.fly(x.flight);
	},
	error:(x,m,s)=>{
	alert(s);
	}
	})
	
	  });
	  $('#jeju').click(e=>{
	//  $('input[name=jeju]').Attr("checked","true");
	  column='제주항공';
	  a=a+1;
	  e.preventDefault();
	$.ajax({
	url:$$('x')+'/flight',
	method:'post',
	
	dataType: 'json',
	data : JSON.stringify({
	                'search' : search,
	                'column' : column,
	                'dir' : dir,
	                'a':a
	                   }),
	contentType:'application/json',
	success:(x)=>{
	$('#flylist').empty();
	skyAir.ticket.fly(x.flight);
	
	},
	error:(x,m,s)=>{
	
	}
	})
	
	  });
	  $('#jin').click(e=>{
	 // $('input[name=jin]').Attr("checked","true");
	  column='진에어';
	  a=a+1;
	  e.preventDefault();
	$.ajax({
	url:$$('x')+'/flight',
	method:'post',
	
	dataType: 'json',
	data : JSON.stringify({
	                'search' : search,
	                'column' : column,
	                'dir': dir,
	                'a':a
	                   }),
	contentType:'application/json',
	success:(x)=>{
	$('#flylist').empty();
	skyAir.ticket.fly(x.flight);
	},
	error:(x,m,s)=>{
	
	}
	})
	
	  });
	  $('#ai').click(e=>{
	 // $('input[name=ai]').Attr("checked","true");
	  column='아시아나';
	  a=a+1;
	  e.preventDefault();
	$.ajax({
	url:$$('x')+'/flight',
	method:'post',
	
	dataType: 'json',
	data : JSON.stringify({
	                'search' : search,
	                'column' : column,
	                'dir' : dir,
	                'a':a
	                   }),
	contentType:'application/json',
	success:(x)=>{
	$('#flylist').empty();
	skyAir.ticket.fly(x.flight);
	},
	error:(x,m,s)=>{
	
	}
	})
	
	  });

	};
	var setContentView=function(){
	
	$('#flylist').append($$('flist'));
	/*$('#flylist').append(sessionStorage.getItem('flist'));*/
	$('body').append(
	'<div id="pagewrap" class="clearfix">'
+'        <div class="wrap h1-heading">'
+'            <h1 id="h1-heading">저가 항공편 출발지: 서울 목적지: 상하이 스카이스캐너 제공</h1>'
+'        </div>'	
+'<link rel="stylesheet" href="//js.skyscnr.com/sttc/oc-registry/components/header/0.4.42/build/static/css/main.dc7e0f67.css">'
+'<script>;</script> <!--blocks rendering and waits for css to load, preventing FOUC-->'
+'<div id="header-root"><header class="Header-1_1R8" data-reactroot="" data-reactid="1" data-react-checksum="451503947"><div class="Header__wrapper-2KwQq clearfix wrap" data-reactid="2"><nav class="SecondaryNav-3MUje" data-reactid="3"><ul class="SecondaryNav__list-1lEyp" data-reactid="4"><li class="SecondaryNav__help-19EmT SecondaryNav__item-25SJ- SecondaryNav__item--small-_0Qtf" data-reactid="5"><a class="bpk-link-143_C" href="https://help.skyscanner.net/hc/ko" target="_blank" id="ss-header-links-faq" data-reactid="6">도움말</a></li><li class="SecondaryNav__culture-selector-TeNdM culture-info SecondaryNav__item-25SJ-" id="culture-info" data-reactid="7"><button type="button" class="bpk-button-30cpF bpk-button--secondary-lyMj0" data-reactid="8"><img class="SecondaryNav__country-flag-2Bn20" src="https://images.skyscnr.com/images/country/flag/header/kr.png" alt="KR" title="KR" data-reactid="9"/><!-- react-text: 10 --> <!-- /react-text --><!-- react-text: 11 -->ko-KR<!-- /react-text --><!-- react-text: 12 --> <!-- /react-text --><!-- react-text: 13 -->₩ KRW<!-- /react-text --></button></li><li class="SecondaryNav__account-2N-Uf SecondaryNav__item-25SJ-" id="login-button-container" data-reactid="14"><button id="loginBut" type="button" class="bpk-button-30cpF bpk-button--secondary-lyMj0" data-reactid="15"" data-toggle="modal" data-target="#myModal">로그인</button></li><li class="SecondaryNav__menu-393l9 toggle-touch-menu SecondaryNav__item-25SJ-" id="toggle-touch-menu" data-reactid="17"><button class="SecondaryNav__menu-button-30qZJ" data-reactid="18"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="width:1.5rem;height:1.5rem;" class="SecondaryNav__menu-icon-2RdSm bpk-icon--rtl-support-6bwD-" data-reactid="19"><path d="M20 8H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zm1 4c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1zm0 5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1z" data-reactid="20"></path></svg><span class="visually-hidden" data-reactid="21">탐색 메뉴</span></button></li></ul></nav><div id="identity" class="Header__logo-wrapper-26Akq" data-reactid="22"><a class="Logo-38wHj" data-reactid="23"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211 36" class="bpk-logo bpk-logo__inline Logo__svg-l3cXE" data-reactid="24"><path d="M70.187 14.115a.577.577 0 0 1-.765.365c-.969-.373-2.065-.64-3.09-.64-1.764 0-3.426.53-3.426 2.296 0 .954.53 1.449 2.227 1.98l1.236.387c2.473.776 3.533 1.907 3.533 4.096 0 3.778-2.65 6.358-7.452 6.358-1.887 0-3.501-.296-4.87-.773-.333-.116-.493-.486-.394-.825l.565-1.96c.094-.325.456-.479.77-.353 1.237.5 2.608.839 3.822.839 2.156 0 3.673-.742 3.673-2.474 0-1.024-.706-1.411-2.296-1.907l-1.343-.423c-2.367-.777-3.427-2.19-3.427-4.45 0-3.851 3.216-5.933 7.454-5.933 1.275 0 2.732.285 3.947.702.335.114.497.486.394.824l-.558 1.891zm8.347-10.082c.33 0 .575.3.514.623l-2.6 13.436c2.45-1.787 4.59-3.887 6.48-6.324a1.27 1.27 0 0 1 1.007-.494h2.828c.272 0 .423.307.267.53-1.859 2.621-3.986 5.04-6.237 6.993l3.582 9.017a.434.434 0 0 1-.402.592h-3.005a.915.915 0 0 1-.854-.595l-2.465-6.717c-.662.446-1.346.859-2.049 1.237l-1.046 5.451a.772.772 0 0 1-.753.624h-2.582a.523.523 0 0 1-.512-.624l4.49-23.126a.768.768 0 0 1 .756-.624h2.581v.001zm13.213 7.24c.33 0 .577.302.514.626l-1.75 9.019c-.142.67-.283 1.518-.283 2.332 0 1.058.6 1.766 2.013 1.766 1.378 0 3.001-.601 4.203-1.73l2.245-11.388a.774.774 0 0 1 .756-.624h2.582c.329 0 .575.3.511.625l-2.314 11.88c-.283 1.377-.6 2.931-.882 4.168C97.999 33.528 95.456 36 90.369 36c-1.12 0-2.235-.14-3.205-.4a.687.687 0 0 1-.494-.818l.442-1.804a.616.616 0 0 1 .738-.461c.733.175 1.571.304 2.343.304 3.005 0 4.768-1.272 5.404-4.732l.25-1.308c-1.307 1.13-3.252 1.872-5.087 1.872-2.968 0-4.557-1.483-4.557-3.85 0-1.413.283-2.968.6-4.59l1.61-8.313a.773.773 0 0 1 .755-.626h2.579v-.001zm23.306 2.855a.577.577 0 0 1-.765.366c-.968-.374-2.066-.642-3.09-.642-1.764 0-3.424.532-3.424 2.297 0 .954.527 1.449 2.223 1.98l1.237.387c2.472.776 3.533 1.907 3.533 4.097 0 3.778-2.65 6.358-7.452 6.358-1.885 0-3.502-.297-4.868-.774-.334-.116-.494-.486-.397-.825l.567-1.96c.093-.325.457-.479.77-.353 1.236.5 2.607.839 3.82.839 2.155 0 3.674-.742 3.674-2.474 0-1.024-.705-1.411-2.294-1.907l-1.346-.423c-2.365-.777-3.424-2.19-3.424-4.45 0-3.851 3.214-5.933 7.454-5.933 1.275 0 2.73.285 3.946.702.332.114.494.486.393.824l-.557 1.891zm15.075.387a.526.526 0 0 1-.735.323c-.93-.425-1.982-.668-3.181-.668-3.743 0-6.007 3.216-6.007 7.313.036 2.439.92 4.063 3.676 4.098 1.22.03 2.493-.217 3.644-.613.282-.096.59.101.556.396l-.243 2.058a1.044 1.044 0 0 1-.692.868c-1.28.445-2.675.681-4.254.681-4.593 0-6.747-2.613-6.747-6.924 0-6.108 3.462-11.335 10.101-11.335 1.61 0 2.97.3 4.075.775.343.151.52.533.415.893l-.608 2.135zm2.814-1.969a.92.92 0 0 1 .618-.85c1.692-.565 3.828-.984 5.685-.984 3.531 0 5.827 1.059 5.827 4.132 0 .635-.106 1.413-.281 2.26l-1.377 7.24c-.213 1.087-.108 1.695.362 1.933.288.145.53.422.464.739l-.207 1.017c-.08.392-.377.716-.769.8a6.464 6.464 0 0 1-1.264.14c-1.592 0-2.367-.743-2.472-2.05h-.106c-1.165 1.272-2.93 2.05-5.017 2.05-3.001 0-4.943-1.518-4.943-4.556 0-4.098 3.25-7.03 10.526-7.03h.955c.104-.53.174-1.06.174-1.448 0-1.413-.707-2.05-2.93-2.05-1.415 0-3.112.338-4.713.883a.432.432 0 0 1-.572-.421l.04-1.805zm6.762 7.595c-3.567 0-6.182 1.165-6.182 3.743 0 1.132.673 1.838 2.191 1.838 1.447 0 2.967-.742 3.92-1.731l.775-3.85h-.704zm12.01-8.867c.341 0 .608.293.574.634l-.115 1.204h.034c1.73-1.449 3.957-2.4 6.111-2.4 2.685 0 4.45 1.552 4.45 4.026 0 1.2-.175 2.188-.387 3.319l-1.859 9.726a.774.774 0 0 1-.754.624h-2.582a.521.521 0 0 1-.512-.624l1.714-8.879c.178-.882.32-1.872.32-2.472 0-1.306-.708-1.977-2.192-1.977-1.623 0-3.461.845-4.767 2.082l-2.142 11.246a.77.77 0 0 1-.752.624h-2.581a.523.523 0 0 1-.516-.624l3.045-15.884a.768.768 0 0 1 .752-.625h2.159zm17.485 0a.58.58 0 0 1 .575.634l-.117 1.204h.035c1.731-1.449 3.955-2.4 6.109-2.4 2.686 0 4.452 1.552 4.452 4.026 0 1.2-.178 2.188-.388 3.319l-1.86 9.726a.772.772 0 0 1-.754.624h-2.582a.525.525 0 0 1-.515-.624l1.72-8.879c.176-.882.317-1.872.317-2.472 0-1.306-.707-1.977-2.191-1.977-1.624 0-3.46.845-4.768 2.082l-2.14 11.246a.771.771 0 0 1-.755.624h-2.582a.525.525 0 0 1-.516-.624l3.047-15.884a.768.768 0 0 1 .755-.625h2.158zm16.53 10.208c-.06.517-.05 1.04.035 1.555.318 1.73 1.66 2.578 3.92 2.578 1.578 0 3.234-.243 4.689-.706.28-.089.57.126.532.418l-.235 1.955c-.046.382-.289.721-.654.849-1.6.559-3.41.84-5.11.84-4.873 0-7.24-2.084-7.24-6.816 0-4.099 1.34-7.877 4.239-9.89 1.448-1.026 3.25-1.553 5.51-1.553 4.097 0 5.898 2.328 5.898 5.792 0 1.193-.142 2.781-.471 4.388-.073.355-.402.59-.764.59h-10.349zm7.416-2.79c.18-.668.275-1.357.283-2.049 0-1.59-.705-2.72-2.506-2.72-2.614 0-4.205 1.908-4.769 4.769h6.992zm10.495-7.418a.59.59 0 0 1 .588.634l-.098 1.38h.07c1.308-1.59 3.217-2.402 5.017-2.402a7.2 7.2 0 0 1 .514.016c.337.021.527.376.426.697l-.715 2.285c-.113.365-.468.597-.85.613-1.784.077-3.508.587-4.674 1.406l-2.28 11.88a.773.773 0 0 1-.756.624h-2.58a.524.524 0 0 1-.515-.624l3.046-15.884a.77.77 0 0 1 .752-.625h2.055zM28.247 14.713c4.78-4.781 11.05-7.158 17.318-7.152l.05.001c.57 1.336.901 2.763.978 4.214a20.283 20.283 0 0 0-1-.025l-.028.002-.026-.002a20.127 20.127 0 0 0-14.322 5.933 20.126 20.126 0 0 0-5.934 14.321l.003.072H21.09c-.017-6.282 2.361-12.572 7.156-17.365l.001.001zm24.843 8.02c.03-.329.046-.662.046-.999 0-1.604-.369-3.12-1.023-4.473a16.159 16.159 0 0 0-6.548-1.371 16.06 16.06 0 0 0-11.43 4.715 16.063 16.063 0 0 0-4.716 11.473h4.21c-.018-3.08 1.132-6.162 3.475-8.505a11.87 11.87 0 0 1 8.25-3.473v-.003l.211.002.213-.002v.003c2.597.038 5.183.913 7.312 2.633zm-42.019-4.917l-.002-.017.002.017zm40.225 8.491a8.011 8.011 0 0 0-5.518-2.353v.002l-.213-.002-.212.002v-.002a8.014 8.014 0 0 0-5.517 2.353 8.02 8.02 0 0 0-2.35 5.772h4.04c.265-1.35.51-2.032 1.28-2.803a3.83 3.83 0 0 1 2.76-1.11 3.83 3.83 0 0 1 2.76 1.11c.263.264.473.558.642.869a10.095 10.095 0 0 0 2.851-3.258 7.998 7.998 0 0 0-.523-.58zm-34.17 5.7c0-14.844 11.382-27.026 25.895-28.301A12.408 12.408 0 0 0 34.164 0c-6.382 0-11.64 4.8-12.368 10.985a7.013 7.013 0 0 0-3.737-1.074c-3.89 0-7.432 3.892-6.988 7.905a7.562 7.562 0 1 0-4.603 14.183c.287.05.582.08.883.08h9.775v-.074.002zM11.06 17.718l.009.08-.009-.08z" data-reactid="25"></path></svg><span class="visually-hidden" data-reactid="26">Skyscanner</span></a></div><nav id="PrimaryNav" class="PrimaryNav-2IMAs" data-reactid="27"><ul class="PrimaryNav__list-16-_W" data-reactid="28"><li class="HeaderTab-2DhXr" data-reactid="29"><a id="airli" class="js-header-tab HeaderTab__link-o2SAi HeaderTab__link--active-1vNee" data-analytics-name="flights" data-reactid="30"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="width:1.5rem;height:1.5rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--active-30Ao7 HeaderTab__icon--mobile-1srLF bpk-icon--rtl-support-6bwD-" data-reactid="31"><path d="M17.8 20.1l.6-.6c.2-.2.3-.5.2-.8l-2.2-9.3 4.1-4.2c.5-.5.5-1.3 0-1.9-.5-.5-1.4-.5-1.9 0l-4.2 4.1-9.1-2c-.3-.1-.6 0-.8.2l-.6.6c-.4.4-.3 1.1.2 1.4l7.2 3.2-3.7 3.7-2.3-.8c-.3-.1-.6 0-.8.2L3 15.2l4.2 1.6L8.8 21l1.3-1.5c.2-.2.3-.6.2-.8l-.8-2.3 3.7-3.7 3.2 7.2c.3.5 1 .6 1.4.2z" data-reactid="32"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="width:1.125rem;height:1.125rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--active-30Ao7 HeaderTab__icon--desktop-1e6kR bpk-icon--rtl-support-6bwD-" data-reactid="33"><path d="M17.8 20.1l.6-.6c.2-.2.3-.5.2-.8l-2.2-9.3 4.1-4.2c.5-.5.5-1.3 0-1.9-.5-.5-1.4-.5-1.9 0l-4.2 4.1-9.1-2c-.3-.1-.6 0-.8.2l-.6.6c-.4.4-.3 1.1.2 1.4l7.2 3.2-3.7 3.7-2.3-.8c-.3-.1-.6 0-.8.2L3 15.2l4.2 1.6L8.8 21l1.3-1.5c.2-.2.3-.6.2-.8l-.8-2.3 3.7-3.7 3.2 7.2c.3.5 1 .6 1.4.2z" data-reactid="34"></path></svg><span class="HeaderTab__text-ZVTEX" data-reactid="35"><!-- react-text: 36 --> <!-- /react-text --><!-- react-text: 37 -->항공권<!-- /react-text --></span></a></li><li class="HeaderTab-2DhXr" data-reactid="38"><a id="skhot" class="js-header-tab HeaderTab__link-o2SAi" data-analytics-name="hotels" data-reactid="39"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="width:1.5rem;height:1.5rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--mobile-1srLF bpk-icon--rtl-support-6bwD-" data-reactid="40"><path d="M8 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m11-3.9h-6c-1.1 0-2 .9-2 2V12h10v-1.9c0-1.1-.9-2-2-2m3 5.9c0-.6-.4-1-1-1H5V5.5C5 4.7 4.3 4 3.5 4S2 4.7 2 5.5v13c0 .8.7 1.5 1.5 1.5S5 19.3 5 18.5V16h14v2.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V14z" data-reactid="41"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="width:1.125rem;height:1.125rem;" class="HeaderTab__icon-2pgUO HeaderTab__icon--desktop-1e6kR bpk-icon--rtl-support-6bwD-" data-reactid="42"><path d="M8 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m11-3.9h-6c-1.1 0-2 .9-2 2V12h10v-1.9c0-1.1-.9-2-2-2m3 5.9c0-.6-.4-1-1-1H5V5.5C5 4.7 4.3 4 3.5 4S2 4.7 2 5.5v13c0 .8.7 1.5 1.5 1.5S5 19.3 5 18.5V16h14v2.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V14z" data-reactid="43"></path></svg><span class="HeaderTab__text-ZVTEX" data-reactid="44"><!-- react-text: 45 --> <!-- /react-text --><!-- react-text: 46 -->호텔<!-- /react-text --></span></a></li><li class="HeaderTab-2DhXr" data-reactid="47"><a id="adminhi" class="js-header-tab HeaderTab__link-o2SAi" data-analytics-name="carhire" data-reactid="48"><span class="HeaderTab__text-ZVTEX" data-reactid="53"><!-- react-text: 54 --> <!-- /react-text --><!-- react-text: 55 -->관리자<!-- /react-text --></span></a></li></ul></nav></div></header></div>'
+'  <div id="trip-shortlist" class="hidden">'
+'    </div>'
+'    <div id="container-trip-planning-refactor" class="trip-planning hidden">'
+'    </div>'
+'    <div id="content-wrap" class="wrap clearfix" margin-top:0%; width:88%; background-color:#f3f2f5">'
+skyAir.timeline.head()
+'</div>'
+skyAir.timeline.footer()
+'</div>'
	);
	$('#loginBut').click(()=>{
		
		sessionStorage.clear();
		location.reload();
		
	});
	
	
	};
	var fly=function(x){
	var flist='<li class="day-list-item clearfix ">'
        $.each( x,(i,val)=>{
            /*  var rating=val.rating.split("")[0].split(".");*/
           	flist+=' <article data-cid="model_44977" data-deeplink="details" class="card result clearfix no-details  " ontouchstart="">'
              +'<div class="card-body clearfix">'
              +'<div class="clearfix carrier">'
              +'<img src="//logos.skyscnr.com/images/airlines/favicon/78.png" alt="제주항공" onerror="__imgErrRemove__(this)">'
              +'<span>제주항공</span>'
              +'</div>'
              +'<section data-id="'+i+'" class="card-main leg clearfix dept">'
              +'<div class="big-airline">'
              +'<img class="big"   src="//logos.skyscnr.com/images/airlines/small/78.png" alt="대한항공" data-name="'+val.airline+'" onerror="__logoReplace__(this)">'
              +'</div>'
              +'<div class="leg-details long-date-format">'
              +'<div class="depart"><span class="station-tooltip" data-id=900>'
              +'<span class="times"></span>'
              +'<span class="stop-station" data-id="12409">'+val.departCity+'</span></span>'
              +'</div>'
              +'<div class="stops">'
              +'<span class="duration">1시간 05분</span>'
              +'<ul class="stop-line">'
              +'<li class="stop-line">'
              +'</li>'
              +'</ul>'
              +'<div class="leg-stops no-stops">'
              +'<span class="leg-stops-green leg-stops-label">'+val.cabin_class+' </span>'
              +'<span class="leg-stops-station"></span>'
              +'</div>'
              +'</div>'
              +'<div class="arrive"><span class="station-tooltip" data-id=900>'
              +'<span class="times"></span>'
              +'<span class="stop-station" data-id="12001">'+val.arriveCity+'</span>'
              +'</span>'
              +'</div>'
              +'<div class="clearfix">'
              +'</div>'
              +'</div>'
              +'</section>'
              +'<section data-id="'+i+'" class="card-main leg clearfix retn">'
              +' <div class="big-airline" >'
              +'<img class="big" id="airline" src="//logos.skyscnr.com/images/airlines/small/78.png" alt="Spring Airlines" data-name="Spring Airlines" onerror="__logoReplace__(this)">'
              +'</div>'
              +'<div class="leg-details long-date-format"><div class="depart">'
              +'<span class="station-tooltip" data-id="12001"><span class="times"></span>'
              +'<span class="stop-station" data-id="12001">'+val.arriveCity+'</span></span></div>'
              +'<div class="stops">'
              +'<span class="duration">'+val.flight_no+'</span>'
              +'<ul class="stop-line">'
              +'<li class="stop-line">'
              +'</li>'
              +'</ul>'
              +'<div class="leg-stops no-stops"><span class="leg-stops-green leg-stops-label">'+val.airline+'</span>'
              +'<span class="leg-stops-station"></span>'
              +'</div>'
              +'</div>'
              +'<div class="arrive"><span class="station-tooltip" data-id="900">'
              +'<span class="times"></span>'
              +'<span class="stop-station" data-id="12409">'+val.departCity+'</span></span>'
              +'</div>'
              +'<div class="clearfix">'
              +'</div>'
              +'</div>'
              +'</section>'
              +'</div>'
              +'<aside class="notch-holder">'
              +'</aside>'
              +'<div class="mainquote-cba clearfix">'
              +'<div class="mainquote-wrapper-cba">'
              +'<div class="mq-container-wrapper">'
              +'<div class="mq-container">'
              +'<div class="cba-price">'
              +'<span class="mainquote-deals">총 2건 중 최저가</span>'
              +'<div class="mainquote-group-price">'
              +'<a  data-deeplink="details" target="_blank" class="mainquote-price expand-cba select-action">'
              +'<span class="" aria-hidden="true">'
              +'</span>₩'+val.price+'</a>'
              +'</div>'
              +'</div>'
              +'<a class="fss-bpk-button expand-cba select-action"   title="선택"  >'
              +'<span class="bpk-text" id="modalaction'+i+'" >선택&nbsp;</span>'
              +'<span class="bpk-icon-sm bpk-icon-pointer bpk-icon-sm--align-to-button">'
              +'</span>'
              +'</a>'
              +'</div>'
              +'</div>'
              +'</div>'
              +'</div>'
              +'</article>'
             
              $(document).ready(()=>{
            	  $('#modalaction'+i+'').click(e=>{
            	  e.preventDefault();
            	  alert('선택 항공=>'+val.airline+', 선택 항공 번호=>'+val.flight_no);
            	  $('#content-wrap').append(skyAir.timeline.modaldal(val));
            	  $('#yesBtn').click(e=>{
            	
            
            	  $.ajax({
            	  url:$$('x')+'/reserve',
            	  method:'post',
            	  dataType:'json',
            	  contentType:'application/json',
            	  data:JSON.stringify({
            	'airline' : val.airline,
            	  'flight_no':val.flight_no,
            	  'departCity':val.departCity,
            	  'arriveCity':val.arriveCity,
            	  'cabin_class':val.cabin_class,
            	  'departDate':sessionStorage.getItem('depart1'),
                  'arriveDate':sessionStorage.getItem('ret1')
            	  }),
            	  success:(x)=>{
            	  alert('예매성공');
            	  $('#modaldal').remove();
            	  }
            	  });
            	  });
            	  $('#close').click(()=>{
            	  $('#modaldal').remove();
            	  });
            	  $('#noBtn').click(()=>{
            	  
            	  $('#modaldal').remove();
            	  });
            	  });
            	  
              });
           });
           flist+='</article></li>';
           $('#flylist').append(flist);
           sessionStorage.setItem('flist',flist);
	
	};
	var price=function(x){
	var table='<tr>'
	$.each(x,(i,val)=>{
	table+='<td class="tab" data-tab="fqsscore">'
	+'<button>'
	+'<span class="fqs-type">'+val.airline+'</span>'
	+'<span class="fqs-price">'+val.price+' </span>'
	+'<span class="fqs-duration"></span>'
	+'<span class="fqs-duration-label"></span>'
	+'</button></td>'
	});
	table+='</tr>';
	$('#tablelist').append(table)
	sessionStorage.setItem('table',table);
	};
	return{init:init,
	fly:fly,
	price:price
	};
	
})();

skyAir.timeline={
	head:(x)=>{
	return '<div id="content-wrapper" style="margin-top:-1.3%">'
	+'    <div id="content" style="margin-top:0%">  '
	+'    <section id="js-search-summary-bar" class="search-summary-bar clearfix date-nudgers show-datepicker" style="width:150%;" has-date-nudgers="true">'
	+'<button type="button" class="search-summary-button">'
	+'<span class="visually-hidden">검색조건 변경</span>'
	+'</button>'
	+'<div class="search-summary-main return">'
	+'<div class="search-summary-places " >'
	/*+'<h2>'
	+'서울 (모두)'
	+'<span class="visually-hidden">to</span>'
	+'<span aria-hidden="true">&nbsp;-&nbsp;</span>'
	+'상하이 (모두)'
	+'</h2>'*/
	+'<p>&nbsp;2 항공편</p>'
	+'</div>'
	+'<p class="search-summary-info">'
	+'  <span class="travellers">'
	+'  <span>'+ sessionStorage.getItem('n')+' 성인</span>'
	+'  </span>'
	+'  일반석'
	+'  </p>'
	+'  </div>'
	+'  <nav class="search-summary-date-nudgers clearfix return">'
	+'  <div class="search-summary-date-nudger outbound clearfix">'
	+'  <button class="prev" data-date="2017-10-31">'
	+'  <span class="visually-hidden">이전</span>'
	+'</button>'
	+'<span class="date">'+sessionStorage.getItem('depart')+'</span>'
	+'  <button class="next" data-date="2017-11-02">'
	+'  <span class="visually-hidden">다음</span>'
	+'</button>'
	+'</div>'
	+'<div class="search-summary-date-nudger inbound clearfix">'
	+'  <button class="prev" data-date="2017-10-31">'
	+'   <span class="visually-hidden">이전</span>'
	+'   </button>'
	+'   <span class="date">'+sessionStorage.getItem('ret')+'</span>'
	+'    <button class="next" data-date="2017-11-02">'
	+'      <span class="visually-hidden">다음</span>'
	+'      </button>'
	+'      </div>'
	+'      </nav>'
	+'</section>'
	+'<section id="js-search-controls-container" class="search-controls hide search-controls-loading">'
	+'</section>'
	+'        <div id="content-main" style="background-color:#f3f2f5;margin-left:16.9%;">'
	+'<section id="day-flexible-days-section" class="fss-flexible-days clearfix hidden"></section>'
	+'    <section id="day-section" class="day-content  fss-no-touch state-results state-loading-completed" data-has-results="true" data-is-loading="false">'
	+'<header class="clearfix day-header show-month-view-btn">'
	+'<div class="header-info clearfix">'
	+'<div class="header-month-view-btn"><a>달력/차트 보기</a>'
	+'</div>'
	+'<a class="header-info-bags" target="_blank" title="새 창에서 열기">추가 수화물 요금이 부과될 수 있음</a>'
	+'</div>'
	+'</header>'
	+'        <div class="day-cols clearfix">'
	+'            <div id="nav-header" class="day-nav-header clearfix fqs-switcher">'
	+skyAir.timeline.btns()
	+'<ul id="flylist" class="day-list clearfix fss-tap-anywhere tap-b fss-ticket-style animate-plane">'
	+'</ul>'
	+'</div>'
	+skyAir.timeline.filter()
	+'            <div class="day-searching-message"></div>'
	+'        </div>'
	+'    </section>'
	+'</div>        '
	+'<div id="banner-strevda"> '
	+'<div id="adslot-c68614f5" class="strevda-slot" data-type="bottomAd" data-google-query-id="CPmt4eS-_tYCFQYqlgodCXsEbg"><div id="google_ads_iframe_/24268069/skyscanner.co.kr/flights_funnel/day_view/leaderboard_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/24268069/skyscanner.co.kr/flights_funnel/day_view/leaderboard_0" title="3rd party ad content" name="google_ads_iframe_/24268069/skyscanner.co.kr/flights_funnel/day_view/leaderboard_0" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" srcdoc="" style="border: 0px; vertical-align: bottom;"></iframe></div></div>'
	+'<script>window.oc=window.oc||{};oc.renderedComponents=oc.renderedComponents||{};oc.renderedComponents["strevda-slot"]="1.0.9";</script>'
	+'    </div>'
	+'        <p class="seo-footer">'
	+'            이 페이지에 문제가 있는 경우 <a title="스카이스캐너로 연락" id="ss-contact-help" >스카이스캐너로 연락</a>주시기 바랍니다.'
	+'        </p>'
	+'</div>'
	+'</div>'
	
	
	
	},
	sidebar:()=>{
	return '<aside id="sidebar">'
	+'    <div class="strevda-container">'
	+'            <div class="mpu-strevda">              '
	+'<div id="adslot-fd506e39" class="strevda-slot" data-type="primaryMpu"></div>'
	+'<script>window.oc=window.oc||{};oc.renderedComponents=oc.renderedComponents||{};oc.renderedComponents["strevda-slot"]="1.0.9";</script>'
	+'            </div>'
	+'<div id="tame-slot-SidebarAdvert-0"></div>'
	+'<script>'
	+'  window.tameSlots = window.tameSlots || [];'
	+'  window.tameSlots.push({'
	+'    area: "SidebarAdvert",'
	+'    position: "0",'
	+'    useExternalCallback: false'
	+'  });'
	+'</script>'
	
	+'  window.tameSlots = window.tameSlots || [];'
	+'  window.tameSlots.push({'
	+'    area: "SidebarAdvert",'
	+'    position: "1",'
	+'    useExternalCallback: false'
	+'  });'
	+'</script>'
	+'<script>window.oc=window.oc||{};oc.renderedComponents=oc.renderedComponents||{};oc.renderedComponents["tame-slot"]="1.0.0";</script>'
	+''
	+'        <div id="route-sponsors-section" class="route-sponsors clearfix hidden">'
	+'    <h4 class="title"></h4>'
	+'    <ul></ul>'
	+'</div>'
	+'            <div class="mpu-strevda">'
	+'                <div id="mpu-afs"></div>'
	+'            </div>'
	+'    </div>'
	+'</aside>'
	+skyAir.timeline.strevda()

	

	},
	footer:()=>{
	return '<footer id="footer">  '
	+'  <div class="footer-content">'
	+'        <div class="wrap clearfix">'
	+'            <div class="tablet-left-column">'
	+'                <section id="explore-block">'
	+'                    <h3>탐색</h3>'
	+'                        <ul>'
	                                +'<li class="clearfix"><a id="ss-footer-links-city-links" >도시</a>'
	+'                                        <span class="toggle-indicator">+</span>'
	+'                                        <ul id="city-links" class="asian-lang-font-reset clearfix hidden">'
	                                                +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-CJUA" >제주</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-OSAA" >오사카</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-SELA" >서울</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-JFUK" >후쿠오카</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-TYOA" >도쿄</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-HKGA" >홍콩</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-FlightsCity-BKKT" >방콕</a></li>'
	+'                                        </ul>'
	+'                                </li>'
	+'                                <li class="clearfix"><a id="ss-footer-links-city-breaks" href="https://www.skyscanner.co.kr/city-breaks">주말 여행</a>'
	+'                                        <span class="toggle-indicator">+</span>'
	+'                                        <ul id="city-breaks" class="asian-lang-font-reset clearfix hidden">'
	                                                +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-hkga" >홍콩</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-pusa" >부산</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-taea" >대구</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-sela" >서울</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-cjua" >제주</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-CityBreaks-tyoa" >도쿄</a></li>'
	+'                                        </ul>'
	+'                                </li>'
	+'                                <li class="clearfix"><a id="ss-footer-links-airports" >공항</a>'
	+'                                </li>'
	                                +'<li class="clearfix"><a id="ss-footer-links-country-links" >국가</a>'
	+'                                        <span class="toggle-indicator">+</span>'
	+'                                        <ul id="country-links" class="asian-lang-font-reset clearfix hidden">'
	                                                +'<li class="clearfix"><a id="ss-footer-links-FlightsCountry-KR" >대한민국</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-FlightsCountry-JP" >일본</a></li>'
	                                                +'<li class="clearfix"><a id="ss-footer-links-FlightsCountry-CN" >중국</a></li>'
	+'                                        </ul>'
	+'                                </li>'
	+'                                <li class="clearfix"><a id="ss-footer-links-airlines" >항공사</a>'
	+'                                </li>'
	+'                                <li class="clearfix"><a id="ss-footer-links-flights">항공권</a>'
	+'                                </li>'
	+'                                <li class="clearfix"><a id="ss-footer-links-hotels" >호텔</a>'
	+'                                </li>'
	+'                                <li class="clearfix"><a id="ss-footer-links-car-hire" >렌터카</a>'
	+'                                </li>'
	+'                            <li class="clearfix"><a id="ss-footer-links-apps" >앱</a></li>'
	+'                        </ul>'
	+'                </section>'
	+'                <section id="tools-block">'
	+'                    <h3>파트너</h3>'
	+'                    <ul>'
	+'                            <li class="clearfix"><a id="ss-footer-links-workwithus" href="https://partners.skyscanner.net/">스카이스캐너와 협력</a></li>'
	+'                            <li class="clearfix"><a id="ss-footer-links-partneranalytics" href="https://partners.skyscanner.net/partner-analytics/">파트너 분석</a></li>'
	                            +'<li class="clearfix"><a id="ss-footer-links-footeradvertising" href="https://partners.skyscanner.net/advertising/">스카이스캐너와 광고하기</a></li>                           '
	                            +'<li class="clearfix"><a id="ss-footer-links-travelinsight" href="https://partners.skyscanner.net/travel-insight/">여행 인사이트</a></li>                      '
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
	+'                        <li class="clearfix"><a id="ss-footer-links-faq" target="_blank" href="https://help.skyscanner.net/hc/ko/?skyDBG=1">도움말</a></li>'
	+'                    </ul>'
	+'                </section>'
	+'            </div>'
	+'        </div>'
	+'    </div>  '
	+'    <div class="wrap clearfix">'
	+'        <section class="footer-content-light">'
	+'        </section>'
	+'    </div>'
	+'</footer>'
	+'<div class="wrap legal-info">'
	+'<p id="copyright" class="asian-lang-font-reset">'
	+'    <span>&copy; Skyscanner Ltd 2002-2017</span>'
	+'</p>'
	+'</div>'
	},
	
	btns:()=>{
	return '<div class="day-btns-header clearfix">'
	+'<div id="day-header-btns" class="day-btns-primary">'
	+'<div class="day-btns-filter">'
	+'<div class="day-btns-filter-wrapper">'
	+'<button class="day-header-btn fss-secondary" title="필터(조건)">'
	+'<span class="day-header-btn-label">필터(조건)</span>'
	+'</button>'
	+'</div>'
	+'</div>'
	+'<div class="day-btns-sort">'
	+'<div class="day-btns-sort-wrapper">'
	+'<button class="day-header-btn fss-secondary" title="정렬">'
	+'<span class="day-header-btn-label"></span>'
	+'</button>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'<div id="cols-header" class="day-cols-header">'
	+'<div class="day-list-info info-top clearfix">'
	+'<div class="day-list-sorting">'
	+'</div>'
	+'<label for="sort-select">정렬 기준</label>'
	+'&nbsp'
	+'<select id="sort-select">'
	+'<option class="fqs-score" value="fqsscore">추천순</option>'
	+'<option value="price">최저가순</option>'
	+'<option value="duration">최단여행시간순</option>'
	+'<option value="outbound_departure_time">출국: 출발 시간</option>'
	+'<option value="return_departure_time">귀국: 출발 시간</option>'
	+'<option value="airlines">항공사</option>'
	+'<option value="stops">항공사</option>'
	+'</select>'
	+'<div class="day-list-progress" style="width: 100%; display: none;"></div>'
	+'</div>'
	+'<div class="day-list-count">'
	+'결과가 '
	+'<strong>각 항공사별<span class="fqs-best-icon"></span></strong> 최저가 기준으로 정렬됨'
	+'</div>'
	+'</div>'
	+'<div class="indirects-info hidden">'
	+'<div class="indirects-info-exclamation" aria-label="정보"></div>'
	+'<div class="indirects-info-msg"></div>'
	+'<div class="indirects-info-close" aria-label="닫기"></div>'
	+'</div>'
	+'<div id="fqs-info" class="fqs-header both-overlays">'
	+'<div class="fqs-opts-container" id="fqs-tabs">'
	+'<table class="fqs-opts" id="tablelist">'
	+'<tbody>'
	+'<tr>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'</div>'
	+'</div>'
	},
	
	    
	filter:()=>{
	return '<div class="day-filters">'
	+'<div class="price-alerts">'
	+'<button id="price-alert-button2" class="fss-alerts-button fss-secondary" title="가격 변동 알림 받기">'
	+'<span class="price-alerts-icon" aria-hidden="true">'
	+'</span>'
	+'<span class="price-alerts-message">가격 변동 알림 받기</span>'
	+'</button>'
	+'</div>'
	+'<div id="filter-controls" class="fss-flight-controls inline">'
	+'<div class="flight-controls-cover hidden"><div class="hot-spinner medium">'
	+'</div>'
	+'<div>불러오는 중...</div>'
	+'</div>'
	+'<div class="flight-controls-content" id="flight-controls-content">'
	+'<dl data-id="airports" >'
	+'<dt>'
	+'<a href="#" class="clearfix"><span>공항</span>'
	+'<span class="chevron" aria-hidden="true"></span></a>'
	+'</dt>'
	+'<ol class="filter-opts"><li class="mixed-airports"><label class="clearfix">'
	+'<span class="label-text">출국 및 입국 시 <strong>같은 공항</strong> 이용</span>'
	+'<input type="checkbox"></label></li><li class="change-airport">'
	+'<label class="clearfix"><span class="label-text">환승 시 <strong>공항 변경</strong> 없음</span>'
	+'<input  type="checkbox"></label></li><div class="subtitle">출발지</div><li id="gmp" data-id="11876" class="airport"><label class="clearfix two-line ">'
	+'<span class="label-text">GMP</span><input type="checkbox" checked="checked" name="gmp" >'
	+'<span class="filter-sub">서울 김포</span></label></li><li id="icn" data-id="12409" class="airport"><label class="clearfix two-line "><span class="label-text">ICN</span>'
	+'<input type="checkbox" checked="checked" name="icn"><span class="filter-sub">인천국제공항</span></label>'
	+'</li>'
	+'</ol>'
	+'</dl>'
	+'<dl data-id="stops" >'
	+'<dt>'
	+'<a href="#" class="clearfix">'
	+'<span>경유</span>'
	+'<span class="chevron" aria-hidden="true"></span>'
	+'</a>'
	+'</dt>'
	+'<dd class="filter-opts">'
	+'<ol class="airlines">'
	+'<li id="kal" data-id="-32128">'
	+'<label class="clearfix two-line"><span class="label-text">대한항공 (KAL)</span>'
	+'<input type="checkbox" checked="checked" name="kal">'
	+'<span class="filter-sub"></span></label>'
	+'</li>'
	+'<li id="jeju" data-id="-32179"><label class="clearfix two-line">'
	+'<span class="label-text">제주항공</span>'
	+'<input type="checkbox" checked="checked" name="jeju">'
	+'<span class="filter-sub"></span></label></li>'
	+'<li id="jin" data-id="-32161">'
	+'<label class="clearfix two-line"><span class="label-text">진에어</span>'
	+'<input type="checkbox" checked="checked" name="jin">'
	+'<span class="filter-sub"></span></label></li>'
	+'<li id="ai" data-id="-32153">'
	+'<label class="clearfix two-line"><span class="label-text">아시아나</span>'
	+'<input type="checkbox" checked="checked" name="ai">'
	+'<span class="filter-sub"></span></label></li>'
	+'<li id="multi" data-id="multi">'
	+'<label class="clearfix two-line">'
	+'<span class="label-text">모든 항공사 </span>'
	+'<input type="checkbox" checked="checked" name="all">'
	+'<span class="filter-sub"></span></label></li>'
	+'</ol>'
	+'</dd>'
	+'</dl>'
	+'<dl data-id="departure_times" ><dt><a href="#" class="clearfix">'
	+'<span>출발 시간대 설정</span>'
	+'<span class="chevron" aria-hidden="true"></span>'
	+'</a>'
	+'</dt>'
	+'<dd id="filter-opts slider-opts"class="filter-opts slider-opts"><h4>가는날 출발시간</h4>'
	+'<div class="time-range">오전 12:00 – 오후 11:59</div>'
	+'<div class="departure-times-slider noUi-target noUi-ltr noUi-horizontal noUi-background" data-cid="model_186"><div class="noUi-base">'
	+'<div class="noUi-origin noUi-connect" style="left: 0%;"><div class="noUi-handle noUi-handle-lower">'
	+'</div>'
	+'</div>'
	+'<div class="noUi-origin noUi-background" style="left: 100%;">'
	+'<div class="noUi-handle noUi-handle-upper">'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</dd>'
	+'<dd class="filter-opts slider-opts">'
	+'<h4>오는날 출발시간</h4><div class="time-range">오전 12:00 – 오후 11:59</div>'
	+'<div class="departure-times-slider noUi-target noUi-ltr noUi-horizontal noUi-background" data-cid="model_187">'
	+'<div class="noUi-base"><div class="noUi-origin noUi-connect" style="left: 0%;"><div class="noUi-handle noUi-handle-lower">'
	+'</div>'
	+'</div>'
	+'<div class="noUi-origin noUi-background" style="left: 100%;">'
	+'<div class="noUi-handle noUi-handle-upper">'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</dd>'
	+'<dd class="filter-opts slider-opts hidden"><h4></h4><div class="time-range">'
	+'</div><div class="departure-times-slider">'
	+'</div>'
	+'</dd>'
	+'<dd class="filter-opts slider-opts hidden">'
	+'<h4></h4>'
	+'<div class="time-range">'
	+'</div>'
	+'<div class="departure-times-slider">'
	+'</div>'
	+'</dd>'
	+'<dd class="filter-opts slider-opts hidden">'
	+'<h4>'
	+'</h4>'
	+'<div class="time-range">'
	+'</div>'
	+'<div class="departure-times-slider">'
	+'</div>'
	+'</dd>'
	+'<dd class="filter-opts slider-opts hidden"><h4></h4>'
	+'<div class="time-range">'
	+'</div>'
	+'<div class="departure-times-slider"></div>'
	+'</dd>'
	+'</dl>'
	+'<dl data-id="duration" >'
	+'<dt>'
	+'<a href="#" class="clearfix"><span>총 소요시간</span>'
	+'<span class="chevron" aria-hidden="true"></span>'
	+'</a>'
	+'</dt>'
	+'<dd class="filter-opts slider-opts">'
	+'<div class="time-range">5시간 – 20시간</div>'
	+'<div class="duration-slider noUi-target noUi-ltr noUi-horizontal noUi-connect">'
	+'<div class="noUi-base"><div class="noUi-origin noUi-background noUi-stacking" style="left: 100%;">'
	+'<div class="noUi-handle noUi-handle-lower">'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</dd>'
	+'</dl>'
	+'<dl data-id="airlines" >'
	+'<dt>'
	+'<a href="#" class="clearfix"><span>항공사</span>'
	+'<span class="chevron" aria-hidden="true"></span>'
	+'</a>'
	+'</dt>'
	+'<dd class="filter-opts">'
	+'<div class="secondary-options helper-nav"><button class="select-all" disabled="">모두 선택</button>'
	+'<button class="clear-all">모두 지우기</button>'
	+'</div><ol class="alliances">'
	+'<li data-id="-31998"><input type="checkbox" id="alliance-31998">'
	+'<label for="alliance-31998"> 스카이팀</label></li><li data-id="-31999">'
	+'<input type="checkbox" id="alliance-31999" disabled=""><label for="alliance-31999" class="disabled">스타 얼라이언스(없음)</label></li>'
	+'<li data-id="-32000"><input type="checkbox" id="alliance-32000" disabled="">'
	+'<label for="alliance-32000" class="disabled">원월드(없음)</label>'
	+'</li>'
	+'</ol>'
	+'</dd>'
	+'</dl>'
	
	+'</div>'
	+'</div>'
	+'</div>'
	},
	strevda:()=>{
	return '<div id="skyscraper-strevda"> '
	+'<div id="adslot-beb55849" class="strevda-slot" data-type="rhsSkyscraper" data-google-query-id="CKiA74a4_tYCFU7ZvQodn0cEfA">'
	+'<div id="google_ads_iframe_/24268069/skyscanner.co.kr/flights_funnel/day_view/skyscraper_0__container__" style="border: 0pt none;">'
	+'<iframe id="google_ads_iframe_/24268069/skyscanner.co.kr/flights_funnel/day_view/skyscraper_0" title="3rd party ad content" name="google_ads_iframe_/24268069/skyscanner.co.kr/flights_funnel/day_view/skyscraper_0" width="160" height="600" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" srcdoc="" style="border: 0px; vertical-align: bottom;">'
	+'</iframe>'
	+'</div>'
	+'</div>'
	+'<script>window.oc=window.oc||{};oc.renderedComponents=oc.renderedComponents||{};oc.renderedComponents["strevda-slot"]="1.0.9";</script>'
	+'    </div>'
	},

	 modaldal:(x)=>{
	   return'<div class="fss-fdetails-inner pqs-content "><div class="fss-fdetails-inner-container pqs-form-wrapper" style="top: 0px;">'
	   +'<div id="modaldal" class="fss-fdetails-pqs-form pqs-form"><button id="close" class="close"><span class="close-icon">'
	   +'</span>'
	   +'</button>'
	   +'<div>'
	   +'<h2>선택하신 '+x.airline+'을 예약할까요?</h2>'
	   +'<button class="tertiary good" id="yesBtn">'
	   +'<span class="icon" aria-hidden="true">'
	   +'</span><!-- react-text: 911 -->예<!-- /react-text --></button>'
	   +'<button class="tertiary bad" id="noBtn">'
	   +'<span class="icon" aria-hidden="true">'
	   +'</span><!-- react-text: 914 -->아니요<!-- /react-text -->'
	   +'</button>'
	   +'</div>'
	   +'</div>'
	   +'</div>'
	   +'</div>'
	   }


	
};






































skyAir.session={
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
var $$=function(x){return skyAir.session.getPath(x)};