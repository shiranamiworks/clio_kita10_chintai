var _obj_mode = new Object();

$(function(){
	var w_pc = 960;
	var w_tb = 600;
	_obj_mode.mode = 1;
	_obj_mode.chmode = 0;
	$(window).resize(function(){
		
		
		var oldmode = _obj_mode.mode;
		var w = $(window).width();
		if(w < w_pc && w >= w_tb){
			_obj_mode.mode = 2;
		} else if (w < w_pc && w < w_tb){
			_obj_mode.mode = 3;
		} else {
			_obj_mode.mode = 1;
		}
		if(oldmode != _obj_mode.mode){
			_obj_mode.chmode = 1;
		} else {
			_obj_mode.chmode = 0;
		}
		
		
		$("#DEBUG div.mode").text(_obj_mode.mode);
		$("#DEBUG div.modechange").text(_obj_mode.chmode);
		$("#DEBUG div.windowwidth").text(w);
		
	}).trigger("resize");
});



