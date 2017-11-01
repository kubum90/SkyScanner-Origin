var hyunseok=hyunseok || {};
hyunseok.hello=(()=>{
	var init=ctx=>{
		
		hyunseok.session.init(ctx);
		hyunseok.index.init();
		onCreate();};
	var onCreate=()=>{setContentView();};
	var setContentView=()=>{};
	return{init:init};
})();

hyunseok.index=(()=>{
	var init=()=>{onCreate();};
	var onCreate=()=>{setContentView();};	
	var setContentView=()=>{
		hyunseok.navbar.init();
		hyunseok.home.init();
		};
	return {init:init}
})();

hyunseok.navbar=(()=>{
	var init=()=>{	
		onCreate();
	};
	var onCreate=()=>{
		var ctx=$$('x');
		$('body').append(hyunseok.introUI.navbar());
		$('#homeBtn').click(()=>{
			alert('홈');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();
			hyunseok.home.init();
			});
		$('#adminBtn').click(()=>{
			alert('관리자');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();
		
			$('body').append(hyunseok.compUI.admin());
			hyunseok.admin.init();
			});
		$('#memberBtn').click(()=>{
			alert('회원');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();

			$('body').append(hyunseok.compUI.member());
			hyunseok.member.init();
			});
		$('#dbBtn').click(()=>{
			alert('DB');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();
	
			$('body').append(hyunseok.compUI.airport())
			hyunseok.airport.init();
			
		});
		$('#hotelBtn').click(()=>{
			alert('DB');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();
	
			$('body').append(hyunseok.compUI.hotel())
			hyunseok.hotel.init();
			});
		$('#identity').click(()=>{
			var ctx=$$('x');
			/*location.reload();*/
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
			 $('#account').click(()=>{
		    	  sessionStorage.clear();
		    	  location.reload();
		    	  });
		});
		
	};
	return {init:init};
})();
hyunseok.home=(()=>{
	var init=()=>{	
		ctx=$$('x');
		onCreate();
	};
	var onCreate=()=>{
	
		$('body').empty();
		$('body').append(hyunseok.navbar.init());
		$('body').append(hyunseok.introUI.home());
		$.getJSON(ctx+'/list/member',data=>{
				$('#panel-body-member').html(data.total);
			});
		$.getJSON(ctx+'/list/flight',data=>{
			$('#panel-body-flight').html(data.total);
		});
		$.getJSON(ctx+'/list/hotel',data=>{
			$('#panel-body-hotel').html(data.total);
		});
		
		$('#list-adminBtn').click(()=>{
			alert('관리자.');
			$('body').empty();
			hyunseok.navbar.init();
			$('body').append(hyunseok.compUI.admin());
			hyunseok.admin.init();
			});
		$('#list-adminBtn-admin').click(()=>{
			alert('관리자');
			$('body').empty();
			hyunseok.navbar.init();
		
			$('body').append(hyunseok.compUI.admin());
			hyunseok.admin.init();
			});
		$('#list-db').click(()=>{
			alert('DB 페이지');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();

			$('body').append(hyunseok.compUI.airport());
			hyunseok.airport.init();
			
			});
		$('#list-db-airport').click(()=>{
			alert('항공 DB 페이지');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();
	
			$('body').append(hyunseok.compUI.airport());
			hyunseok.airport.init();
			});
		$('#list-db-hotel').click(()=>{
			alert('호텔 DB 페이지');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();
			
			$('body').append(hyunseok.compUI.hotel());
			hyunseok.hotel.init();
			});
		$('#list-memberBtn').click(()=>{
			alert('Member 페이지');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();
			$('body').append(hyunseok.compUI.member());
			hyunseok.member.init();
			});
		$('#list-memberBtn-read').click(()=>{
			alert('Member 페이지');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();
		
			$('body').append(hyunseok.compUI.member());
			hyunseok.member.init();
			});
	
	};

	return {init:init};
})();
hyunseok.admin=(()=>{
	var init=()=>{	
		cts=$$('x');
		onCreate();
		
	};
	var onCreate=()=>{
		$('body').empty();
		$('body').append(hyunseok.navbar.init());
		$('body').append(hyunseok.compUI.admin());

		$.getJSON(ctx+'/admin/now',data=>{
			$('#w3-input-email').val(data.email);			
			$('#w3-input-firstname').val(data.firstname);
			$('#w3-input-surname').val(data.surname);
			$('#w3-input-password').val(data.password);
		});
		
		
		$('#admin-update-btn').click(e=>{
			alert('관리자 정보 수정');
			var i=$('#w3-input-email').val();
			var s=$('#w3-input-surname').val();
			var f=$('#w3-input-firstname').val();
			var p=$('#w3-input-password').val();
			alert('email'+i);
			
			e.preventDefault();
			$.ajax({
				url:ctx+'/updateAdmin',
				method:'post',
				dataType:'json',
				data : JSON.stringify({
					'email':i,
					'surname':s,
					'firstName':f,
					'password':p
				}),
				contentType:'application/json',
				 success : (data)=>{
					 alert('홈');
						$('body').empty();
						$('.header').empty();
						hyunseok.navbar.init();
						hyunseok.home.init();			          
			        },
			        error : (x,s,m)=>{
			            alert('글 게시시 에러발생'+m+'\n x에러: '+x+'\n s에러'+s);
			       }
			})
		
			});
		
		$('#new-admin-update-btn').click(e=>{
			alert('새 관리자 정보 수정 ');	
			var r=$('#w3-input-email1').val();			
			var p=$('#w3-input-password1').val();
			alert('email'+r);
			alert('password'+p);
			e.preventDefault();
			$.ajax({
				url:ctx+'/updateAdmin/new',
				method:'post',
				dataType:'json',
				data : JSON.stringify({
					'email':r,				
					'password':p
				}),
				contentType:'application/json',
				success : (data)=>{
					alert('ajax 통신:'+data.success);			          
					alert('홈');
					$('body').empty();
					$('.header').empty();
					hyunseok.navbar.init();
					hyunseok.home.init();
				},
				error : (x,s,m)=>{
					alert('글 게시시 에러발생'+m+'\n x에러: '+x+'\n s에러'+s);
				}
			})	
			
		});
		$('#admin-update-btn-cancel').click(e=>{
			alert('관리자 정보 수정 취소');
			$.getJSON(ctx+'/admin/now',data=>{
				$('#w3-input-email').val(data.email);			
				$('#w3-input-firstname').val(data.firstname);
				$('#w3-input-surname').val(data.surname);
				$('#w3-input-password').val(data.password);
			});
			
			});
		
		$('#new-admin-update-btn-cancel').click(e=>{
			alert('새 관리자 정보 수정 취소');
			$('#w3-input-email1').val("");
			$('#w3-input-password1').val("");
		});

	};
	return {init:init};
})();
hyunseok.member=(()=>{
	var init=()=>{	
		ctx=$$('x');
		onCreate();
	};
	
	var onCreate=()=>{
		$('body').empty();
		$('body').append(hyunseok.navbar.init());
		$('body').append(hyunseok.compUI.member());

		
	   $.getJSON(ctx+'/a/list/member/1',data=>{
		var memberList='';
		var pagination='';
	    var start_page=data.startPage;
		var end_page=data.endPage;
		var page_num=data.pageNum;
		var page_size=data.pageSize;
		var total_page=data.totalPage;
		var block_size=data.blockSize;
		console.log('start_page '+start_page )
		console.log('end_page '+end_page )
		console.log('page_num '+page_num )
		console.log('page_size '+page_size)
		console.log('total_page'+total_page)
		console.log('block_size '+block_size )
		console.log(data.count);
		if(data.count==0){
			memberList +='<tr><td colspan=6>'
			+'등록된 게시글이 없습니다</td>'
			+'</tr>';

		}else{
			for(var i=start_page;i<=page_size;i++){
				memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
				+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
				+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
			};
			
			}
			$('#memberList-tab').append(memberList);
			
			
	
			for(var i=start_page;i<=end_page;i++){
				pagination+='<li><a onclick="hyunseok.member.list('+i+')"><p style="cursor: pointer">'+i+'</p></a></li>';
			}
			
			if(parseInt(block_size)<parseInt(total_page)){
				pagination+=
					   '<li>'
				       +'<a aria-label="Next">'
				        +'<button aria-hidden="true" id="next">&raquo;</button>'
				        +'</a>'
				        +'</li>';
			}
			
			
			
		$('#paging').append(pagination);
		
		$('#next').click(e=>{
			alert('next');	
		var i=(parseInt(start_page)+parseInt(block_size));
			hyunseok.member.list(i);
		});
	});

	   $(document).keypress(function(e) {
		    if(e.which == 13) {
		          	$('#member-search-btn').click();
		    }
		});
   
	  
	
	   	$('#member-search-btn').click(e=>{
			alert('멤버 검색');
			var k=$('#searchContent').val();
			alert('searchContent'+k);
			if(k==""){
				alert('검색어를 입력해 주세요');
			};
			e.preventDefault();
			$.ajax({
				url:ctx+'/search/'+k+'/1',
				method:'get',
				dataType:'json',		
				contentType:'application/json',
			success : (data)=>{
			        alert('ajax 통신:'+data.success);		
			        var memberList='';
			   		var pagination='';
			   	    var start_page=data.startPage;
			   		var end_page=data.endPage;
			   		var page_num=data.pageNum;
			   		var page_size=data.pageSize;
			   		var total_page=data.totalPage;
			   		var block_size=data.blockSize;
			   		console.log('start_page '+start_page )
			   		console.log('end_page '+end_page )
			   		console.log('page_num '+page_num )
			   		console.log('page_size '+page_size)
			   		console.log('total_page'+total_page)
			   		console.log('block_size '+block_size )
			   		console.log(data.count);
			   		if(data.count==0){
			   			memberList +='<tr><td colspan=6>'
			   			+'등록된 회원이 없습니다</td>'
			   			+'</tr>';

			   		}else{
			   			if(parseInt(data.count)>=parseInt(end_page)*parseInt(page_size)){
			   				alert('AA');
			   				for(var i=(page_num-1)*page_size+1;i<=page_num*page_size;i++){
			   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
			   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
			   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
			   				};
			   			}else{
			   				if(page_num==end_page){
			   					alert('BB');
			   				page_size=data.count-page_size*(page_num-1);
			   				console.log('page_size'+page_size);
			   				console.log('i=='+parseInt((parseInt(page_num)-1)*parseInt(page_size)));
			   				console.log('i<'+parseInt((parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size)+parseInt(1)));
			   				
			   				for(var i=+parseInt((parseInt(page_num)-1)*parseInt(page_size));i<parseInt((parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size));i++){
			   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
			   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
			   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
			   				};
			   					}
			   				else{
			   					alert('CC');
			   				for(var i=(parseInt(page_num)-1)*parseInt(page_size)+1;i<=(parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size);i++){
			   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
			   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
			   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
			   				};};
			   				
			   			};		
			   			}
			   			$('#memberList-tab').html(memberList);
			    
					for(var i=start_page;i<=end_page;i++){
						console.log('!!!!!'+k);
						
						pagination+='<li><a onclick="hyunseok.member.search('+i+','+'\''+k+'\''+')"><p style="cursor: pointer">'+i+'</p></a></li>';
					}
					if(parseInt(block_size)<parseInt(total_page)){
						pagination+=
							   '<li>'
						       +'<a aria-label="Next">'
						        +'<button aria-hidden="true" id="next">&raquo;</button>'
						        +'</a>'
						        +'</li>';
					}
					
				$('#paging').html(pagination);
			 		 }
				 		
			});
	   	});
	   	
		$('#btn-mem-del-171031').click(e=>{
	   		e.preventDefault();
	   		if($("input:checkbox[name=check]:checked").length==0){
	   			alert("삭제할 계정을 선택해주세요!");
	   		}else{		
	   			var selected_emails='';
	   		$.each($('#memberList-tab tr'),i=>{
	   			console.log(i);
	   			console.log('check'+$('#check-'+i).prop("checked"));
	   			var check=$('#check-'+i).prop("checked");
	   		  		 if(check==true){
	   		  			  selected_emails+=$('#email-'+i).text()+',';
	   				alert(selected_emails);
	   			
	   			
	   				};
	   		});
	   		$.ajax({
					url:ctx+'/delete/email',
					method:'post',
					dataType:'json',
					data : JSON.stringify({
						'selected_emails':selected_emails						
					}),
					contentType:'application/json',
					 success : (data)=>{
						 	
						 	hyunseok.member.list(1);
						
				        }
				      
				})

	   		};
	   	});

	   	$('#btn-member-update').click(e=>{
	   		e.preventDefault();
			alert('member update');
					
			
			if($("input:checkbox[name=check]:checked").length==1){
				$.each($('#memberList-tab tr'),(i)=>{
					console.log('check'+$('#check-'+i).prop("checked"));
					var check=$('#check-'+i).prop("checked");
					if(check==true){
						var k=$('#email-'+i).text();
						var f=$('#firstname-'+i).text();
						var s=$('#surname-'+i).text();
						var c=$('#country-'+i).text();
						
						alert(k);
						
						$('body').empty();
						hyunseok.navbar.init();
						$('body').append(hyunseok.compUI.memberUpdate());
						hyunseok.memberUpdate.init();
						$('#ac-email').val(k);
						if(f==="null"){$('#ac-first-name').val(""); }else{$('#ac-first-name').val(f);};
						if(s==="null"){$('#ac-last-name').val(""); }else{$('#ac-last-name').val(s);};
						if(c==="null"){$('#ac-locale').val(""); }else{$('#ac-locale').val(c);};
						
						
						
					};
				});
			}else if($("input:checkbox[name=check]:checked").length==0){
				alert("계정을 선택해주세요");
			}else{
				alert("계정 하나만 선택해주세요");
			};
	  
				  
			});
		
		
	};

	var search=(i,k)=>{
		$('body').empty();
		$('body').append(hyunseok.navbar.init());
		$('body').append(hyunseok.compUI.member());
			$(document).ready(()=>{
			$.ajax({
					url:ctx+'/search/'+k+'/'+i,
					method:'get',
					dataType:'json',
					contentType:'application/json',
					 success : (data)=>{
						   	var memberList='';
					   		var pagination='';
					   	    var start_page=data.startPage;
					   		var end_page=data.endPage;
					   		var page_num=data.pageNum;
					   		var page_size=data.pageSize;
					   		var total_page=data.totalPage;
					   		var block_size=data.blockSize;
					   		console.log('start_page '+start_page )
					   		console.log('end_page '+end_page )
					   		console.log('page_num '+page_num )
					   		console.log('page_size '+page_size)
					   		console.log('total_page'+total_page)
					   		console.log('block_size '+block_size )
					   		console.log(data.count);
					   		if(data.count==0){
					   			memberList +='<tr><td colspan=6>'
					   			+'등록된 회원이 없습니다</td>'
					   			+'</tr>';

					   		}else{
					   			if(parseInt(data.count)>=parseInt(end_page)*parseInt(page_size)){
					   				alert('AA');
					   				for(var i=(page_num-1)*page_size+1;i<=page_num*page_size;i++){
					   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
					   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
					   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
					   				};
					   			}else{
					   				if(page_num==end_page){
					   					alert('BB');
					   				page_size=data.count-page_size*(page_num-1);
					   				console.log('page_size'+page_size);
					   				console.log('i=='+parseInt((parseInt(page_num)-1)*parseInt(page_size)));
					   				console.log('i<'+parseInt((parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size)+parseInt(1)));
					   				
					   				for(var i=+parseInt((parseInt(page_num)-1)*parseInt(page_size));i<parseInt((parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size));i++){
					   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
					   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
					   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
					   				};
					   					}
					   				else{
					   					alert('CC');
					   				for(var i=(parseInt(page_num)-1)*parseInt(page_size)+1;i<=(parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size);i++){
					   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
					   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
					   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
					   				};};
					   				
					   			};		
					   			}
					   			$('#memberList-tab').html(memberList);
					    
					   	if(parseInt(start_page)!=1){
								pagination+=
								    '<li>'
							       +'<a aria-label="Previous">'
							        +'<button aria-hidden="true" id="prev">&laquo;</button>'
							        +'</a>'
							        +'</li>';
							};
							for(var i=parseInt(start_page);i<=parseInt(end_page);i++){
								pagination+='<li><a onclick="hyunseok.member.search('+i+','+'\''+k+'\''+')"><p style="cursor: pointer">'+i+'</p></a></li>';
							}
							if(parseInt(end_page)<parseInt(total_page)){
								pagination+=
									   '<li>'
								       +'<a aria-label="Next">'
								        +'<button aria-hidden="true" id="next">&raquo;</button>'
								        +'</a>'
								        +'</li>';
							}
							$('#paging').append(pagination);
						$('#prev').click(e=>{
							alert('previous');
							console.log(start_page);
							console.log(block_size);
						
						var i=(parseInt(start_page)-parseInt(block_size));
						console.log(i);
							hyunseok.member.search(i);
						});
						$('#next').click(e=>{
							alert('next');
							console.log(start_page);
							console.log(block_size);
						
							var i=(parseInt(start_page)+parseInt(block_size));
							console.log(i);
								hyunseok.member.search(i);
						});
					 },
				        error : (x,s,m)=>{
				            alert('글 게시시 에러발생'+m+'\n x에러: '+x+'\n s에러'+s);
				       }
				})	
			});			
			
			 $(document).keypress(function(e) {
				    if(e.which == 13) {
				          	$('#member-search-btn').click();
				    }
				});
	
			$('#member-search-btn').click(e=>{
				alert('멤버 검색');
				var k=$('#searchContent').val();
				alert('searchContent'+k);
				if(k==""){
					alert('검색어를 입력해 주세요');
				};
				e.preventDefault();
				$.ajax({
					url:ctx+'/search/'+k+'/1',
					method:'get',
					dataType:'json',		
					contentType:'application/json',
				success : (data)=>{
				        alert('ajax 통신:'+data.success);		
				        var memberList='';
				   		var pagination='';
				   	    var start_page=data.startPage;
				   		var end_page=data.endPage;
				   		var page_num=data.pageNum;
				   		var page_size=data.pageSize;
				   		var total_page=data.totalPage;
				   		var block_size=data.blockSize;
				   		console.log('start_page '+start_page )
				   		console.log('end_page '+end_page )
				   		console.log('page_num '+page_num )
				   		console.log('page_size '+page_size)
				   		console.log('total_page'+total_page)
				   		console.log('block_size '+block_size )
				   		console.log(data.count);
				   		if(data.count==0){
				   			memberList +='<tr><td colspan=6>'
				   			+'등록된 회원이 없습니다</td>'
				   			+'</tr>';

				   		}else{
				   			if(parseInt(data.count)>=parseInt(end_page)*parseInt(page_size)){
				   				alert('AA');
				   				for(var i=(page_num-1)*page_size+1;i<=page_num*page_size;i++){
				   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
				   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
				   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
				   				};
				   			}else{
				   				if(page_num==end_page){
				   					alert('BB');
				   				page_size=data.count-page_size*(page_num-1);
				   				console.log('page_size'+page_size);
				   				console.log('i=='+parseInt((parseInt(page_num)-1)*parseInt(page_size)));
				   				console.log('i<'+parseInt((parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size)+parseInt(1)));
				   				
				   				for(var i=+parseInt((parseInt(page_num)-1)*parseInt(page_size));i<parseInt((parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size));i++){
				   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
				   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
				   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
				   				};
				   					}
				   				else{
				   					alert('CC');
				   				for(var i=(parseInt(page_num)-1)*parseInt(page_size)+1;i<=(parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size);i++){
				   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
				   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
				   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
				   				};};
				   				
				   			};		
				   			}
				   			$('#memberList-tab').html(memberList);
				    
						for(var i=start_page;i<=end_page;i++){
							console.log('!!!!!'+k);
							
							pagination+='<li><a onclick="hyunseok.member.search('+i+','+'\''+k+'\''+')"><p style="cursor: pointer">'+i+'</p></a></li>';
						}
						if(parseInt(block_size)<parseInt(total_page)){
							pagination+=
								   '<li>'
							       +'<a aria-label="Next">'
							        +'<button aria-hidden="true" id="next">&raquo;</button>'
							        +'</a>'
							        +'</li>';
						}
						
					$('#paging').html(pagination);
				 		 }
					 		
				});
		   	});
			
			
			
			$.ajax({
				url:ctx+'/search/'+k+'/1',
				method:'get',
				dataType:'json',		
				contentType:'application/json',
			success : (data)=>{
	   		
	   		$('#btn-mem-del-171031').click(e=>{
		   		e.preventDefault();
		   		if($("input:checkbox[name=check]:checked").length==0){
		   			alert("삭제할 계정을 선택해주세요!");
		   		}else{		
		   			var selected_emails='';
		   		$.each($('#memberList-tab tr'),i=>{
		   			console.log(i);
		   			console.log('check'+$('#check-'+i).prop("checked"));
		   			var check=$('#check-'+i).prop("checked");
		   		  		 if(check==true){
		   		  			  selected_emails+=$('#email-'+i).text()+',';
		   				alert(selected_emails);
		   				};
		   		});
		   		$.ajax({
						url:ctx+'/delete/email',
						method:'post',
						dataType:'json',
						data : JSON.stringify({
							'selected_emails':selected_emails						
						}),
						contentType:'application/json',
						 success : (data)=>{
							 	
							 	hyunseok.member.list(1);
							
					        },
					        error : (x,s,m)=>{
					            alert('글 게시시 에러발생'+m+'\n x에러: '+x+'\n s에러'+s);
					       }
					})

		   		};
		   	});}});
			
			
	$.ajax({
			url:ctx+'/search/'+k+'/1',
			method:'get',
			dataType:'json',		
			contentType:'application/json',
			success : (data)=>{
				 var memberList='';
			   		var pagination='';
			   	    var start_page=data.startPage;
			   		var end_page=data.endPage;
			   		var page_num=data.pageNum;
			   		var page_size=data.pageSize;
			   		var total_page=data.totalPage;
			   		var block_size=data.blockSize;
	  $('#btn-member-update').click(e=>{
	   		e.preventDefault();
			alert('member update');
			if($("input:checkbox[name=check]:checked").length==1){
				 
				page_size= data.count-(page_num-1)*page_size;
				alert(page_size);
				for(var i=+parseInt((parseInt(page_num)-1)*parseInt(page_size));i<parseInt((parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size));i++){
					console.log('check'+$('#check-'+i).prop("checked"));
					var check=$('#check-'+i).prop("checked");
					if(check==true){
						var k=$('#email-'+i).text();
						var f=$('#firstname-'+i).text();
						var s=$('#surname-'+i).text();
						var c=$('#country-'+i).text();
						
						alert(k);
						$('body').empty();
						hyunseok.navbar.init();
						$('body').append(hyunseok.compUI.memberUpdate());
						hyunseok.memberUpdate.init();
						$('#ac-email').val(k);
						if(f==="null"){$('#ac-first-name').val(""); }else{$('#ac-first-name').val(f);};
						if(s==="null"){$('#ac-last-name').val(""); }else{$('#ac-last-name').val(s);};
						if(c==="null"){$('#ac-locale').val(""); }else{$('#ac-locale').val(c);};
						};
				};
			}else if($("input:checkbox[name=check]:checked").length==0){
				alert("계정을 선택해주세요");
			}else{
				alert("계정 하나만 선택해주세요");
			};
	  
				  
			});}});
		
		

		};	
		
var list=(i)=>{
	$('body').empty();
	$('body').append(hyunseok.navbar.init());
	$('body').append(hyunseok.compUI.member());
   $.getJSON(ctx+'/a/list/member/'+i,data=>{
	var memberList='';
	var pagination='';
    var start_page=data.startPage;
	var end_page=data.endPage;
	var page_num=data.pageNum;
	var page_size=data.pageSize;
	var total_page=data.totalPage;
	var block_size=data.blockSize;
	console.log('start_page '+start_page )
	console.log('end_page '+end_page )
	console.log('page_num '+page_num )
	console.log('page_size '+page_size)
	console.log('total_page'+total_page)
	console.log('block_size '+block_size )
	console.log(data.count);
	if(data.count==0){
		memberList +='<tr><td colspan=6>'
		+'등록된 게시글이 없습니다</td>'
		+'</tr>';

	}else{
		if(parseInt(data.count)>=parseInt(end_page)*parseInt(page_size)){
			for(var i=(page_num-1)*page_size+1;i<=page_num*page_size;i++){
				memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
				+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
				+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
			};
		}else{
			if(page_num==end_page){
		
			page_size=data.count-page_size*(page_num-1);
			for(var i=(parseInt(page_num)-1)*parseInt(page_size)+1;i<=(parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size);i++){
				memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
				+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
				+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
			};
				}
			else{
			for(var i=(parseInt(page_num)-1)*parseInt(page_size)+1;i<=(parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size);i++){
				memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
				+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
				+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
			};};
			
		};		
		}
		$('#memberList-tab').append(memberList);
		
		if(parseInt(start_page)!=1){
			pagination+=
			    '<li>'
		       +'<a aria-label="Previous">'
		        +'<button aria-hidden="true" id="prev">&laquo;</button>'
		        +'</a>'
		        +'</li>';
		};
		
		
		for(var i=parseInt(start_page);i<=parseInt(end_page);i++){
			pagination+='<li><a onclick="hyunseok.member.list('+i+')"><p style="cursor: pointer">'+i+'</p></a></li>';
		}
		
		if(parseInt(end_page)<parseInt(total_page)){
			pagination+=
				   '<li>'
			       +'<a aria-label="Next">'
			        +'<button aria-hidden="true" id="next">&raquo;</button>'
			        +'</a>'
			        +'</li>';
		}
		
	$('#paging').append(pagination);
	$('#prev').click(e=>{
		alert('previous');
		console.log(start_page);
		console.log(block_size);
	
	var i=(parseInt(start_page)-parseInt(block_size));
	console.log(i);
		hyunseok.member.list(i);
	});
	$('#next').click(e=>{
		alert('next');
		console.log(start_page);
		console.log(block_size);
	
		var i=(parseInt(start_page)+parseInt(block_size));
		console.log(i);
			hyunseok.member.list(i);
	});
		
	});
   
   $(document).keypress(function(e) {
	    if(e.which == 13) {
	          	$('#member-search-btn').click();
	    }
	});

  	$('#member-search-btn').click(e=>{
		alert('멤버 검색');
		var k=$('#searchContent').val();
		alert('searchContent'+k);
		if(k==""){
			alert('검색어를 입력해 주세요');
		};
		e.preventDefault();
		$.ajax({
			url:ctx+'/search/'+k+'/1',
			method:'get',
			dataType:'json',		
			contentType:'application/json',
		success : (data)=>{
		        alert('ajax 통신:'+data.success);		
		        var memberList='';
		   		var pagination='';
		   	    var start_page=data.startPage;
		   		var end_page=data.endPage;
		   		var page_num=data.pageNum;
		   		var page_size=data.pageSize;
		   		var total_page=data.totalPage;
		   		var block_size=data.blockSize;
		   		console.log('start_page '+start_page )
		   		console.log('end_page '+end_page )
		   		console.log('page_num '+page_num )
		   		console.log('page_size '+page_size)
		   		console.log('total_page'+total_page)
		   		console.log('block_size '+block_size )
		   		console.log(data.count);
		   		if(data.count==0){
		   			memberList +='<tr><td colspan=6>'
		   			+'등록된 회원이 없습니다</td>'
		   			+'</tr>';

		   		}else{
		   			if(parseInt(data.count)>=parseInt(end_page)*parseInt(page_size)){
		   				alert('AA');
		   				for(var i=(page_num-1)*page_size+1;i<=page_num*page_size;i++){
		   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
		   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
		   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
		   				};
		   			}else{
		   				if(page_num==end_page){
		   					alert('BB');
		   				page_size=data.count-page_size*(page_num-1);
		   				
		   				for(var i=+parseInt((parseInt(page_num)-1)*parseInt(page_size));i<parseInt((parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size));i++){
		   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
		   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
		   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
		   				};
		   					}
		   				else{
		   					alert('CC');
		   				for(var i=(parseInt(page_num)-1)*parseInt(page_size)+1;i<=(parseInt(page_num)-1)*parseInt(page_size)+parseInt(page_size);i++){
		   					memberList+='<tr id="tr-'+i+'"><td><input class="check-b" type="checkbox" id="check-'+i+'" name="check"></td><td id="email-'+i+'">'+data.list[i].email
		   					+'</td><td  id="firstname-'+i+'">'+data.list[i].firstName+'</td><td  id="surname-'+i+'">'+data.list[i].surname+'</td><td  id="country-'+i+'">'
		   					+data.list[i].country+'</td><td  id="regdate-'+i+'">'+data.list[i].regdate+'</td></tr>';
		   				};};
		   				
		   			};		
		   			}
		   			$('#memberList-tab').html(memberList);
		    
				for(var i=start_page;i<=end_page;i++){
					console.log('!!!!!'+k);
					
					pagination+='<li><a onclick="hyunseok.member.search('+i+','+'\''+k+'\''+')"><p style="cursor: pointer">'+i+'</p></a></li>';
				}
				if(parseInt(block_size)<parseInt(total_page)){
					pagination+=
						   '<li>'
					       +'<a aria-label="Next">'
					        +'<button aria-hidden="true" id="next">&raquo;</button>'
					        +'</a>'
					        +'</li>';
				}
				
			$('#paging').html(pagination);
		 		 },
			 		
		});
   	});
   	$.getJSON(ctx+'/a/list/member/'+i,data=>{
   	    var start_page=data.startPage;
   		var end_page=data.endPage;
   		var page_num=data.pageNum;
   		var page_size=data.pageSize;
   		var total_page=data.totalPage;
   		var block_size=data.blockSize;
   	$('#btn-mem-del-171031').click(e=>{
   		e.preventDefault();
   		if($("input:checkbox[name=check]:checked").length==0){
   			alert("삭제할 계정을 선택해주세요!");
   		}else{		
   			var selected_emails='';
   		for(var i=(page_num-1)*page_size+1 ;i<=page_num*page_size;i++){
   	  		console.log();
   			console.log('check'+$('#check-'+i).prop("checked"));
   			var check=$('#check-'+i).prop("checked");
   		  		 if(check==true){
   		  			  selected_emails+=$('#email-'+i).text()+',';
   				alert(selected_emails);
   		
   				};
   		};
   		$.ajax({
				url:ctx+'/delete/email',
				method:'post',
				dataType:'json',
				data : JSON.stringify({
					'selected_emails':selected_emails						
				}),
				contentType:'application/json',
				 success : (data)=>{
					 	alert("결과 :"+data.result);
					 	hyunseok.member.list(1);
					
			        },
			        error : (x,s,m)=>{
			            alert('글 게시시 에러발생'+m+'\n x에러: '+x+'\n s에러'+s);
			       }
			})

   		};
   	});});
  	$.getJSON(ctx+'/a/list/member/'+i,data=>{
   	    var start_page=data.startPage;
   		var end_page=data.endPage;
   		var page_num=data.pageNum;
   		var page_size=data.pageSize;
   		var total_page=data.totalPage;
   		var block_size=data.blockSize;
   	$('#btn-member-update').click(e=>{
   		e.preventDefault();
		alert('member update');
				
		
		if($("input:checkbox[name=check]:checked").length==1){
			for(var i=(page_num-1)*page_size+1 ;i<=page_num*page_size;i++){
				console.log('check'+$('#check-'+i).prop("checked"));
				var check=$('#check-'+i).prop("checked");
				if(check==true){
					var k=$('#email-'+i).text();
					var f=$('#firstname-'+i).text();
					var s=$('#surname-'+i).text();
					var c=$('#country-'+i).text();
					
					alert(k);
					$('body').empty();
					hyunseok.navbar.init();
					$('body').append(hyunseok.compUI.memberUpdate());
					hyunseok.memberUpdate.init();
					$('#ac-email').val(k);
					if(f==="null"){$('#ac-first-name').val(""); }else{$('#ac-first-name').val(f);};
					if(s==="null"){$('#ac-last-name').val(""); }else{$('#ac-last-name').val(s);};
					if(c==="null"){$('#ac-locale').val(""); }else{$('#ac-locale').val(c);};
					
					
					
				};
			};
		}else if($("input:checkbox[name=check]:checked").length==0){
			alert("계정을 선택해주세요");
		}else{
			alert("계정 하나만 선택해주세요");
		};
  
			  
		});});
	
	

	};
	return {init:init,list:list,search:search};
})();
hyunseok.memberUpdate=(()=>{
	var init=()=>{	
		ctx=$$('x');
		onCreate();
	};
	var onCreate=()=>{
		$('body').empty();
		$('body').append(hyunseok.navbar.init());
		$('body').append(hyunseok.compUI.memberUpdate());
			
		$('#member-update-btn').click(e=>{
			
				
			var i=$("#ac-email").val();
			var o=$("#ac-old-password").val();
			var n=$("#ac-new-password").val();
			var f=$("#ac-first-name").val();
			var l=$("#ac-last-name").val();
			var c=$("#ac-locale").val();
			e.preventDefault();
			$.ajax({
				url:ctx+'/update/member',
				method:'post',
				dataType:'json',
				data : JSON.stringify({
					'email':i,				
					'oldPassword':o,
					'newPassword':n,
					'firstName':f,
					'surname':l,
					'country':c
				}),
				contentType:'application/json',
				 success : (data)=>{
					  if(o===""){
						 alert('프로필 정보 수정!');	
						 $('body').empty();
							hyunseok.navbar.init();
							$('body').append(hyunseok.compUI.member());
							hyunseok.member.init();
					 }
					  else if(data.selectPass!=o){
						  alert('틀린 비밀번호 입니다.');	
						
					 }
					 else{ alert('계정 정보 수정!');		          
				       	$('body').empty();
						hyunseok.navbar.init();
						$('body').append(hyunseok.compUI.member());
						hyunseok.member.init();};
					
				 },
			     error : (x,s,m)=>{
			            alert('글 게시시 에러발생'+m+'\n x에러: '+x+'\n s에러'+s);
			     }
			})
			});
		$('#member-delete-btn').click(e=>{
			alert('계정 수정 취소');
			$('body').empty();
			hyunseok.navbar.init();
			$('body').append(hyunseok.compUI.member());
			hyunseok.member.init();
			
			
			});
	};
	
	return {init:init};
})();
hyunseok.airport=(()=>{
	var init=()=>{	
		onCreate();
	};
	var onCreate=()=>{
		$('body').empty();
		$('body').append(hyunseok.navbar.init());
		$('body').append(hyunseok.compUI.airport());
	
		$('#datepicker-air-search').datepicker({
			dayNames:["일", "월", "화", "수", "목", "금", "토"],
	         dayNamesMin:["일", "월", "화", "수", "목", "금", "토"],
	         monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	         monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	         dateFormat:"yy. mm. dd."
		});	
	
		// start Date 설정시 end Date의 min Date 지정
        $( '#datepicker-air-depart').datepicker({
              dateFormat: "yy-mm-dd",
              dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
              monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
              monthNamesShort: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
              defaultDate: "+1w",
              numberOfMonths: 1,
              changeMonth: true,
              showMonthAfterYear: true ,
              changeYear: true,
              minDate:"+0d",
              onClose: function( selectedDate ) {
                  $( '#datepicker-air-arrive').datepicker( "option", "minDate", selectedDate );
              }
          });
        // end Date 설정시 start Date max Date 지정
        $('#datepicker-air-arrive').datepicker({
              dateFormat: "yy-mm-dd",
              dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
              monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
              monthNamesShort: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
              defaultDate: "+1w",
              numberOfMonths: 1,
              changeMonth: true,
              showMonthAfterYear: true ,
              changeYear: true,
              minDate:"+0d",
            
          });
        // start Date 설정시 end Date 가 start Date보다 작을 경우 end Date를 start Date와 같게 설정
        $('#datepicker-air-depart').datepicker({
              dateFormat: "yy-mm-dd",
              defaultDate: "+1w",
              numberOfMonths: 1,
              changeMonth: true,
              showMonthAfterYear: true ,
              changeYear: true,
              minDate:"+0d",
              onClose: function( selectedDate ) {
                  if ($('#datepicker-air-arrive' ).val() < selectedDate)
                  {
                      $('#datepicker-air-arrive' ).val(selectedDate);
                  }
              }
          });
        // end Date 설정시 end Date 가 start Date 보다 작을 경우 start Date를  end Date와 같게 설정
        $( '#datepicker-air-arrive').datepicker({
                 dateFormat: "yy-mm-dd",
                 defaultDate: "+1w",
                 numberOfMonths: 1,
                 changeMonth: true,
                 showMonthAfterYear: true ,
                 changeYear: true,
                 minDate:"+0d",
                 onClose: function( selectedDate ) {
                     if ($('#datepicker-air-depart' ).val() > selectedDate)
                     {
                         $('#datepicker-air-depart' ).val(selectedDate);
                     }
                     
                 }
        });
        $('#btn-air-update').click(e=>{
			alert('air update!!!');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();
			$('body').append(hyunseok.compUI.airportUpdate());
			hyunseok.airportUpdate.init();});
        $('#btn-air-delete').click(e=>{
			alert('항공 노선 삭제');
			});
        $('#btn-air-add').click(e=>{
			alert('항공 노선 추가');
			});
        $('#btn-air-add-cancel').click(e=>{
			alert('항공 노선 추가 취소');
			$('.air-section-drop').val('air-drop');
			$('.air-add-section').val("");
			});

		
	};
	return {init:init};
})();
hyunseok.airportUpdate=(()=>{
	var init=()=>{	
		onCreate();
	};
	var onCreate=()=>{
		$('body').empty();
		$('body').append(hyunseok.navbar.init());
		$('body').append(hyunseok.compUI.airportUpdate());
		
		$('#datepicker-air-update').datepicker({
			dayNames:["일", "월", "화", "수", "목", "금", "토"],
	         dayNamesMin:["일", "월", "화", "수", "목", "금", "토"],
	         monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	         monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	         dateFormat:"yy. mm. dd."
		});	
	
		
		$('#btn-air-update-complete').click(e=>{
				alert('air update!!');
				$('body').empty();
				$('.header').empty();
				hyunseok.navbar.init();
			
				$('body').append(hyunseok.compUI.airport());
				hyunseok.airport.init();
				
				
				});
		$('#btn-air-update-cancel').click(e=>{
			alert('air update 취소');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();
		
			$('body').append(hyunseok.compUI.airport());
			hyunseok.airport.init();
			
			});
		
	};
	return {init:init};
})();
hyunseok.hotel=(()=>{
	var init=()=>{	
		onCreate();
		
	};
	var onCreate=()=>{
		$('body').empty();
		$('body').append(hyunseok.navbar.init());
	
		$('body').append(hyunseok.compUI.hotel());
		
		$('#datepicker-hotel-search').datepicker({
			dayNames:["일", "월", "화", "수", "목", "금", "토"],
	         dayNamesMin:["일", "월", "화", "수", "목", "금", "토"],
	         monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	         monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	         dateFormat:"yy. mm. dd."
		});	
		$('#datepicker-hotel-add').datepicker({
			dayNames:["일", "월", "화", "수", "목", "금", "토"],
	         dayNamesMin:["일", "월", "화", "수", "목", "금", "토"],
	         monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	         monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	         minDate:"+0d",
	         dateFormat:"yy. mm. dd."
	        	 
		});	
		$('#btn-hotel-update').click(e=>{
			alert('hotel update');
			$('body').empty();
			$('.header').empty();
			hyunseok.navbar.init();
			
			$('body').append(hyunseok.compUI.hotelUpdate());
			hyunseok.hotelUpdate.init();
			
			});
		  $('#btn-hotel-delete').click(e=>{
				alert('호텔 삭제');
				});
	        $('#btn-hotel-add').click(e=>{
				alert('호텔 추가');
				});
	        $('#btn-hotel-add-cancel').click(e=>{
				alert('호텔 추가 취소');
				$('.air-section-drop').val('air-drop');
				$('.air-add-section').val("");
				$('.check-n').prop("checked",false);
				
				});
		
	};
	return {init:init};
})();

