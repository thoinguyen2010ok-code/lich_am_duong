// if(window.location.hostname!='lichdichly.amtradichly.vn'){window.location.href = "http://amtradichly.vn";}
/*
Copyright 2016 Toan Phat Online Service Trading Company Limited [http://toanphatonline.com - contact@toanphatonline.com]
*/

if(currentDay==currentDayKeep&&currentMonth==currentMonthKeep&&currentYear==currentYearKeep){
	if(currentHourKeep<=1&&currentHourKeep>=23){
		var _today = new Date();
		var _date = new Date(today.getFullYear(),today.getMonth(),today.getDate()+1);
		// alert(_date);
		window.location.href = window.location.pathname+"?dd="+_date.getDate()+"&mm="+_date.getMonth()+1+"&yy="+_date.getFullYear()+"&bh=1#hourBlock";
	}
}