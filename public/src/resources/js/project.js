/*
	프로젝트 시작
*/

$.fn.outerHTML = function(){
	var th = $(this);
	if( !th[0] ) return "";
	if (th[0].outerHTML){
		return th[0].outerHTML;
	}else{
		var content = th.wrap('<div>').parent().html();
		th.unwrap();
		return content;
	}
}

namsam([
	{
		path:'',
		controller:'common'
	}
])