hyunseok.hotelUpdate=(()=>{
	var init=()=>{	
		onCreate();
	};
	var onCreate=()=>{
		$('body').empty();
		$('body').append(hyunseok.navbar.init());
		$('body').append(hyunseok.compUI.hotelUpdate());
		
		$('#datepicker-hotel-update').datepicker({
			dayNames:["일", "월", "화", "수", "목", "금", "토"],
	         dayNamesMin:["일", "월", "화", "수", "목", "금", "토"],
	         monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	         monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	         dateFormat:"yy. mm. dd."
		});	
				$('#btn-hotel-update-complete').click(e=>{
				alert('hotel update!!');
				$('body').empty();
				$('.header').empty();
				hyunseok.navbar.init();
				$('body').append(hyunseok.compUI.hotel());
				hyunseok.hotel.init();
					});
				$('#btn-hotel-update-cancel').click(e=>{
					alert('hotel update!!');
					$('body').empty();
					$('.header').empty();
					hyunseok.navbar.init();
					$('body').append(hyunseok.compUI.hotel());
					hyunseok.hotel.init();
						});
				
	};
	return {init:init};
})();
hyunseok.introUI={
 		home : ()=>{
					return '<style>'
					+'* { box-sizing: border-box;}'
					+'body { margin: 0;}'
					+'/* Style the header */'
					+'.header {'
					+'    text-align: center;'
					+'}'
					+'.container-fluid {'
					+'    padding-right: 15px;'
					+'    padding-left: 15px;'
					+'    margin-right: auto;'
					+'    margin-left: auto;'
					+'    background-color:#00b2d6 ;'
					+'    border-color:#00b2d6 ;'
					+'    border-color:#fff ;'
					+'}'
					+'.account-settings-management{width:80%;margin:0 auto}'
					+'.	nav navbar-nav {'
					+'    background-color:#00b2d6 ;'
					+'    border-color:#00b2d6 ;'
					+'    border-color:#fff ;'
					+'  margin-left: -20%;'
					+'}'
					+'.navbar-inverse {'
					+'    background-color: #f7f3f3;'
					+'    border-color: #f7f4f4;'
					+'}'
					+'.navbar-inverse .navbar-nav>li>a {'
					+'    color: #fff;'
					+'    font-size: 15px;'
					+'}'
					+'.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {'
					+'    color: #fff;'
					+'    background-color: #00b2d6;'
					+'}'
				
					+'.row{'
					+'  width :100%;'
					+'  text-align : center;'
					+'    margin : 0 auto ;'
					+'  padding-top: 20px;'
					+'}'
					+'.panel  {'
					+'  width : 100%;'
					+'  margin-right: 10px;'
					+'  text-align : center;'
					+'    margin-left: 10px;'
					+'  }'
					+'.column {'
					+   ' float: left;'
					 +  ' width: 33.3%;'
					+    'padding: 15px;'
					+'}'
					+'.list-group {'
					+   ' float: left;'
					 +  ' width: 50%;'
					+    'padding: 15px;'
					+'}'
					+'#identity  {'
					+'  width : 20%;'
					+'  height : 20%;'
					+'  margin-top: 15px;'
					+'  }'
					+'</style>'	
					+'<body>'
					+'<div> '
					+'  <div class="row">'
					+'    <div class="column"><div class="panel panel-primary">'
					+'      <div class="panel-heading">Member Count</div>'
					+'      <div id="panel-body-member" class="panel-body"></div>'
					+'    </div></div>'
					+'      <div class="column"><div class="panel panel-primary">'
					+'      <div class="panel-heading">Airline Count</div>'
					+'      <div id="panel-body-flight" class="panel-body"></div>'
					+'  </div>  </div>'
					+'   <div class="column"><div class="panel panel-primary">'
					+'      <div class="panel-heading">Hotel Count</div>'
					+'      <div id="panel-body-hotel" class="panel-body"></div>'
					+'    </div> </div>'
					+'</div>'
					+'</div>'
					+'</body>'
					+'<div class="row">'
					+'<div class="list-group">'
					+'<button type="button" id="list-adminBtn" class="list-group-item active">1.관리자 설정</button>'
					+' <button type="button" id="list-adminBtn-admin" class="list-group-item">- 관리자 설정</button>'
					+'</div>'
					+'<div class="list-group">'
					+'<button type="button" id="list-memberBtn" class="list-group-item active">2.회원관리</button>'
					+' <button type="button" id="list-memberBtn-read" class="list-group-item">- 회원 조회</button>'
					+' <button type="button" id="list-memberBtn-update" class="list-group-item">- 탈퇴 회원 관리</button>'
					+'</div>'
					+'<div class="list-group">'
					+'<button type="button" id="list-db" class="list-group-item active">3.DB관리</button>'
					+' <button type="button" id="list-db-airport" class="list-group-item">- 항공 DB</button>'
					+' <button type="button" id="list-db-hotel" class="list-group-item">- 호텔 DB</button>'
					+' <button type="button" class="list-group-item">- 렌터카DB</button>'
					+'</div>'
					+'<div class="list-group">'
					+'<button type="button" class="list-group-item active">4.게시판 관리</button>'
					+' <button type="button" class="list-group-item">- 게시글 관리</button>'
					+'</div>'
					+'</div>'
				
					   ; },
 		navbar : ()=>{
 			return '<style>'
			+'* { box-sizing: border-box;}'
			+'body { margin: 0;}'
			+'/* Style the header */'
			+'.header {'
			+'    text-align: center;'
			+'}'
			+'.row{'
			+'  width :100%;'
			+'  text-align : center;'
			+'    margin : 0 auto ;'
			+'  padding-top: 20px;'
			+'}'
			+'.account-settings-management{width:80%;margin:0 auto}'
			+'.panel  {'
			+'  width : 100%;'
			+'  margin-right: 10px;'
			+'  text-align : center;'
			+'    margin-left: 10px;'
			+'  }'
			+'.column {'
			+   ' float: left;'
			 +  ' width: 33.3%;'
			+    'padding: 15px;'
			+'}'
			+'.list-group {'
			+   ' float: left;'
			 +  ' width: 50%;'
			+    'padding: 15px;'
			+'}'
			+'#identity  {'
			+'  width : 20%;'
			+'  height : 20%;'
			+'  margin-top: 15px;'
			+'  }'
			+'</style>'
			+'<div id="identity" class="Header__logo-wrapper-26Akq" data-reactid="22"><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211 36" class="bpk-logo bpk-logo__inline Logo__svg-l3cXE" data-reactid="24"><path d="M70.187 14.115a.577.577 0 0 1-.765.365c-.969-.373-2.065-.64-3.09-.64-1.764 0-3.426.53-3.426 2.296 0 .954.53 1.449 2.227 1.98l1.236.387c2.473.776 3.533 1.907 3.533 4.096 0 3.778-2.65 6.358-7.452 6.358-1.887 0-3.501-.296-4.87-.773-.333-.116-.493-.486-.394-.825l.565-1.96c.094-.325.456-.479.77-.353 1.237.5 2.608.839 3.822.839 2.156 0 3.673-.742 3.673-2.474 0-1.024-.706-1.411-2.296-1.907l-1.343-.423c-2.367-.777-3.427-2.19-3.427-4.45 0-3.851 3.216-5.933 7.454-5.933 1.275 0 2.732.285 3.947.702.335.114.497.486.394.824l-.558 1.891zm8.347-10.082c.33 0 .575.3.514.623l-2.6 13.436c2.45-1.787 4.59-3.887 6.48-6.324a1.27 1.27 0 0 1 1.007-.494h2.828c.272 0 .423.307.267.53-1.859 2.621-3.986 5.04-6.237 6.993l3.582 9.017a.434.434 0 0 1-.402.592h-3.005a.915.915 0 0 1-.854-.595l-2.465-6.717c-.662.446-1.346.859-2.049 1.237l-1.046 5.451a.772.772 0 0 1-.753.624h-2.582a.523.523 0 0 1-.512-.624l4.49-23.126a.768.768 0 0 1 .756-.624h2.581v.001zm13.213 7.24c.33 0 .577.302.514.626l-1.75 9.019c-.142.67-.283 1.518-.283 2.332 0 1.058.6 1.766 2.013 1.766 1.378 0 3.001-.601 4.203-1.73l2.245-11.388a.774.774 0 0 1 .756-.624h2.582c.329 0 .575.3.511.625l-2.314 11.88c-.283 1.377-.6 2.931-.882 4.168C97.999 33.528 95.456 36 90.369 36c-1.12 0-2.235-.14-3.205-.4a.687.687 0 0 1-.494-.818l.442-1.804a.616.616 0 0 1 .738-.461c.733.175 1.571.304 2.343.304 3.005 0 4.768-1.272 5.404-4.732l.25-1.308c-1.307 1.13-3.252 1.872-5.087 1.872-2.968 0-4.557-1.483-4.557-3.85 0-1.413.283-2.968.6-4.59l1.61-8.313a.773.773 0 0 1 .755-.626h2.579v-.001zm23.306 2.855a.577.577 0 0 1-.765.366c-.968-.374-2.066-.642-3.09-.642-1.764 0-3.424.532-3.424 2.297 0 .954.527 1.449 2.223 1.98l1.237.387c2.472.776 3.533 1.907 3.533 4.097 0 3.778-2.65 6.358-7.452 6.358-1.885 0-3.502-.297-4.868-.774-.334-.116-.494-.486-.397-.825l.567-1.96c.093-.325.457-.479.77-.353 1.236.5 2.607.839 3.82.839 2.155 0 3.674-.742 3.674-2.474 0-1.024-.705-1.411-2.294-1.907l-1.346-.423c-2.365-.777-3.424-2.19-3.424-4.45 0-3.851 3.214-5.933 7.454-5.933 1.275 0 2.73.285 3.946.702.332.114.494.486.393.824l-.557 1.891zm15.075.387a.526.526 0 0 1-.735.323c-.93-.425-1.982-.668-3.181-.668-3.743 0-6.007 3.216-6.007 7.313.036 2.439.92 4.063 3.676 4.098 1.22.03 2.493-.217 3.644-.613.282-.096.59.101.556.396l-.243 2.058a1.044 1.044 0 0 1-.692.868c-1.28.445-2.675.681-4.254.681-4.593 0-6.747-2.613-6.747-6.924 0-6.108 3.462-11.335 10.101-11.335 1.61 0 2.97.3 4.075.775.343.151.52.533.415.893l-.608 2.135zm2.814-1.969a.92.92 0 0 1 .618-.85c1.692-.565 3.828-.984 5.685-.984 3.531 0 5.827 1.059 5.827 4.132 0 .635-.106 1.413-.281 2.26l-1.377 7.24c-.213 1.087-.108 1.695.362 1.933.288.145.53.422.464.739l-.207 1.017c-.08.392-.377.716-.769.8a6.464 6.464 0 0 1-1.264.14c-1.592 0-2.367-.743-2.472-2.05h-.106c-1.165 1.272-2.93 2.05-5.017 2.05-3.001 0-4.943-1.518-4.943-4.556 0-4.098 3.25-7.03 10.526-7.03h.955c.104-.53.174-1.06.174-1.448 0-1.413-.707-2.05-2.93-2.05-1.415 0-3.112.338-4.713.883a.432.432 0 0 1-.572-.421l.04-1.805zm6.762 7.595c-3.567 0-6.182 1.165-6.182 3.743 0 1.132.673 1.838 2.191 1.838 1.447 0 2.967-.742 3.92-1.731l.775-3.85h-.704zm12.01-8.867c.341 0 .608.293.574.634l-.115 1.204h.034c1.73-1.449 3.957-2.4 6.111-2.4 2.685 0 4.45 1.552 4.45 4.026 0 1.2-.175 2.188-.387 3.319l-1.859 9.726a.774.774 0 0 1-.754.624h-2.582a.521.521 0 0 1-.512-.624l1.714-8.879c.178-.882.32-1.872.32-2.472 0-1.306-.708-1.977-2.192-1.977-1.623 0-3.461.845-4.767 2.082l-2.142 11.246a.77.77 0 0 1-.752.624h-2.581a.523.523 0 0 1-.516-.624l3.045-15.884a.768.768 0 0 1 .752-.625h2.159zm17.485 0a.58.58 0 0 1 .575.634l-.117 1.204h.035c1.731-1.449 3.955-2.4 6.109-2.4 2.686 0 4.452 1.552 4.452 4.026 0 1.2-.178 2.188-.388 3.319l-1.86 9.726a.772.772 0 0 1-.754.624h-2.582a.525.525 0 0 1-.515-.624l1.72-8.879c.176-.882.317-1.872.317-2.472 0-1.306-.707-1.977-2.191-1.977-1.624 0-3.46.845-4.768 2.082l-2.14 11.246a.771.771 0 0 1-.755.624h-2.582a.525.525 0 0 1-.516-.624l3.047-15.884a.768.768 0 0 1 .755-.625h2.158zm16.53 10.208c-.06.517-.05 1.04.035 1.555.318 1.73 1.66 2.578 3.92 2.578 1.578 0 3.234-.243 4.689-.706.28-.089.57.126.532.418l-.235 1.955c-.046.382-.289.721-.654.849-1.6.559-3.41.84-5.11.84-4.873 0-7.24-2.084-7.24-6.816 0-4.099 1.34-7.877 4.239-9.89 1.448-1.026 3.25-1.553 5.51-1.553 4.097 0 5.898 2.328 5.898 5.792 0 1.193-.142 2.781-.471 4.388-.073.355-.402.59-.764.59h-10.349zm7.416-2.79c.18-.668.275-1.357.283-2.049 0-1.59-.705-2.72-2.506-2.72-2.614 0-4.205 1.908-4.769 4.769h6.992zm10.495-7.418a.59.59 0 0 1 .588.634l-.098 1.38h.07c1.308-1.59 3.217-2.402 5.017-2.402a7.2 7.2 0 0 1 .514.016c.337.021.527.376.426.697l-.715 2.285c-.113.365-.468.597-.85.613-1.784.077-3.508.587-4.674 1.406l-2.28 11.88a.773.773 0 0 1-.756.624h-2.58a.524.524 0 0 1-.515-.624l3.046-15.884a.77.77 0 0 1 .752-.625h2.055zM28.247 14.713c4.78-4.781 11.05-7.158 17.318-7.152l.05.001c.57 1.336.901 2.763.978 4.214a20.283 20.283 0 0 0-1-.025l-.028.002-.026-.002a20.127 20.127 0 0 0-14.322 5.933 20.126 20.126 0 0 0-5.934 14.321l.003.072H21.09c-.017-6.282 2.361-12.572 7.156-17.365l.001.001zm24.843 8.02c.03-.329.046-.662.046-.999 0-1.604-.369-3.12-1.023-4.473a16.159 16.159 0 0 0-6.548-1.371 16.06 16.06 0 0 0-11.43 4.715 16.063 16.063 0 0 0-4.716 11.473h4.21c-.018-3.08 1.132-6.162 3.475-8.505a11.87 11.87 0 0 1 8.25-3.473v-.003l.211.002.213-.002v.003c2.597.038 5.183.913 7.312 2.633zm-42.019-4.917l-.002-.017.002.017zm40.225 8.491a8.011 8.011 0 0 0-5.518-2.353v.002l-.213-.002-.212.002v-.002a8.014 8.014 0 0 0-5.517 2.353 8.02 8.02 0 0 0-2.35 5.772h4.04c.265-1.35.51-2.032 1.28-2.803a3.83 3.83 0 0 1 2.76-1.11 3.83 3.83 0 0 1 2.76 1.11c.263.264.473.558.642.869a10.095 10.095 0 0 0 2.851-3.258 7.998 7.998 0 0 0-.523-.58zm-34.17 5.7c0-14.844 11.382-27.026 25.895-28.301A12.408 12.408 0 0 0 34.164 0c-6.382 0-11.64 4.8-12.368 10.985a7.013 7.013 0 0 0-3.737-1.074c-3.89 0-7.432 3.892-6.988 7.905a7.562 7.562 0 1 0-4.603 14.183c.287.05.582.08.883.08h9.775v-.074.002zM11.06 17.718l.009.08-.009-.08z" data-reactid="25"></path></svg><span class="visually-hidden" data-reactid="26"></span></a></div>'
			+'</br>'
			+'</br>'
			+'</br>'
			+'</br>'
			+'<body>'
			+'<div class="header">'
			+'</div>'
			+'<nav class="navbar navbar-inverse">'
			+'  <div class="container-fluid">'
			+'<div class="topnav">'
			+'<ul class="nav navbar-nav">'
			+'  <li class="active"><a id="homeBtn">HOME</a></li>'
			+'  <li> <a id="adminBtn">관리자 설정</a></li>'
			+'  <li class="dropdown">'
			+'    <a class="dropdown-toggle" data-toggle="dropdown">회원 관리'
			+'    <span class="caret"></span></a>'
			+'    <ul class="dropdown-menu">'
			+'      <li><a  id="memberBtn"">회원 관리</a></li>'
			+'       <li><a >탈퇴회원관리</a></li>'
			+'    </ul>'
			+' </li>'
			+'  <li class="dropdown">'
			+'    <a class="dropdown-toggle" data-toggle="dropdown">DB 관리'
			+'    <span class="caret"></span></a>'
			+'    <ul class="dropdown-menu">'
			+'      <li><a  id="dbBtn"">항공 DB</a></li>'
			+'       <li><a id="hotelBtn">호텔 DB</a></li>'
			+'       <li><a >렌터카 DB</a></li>'
			+'    </ul>'
			+' </li>'
		    +'  <li><a id="boardBtn">게시판 관리</a></li>'
		   	+'  </ul>'
			+'</div>'
			+' </div>'
			+'</nav>'
					   
 			;}
};

hyunseok.compUI={
		  br    :()=>{return $('<br/>');},
	      div   : x=>{return $('<div/>',{id:x});},
	      h1    : x=>{return $('<h1/>',{id:x});},
	      span  : x=>{return $('<span/>',{id:x});},
	      iTxt  : x=>{return $('<input/>',{id:x,type:'text'});},
	      aBtn  : x=>{return $('<a>',{href:'#', role: 'button', id:x});},
	      iBtn  : x=>{return $('<input/>',{id:x,type:'button'});},
	      image : (x,y)=>{return $('<img/>',{id:x,src:y});},
	      input : (x,y)=>{return $('<input/>',{id:x,type:y});},
	      table : x=>{return $('<table/>',{id:x , class:'table'});},
	      thead : x=>{return $('<thead/>',{id:x})},
	      tbody : x=>{return $('<tbody/>',{id:x})},
	      tr : x=>{return $('<tr/>',{id:x})},
	      th : ()=>{return $('<th/>')},
	      td : ()=>{return $('<td/>')},
	      idTag : (x)=>{return $('<'+x+'/>')},
	      tag : (x,y)=> {return $('<'+x+'/>')},
	    
	      admin : ()=>{ 
			return '<style>'
			+'* { box-sizing: border-box;}'
			+'body { margin: 0;}'
			+'/* Style the header */'
			+'.header {'
			+'    text-align: center;'
			+'}'
			+'.account-settings-management{width:80%;margin:0 auto}'
			+'.container-fluid {'
			+'    padding-right: 15px;'
			+'    padding-left: 15px;'
			+'    margin-right: auto;'
			+'    margin-left: auto;'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.	nav navbar-nav {'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'    margin-left:-20%;'
			+'}'
			+'.navbar-inverse {'
			+'    background-color: #f7f3f3;'
			+'    border-color: #f7f4f4;'
			+'}'
			+'.navbar-inverse .navbar-nav>li>a {'
			+'    color: #fff;'
			+'    font-size: 15px;'
			+'}'
			+'.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {'
			+'    color: #fff;'
			+'    background-color: #00b2d6;'
			+'}'
			+'.row{'
			+'  width :100%;'
			+'  text-align : center;'
			+'    margin : 0 auto ;'
			+'  padding-top: 20px;'
			+'}'
			+'.w3-container{'
			 +  ' width: 90%;'
			 +  ' heigth: 80%;'
			+    'padding: 15px;'
			+'    margin : 0 auto ;'
			+'  margin-top: 30px;'
			+'}'
	
			+'.btn-div-admin  {'
			+'  margin: 0 auto;'
			+'  text-align : center;'
			+'  }'
			+'#identity  {'
			+'  width : 20%;'
			+'  height : 20%;'
			+'  margin-top: 15px;'
			+'  }'
			+'.title-h1  {'
			+'  width : 30%;'
			+'  margin-top: 50px;'
			+'  margin-left: 10%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 40px;'
			+'  }'
			+'fieldset{'
			+'  border :0px solid;'
			+'  text-align :center;'
			+'}'
			+'#admin-update-btn{'
			+'    height: auto;'
			+'    line-height: 300%;'
			+'    background: #39a8ee;'
			+'    color: #fff;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 20%;'
			+'    position: static;'
			+'}'

			+'#admin-update-btn-cancel{'
			+'    height: auto;'
			+'    line-height: 300%;'
			+'    color: #black;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    margin-left: 2%;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 20%;'
			+'    position: static;'
			+'}'
			+'#new-admin-update-btn{'
			+'    height: auto;'
			+'    line-height: 300%;'
			+'    background: #39a8ee;'
			+'    color: #fff;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 20%;'
			+'    position: static;'
			+'}'

			+'#new-admin-update-btn-cancel{'
			+'    height: auto;'
			+'    line-height: 300%;'
			+'    color: #black;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    margin-left: 2%;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 20%;'
			+'    position: static;'
			+'}'
			+'</style>'	
			+'<body>'
			+'  <h1 class="title-h1">관리자 설정</h1>'
			+'<body class="w3-container">'
			+'<div class="w3-container w3-blue">'
			+'  <h3>기존 관리자</h3>'
			+'</div>'
			+'<form class="w3-container">'
			+'  <label>이메일 주소</label>'
			+'  <input class="w3-input" id="w3-input-email" value=""></input>'
			+'  <label>이름</label>'
			+'  <input class="w3-input" id="w3-input-surname" value=""></input>'
			+'  <label>성</label>'
			+'  <input class="w3-input" id="w3-input-firstname" value=""></input>'
			+'  <label>비밀 번호</label>'
			+'  <input class="w3-input" id="w3-input-password" value="" type="password"></input>'
			+'</form>'
			+'<fieldset class="buttons">'
			+'<button id="admin-update-btn"class="btn-info-admin ">정보 수정</button>'
			+'<button id="admin-update-btn-cancel" class="btn-info-admin ">취소</button>'
			+'</fieldset>'
			
			+'</body>'			
			+'<div class="w3-container w3-blue">'
			+'  <h3>새 관리자</h3>'
			+'</div>'
			+'<form class="w3-container">'
			+'  <label>이메일 주소</label>'
			+'  <input class="w3-input" id="w3-input-email1" type="text" >'
			+'  <label>비밀 번호</label>'
			+'  <input class="w3-input" id="w3-input-password1" type="password" >'
			+'</form>'
			+'<fieldset class="buttons">'
			+'<button id="new-admin-update-btn"class="btn-info-admin ">관리자 설정</button>'
			+'<button id="new-admin-update-btn-cancel" class="btn-info-admin ">취소</button>'
			+'</fieldset>'
			+'</body>'
			
		},
		member : ()=>{
						
			var member= '<style>'
			+'* { box-sizing: border-box;}'
			+'body { margin: 0;}'
			+'/* Style the header */'
			+'.header {'
			+'    text-align: center;'
			+'}'
			+'.account-settings-management{width:80%;margin:0 auto}'
			+'.container-fluid {'
			+'    padding-right: 15px;'
			+'    padding-left: 15px;'
			+'    margin-right: auto;'
			+'    margin-left: auto;'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.	nav navbar-nav {'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.navbar-inverse {'
			+'    background-color: #f7f3f3;'
			+'    border-color: #f7f4f4;'
			+'}'
			+'.navbar-inverse .navbar-nav>li>a {'
			+'    color: #fff;'
			+'    font-size: 15px;'
			+'}'
			+'.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {'
			+'    color: #fff;'
			+'    background-color: #00b2d6;'
			+'}'
			+'.row{'
			+'  width :100%;'
			+'  text-align : center;'
			+'    margin : 0 auto ;'
			+'  padding-top: 2%;'
			+'}'
			+'.column {'
			+'    margin-left : 2% ;'
			+'    margin-right :2% ;'
     		 +  ' width: 25%;'
			+    'padding: 0.5%;'
			+    'padding-left: 2%;'
				+'text-size:15px;'
				+'  text-align : left;'
				+'border:1px solid blue;'
			+'}'
			+'.column-check-p{'
			+'font-size: 20px;'	
			+'color: #008ca8;'
			+'  }'
			+'.w3-container{'
			 +  ' width: 90%;'
			 +  ' heigth: 80%;'
			+    'padding: 15px;'
			+'    margin : 0 auto ;'
			+'  margin-top: 30px;'
			+'}'
	
			+'#identity  {'
			+'  width : 20%;'
			+'  height : 20%;'
			+'  margin-top: 15px;'
			+'  }'
			+'.title-h1  {'
			+'  width : 50%;'
			+'  margin-top: 5%;'
			+'  margin-left:10%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 40px;'
			+'  }'
			+'.title-h2  {'
			+'  width : 20%;'
			+'    text-align: center;'
			+'  margin-top: 30px;'
			+'  margin-bottom: 15px;'
			+'  margin-left: 100px;'
			+'border-style: solid;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 25px;'
			+'  }'
				
			+'.search-air-add  {'
			+'  margin-top: 2%;'
			+'  margin-left: 5%;'
			+'font-size:25px;'
			+'  }'
			+'.agency-drop  {'
			+'  margin-top: 2%;'
			+'  margin-right: 5%;'
			+'  width: 10%;'
			+'font-size: 25px;'
			+'  }'
			
			+'#datagrid-div{'
			+'  width : 90%;'
			+'  margin-top: 30px;'
			+'  margin: 0 auto;'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'#datagrid-thead{'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'.datagrid-paging{'
			+'text-align: center;'	
			+'  }'
			+'.datagrid{'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'.search-air  {'
			+'  margin-top: 3%;'
			+'  margin-bottom: 3%;'
			+'    text-align: center;'	
			+'font-size: 25px;'
			+'  }'
			+'.myInput  {'
			+'  width : 45%;'
			+'  height : 3%;'
			+'  margin-left: 3%;'
			+'  margin-right: 2%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 30px;'
			+    'padding-left: 15px;'
			+'  }'
			+'.datagrid table { margin-top:3%;margin:0 auto; text-align:center;border-collapse: collapse; text-align: center; width: 95%; }' 
			+'.datagrid table td, .datagrid table th {margin:0 auto; text-align:center; font-size:15px; }'
			+'.datagrid table thead th {background:-webkit-gradient( linear, color-stop(0.05, #00b2d6), color-stop(1, #00b2d6) );background:-moz-linear-gradient( center top,  5%, #00b2d6 100% );filter:progid:DXImageTransform.Microsoft.gradient();background-color:#00b2d6; color:#FFFFFF; font-size: 15px; font-weight: bold; border-left: 1px solid #0070A8;text-align:center; }'
			+'.datagrid table thead th:first-child { border: none; }'
			+'.datagrid table tbody td { color: #00496B; border-left: 1px solid #E1EEF4;font-size: 20px;font-weight: normal; }'
			+'.datagrid table tbody .alt td { background: #E1EEF4; color: #00496B; }'
			+'.datagrid table tbody td:first-child { border-left: none; }'
			+'.datagrid table tbody tr:last-child td { border-bottom: none; }'
			+'.datagrid table tfoot td div { border-top: 1px solid ;background: #E1EEF4;color:#333;}' 
			+'.datagrid table tfoot td { padding: 3px; font-size: 15px ;color:#333}' 
			+'.datagrid table tfoot td div{ padding: 10px; }'
			+'.datagrid table tfoot td ul { margin: 0; padding:0; list-style: none; text-align: center; }'
			+'.datagrid table tfoot li { display: inline; }'
			+'.datagrid table tfoot li a { display: inline-block;  padding: 2px 8px; margin: 1px; }'
			+'.datagrid table tfoot li a :active  text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'.datagrid table tfoot li a :hover  text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'.datagrid table tfoot li a :visited { text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'div.dhtmlx_window_active, div.dhx_modal_cover_dv { position: fixed !important; }'
			+'fieldset{'
			+'  border :0px solid;'
			+'  text-align :center;'
			+'}'
			+'#btn-member-update{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    background: #39a8ee;'
			+'    color: #fff;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'

			+'#btn-mem-del-171031{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    color: #black;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    margin-left: 2%;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'
			+'</style>'
				+'<body>'
			+'  <h1 class="title-h1">Member Info</h1>'	
			
			+'<div class="search-air">'
			+'</select>'
			+' <input type="text" id="searchContent" class="myInput"  placeholder="search">'
			+'<button type="button"  id="member-search-btn"class="btn btn-info btn-md">검색</button>'
			+'</div>'
			+'<div id=datagrid-div>'
			+'<div class="datagrid">'
			+'<table id="member-sheet">'
			+'<thead class="datagrid-thead" ><tr><th>선택</th><th>이메일</th><th>성</th><th>이름</th><th >국가</th><th >가입일</th></tr></thead>'
			+'<tbody id="memberList-tab"></tbody>'
			+'<tfoot id="member-pagination" class="datagrid-paging">'
			+'<tr><td colspan="6">'
			+'<div id="paging">'
			+'</div>'
			+'</tr></td>'
			+'</tfoot>'
			+'</table></div></div>'	
			+'<fieldset class="buttons">'
			+'<button id="btn-member-update"class="btn-info-admin ">정보 수정</button>'
			+'<button id="btn-mem-del-171031" class="btn-info-admin ">삭제</button>'
			+'</fieldset>'
			
			return member;
		},	
		memberUpdate : ()=>{
			
			return '<style>'
			+'* { box-sizing: border-box;}'
			+'body { margin: 0;}'
			+'/* Style the header */'
			+'.header {'
			+'    text-align: center;'
			+'}'
			+'.account-settings-management{width:80%;margin:0 auto}'
			+'.container-fluid {'
			+'    padding-right: 15px;'
			+'    padding-left: 15px;'
			+'    margin-right: auto;'
			+'    margin-left: auto;'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.	nav navbar-nav {'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.navbar-inverse {'
			+'    background-color: #f7f3f3;'
			+'    border-color: #f7f4f4;'
			+'}'
			+'.navbar-inverse .navbar-nav>li>a {'
			+'    color: #fff;'
			+'    font-size: 15px;'
			+'}'
			+'.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {'
			+'    color: #fff;'
			+'    background-color: #00b2d6;'
			+'}'
			+'.row{'
			+'  width :100%;'
			+'  text-align : center;'
			+'    margin : 0 auto ;'
			+'  padding-top: 2%;'
			+'}'
			+'legend{'
			+'  border-bottom :0px solid;'
			+'}'
			+'fieldset{'
			+'  border :0px solid;'
			+'}'
			+'#member-update-btn{'
			+'    height: auto;'
			+'    line-height: 300%;'
			+'    background: #35353f;'
			+'    color: #fff;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 20%;'
			+'    position: static;'
			+'}'
			+'#member-delete-btn{'
			+'    height: auto;'
			+'    line-height: 300%;'
			+'    color: #black;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    margin-left: 2%;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 20%;'
			
			+'    position: static;'
			+'}'
			+'.account-settings-management input[type=password], .account-settings-management input[type=text] {'
			+'    display: block;'
			+'    outline: 0;'
			+'    padding: 8px 2%;'
			+'    border: 1px solid #eaebeb;'
			+'    border-radius: 3px;'
			+'    width: 80%;'
			+'    font-size: 1.1em;'
			+'    margin: 0px 3% 3%;'
			+'}'
			+'.title-h1  {'
			+'  width : 50%;'
			+'  margin-top: 5%;'
			+'  margin-left:10%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 40px;'
			+'  }'
			+'</style>'
			+'  <h1 class="title-h1">Member Detail</h1>'	
			+'   <div id="content-wrap" class="wrap clearfix">'
				+'<article class="account-settings-management">'
			+'<section class="ac-basics">'
			+'    <h4>기본 정보</h4>'
			+'<fieldset>'
			+'    <legend>이메일 주소</legend>'
			+'    <ol>'
			+'        <li>'
			+'            <input id="ac-email" type="text" value="" readonly="readonly">'
			+'            <output id="ac-email-validate"></output>'
			+'        </li>'
			+'    </ol>'
			+'</fieldset>'
		
			+'<fieldset>'
			+'    <legend>비밀번호</legend>'
			+'    <ol >'
			+'        <li>'
			+'            <input id="ac-old-password" type="password" value=""  placeholder="현재 비밀번호" autocomplete="off">'
			+'        </li>'
			+'        <li>'
			+'            <input id="ac-new-password" type="password" value=""  placeholder="새 비밀번호">'
			+'        </li>'
			+'    </ol>'
			+'</fieldset>'
	
			+'</section>'
			+'<section class="ac-profile">'
			+'    <h4>프로필 작성</h4>'
			+'<fieldset>'
			+'    <legend>이름</legend>'
			+'    <ol>'
			+'        <li>'
			+'            <input id="ac-first-name" type="text" value="" placeholder="이름을 입력하십시오.">'
			+'            <output id="ac-first-name-validate"></output>'
			+'        </li>'
			+'        <li>'
			+'            <input id="ac-last-name" type="text" value="" placeholder="성을 입력하십시오.">'
			+'            <output id="ac-last-name-validate"></output>'
			+'        </li>'
			+'    </ol>'
			+'</fieldset>'
			+'<fieldset>'
			+'    <legend>국가 설정</legend>'
			+'    <ol>'
			+'        <li>'
			+'            <input id="ac-locale" type="text" value="" placeholder="국가를 입력하십시요.">'
			+'            <output id="ac-locale"></output>'
			+'        </li>'
			+'    </ol>'
			+'</fieldset>'
			
			+'</section>'
	
			+'</section>'
			+'</article></div><div class="wrap legal-info">'
			+'<fieldset class="buttons">'
			+'    <button id="member-update-btn" class="primary">수정 완료</button>'
			+'    <button id="member-delete-btn"" class="primary">수정 취소</button>'
			+'</fieldset>'
						+'</div>'
			+'</div>'
		
		},	
		airport : ()=>{
			var airport= '<style>'
			+'* { box-sizing: border-box;}'
			+'body { margin: 0;}'
			+'/* Style the header */'
			+'.header {'
			+'    text-align: center;'
			+'}'
			+'.account-settings-management{width:80%;margin:0 auto}'
			+'.container-fluid {'
			+'    padding-right: 15px;'
			+'    padding-left: 15px;'
			+'    margin-right: auto;'
			+'    margin-left: auto;'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.	nav navbar-nav {'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.navbar-inverse {'
			+'    background-color: #f7f3f3;'
			+'    border-color: #f7f4f4;'
			+'}'
			+'.navbar-inverse .navbar-nav>li>a {'
			+'    color: #fff;'
			+'    font-size: 15px;'
			+'}'
			+'.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {'
			+'    color: #fff;'
			+'    background-color: #00b2d6;'
			+'}'
			+'.row{'
			+'  width :100%;'
			+'  text-align : center;'
			+'    margin : 0 auto ;'
			+'  padding-top: 20px;'
			+'}'
			+'.w3-container{'
			 +  ' width: 90%;'
			 +  ' heigth: 80%;'
			+    'padding: 15px;'
			+'    margin : 0 auto ;'
			+'  margin-top: 30px;'
			+'}'
		
			+'#identity  {'
			+'  width : 20%;'
			+'  height : 20%;'
			+'  margin-top: 15px;'
			+'  }'
			+'.title-h1  {'
			+'  width : 50%;'
			+'  margin-top: 5%;'
			+'  margin-left:10%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 40px;'
			+'  }'
			+'.title-h2  {'
			+'  width : 20%;'
			+'    text-align: center;'
			+'  margin-top: 30px;'
			+'  margin-bottom: 15px;'
			+'  margin-left: 100px;'
			+'border-style: solid;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 25px;'
			+'  }'
			+'.search-air-add  {'
			+'  margin-top: 2%;'
			+'  margin-left: 5%;'
			+'font-size:25px;'
			
			+'  }'
			+'.air-section-drop  {'
			+'    margin: 0px 3% 3%;'
			+'  height: 5%;'
			+'  width: 80%;'
			+'font-size: 1.1em;'
			+'    padding: 8px 2%;'
			+'    border: 1px solid #eaebeb;'
			+'  }'
			+'legend {'
			+'    border-bottom: 0px solid #e5e5e5;'
			+'}'
			+'.account-settings-management input[type=password], .account-settings-management input[type=text] {'
			+'    display: block;'
			+'    outline: 0;'
			+'    padding: 8px 2%;'
			+'    border: 1px solid #eaebeb;'
			+'    border-radius: 3px;'
			+'    width: 80%;'
			+'    font-size: 1.1em;'
			+'    margin: 0px 3% 3%;'
			+'}'
		
			+'.air-p{'
			+'  margin-left: 15%;'
			+'  }'
		
			+'.price-input-air{'
			+'  width : 180px;'
			+'  margin-left: 5%;'
			+'  margin-right: 0.5%;'
			+'text-align: center;'	
			+'font-size: 20px;'
			+'  }'
			+'.transit-select{'
			+'  margin-left: 5%;'
			+'  }'
			+'#datagrid-div{'
			+'  width : 90%;'
			+'  margin-top: 30px;'
			+'  margin: 0 auto;'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'#datagrid-thead{'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'.datagrid-paging{'
			+'text-align: center;'	
			+'  }'
			
			+'.datagrid{'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'.search-air  {'
			+'  margin-top: 3%;'
			+'  margin-bottom: 3%;'
			+'    text-align: center;'	
			+'font-size: 25px;'
			+'  }'
			
			
			+'.myInput  {'
			+'  width : 38%;'
			+'  height : 3%;'
			+'  margin-left: 1%;'
			+'  margin-right: 1%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 30px;'
			+    'padding-left: 15px;'
			+'  }'
			
			+'#datepicker-air-search{'
			+'    width: 17%;'
			+'   text-align: center;'
			+'}'
			+'.glyphicon{'
			+'    text-align: center;'
			+'    margin-right: 2%;'
			+'}'
			
			
			+'.datagrid table { margin-top:3%;margin:0 auto; text-align:center;border-collapse: collapse; text-align: center; width: 95%; }' 
			+'.datagrid table td, .datagrid table th {margin:0 auto; text-align:center; font-size:15px; }'
			+'.datagrid table thead th {background:-webkit-gradient( linear, color-stop(0.05, #00b2d6), color-stop(1, #00b2d6) );background:-moz-linear-gradient( center top,  5%, #00b2d6 100% );filter:progid:DXImageTransform.Microsoft.gradient();background-color:#00b2d6; color:#FFFFFF; font-size: 15px; font-weight: bold; border-left: 1px solid #0070A8;text-align:center; }'
			+'.datagrid table thead th:first-child { border: none; }'
			+'.datagrid table tbody td { color: #00496B; border-left: 1px solid #E1EEF4;font-size: 20px;font-weight: normal; }'
			+'.datagrid table tbody .alt td { background: #E1EEF4; color: #00496B; }'
			+'.datagrid table tbody td:first-child { border-left: none; }'
			+'.datagrid table tbody tr:last-child td { border-bottom: none; }'
			+'.datagrid table tfoot td div { border-top: 1px solid ;background: #E1EEF4;color:#333;}' 
			+'.datagrid table tfoot td { padding: 3px; font-size: 15px ;color:#333}' 
			+'.datagrid table tfoot td div{ padding: 10px; }'
			+'.datagrid table tfoot td ul { margin: 0; padding:0; list-style: none; text-align: center; }'
			+'.datagrid table tfoot li { display: inline; }'
			+'.datagrid table tfoot li a { display: inline-block;  padding: 2px 8px; margin: 1px; }'
			+'.datagrid table tfoot li a :active  text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'.datagrid table tfoot li a :hover  text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'.datagrid table tfoot li a :visited { text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'div.dhtmlx_window_active, div.dhx_modal_cover_dv { position: fixed !important; }'
			
				
			+'#btn-air-update{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    background: #39a8ee;'
			+'    color: #fff;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'
			+'#content-wrap{'
			+'    width: 85%;'
		
			+'}'
			
			
			+'#btn-air-delete{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    color: #black;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    margin-left: 2%;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'
			+'#btn-air-add{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    background: #39a8ee;'
			+'    color: #fff;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'

			+'#btn-air-add-cancel{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    color: #black;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    margin-left: 2%;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'
			+'fieldset{'
			+'  border :0px solid #fff;'
			+'  text-align :center;'
			+'}'	
			+'.buttons{'
			+'  border :#fff;'
			+'  text-align :center;'
			+'}'
			+'fieldset{'
			+'text-align:left;'	
			+'  }'
			+'</style>'
			+'<body>'
			+'<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">'
			+'  <h1 class="title-h1">Airport Info</h1>'	
			+'<div class="search-air">'
			+'<select>'
			+'  <option value="agency">여행사</option>'
			+' <option value="airport">항공사</option>'
			+'  <option value="depart">출발지</option>'
			+'  <option value="arrive">도착지</option>'
			+'</select>'
			+' <input type="text" class="myInput"  placeholder="search">'
			+'<input type="text" id="datepicker-air-search" placeholder="날짜 입력" > <span class="glyphicon glyphicon-calendar"></span></input>'
			+'<button type="button" class="btn btn-info btn-md">검색</button>'
			+'</div>'
			+'<div id=datagrid-div>'
			+'<div class="datagrid">'
			+'<table>'
			+'<thead class="datagrid-thead" ><tr><th>선택</th><th>항공기 번호</th><th>항공사</th><th>좌석 등급</th><th>춟발 지역</th><th >도착 지역</th><th >출발일</th><th >가격</th></tr></thead>'
			+'<tbody>';
		
			var arr=[{flight_no:'KE908',airline:'대항항공',cabin_class:'econmy',place_from:'인천',place_to:'뉴욕존에프케네디',date_depart:'2017.10.24',price:'1,000,000'},
				{flight_no:'KE908',airline:'대항항공',cabin_class:'econmy',place_from:'인천',place_to:'뉴욕존에프케네디',date_depart:'2017.10.24',price:'1,000,000'},
				{flight_no:'KE908',airline:'대항항공',cabin_class:'econmy',place_from:'인천',place_to:'뉴욕존에프케네디',date_depart:'2017.10.24',price:'1,000,000'},
				{flight_no:'KE908',airline:'대항항공',cabin_class:'econmy',place_from:'인천',place_to:'뉴욕존에프케네디',date_depart:'2017.10.24',price:'1,000,000'},
				{flight_no:'KE908',airline:'대항항공',cabin_class:'econmy',place_from:'인천',place_to:'뉴욕존에프케네디',date_depart:'2017.10.24',price:'1,000,000'},
				];
			
			$.each(arr,(i,val)=>{
				airport+='<tr><td><input type="checkbox" name="check" value=""></td><td>'+val.flight_no+'</td><td>'+val.airline+'</td><td>'+val.cabin_class+'</td><td>'+val.place_from+'</td><td>'+val.place_to+'</td><td>'+val.date_depart+'</td><td>'+val.price+'</td></tr>'
			
			})			
			airport+='<tfoot class="datagrid-paging"><tr><td colspan="8"><div id="paging"><ul>'   
			+'<li>'
			+'      <a href="#" aria-label="Previous">'
			+'        <span aria-hidden="true">&laquo;</span>'
			+'      </a>'
			+'    </li>'
			+'    <li><a href="#">1</a></li>'
			+'    <li><a href="#">2</a></li>'
			+'    <li><a href="#">3</a></li>'
			+'    <li><a href="#">4</a></li>'
			+'    <li><a href="#">5</a></li>'
			+'    <li>'
			+'      <a href="#" aria-label="Next">'
			+'        <span aria-hidden="true">&raquo;</span>'
			+'      </a>'
			+'    </li> </ul></div></tr></tfoot>'
			+'</tbody>'
			+'</table></div></div>'	
			+'<fieldset class="buttons">'
			+'<button id="btn-air-update"class="btn-info-admin ">정보 수정</button>'
			+'<button id="btn-air-delete" class="btn-info-admin ">삭제</button>'
			+'</fieldset>'
			+'  <h1 class="title-h1">Airport Info 추가</h1>'		
					
		+'   <div id="content-wrap" class="wrap clearfix">'
		+'<article class="account-settings-management">'
		
		
		+'<section class="airport-add-section">'
		+'    <h4>&nbsp&nbsp&nbsp&nbsp노선추가</h4>'
	
		+'<form>'
		+'<fieldset>'
		+'    <legend>항공기 번호</legend>'
		+'    <ol>'
		+'        <li>'
		+'<input type="text"  class="air-add-section" ></input>'
		+'        </li>'	
		+'    </ol>'
		+'</fieldset>'
		+'<fieldset>'
		+'    <legend>항공사</legend>'
		+'    <ol>'
		+'        <li>'
		+'<select class="air-section-drop">'
		+'  <option value="air-drop">항공사/여행사</option>'
		+' <option value="agency-1">Mytrip</option>'
		+'  <option value="agency-2">아시아나</option>'
		+'  <option value="agency-3">.....</option>'
		+'</select>'
		+'        </li>'	
		+'    </ol>'
		+'</fieldset>'
		
		+'<fieldset>'
		+'    <legend>출발일</legend>'
		+'    <ol>'
		+'        <li>'
		+'<input type="text" id="datepicker-air-depart"  class="air-add-section" placeholder="출발 날짜" ></input>'
		+'        </li>'	
		+'    </ol>'
		+'</fieldset>'
		+'<fieldset>'
		+'    <legend>좌석 등급</legend>'
		+'    <ol>'
		+'        <li>'
		+'<select class="air-section-drop">'
		+'  <option value="air-drop">좌석 등급</option>'
		+' <option value="agency-1">economy</option>'
		+'  <option value="agency-2">business</option>'
		+'  <option value="agency-3">first</option>'
		+'</select>'
		+'        </li>'	
		+'    </ol>'
		+'</fieldset>'
		+'<fieldset>'
		+'    <legend>항공 운임</legend>'
		+'    <ol>'
		+'        <li>'
		+'<input type="text"  class="air-add-section" placeholder="원"></input>'
		+'        </li>'	
		+'    </ol>'
		+'</fieldset>'
		
		+'<fieldset>'
		+'    <legend>도착지</legend>'
		+'    <ol>'
		+'        <li>'
		+'<input type="text"  class="air-add-section" ></input>'
		+'        </li>'	
		+'    </ol>'
		+'</fieldset>'		
	
		+'</form></section>'
		+'</form></section>'
		
			
			+'</form>'
					
			+'<fieldset class="buttons">'
			+'<button id="btn-air-add" class="btn-info-air ">추가</button>'
			+'<button id="btn-air-add-cancel" class="btn-info-air ">취소</button>'
			+'</fieldset>'
			return airport;
		}	,
		hotel : ()=>{
			var hotel= '<style>'
			+'* { box-sizing: border-box;}'
			+'body { margin: 0;}'
			+'/* Style the header */'
			+'.header {'
			+'    text-align: center;'
			+'}'
			+'.account-settings-management{width:80%;margin:0 auto}'
			+'.container-fluid {'
			+'    padding-right: 15px;'
			+'    padding-left: 15px;'
			+'    margin-right: auto;'
			+'    margin-left: auto;'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.	nav navbar-nav {'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.navbar-inverse {'
			+'    background-color: #f7f3f3;'
			+'    border-color: #f7f4f4;'
			+'}'
			+'.navbar-inverse .navbar-nav>li>a {'
			+'    color: #fff;'
			+'    font-size: 15px;'
			+'}'
			+'.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {'
			+'    color: #fff;'
			+'    background-color: #00b2d6;'
			+'}'
			+'.row{'
			+'  width :100%;'
			+'  text-align : center;'
			+'    margin : 0 auto ;'
			+'  padding-top: 20px;'
			+'}'
			+'.w3-container{'
			 +  ' width: 90%;'
			 +  ' heigth: 80%;'
			+    'padding: 15px;'
			+'    margin : 0 auto ;'
			+'  margin-top: 30px;'
			+'}'
		
			+'#identity  {'
			+'  width : 20%;'
			+'  height : 20%;'
			+'  margin-top: 15px;'
			+'  }'
			+'.title-h1  {'
			+'  width : 50%;'
			+'  margin-top: 5%;'
			+'  margin-left:10%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 40px;'
			+'  }'
			+'.title-h2  {'
			+'  width : 20%;'
			+'    text-align: center;'
			+'  margin-top: 30px;'
			+'  margin-bottom: 15px;'
			+'  margin-left: 100px;'
			+'border-style: solid;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 25px;'
			+'  }'
			+'.search-air-add  {'
			+'  margin-top: 2%;'
			+'  margin-left: 5%;'
			+'font-size:25px;'
			
			+'  }'
			+'.air-section-drop  {'
			+'    margin: 0px 3% 3%;'
			+'  height: 5%;'
			+'  width: 80%;'
			+'font-size: 1.1em;'
			+'    padding: 8px 2%;'
			+'    border: 1px solid #eaebeb;'
			+'  }'
			+'legend {'
			+'    border-bottom: 0px solid #e5e5e5;'
			+'}'
			+'.account-settings-management input[type=password], .account-settings-management input[type=text] {'
			+'    display: block;'
			+'    outline: 0;'
			+'    padding: 8px 2%;'
			+'    border: 1px solid #eaebeb;'
			+'    border-radius: 3px;'
			+'    width: 80%;'
			+'    font-size: 1.1em;'
			+'    margin: 0px 3% 3%;'
			+'}'
		
			+'.air-p{'
			+'  margin-left: 15%;'
			+'  }'
		
			+'.price-input-air{'
			+'  width : 180px;'
			+'  margin-left: 5%;'
			+'  margin-right: 0.5%;'
			+'text-align: center;'	
			+'font-size: 20px;'
			+'  }'
			+'.transit-select{'
			+'  margin-left: 5%;'
			+'  }'
			+'#datagrid-div{'
			+'  width : 90%;'
			+'  margin-top: 30px;'
			+'  margin: 0 auto;'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'#datagrid-thead{'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'.datagrid-paging{'
			+'text-align: center;'	
			+'  }'
			
			+'.datagrid{'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'.search-air  {'
			+'  margin-top: 3%;'
			+'  margin-bottom: 3%;'
			+'    text-align: center;'	
			+'font-size: 25px;'
			+'  }'
			+'.myInput  {'
			+'  width : 38%;'
			+'  height : 3%;'
			+'  margin-left: 1%;'
			+'  margin-right: 1%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 30px;'
			+    'padding-left: 15px;'
			+'  }'
			+'#datepicker-hotel-search{'
			+'    width: 17%;'
			+'    text-align: center;'
			+'}'
			+'.glyphicon{'
			+'    text-align: center;'
			+'    margin-right: 2%;'
			+'}'
			+'.datagrid table { margin-top:3%;margin:0 auto; text-align:center;border-collapse: collapse; text-align: center; width: 95%; }' 
			+'.datagrid table td, .datagrid table th {margin:0 auto; text-align:center; font-size:15px; }'
			+'.datagrid table thead th {background:-webkit-gradient( linear, color-stop(0.05, #00b2d6), color-stop(1, #00b2d6) );background:-moz-linear-gradient( center top,  5%, #00b2d6 100% );filter:progid:DXImageTransform.Microsoft.gradient();background-color:#00b2d6; color:#FFFFFF; font-size: 15px; font-weight: bold; border-left: 1px solid #0070A8;text-align:center; }'
			+'.datagrid table thead th:first-child { border: none; }'
			+'.datagrid table tbody td { color: #00496B; border-left: 1px solid #E1EEF4;font-size: 20px;font-weight: normal; }'
			+'.datagrid table tbody .alt td { background: #E1EEF4; color: #00496B; }'
			+'.datagrid table tbody td:first-child { border-left: none; }'
			+'.datagrid table tbody tr:last-child td { border-bottom: none; }'
			+'.datagrid table tfoot td div { border-top: 1px solid ;background: #E1EEF4;color:#333;}' 
			+'.datagrid table tfoot td { padding: 3px; font-size: 15px ;color:#333}' 
			+'.datagrid table tfoot td div{ padding: 10px; }'
			+'.datagrid table tfoot td ul { margin: 0; padding:0; list-style: none; text-align: center; }'
			+'.datagrid table tfoot li { display: inline; }'
			+'.datagrid table tfoot li a { display: inline-block;  padding: 2px 8px; margin: 1px; }'
			+'.datagrid table tfoot li a :active  text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'.datagrid table tfoot li a :hover  text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'.datagrid table tfoot li a :visited { text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'div.dhtmlx_window_active, div.dhx_modal_cover_dv { position: fixed !important; }'
			
				
			+'#btn-air-update{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    background: #39a8ee;'
			+'    color: #fff;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'
			+'#content-wrap{'
			+'    width: 85%;'
		
			+'}'
			+'#btn-hotel-update{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    background: #39a8ee;'
			+'    color: #fff;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'

			+'#btn-hotel-delete{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    color: #black;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    margin-left: 2%;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'
			+'#btn-hotel-add{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    background: #39a8ee;'
			+'    color: #fff;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'

			+'#btn-hotel-add-cancel{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    color: #black;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    margin-left: 2%;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'
			+'fieldset{'
			+'  border :0px solid #fff;'
			+'  text-align :center;'
			+'}'	
			+'.buttons{'
			+'  border :#fff;'
			+'  text-align :center;'
			+'}'
			+'fieldset{'
			+'text-align:left;'	
			+'  }'
			+'</style>'
			
				+'<body>'
			+'<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">'
			+'  <h1 class="title-h1">Hotel Info</h1>'	
			+'<form class="search-air">'
			+'<select>'
			+'  <option value="hotel-site">예약 사이트</option>'
			+' <option value="hotel-name">호텔 이름</option>'
			+'  <option value="city">도시</option>'
			+'</select>'
			+' <input type="text" class="myInput"  placeholder="search">'
			+'<input type="text" id="datepicker-hotel-search" placeholder="날짜 입력" > <span class="glyphicon glyphicon-calendar"></span></input>'
			+'<button type="button" class="btn btn-info btn-md">검색</button>'
			+'</form>'
			+'<div id=datagrid-div>'
			+'<div class="datagrid">'
			+'<table>'
			+'<thead class="datagrid-thead" ><tr><th>선택</th><th>예약 사이트</th><th>호텔 이름</th><th>도시</th><th >구역</th><th >가격</th><th >호텔 등급</th><th >투숙일</th></tr></thead>'
			+'<tbody>';
			var arr=[{hotel_site:'호텔스컴바인',hotel_name:'신라호텔',destination:'서울',district:'강남',price:'1,000,000',rate:'★★★',hotel_date:'2017/10/23'},
				{hotel_site:'호텔스컴바인',hotel_name:'뉴욕호텔',destination:'뉴욕',district:'브루클린',price:'1,000,000',rate:'★★★',hotel_date:'2017/10/23'},
				{hotel_site:'호텔스컴바인',hotel_name:'힐튼호텔',destination:'하노이',district:'북쪽마을',price:'1,000,000',rate:'★★★',hotel_date:'2017/10/23'},
				{hotel_site:'호텔스컴바인',hotel_name:'부산호텔',destination:'부산',district:'남포동',price:'1,000,000',rate:'★★★',hotel_date:'2017/10/23'},
				{hotel_site:'여행닷컴',hotel_name:'힐튼호텔',destination:'서울',district:'강남',price:'1,000,000',rate:'★★★',hotel_date:'2017/10/23'}
				];
			$.each(arr,(i,val)=>{
				hotel+='<tr><td><input type="checkbox" name="check" value=""></td><td>'+val.hotel_site+'</td><td>'+val.hotel_name+'</td><td>'+val.destination+'</td><td>'+val.district+'</td><td>'+val.price+'</td><td>'+val.rate+'</td><td>'+val.hotel_date+'</td></tr>'
			})			
			hotel+='<tfoot class="datagrid-paging"><tr><td colspan="8"><div id="paging"><ul>'   
			+'<li>'
			+'      <a href="#" aria-label="Previous">'
			+'        <span aria-hidden="true">&laquo;</span>'
			+'      </a>'
			+'    </li>'
			+'    <li><a href="#">1</a></li>'
			+'    <li><a href="#">2</a></li>'
			+'    <li><a href="#">3</a></li>'
			+'    <li><a href="#">4</a></li>'
			+'    <li><a href="#">5</a></li>'
			+'    <li>'
			+'      <a href="#" aria-label="Next">'
			+'        <span aria-hidden="true">&raquo;</span>'
			+'      </a>'
			+'    </li> </ul></div></tr></tfoot>'
			+'</tbody>'
			+'</table></div></div>'	
			+'<fieldset class="buttons">'
			+'<button id="btn-hotel-update"class="btn-info-admin ">정보 수정</button>'
			+'<button id="btn-hotel-delete" class="btn-info-admin ">삭제</button>'
			+'</fieldset>'
			
			+'  <h1 class="title-h1">Hotel Info 추가</h1>'	
			
			+'   <div id="content-wrap" class="wrap clearfix">'
			+'<article class="account-settings-management">'
			+'<section class="airport-add-section">'
			+'    <h4>&nbsp&nbsp&nbsp&nbsp호텔 추가</h4>'
		
			+'<form><fieldset>'
			+'    <legend>호텔 사이트</legend>'
			+'    <ol>'
			+'        <li>'
			+'<select class="air-section-drop">'
			+'  <option value="air-drop">예약사이트</option>'
			+' <option value="agency-1">호텔스컴바인</option>'
			+'  <option value="agency-2">야놀자</option>'
			+'  <option value="agency-3">.....</option>'
			+'</select>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>투 숙 일</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text"  id="datepicker-hotel-add" class="air-add-section" placeholder="날짜 입력" ></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
				
			+'<fieldset>'
			+'    <legend>숙 박 료</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text"  class="air-add-section" placeholder="원"></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>구  역</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text"  class="air-add-section" ></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>도  시</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text"  class="air-add-section"></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend> 호텔 등급 </legend>'
			+'    <ol>'
			+'        <li>'
			+'<select class="air-section-drop">'
			+'  <option value="air-drop">호텔 등급</option>'
			+' <option value="agency-1">★★★★★</option>'
			+'  <option value="agency-2">★★★★</option>'
			+'  <option value="agency-3">★★★</option>'
			+'  <option value="agency-3">★★</option>'
			+'  <option value="agency-3">★</option>'
			+'</select>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>취소 정책</legend>'
			+'    <ol>'
			+'        <li>'
			+'<p class="column-check-p"><input type="checkbox" name="check" class="check-n" value="">&nbsp무료 환불 가능</br>'
			+'<input type="checkbox" class="check-n" name="check" value="">&nbsp환불 가능</br>'
			+'<input type="checkbox" class="check-n" name="check" value="">&nbsp환불 불가</p>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>식사 계획</legend>'
			+'    <ol>'
			+'        <li>'
			+'<p class="column-check-p"><input type="checkbox" class="check-n" name="check" value="">&nbsp조식포함</br>'
			+'<input type="checkbox" class="check-n" name="check" value="">&nbsp객실만 제공</br>'
			+'<input type="checkbox" class="check-n" name="check" value="">&nbsp......</p>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			+'<fieldset>'
			+'    <legend>시 설</legend>'
			+'    <ol>'
			+'        <li>'
			+'<p class="column-check-p"><input class="check-n" type="checkbox" name="check" value="">&nbsp와이파이</br>'
			+'<input type="checkbox" class="check-n" name="check" value="">&nbsp수영장</br>'
			+'<input type="checkbox" class="check-n" name="check" value="">&nbsp노래방</br>'
			+'<input type="checkbox"  class="check-n" name="check" value="">&nbsp......</p>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
					
			+'</form></section>'
			+'</form></section>'
						
				+'</form>'
					
			+'<fieldset class="buttons">'
			+'<button id="btn-hotel-add" class="btn-info-air ">추가</button>'
			+'<button id="btn-hotel-add-cancel" class="btn-info-air ">취소</button>'
			+'</fieldset>'
			return hotel;
		},	
		airportUpdate : ()=>{
			return '<style>'
			+'* { box-sizing: border-box;}'
			+'body { margin: 0;}'
			+'/* Style the header */'
			+'.header {'
			+'    text-align: center;'
			+'}'
			+'.container-fluid {'
			+'    padding-right: 15px;'
			+'    padding-left: 15px;'
			+'    margin-right: auto;'
			+'    margin-left: auto;'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.	nav navbar-nav {'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.navbar-inverse {'
			+'    background-color: #f7f3f3;'
			+'    border-color: #f7f4f4;'
			+'}'
			+'.navbar-inverse .navbar-nav>li>a {'
			+'    color: #fff;'
			+'    font-size: 15px;'
			+'}'
			+'.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {'
			+'    color: #fff;'
			+'    background-color: #00b2d6;'
			+'}'
			+'.row{'
			+'  width :100%;'
			+'  text-align : center;'
			+'    margin : 0 auto ;'
			+'  padding-top: 20px;'
			+'}'
			+'.w3-container{'
			 +  ' width: 90%;'
			 +  ' heigth: 80%;'
			+    'padding: 15px;'
			+'    margin : 0 auto ;'
			+'  margin-top: 30px;'
			+'}'
		
			+'#identity  {'
			+'  width : 20%;'
			+'  height : 20%;'
			+'  margin-top: 15px;'
			+'  }'
			+'.title-h1  {'
			+'  width : 50%;'
			+'  margin-top: 5%;'
			+'  margin-left:10%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 40px;'
			+'  }'
			+'.title-h2  {'
			+'  width : 20%;'
			+'    text-align: center;'
			+'  margin-top: 30px;'
			+'  margin-bottom: 15px;'
			+'  margin-left: 100px;'
			+'border-style: solid;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 25px;'
			+'  }'
			+'.search-air-add  {'
			+'  margin-top: 2%;'
			+'  margin-left: 5%;'
			+'font-size:25px;'
			
			+'  }'
			+'.air-section-drop  {'
			+'    margin: 0px 3% 3%;'
			+'  height: 5%;'
			+'  width: 80%;'
			+'font-size: 1.1em;'
			+'    padding: 8px 2%;'
			+'    border: 1px solid #eaebeb;'
			+'  }'
			+'legend {'
			+'    border-bottom: 0px solid #e5e5e5;'
			+'}'
			+'.account-settings-management input[type=password], .account-settings-management input[type=text] {'
			+'    display: block;'
			+'    outline: 0;'
			+'    padding: 8px 2%;'
			+'    border: 1px solid #eaebeb;'
			+'    border-radius: 3px;'
			+'    width: 80%;'
			+'    font-size: 1.1em;'
			+'    margin: 0px 3% 3%;'
			+'}'
		
			+'.air-p{'
			+'  margin-left: 15%;'
			+'  }'
		
			+'.price-input-air{'
			+'  width : 180px;'
			+'  margin-left: 5%;'
			+'  margin-right: 0.5%;'
			+'text-align: center;'	
			+'font-size: 20px;'
			+'  }'
			+'.transit-select{'
			+'  margin-left: 5%;'
			+'  }'
			+'#datagrid-div{'
			+'  width : 90%;'
			+'  margin-top: 30px;'
			+'  margin: 0 auto;'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'#datagrid-thead{'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'.datagrid-paging{'
			+'text-align: center;'	
			+'  }'
			
			+'.datagrid{'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'.search-air  {'
			+'  margin-top: 3%;'
			+'  margin-bottom: 3%;'
			+'    text-align: center;'	
			+'font-size: 25px;'
			+'  }'
			+'.myInput  {'
			+'  width : 45%;'
			+'  height : 3%;'
			+'  margin-left: 3%;'
			+'  margin-right: 2%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 30px;'
			+    'padding-left: 15px;'
			+'  }'
			+'.datagrid table { margin-top:3%;margin:0 auto; text-align:center;border-collapse: collapse; text-align: center; width: 95%; }' 
			+'.datagrid table td, .datagrid table th {margin:0 auto; text-align:center; font-size:15px; }'
			+'.datagrid table thead th {background:-webkit-gradient( linear, color-stop(0.05, #00b2d6), color-stop(1, #00b2d6) );background:-moz-linear-gradient( center top,  5%, #00b2d6 100% );filter:progid:DXImageTransform.Microsoft.gradient();background-color:#00b2d6; color:#FFFFFF; font-size: 15px; font-weight: bold; border-left: 1px solid #0070A8;text-align:center; }'
			+'.datagrid table thead th:first-child { border: none; }'
			+'.datagrid table tbody td { color: #00496B; border-left: 1px solid #E1EEF4;font-size: 20px;font-weight: normal; }'
			+'.datagrid table tbody .alt td { background: #E1EEF4; color: #00496B; }'
			+'.datagrid table tbody td:first-child { border-left: none; }'
			+'.datagrid table tbody tr:last-child td { border-bottom: none; }'
			+'.datagrid table tfoot td div { border-top: 1px solid ;background: #E1EEF4;color:#333;}' 
			+'.datagrid table tfoot td { padding: 3px; font-size: 15px ;color:#333}' 
			+'.datagrid table tfoot td div{ padding: 10px; }'
			+'.datagrid table tfoot td ul { margin: 0; padding:0; list-style: none; text-align: center; }'
			+'.datagrid table tfoot li { display: inline; }'
			+'.datagrid table tfoot li a { display: inline-block;  padding: 2px 8px; margin: 1px; }'
			+'.datagrid table tfoot li a :active  text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'.datagrid table tfoot li a :hover  text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'.datagrid table tfoot li a :visited { text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'div.dhtmlx_window_active, div.dhx_modal_cover_dv { position: fixed !important; }'
			
				
		
			+'#btn-air-update-complete{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    background: #39a8ee;'
			+'    color: #fff;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'
			+'#btn-air-update-cancel{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    color: #black;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    margin-left: 2%;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'

			+'fieldset{'
			+'  border :0px solid #fff;'
			+'  text-align :center;'
			+'}'	
			+'.buttons{'
			+'  border :#fff;'
			+'  text-align :center;'
			+'}'
			+'fieldset{'
			+'text-align:left;'	
			+'  }'
			
			
			
			+'</style>'
			+'  <h1 class="title-h1">Airport Detail</h1>'	
			+'   <div id="content-wrap" class="wrap clearfix">'
			+'<article class="account-settings-management">'
			
			
			+'<section class="airport-add-section">'
			+'    <h4>&nbsp&nbsp&nbsp&nbsp노선수정</h4>'
		
			+'<form><fieldset>'
			+'<fieldset>'
			+'    <legend>항공기 번호</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text"  class="air-add-section" ></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			+'<fieldset>'
			+'    <legend>항공사</legend>'
			+'    <ol>'
			+'        <li>'
			+'<select class="air-section-drop">'
			+'  <option value="air-drop">항공사/여행사</option>'
			+' <option value="agency-1">Mytrip</option>'
			+'  <option value="agency-2">아시아나</option>'
			+'  <option value="agency-3">.....</option>'
			+'</select>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>출발일</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text" id="datepicker-air-update"  class="air-add-section" placeholder="출발 날짜" ></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			+'<fieldset>'
			+'    <legend>좌석 등급</legend>'
			+'    <ol>'
			+'        <li>'
			+'<select class="air-section-drop">'
			+'  <option value="air-drop">좌석 등급</option>'
			+' <option value="agency-1">economy</option>'
			+'  <option value="agency-2">business</option>'
			+'  <option value="agency-3">first</option>'
			+'</select>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			+'<fieldset>'
			+'    <legend>항공 운임</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text"  class="air-add-section" placeholder="원"></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>도착지</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text"  class="air-add-section" ></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'		
		
		
			+'</form></section>'
			+'</form></section>'
				
				
				+'</form>'
				+'<fieldset class="buttons">'
			+'<button id="btn-air-update-complete" ">수정 완료</button>'
			+'<button id="btn-air-update-cancel">취소</button>'
			+'</fieldset>'
			+'</form>'
		}		
		,	
		hotelUpdate : ()=>{
			return '<style>'
			+'* { box-sizing: border-box;}'
			+'body { margin: 0;}'
			+'/* Style the header */'
			+'.header {'
			+'    text-align: center;'
			+'}'
			+'.container-fluid {'
			+'    padding-right: 15px;'
			+'    padding-left: 15px;'
			+'    margin-right: auto;'
			+'    margin-left: auto;'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.	nav navbar-nav {'
			+'    background-color:#00b2d6 ;'
			+'    border-color:#00b2d6 ;'
			+'    border-color:#fff ;'
			+'}'
			+'.navbar-inverse {'
			+'    background-color: #f7f3f3;'
			+'    border-color: #f7f4f4;'
			+'}'
			+'.navbar-inverse .navbar-nav>li>a {'
			+'    color: #fff;'
			+'    font-size: 15px;'
			+'}'
			+'.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {'
			+'    color: #fff;'
			+'    background-color: #00b2d6;'
			+'}'
			+'.row{'
			+'  width :100%;'
			+'  text-align : center;'
			+'    margin : 0 auto ;'
			+'  padding-top: 20px;'
			+'}'
			+'.w3-container{'
			 +  ' width: 90%;'
			 +  ' heigth: 80%;'
			+    'padding: 15px;'
			+'    margin : 0 auto ;'
			+'  margin-top: 30px;'
			+'}'
		
			+'#identity  {'
			+'  width : 20%;'
			+'  height : 20%;'
			+'  margin-top: 15px;'
			+'  }'
			+'.title-h1  {'
			+'  width : 50%;'
			+'  margin-top: 5%;'
			+'  margin-left:10%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 40px;'
			+'  }'
			+'.title-h2  {'
			+'  width : 20%;'
			+'    text-align: center;'
			+'  margin-top: 30px;'
			+'  margin-bottom: 15px;'
			+'  margin-left: 100px;'
			+'border-style: solid;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 25px;'
			+'  }'
			+'.search-air-add  {'
			+'  margin-top: 2%;'
			+'  margin-left: 5%;'
			+'font-size:25px;'
			
			+'  }'
			+'.air-section-drop  {'
			+'    margin: 0px 3% 3%;'
			+'  height: 5%;'
			+'  width: 80%;'
			+'font-size: 1.1em;'
			+'    padding: 8px 2%;'
			+'    border: 1px solid #eaebeb;'
			+'  }'
			+'legend {'
			+'    border-bottom: 0px solid #e5e5e5;'
			+'}'
			+'.account-settings-management input[type=password], .account-settings-management input[type=text] {'
			+'    display: block;'
			+'    outline: 0;'
			+'    padding: 8px 2%;'
			+'    border: 1px solid #eaebeb;'
			+'    border-radius: 3px;'
			+'    width: 75%;'
			+'    font-size: 1.1em;'
			+'    margin: 0px 3% 3%;'
			+'}'
			+'.account-settings-management{width:80%;margin:0 auto}'
			+'.air-p{'
			+'  margin-left: 15%;'
			+'  }'
		
			+'.price-input-air{'
			+'  width : 180px;'
			+'  margin-left: 5%;'
			+'  margin-right: 0.5%;'
			+'text-align: center;'	
			+'font-size: 20px;'
			+'  }'
			+'.transit-select{'
			+'  margin-left: 5%;'
			+'  }'
			+'#datagrid-div{'
			+'  width : 90%;'
			+'  margin-top: 30px;'
			+'  margin: 0 auto;'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'#datagrid-thead{'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'.datagrid-paging{'
			+'text-align: center;'	
			+'  }'
			
			+'.datagrid{'
			+'text-align: center;'	
			+'font-size: 30px;'
			+'  }'
			+'.search-air  {'
			+'  margin-top: 3%;'
			+'  margin-bottom: 3%;'
			+'    text-align: center;'	
			+'font-size: 25px;'
			+'  }'
			+'.myInput  {'
			+'  width : 45%;'
			+'  height : 3%;'
			+'  margin-left: 3%;'
			+'  margin-right: 2%;'
			+'font-family: "Times New Roman", Times, bold;'
			+'font-size: 30px;'
			+    'padding-left: 15px;'
			+'  }'
			+'.datagrid table { margin-top:3%;margin:0 auto; text-align:center;border-collapse: collapse; text-align: center; width: 95%; }' 
			+'.datagrid table td, .datagrid table th {margin:0 auto; text-align:center; font-size:15px; }'
			+'.datagrid table thead th {background:-webkit-gradient( linear, color-stop(0.05, #00b2d6), color-stop(1, #00b2d6) );background:-moz-linear-gradient( center top,  5%, #00b2d6 100% );filter:progid:DXImageTransform.Microsoft.gradient();background-color:#00b2d6; color:#FFFFFF; font-size: 15px; font-weight: bold; border-left: 1px solid #0070A8;text-align:center; }'
			+'.datagrid table thead th:first-child { border: none; }'
			+'.datagrid table tbody td { color: #00496B; border-left: 1px solid #E1EEF4;font-size: 20px;font-weight: normal; }'
			+'.datagrid table tbody .alt td { background: #E1EEF4; color: #00496B; }'
			+'.datagrid table tbody td:first-child { border-left: none; }'
			+'.datagrid table tbody tr:last-child td { border-bottom: none; }'
			+'.datagrid table tfoot td div { border-top: 1px solid ;background: #E1EEF4;color:#333;}' 
			+'.datagrid table tfoot td { padding: 3px; font-size: 15px ;color:#333}' 
			+'.datagrid table tfoot td div{ padding: 10px; }'
			+'.datagrid table tfoot td ul { margin: 0; padding:0; list-style: none; text-align: center; }'
			+'.datagrid table tfoot li { display: inline; }'
			+'.datagrid table tfoot li a { display: inline-block;  padding: 2px 8px; margin: 1px; }'
			+'.datagrid table tfoot li a :active  text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'.datagrid table tfoot li a :hover  text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'.datagrid table tfoot li a :visited { text-decoration: underline; background: none;  color:#00b2d6;   border:1px solid #333;  }'
			+'div.dhtmlx_window_active, div.dhx_modal_cover_dv { position: fixed !important; }'
			
				
		
			+'#content-wrap{'
			+'    width: 85%;'
		
			+'}'
			
			+'fieldset{'
			+'  border :0px solid #fff;'
			+'  text-align :center;'
			+'}'	
			+'.buttons{'
			+'  border :#fff;'
			+'  text-align :center;'
			+'}'
			+'fieldset{'
			+'text-align:left;'	
			+'  }'
			+'#btn-hotel-update-cancel{'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    color: #black;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    margin-left: 2%;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'}'
			+'#btn-hotel-update-complete  {'
			+'    height: auto;'
			+'    line-height: 280%;'
			+'    background: #39a8ee;'
			+'    color: #fff;'
			+'    border: none;'
			+'    cursor: pointer;'
			+'    font-weight: 700;'
			+'    text-align: center;'
			+'    border-radius: 4px;'
			+'    -moz-border-radius: 4px;'
			+'    -webkit-border-radius: 4px;'
			+'    min-width: 15%;'
			+'    position: static;'
			+'  }'
			+'</style>'
			+'  <h1 class="title-h1">Hotel Detail</h1>'	
			+'   <div id="content-wrap" class="wrap clearfix">'
			+'<article class="account-settings-management">'
			+'<section class="airport-add-section">'
			+'    <h4>&nbsp&nbsp&nbsp&nbsp호텔 추가</h4>'
		
			+'<form><fieldset>'
			+'    <legend>호텔 사이트</legend>'
			+'    <ol>'
			+'        <li>'
			+'<select class="air-section-drop">'
			+'  <option value="agency">예약사이트</option>'
			+' <option value="agency-1">호텔스컴바인</option>'
			+'  <option value="agency-2">야놀자</option>'
			+'  <option value="agency-3">.....</option>'
			+'</select>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>투 숙 일</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text" id="datepicker-hotel-update" class="air-add-section" placeholder="날짜 입력" ></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
				
			+'<fieldset>'
			+'    <legend>숙 박 료</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text"  class="air-add-section" placeholder="원"></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>구  역</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text"  class="air-add-section" placeholder="원"></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>도  시</legend>'
			+'    <ol>'
			+'        <li>'
			+'<input type="text"  class="air-add-section" placeholder="원"></input>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend> 호텔 등급 </legend>'
			+'    <ol>'
			+'        <li>'
			+'<select class="air-section-drop">'
			+'  <option value="agency">호텔 등급</option>'
			+' <option value="agency-1">★★★★★</option>'
			+'  <option value="agency-2">★★★★</option>'
			+'  <option value="agency-3">★★★</option>'
			+'  <option value="agency-3">★★</option>'
			+'  <option value="agency-3">★</option>'
			+'</select>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>취소 정책</legend>'
			+'    <ol>'
			+'        <li>'
			+'<p class="column-check-p"><input type="checkbox" name="check" value="">&nbsp무료 환불 가능</br>'
			+'<input type="checkbox" name="check" value="">&nbsp환불 가능</br>'
			+'<input type="checkbox" name="check" value="">&nbsp환불 불가</p>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>식사 계획</legend>'
			+'    <ol>'
			+'        <li>'
			+'<p class="column-check-p"><input type="checkbox" name="check" value="">&nbsp조식포함</br>'
			+'<input type="checkbox" name="check" value="">&nbsp객실만 제공</br>'
			+'<input type="checkbox" name="check" value="">&nbsp......</p>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
			+'<fieldset>'
			+'    <legend>시 설</legend>'
			+'    <ol>'
			+'        <li>'
			+'<p class="column-check-p"><input type="checkbox" name="check" value="">&nbsp와이파이</br>'
			+'<input type="checkbox" name="check" value="">&nbsp수영장</br>'
			+'<input type="checkbox" name="check" value="">&nbsp노래방</br>'
			+'<input type="checkbox" name="check" value="">&nbsp......</p>'
			+'        </li>'	
			+'    </ol>'
			+'</fieldset>'
			
					
			+'</form></section>'
			+'</form></section>'
			+'<fieldset class="buttons">'
			+'<button id="btn-hotel-update-complete" ">수정 완료</button>'
			+'<button id="btn-hotel-update-cancel" ">취소</button>'
			+'</fieldset>'
				
				+'</form>'
			
		}		
};
hyunseok.session=
{
   init : (x)=>{
			sessionStorage.setItem('x',x);
			sessionStorage.setItem('j',x+'/resources/js');
			sessionStorage.setItem('c',x+'/resources/css');
			sessionStorage.setItem('i',x+'/resources/img');
   		  },
   getPath : (x)=>{
			return sessionStorage.getItem(x);
   		  }
};
var $$= function(x){return hyunseok.session.getPath(x);};