// if(window.location.hostname!='lichdichly.amtradichly.vn'){window.location.href = "http://amtradichly.vn";}
/*
Copyright 2016 Toan Phat Online Service Trading Company Limited [http://toanphatonline.com - contact@toanphatonline.com] Thanks Ho Ngoc Duc for Lunar Calender Source.
*/

/*
Copyright 2004 Ho Ngoc Duc [http://come.to/duc]. All Rights Reserved. Permission to use, copy, modify, and redistribute this software and its documentation for personal, non-commercial use is hereby granted provided that this copyright notice appears in all copies.
*/

var ABOUT = "OK!";
var TK19 = new Array(
	0x30baa3, 0x56ab50, 0x422ba0, 0x2cab61, 0x52a370, 0x3c51e8, 0x60d160, 0x4ae4b0, 0x376926, 0x58daa0,
	0x445b50, 0x3116d2, 0x562ae0, 0x3ea2e0, 0x28e2d2, 0x4ec950, 0x38d556, 0x5cb520, 0x46b690, 0x325da4,
	0x5855d0, 0x4225d0, 0x2ca5b3, 0x52a2b0, 0x3da8b7, 0x60a950, 0x4ab4a0, 0x35b2a5, 0x5aad50, 0x4455b0,
	0x302b74, 0x562570, 0x4052f9, 0x6452b0, 0x4e6950, 0x386d56, 0x5e5aa0, 0x46ab50, 0x3256d4, 0x584ae0,
	0x42a570, 0x2d4553, 0x50d2a0, 0x3be8a7, 0x60d550, 0x4a5aa0, 0x34ada5, 0x5a95d0, 0x464ae0, 0x2eaab4,
	0x54a4d0, 0x3ed2b8, 0x64b290, 0x4cb550, 0x385757, 0x5e2da0, 0x4895d0, 0x324d75, 0x5849b0, 0x42a4b0,
	0x2da4b3, 0x506a90, 0x3aad98, 0x606b50, 0x4c2b60, 0x359365, 0x5a9370, 0x464970, 0x306964, 0x52e4a0,
	0x3cea6a, 0x62da90, 0x4e5ad0, 0x392ad6, 0x5e2ae0, 0x4892e0, 0x32cad5, 0x56c950, 0x40d4a0, 0x2bd4a3,
	0x50b690, 0x3a57a7, 0x6055b0, 0x4c25d0, 0x3695b5, 0x5a92b0, 0x44a950, 0x2ed954, 0x54b4a0, 0x3cb550,
	0x286b52, 0x4e55b0, 0x3a2776, 0x5e2570, 0x4852b0, 0x32aaa5, 0x56e950, 0x406aa0, 0x2abaa3, 0x50ab50
); /* Years 2000-2099 */

var TK20 = new Array(
	0x3c4bd8, 0x624ae0, 0x4ca570, 0x3854d5, 0x5cd260, 0x44d950, 0x315554, 0x5656a0, 0x409ad0, 0x2a55d2,
	0x504ae0, 0x3aa5b6, 0x60a4d0, 0x48d250, 0x33d255, 0x58b540, 0x42d6a0, 0x2cada2, 0x5295b0, 0x3f4977,
	0x644970, 0x4ca4b0, 0x36b4b5, 0x5c6a50, 0x466d50, 0x312b54, 0x562b60, 0x409570, 0x2c52f2, 0x504970,
	0x3a6566, 0x5ed4a0, 0x48ea50, 0x336a95, 0x585ad0, 0x442b60, 0x2f86e3, 0x5292e0, 0x3dc8d7, 0x62c950,
	0x4cd4a0, 0x35d8a6, 0x5ab550, 0x4656a0, 0x31a5b4, 0x5625d0, 0x4092d0, 0x2ad2b2, 0x50a950, 0x38b557,
	0x5e6ca0, 0x48b550, 0x355355, 0x584da0, 0x42a5b0, 0x2f4573, 0x5452b0, 0x3ca9a8, 0x60e950, 0x4c6aa0,
	0x36aea6, 0x5aab50, 0x464b60, 0x30aae4, 0x56a570, 0x405260, 0x28f263, 0x4ed940, 0x38db47, 0x5cd6a0,
	0x4896d0, 0x344dd5, 0x5a4ad0, 0x42a4d0, 0x2cd4b4, 0x52b250, 0x3cd558, 0x60b540, 0x4ab5a0, 0x3755a6,
	0x5c95b0, 0x4649b0, 0x30a974, 0x56a4b0, 0x40aa50, 0x29aa52, 0x4e6d20, 0x39ad47, 0x5eab60, 0x489370,
	0x344af5, 0x5a4970, 0x4464b0, 0x2c74a3, 0x50ea50, 0x3d6a58, 0x6256a0, 0x4aaad0, 0x3696d5, 0x5c92e0
); /* Years 1900-1999 */

var TK21 = new Array(
	0x46c960, 0x2ed954, 0x54d4a0, 0x3eda50, 0x2a7552, 0x4e56a0, 0x38a7a7, 0x5ea5d0, 0x4a92b0, 0x32aab5,
	0x58a950, 0x42b4a0, 0x2cbaa4, 0x50ad50, 0x3c55d9, 0x624ba0, 0x4ca5b0, 0x375176, 0x5c5270, 0x466930,
	0x307934, 0x546aa0, 0x3ead50, 0x2a5b52, 0x504b60, 0x38a6e6, 0x5ea4e0, 0x48d260, 0x32ea65, 0x56d520,
	0x40daa0, 0x2d56a3, 0x5256d0, 0x3c4afb, 0x6249d0, 0x4ca4d0, 0x37d0b6, 0x5ab250, 0x44b520, 0x2edd25,
	0x54b5a0, 0x3e55d0, 0x2a55b2, 0x5049b0, 0x3aa577, 0x5ea4b0, 0x48aa50, 0x33b255, 0x586d20, 0x40ad60,
	0x2d4b63, 0x525370, 0x3e49e8, 0x60c970, 0x4c54b0, 0x3768a6, 0x5ada50, 0x445aa0, 0x2fa6a4, 0x54aad0,
	0x4052e0, 0x28d2e3, 0x4ec950, 0x38d557, 0x5ed4a0, 0x46d950, 0x325d55, 0x5856a0, 0x42a6d0, 0x2c55d4,
	0x5252b0, 0x3ca9b8, 0x62a930, 0x4ab490, 0x34b6a6, 0x5aad50, 0x4655a0, 0x2eab64, 0x54a570, 0x4052b0,
	0x2ab173, 0x4e6930, 0x386b37, 0x5e6aa0, 0x48ad50, 0x332ad5, 0x582b60, 0x42a570, 0x2e52e4, 0x50d160,
	0x3ae958, 0x60d520, 0x4ada90, 0x355aa6, 0x5a56d0, 0x462ae0, 0x30a9d4, 0x54a2d0, 0x3ed150, 0x28e952
); /* Years 2000-2099 */

var TK22 = new Array(
		0x4eb520, 0x38d727, 0x5eada0, 0x4a55b0, 0x362db5, 0x5a45b0, 0x44a2b0, 0x2eb2b4, 0x54a950, 0x3cb559,
		0x626b20, 0x4cad50, 0x385766, 0x5c5370, 0x484570, 0x326574, 0x5852b0, 0x406950, 0x2a7953, 0x505aa0,
		0x3baaa7, 0x5ea6d0, 0x4a4ae0, 0x35a2e5, 0x5aa550, 0x42d2a0, 0x2de2a4, 0x52d550, 0x3e5abb, 0x6256a0,
		0x4c96d0, 0x3949b6, 0x5e4ab0, 0x46a8d0, 0x30d4b5, 0x56b290, 0x40b550, 0x2a6d52, 0x504da0, 0x3b9567,
		0x609570, 0x4a49b0, 0x34a975, 0x5a64b0, 0x446a90, 0x2cba94, 0x526b50, 0x3e2b60, 0x28ab61, 0x4c9570,
		0x384ae6, 0x5cd160, 0x46e4a0, 0x2eed25, 0x54da90, 0x405b50, 0x2c36d3, 0x502ae0, 0x3a93d7, 0x6092d0,
		0x4ac950, 0x32d556, 0x58b4a0, 0x42b690, 0x2e5d94, 0x5255b0, 0x3e25fa, 0x6425b0, 0x4e92b0, 0x36aab6,
		0x5c6950, 0x4674a0, 0x31b2a5, 0x54ad50, 0x4055a0, 0x2aab73, 0x522570, 0x3a5377, 0x6052b0, 0x4a6950,
		0x346d56, 0x585aa0, 0x42ab50, 0x2e56d4, 0x544ae0, 0x3ca570, 0x2864d2, 0x4cd260, 0x36eaa6, 0x5ad550,
		0x465aa0, 0x30ada5, 0x5695d0, 0x404ad0, 0x2aa9b3, 0x50a4d0, 0x3ad2b7, 0x5eb250, 0x48b540, 0x33d556
); /* Years 2100-2199 */

var CAN = new Array("Gi\341p", "\u1EA4t", "B\355nh", "\u0110inh", "M\u1EADu", "K\u1EF7", "Canh", "T\342n", "Nh\342m", "Qu\375");
var CHI = new Array("T\375", "S\u1EEDu", "D\u1EA7n", "M\343o", "Th\354n", "T\u1EF5", "Ng\u1ECD", "M\371i", "Th\342n", "D\u1EADu", "Tu\u1EA5t", "H\u1EE3i");
var TUAN = new Array("Ch\u1EE7 nh\u1EADt", "Th\u1EE9 hai", "Th\u1EE9 ba", "Th\u1EE9 t\u01B0", "Th\u1EE9 n\u0103m", "Th\u1EE9 s\341u", "Th\u1EE9 b\u1EA3y");
var GIO_HD = new Array("110100101100", "001101001011", "110011010010", "101100110100", "001011001101", "010010110011");
var TIETKHI = new Array("Xu\u00E2n ph\u00E2n", "Thanh minh", "C\u1ED1c v\u0169", "L\u1EADp h\u1EA1", "Ti\u1EC3u m\u00E3n", "Mang ch\u1EE7ng",
	"H\u1EA1 ch\u00ED", "Ti\u1EC3u th\u1EED", "\u0110\u1EA1i th\u1EED", "L\u1EADp thu", "X\u1EED th\u1EED", "B\u1EA1ch l\u1ED9",
	"Thu ph\u00E2n", "H\u00E0n l\u1ED9", "S\u01B0\u01A1ng gi\u00E1ng", "L\u1EADp \u0111\u00F4ng", "Ti\u1EC3u tuy\u1EBFt", "\u0110\u1EA1i tuy\u1EBFt",
	"\u0110\u00F4ng ch\u00ED", "Ti\u1EC3u h\u00E0n", "\u0110\u1EA1i h\u00E0n", "L\u1EADp xu\u00E2n", "V\u0169 Th\u1EE7y", "Kinh tr\u1EADp"
);

/* Create lunar date object, stores (lunar) date, month, year, leap month indicator, and Julian date number */
function LunarDate(dd, mm, yy, leap, jd) {
	this.day = dd;
	this.month = mm;
	this.year = yy;
	this.leap = leap;
	this.jd = jd;
}

var PI = Math.PI;

/* Discard the fractional part of a number, e.g., INT(3.2) = 3 */
function INT(d) {
	return Math.floor(d);
}

function jdn(dd, mm, yy) {
	var a = INT((14 - mm) / 12);
	var y = yy+4800-a;
	var m = mm+12*a-3;
	var jd = dd + INT((153*m+2)/5) + 365*y + INT(y/4) - INT(y/100) + INT(y/400) - 32045;
	return jd;
	//return 367*yy - INT(7*(yy+INT((mm+9)/12))/4) - INT(3*(INT((yy+(mm-9)/7)/100)+1)/4) + INT(275*mm/9)+dd+1721029;
}

function jdn2date(jd) {
	var Z, A, alpha, B, C, D, E, dd, mm, yyyy, F;
	Z = jd;
	if (Z < 2299161) {
	  A = Z;
	} else {
	  alpha = INT((Z-1867216.25)/36524.25);
	  A = Z + 1 + alpha - INT(alpha/4);
	}
	B = A + 1524;
	C = INT( (B-122.1)/365.25);
	D = INT( 365.25*C );
	E = INT( (B-D)/30.6001 );
	dd = INT(B - D - INT(30.6001*E));
	if (E < 14) {
	  mm = E - 1;
	} else {
	  mm = E - 13;
	}
	if (mm < 3) {
	  yyyy = C - 4715;
	} else {
	  yyyy = C - 4716;
	}
	return new Array(dd, mm, yyyy);
}

function decodeLunarYear(yy, k) {
	var monthLengths, regularMonths, offsetOfTet, leapMonth, leapMonthLength, solarNY, currentJD, j, mm;
	var ly = new Array();
	monthLengths = new Array(29, 30);
	regularMonths = new Array(12);
	offsetOfTet = k >> 17;
	leapMonth = k & 0xf;
	leapMonthLength = monthLengths[k >> 16 & 0x1];
	solarNY = jdn(1, 1, yy);
	currentJD = solarNY+offsetOfTet;
	j = k >> 4;
	for(i = 0; i < 12; i++) {
		regularMonths[12 - i - 1] = monthLengths[j & 0x1];
		j >>= 1;
	}
	if (leapMonth == 0) {
		for(mm = 1; mm <= 12; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD));
			currentJD += regularMonths[mm-1];
		}
	} else {
		for(mm = 1; mm <= leapMonth; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD));
			currentJD += regularMonths[mm-1];
		}
		ly.push(new LunarDate(1, leapMonth, yy, 1, currentJD));
		currentJD += leapMonthLength;
		for(mm = leapMonth+1; mm <= 12; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD));
			currentJD += regularMonths[mm-1];
		}
	}
	return ly;
}

function getYearInfo(yyyy) {
	var yearCode;
	if (yyyy < 1900) {
		yearCode = TK19[yyyy - 1800];
	} else if (yyyy < 2000) {
		yearCode = TK20[yyyy - 1900];
	} else if (yyyy < 2100) {
		yearCode = TK21[yyyy - 2000];
	} else {
		yearCode = TK22[yyyy - 2100];
	}
	return decodeLunarYear(yyyy, yearCode);
}

var FIRST_DAY = jdn(25, 1, 1800); // Tet am lich 1800
var LAST_DAY = jdn(31, 12, 2199);

function findLunarDate(jd, ly) {
	if (jd > LAST_DAY || jd < FIRST_DAY || ly[0].jd > jd) {
		return new LunarDate(0, 0, 0, 0, jd);
	}
	var i = ly.length-1;
	while (jd < ly[i].jd) {
		i--;
	}
	var off = jd - ly[i].jd;
	ret = new LunarDate(ly[i].day+off, ly[i].month, ly[i].year, ly[i].leap, jd);
	return ret;
}

function getLunarDate(dd, mm, yyyy) {
	var ly, jd;
	if (yyyy < 1800 || 2199 < yyyy) {
		//return new LunarDate(0, 0, 0, 0, 0);
	}
	ly = getYearInfo(yyyy);
	jd = jdn(dd, mm, yyyy);
	if (jd < ly[0].jd) {
		ly = getYearInfo(yyyy - 1);
	}
	return findLunarDate(jd, ly);
}

/* Compute the longitude of the sun at any time.
 * Parameter: floating number jdn, the number of days since 1/1/4713 BC noon
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 */
function SunLongitude(jdn) {
	var T, T2, dr, M, L0, DL, lambda, theta, omega;
	T = (jdn - 2451545.0 ) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
	T2 = T*T;
	dr = PI/180; // degree to radian
	M = 357.52910 + 35999.05030*T - 0.0001559*T2 - 0.00000048*T*T2; // mean anomaly, degree
	L0 = 280.46645 + 36000.76983*T + 0.0003032*T2; // mean longitude, degree
	DL = (1.914600 - 0.004817*T - 0.000014*T2)*Math.sin(dr*M);
	DL = DL + (0.019993 - 0.000101*T)*Math.sin(dr*2*M) + 0.000290*Math.sin(dr*3*M);
    theta = L0 + DL; // true longitude, degree
    // obtain apparent longitude by correcting for nutation and aberration
    omega = 125.04 - 1934.136 * T;
    lambda = theta - 0.00569 - 0.00478 * Math.sin(omega * dr);
    // Convert to radians
    lambda = lambda*dr;
	lambda = lambda - PI*2*(INT(lambda/(PI*2))); // Normalize to (0, 2*PI)
    return lambda;
}

/* Compute the sun segment at start (00:00) of the day with the given integral Julian day number.
 * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00.
 * The function returns a number between 0 and 23.
 * From the day after March equinox and the 1st major term after March equinox, 0 is returned.
 * After that, return 1, 2, 3 ...
 */
function getSunLongitude(dayNumber, timeZone) {
	return INT(SunLongitude(dayNumber - 0.5 - timeZone/24.0) / PI * 12);
}

var today = new Date();

var currentMonthKeep = today.getMonth()+1;
var currentYearKeep = today.getFullYear();
var currentDayKeep = today.getDate();
var currentHourKeep = today.getHours();
var currentMinuteKeep = today.getMinutes();

//var currentLunarYearKeep = getLunaYear(currentYearKeep);
var currentLunarDateKeep = getLunarDate(today.getDate(), today.getMonth()+1, today.getFullYear());
var currentBlockHourKeep = getBockHours(currentHourKeep, currentMinuteKeep);


var currentMonth = today.getMonth()+1;
var currentYear = today.getFullYear();
var currentDay = today.getDate();
var currentHour = today.getHours();
var currentMinute = today.getMinutes();

//var currentLunarYear = getLunaYear(currentYear);
var currentLunarDate = getLunarDate(today.getDate(), today.getMonth()+1, today.getFullYear());
var currentBlockHour = getBockHours(currentHour, currentMinute);


detectUrlInfo();

function parseQuery(q) {
	var ret = new Array();
	if (q.length < 2) return ret;
	var s = q.substring(1, q.length);
	var arr = s.split("&");
	var i, j;
	for (i = 0; i < arr.length; i++) {
		var a = arr[i].split("=");
		for (j = 0; j < a.length; j++) {
			ret.push(a[j]);
		}
	}
	return ret;
}

function getSelectedMonth() {
	var query = window.location.search;
	var arr = parseQuery(query);
	var idx;
	for (idx = 0; idx < arr.length; idx++) {
		if (arr[idx] == "mm") {
			currentMonth = parseInt(arr[idx+1]);
		} else if (arr[idx] == "yy") {
			currentYear = parseInt(arr[idx+1]);
		}
	}
}

function detectUrlInfo() {
	var query = window.location.search;
	var arr = parseQuery(query);
	var idx;
	for (idx = 0; idx < arr.length; idx++) {
		if (arr[idx] == "mm") {
			currentMonth = parseInt(arr[idx+1]);
		}else if (arr[idx] == "yy") {
			currentYear = parseInt(arr[idx+1]);
		}else if (arr[idx] == "dd") {
			currentDay = parseInt(arr[idx+1]);
		}else if (arr[idx] == "bh") {
			currentBlockHour = parseInt(arr[idx+1]);

		}
	}
}

function getMonth(mm, yy) {
	var ly1, ly2, tet1, jd1, jd2, mm1, yy1, result, i;
	if (mm < 12) {
		mm1 = mm + 1;
		yy1 = yy;
	} else {
		mm1 = 1;
		yy1 = yy + 1;
	}
	jd1 = jdn(1, mm, yy);
	jd2 = jdn(1, mm1, yy1);
	ly1 = getYearInfo(yy);
	//alert('1/'+mm+'/'+yy+' = '+jd1+'; 1/'+mm1+'/'+yy1+' = '+jd2);
	tet1 = ly1[0].jd;
	result = new Array();
	if (tet1 <= jd1) { /* tet(yy) = tet1 < jd1 < jd2 <= 1.1.(yy+1) < tet(yy+1) */
		for (i = jd1; i < jd2; i++) {
			result.push(findLunarDate(i, ly1));
		}
	} else if (jd1 < tet1 && jd2 < tet1) { /* tet(yy-1) < jd1 < jd2 < tet1 = tet(yy) */
		ly1 = getYearInfo(yy - 1);
		for (i = jd1; i < jd2; i++) {
			result.push(findLunarDate(i, ly1));
		}
	} else if (jd1 < tet1 && tet1 <= jd2) { /* tet(yy-1) < jd1 < tet1 <= jd2 < tet(yy+1) */
		ly2 = getYearInfo(yy - 1);
		for (i = jd1; i < tet1; i++) {
			result.push(findLunarDate(i, ly2));
		}
		for (i = tet1; i < jd2; i++) {
			result.push(findLunarDate(i, ly1));
		}
	}
	return result;
}

function getDayName(lunarDate) {
	if (lunarDate.day == 0) {
		return "";
	}
	var cc = getCanChi(lunarDate);
	var s = "Ng\u00E0y " + cc[0] +", th\341ng "+cc[1] + ", n\u0103m " + cc[2];
	return s;
}

function getLunarName(lunarDate) {
	if (lunarDate.day == 0) {
		return "";
	}
	var cc = getCanChiPlus(lunarDate);
	return cc;
}

function getYearCanChi(year) {
	return CAN[(year+6) % 10] + " " + CHI[(year+8) % 12];
}

function getYearChi(year) {
	return CHI[(year+8) % 12];
}

function getLunaYear(year) {
	return CHI[(year+8) % 12];
}

/*
 * Can cua gio Chinh Ty (00:00) cua ngay voi JDN nay
 */
function getCanHour0(jdn) {
	return CAN[(jdn-1)*2 % 10];
}

function getCanChi(lunar) {
	var dayName, monthName, yearName;
	dayName = CAN[(lunar.jd + 9) % 10] + " " + CHI[(lunar.jd+1)%12];
	monthName = CAN[(lunar.year*12+lunar.month+3) % 10] + " " + CHI[(lunar.month+1)%12];
	if (lunar.leap == 1) {
		monthName += " (nhu\u1EADn)";
	}
	yearName = getYearCanChi(lunar.year);
	return new Array(dayName, monthName, yearName);
}

function getCanChiPlus(lunar) {
	var dayName, monthName, yearName, yearChi, dayCan;
	dayName = CAN[(lunar.jd + 9) % 10] + " " + CHI[(lunar.jd+1)%12];
	dayCan = CAN[(lunar.jd + 9) % 10];
	monthName = CAN[(lunar.year*12+lunar.month+3) % 10] + " " + CHI[(lunar.month+1)%12];
	if (lunar.leap == 1) {
		monthName += " (nhu\u1EADn)";
	}
	yearName = getYearCanChi(lunar.year);
	yearChi = getYearChi(lunar.year);
	return new Array(dayName, monthName, yearName, yearChi, dayCan);
}

function getDayString(lunar, solarDay, solarMonth, solarYear) {
	var s;
	var dayOfWeek = TUAN[(lunar.jd + 1) % 7];
	s = dayOfWeek + " " + solarDay + "/" + solarMonth + "/" + solarYear;
	s += " -+- ";
	s = s + "Ng\u00E0y " + lunar.day+" th\341ng "+lunar.month;
	if (lunar.leap == 1) {
		s = s + " nhu\u1EADn";
	}
	return s;
}

function getTodayString() {
	var s = getDayString(currentLunarDate, today.getDate(), today.getMonth()+1, today.getFullYear());
	s += " n\u0103m " + getYearCanChi(currentLunarDate.year);
	return s;
}

function getTodayStringTPO() {
	return today.getDate()+','+today.getMonth()+1+','+today.getFullYear();
}

function getCurrentTime() {
	today = new Date();
	var Std = today.getHours();
	var Min = today.getMinutes();
	var Sec = today.getSeconds();
	var s1  = ((Std < 10) ? "0" + Std : Std);
	var s2  = ((Min < 10) ? "0" + Min : Min);
	return s1 + ":" + s2;
}

function getGioHoangDao(jd) {
	var chiOfDay = (jd+1) % 12;
	var gioHD = GIO_HD[chiOfDay % 6]; // same values for Ty' (1) and Ngo. (6), for Suu and Mui etc.
	var ret = "";
	var count = 0;
	for (var i = 0; i < 12; i++) {
		if (gioHD.charAt(i) == '1') {
			ret += CHI[i];
			ret += ' ('+(i*2+23)%24+'-'+(i*2+1)%24+')';
			if (count++ < 5) ret += ', ';
			if (count == 3) ret += '\n';
		}
	}
	return ret;
}

var DAYNAMES = new Array("CN", "T2", "T3", "T4", "T5", "T6", "T7");
var PRINT_OPTS = new OutputOptions();
var FONT_SIZES = new Array("9pt", "13pt", "17pt");
var TAB_WIDTHS = new Array("180px", "420px", "600px");

function OutputOptions() {
	this.fontSize = "13pt";
	// this.tableWidth = "100%";
}

function setOutputSize(size) {
	var idx = 1;
	if (size == "small") {
		idx = 0;
	} else if (size == "big") {
		idx = 2;
	} else {
		idx = 1;
	}
	PRINT_OPTS.fontSize = FONT_SIZES[idx];
	PRINT_OPTS.tableWidth = TAB_WIDTHS[idx];
}

function printSelectedMonth() {
	detectUrlInfo();
	return printMonth(currentMonth, currentYear);
}

function printSelectedMonthSearch() {
	detectUrlInfo();
	return printMonthSearch(currentMonth, currentYear);
}

function printMonth(mm, yy) {
	var res = "";
	res += printStyle();
	res += printTable(mm, yy);
	res += printFoot();
	return res;
}

function printMonthSearch(mm, yy) {
	var res = "";
	res += printStyle();
	res += printSearch(mm, yy);
	res += printFoot();
	return res;
}

function printYear(yy) {
	var yearName = "N&#x103;m " + getYearCanChi(yy) + " " + yy;
	var res = "";
	res += printStyle();
	res += '<table align=center>\n';
	res += ('<tr><td colspan="3" class="tennam" onClick="showYearSelect();">'+yearName+'</td></tr>\n');
	for (var i = 1; i<= 12; i++) {
		if (i % 3 == 1) res += '<tr>\n';
		res += '<td>\n';
		res += printTable(i, yy);
		res += '</td>\n';
		if (i % 3 == 0) res += '</tr>\n';
	}
	res += '<table>\n';
	res += printFoot();
	return res;
}

function printSelectedYear() {
	getSelectedMonth();
	return printYear(currentYear);
}

function printStyle() {
	var fontSize = PRINT_OPTS.fontSize;
	var res = "";
	res += '<style type="text/css">\n';
	res += '<!--\n';
	res += '  .tennam {text-align:center; font-size:150%; line-height:120%; font-weight:bold; color:#000000; background-color: #CCCCCC}\n';
	res += '  .thang {font-size: '+fontSize+'; padding:0px; line-height:100%; font-family: "Kanit", arial, tahoma; table-layout:fixed}\n';
	res += '  .tenthang {text-align:center; font-size:125%; line-height:100%; font-weight:bold; color:#330033; background-color: #CCFFCC}\n';
	res += '  .navi-l {text-align:center; font-size:75%; line-height:100%; font-family: "Kanit", arial, tahoma; font-weight:bold; color:red; background-color: #CCFFCC}\n';
	res += '  .navi-r {text-align:center; font-size:75%; line-height:100%; font-family: "Kanit", arial, tahoma; font-weight:bold; color:#330033; background-color: #CCFFCC}\n';
	res += '  .ngaytuan {width:14%; text-align:center; font-size:125%; line-height:100%; color:#330033; background-color: #FFFFCC}\n';
	res += '  .ngaythang {background-color:#FDFDF0}\n';
	res += '  .homnay {background-color:#FFF000}\n';
	res += '  .tet {background-color:#FFCC99}\n';
	res += '  .am {text-align:right;font-size:75%;line-height:100%;color:blue}\n';
	res += '  .am2 {text-align:right;font-size:75%;line-height:100%;color:#004080}\n';
	res += '  .t2t6 {text-align:left;font-size:125%;color:black}\n';
	res += '  .t7 {text-align:left;font-size:125%;line-height:100%;color:green}\n';
	res += '  .cn {text-align:left;font-size:125%;line-height:100%;color:red}\n';
	res += '-->\n';
	res += '</style>\n';
	return res;
}



function printTable(mm, yy) {
	var i, j, k, solar, lunar, cellClass, solarClass, lunarClass;
	var currentMonth = getMonth(mm, yy);
	if (currentMonth.length == 0) return;
	var ld1 = currentMonth[0];
	var emptyCells = (ld1.jd + 1) % 7;
	var MonthHead = mm + "/" + yy;
	var LunarHead = getYearCanChi(ld1.year);
	var res = "";
	res += ('<table class="thang" border="0" cellpadding="1" cellspacing="1">\n');
	res += printHead(mm, yy);
	for (i = 0; i < 6; i++) {
		res += ("<tr>\n");
		for (j = 0; j < 7; j++) {
			k = 7 * i + j;
			if (k < emptyCells || k >= emptyCells + currentMonth.length) {
				res += printEmptyCell();
			} else {
				solar = k - emptyCells + 1;
				ld1 = currentMonth[k - emptyCells];
				res += printCell(ld1, solar, mm, yy);
			}
		}
		res += ("</tr>\n");
	}
	res += ('</table>\n');
	return res;
}

function printSearch(mm, yy) {	
	var i, j, k, solar, lunar, cellClass, solarClass, lunarClass;
	var currentMonth = getMonth(mm, yy);
	if (currentMonth.length == 0) return;
	var ld1 = currentMonth[0];

	var emptyCells = (ld1.jd + 1) % 7;
	var MonthHead = mm + "/" + yy;
	var LunarHead = getYearCanChi(ld1.year);
	var totalDaysOfMonth = getNumberOfDays(yy, mm);
	var res = "";
	res += ('<table style="margin-top:-1px;" id="hourBlock" class="other-infos table-100-w" border="0" cellpadding="1" cellspacing="1">\n');
	for(ii = 1; ii <= totalDaysOfMonth; ii++){
		res += ('<tr class="tpo-day-info new-table-style '+(isWeekend(ii, mm, yy)?"weekend":"")+'">\n');
		for(ir = 1; ir <= 13; ir++){
			if(ir==1){
				res += ("<td class='"+(ii==currentDayKeep&&mm==currentMonthKeep?'today-ns':'not-today-ns')+"'><span class='dl-ns'>"+ii+"/"+mm+"<br>"+dayDay(ii, mm, yy)+"</span><br><span class='al-ns'>"+getLunarDate(ii, mm, yy).day+"/"+getLunarDate(ii, mm, yy).month+"/"+getLunarDate(ii, mm, yy).year+"</span></td>\n");
			}else{
				var getQueSearchResult = getQueSearch(ii, mm, yy, ir-1, getLunarDate(ii, mm, yy).day, getLunarDate(ii, mm, yy).month, getLunarDate(ii, mm, yy).year);
				res += ("<td class='"+(ir>=6&&ir<=10?'hongcanhsen':'')+" ngaythang searchTenQue tqsnew' tqc='"+getQueSearchResult[1]+"' tqb='"+getQueSearchResult[3]+"' lt='"+getQueSearchResult[4]+"' searchTenQue='["+getQueSearchResult[1]+"],["+getQueSearchResult[3]+"]'>"+getQueSearchResult[1]+"<br>"+getQueSearchResult[3]+"<br><div class='ltdiv'><font style='color:"+(getQueSearchResult[4]=='Thanh Long'?'blue':'green')+";'>"+getQueSearchResult[4]+"</font></div></td>\n");
			}			
		}
		res += ("</tr>\n");
	}

	res += ('</table>\n');
	return res;
}

function printCellSearch(lunarDate, solarDate, solarMonth, solarYear) {	
	var lunar = lunarDate.day;
	if (solarDate == 1 || lunar == 1) {
		lunar = lunarDate.day + "/" + lunarDate.month;
	}
	var res = "";
	
	res += ('<td class="'+cellClass+'"');
	if (lunarDate != null) res += (' title="'+getDayName(lunarDate)+'" onClick="showSelectDay('+solarDate+','+solarMonth+','+solarYear+',1);"');
	res += '>';
	res += (' <div style=color:'+solarColor+' class="dl '+solarClass+'">'+solarDate+'</div> <div class="'+lunarClass+'">'+lunar+'</div></td>\n');
	return res;
}



function getPrevMonthLink(mm, yy) {
	var mm1 = mm > 1 ? mm-1 : 12;
	var yy1 = mm > 1 ? yy : yy-1;
	if((currentYearKeep==yy&&currentMonthKeep==(mm-1)) || ((currentYearKeep+1)==yy&&mm==1&&currentMonthKeep==12)){
		return '<a href="'+window.location.pathname+'?yy='+yy1+'&mm='+mm1+'" title="Tháng trước"><div class="n-p-button-cover">‹</div></a>';
	}else{
		return '<a href="'+window.location.pathname+'?yy='+yy1+'&mm='+mm1+'&dd=1&bh=1" title="Tháng trước"><div class="n-p-button-cover">‹</div></a>';
	}
}

function getNextMonthLink(mm, yy) {
	var mm1 = mm < 12 ? mm+1 : 1;
	var yy1 = mm < 12 ? yy : yy+1;
	if((currentYearKeep==yy&&currentMonthKeep==(mm+1)) || ((currentYearKeep-1)==yy&&mm==12&&currentMonthKeep==1)){
		return '<a href="'+window.location.pathname+'?yy='+yy1+'&mm='+mm1+'" title="Tháng sau"><div class="n-p-button-cover">›</div></a>';
	}else{
		return '<a href="'+window.location.pathname+'?yy='+yy1+'&mm='+mm1+'&dd=1&bh=1" title="Tháng sau"><div class="n-p-button-cover">›</div></a>';
	}	
}

function getPrevYearLink(mm, yy) {
	return '<a href="'+window.location.pathname+'?yy='+(yy-1)+'&mm='+mm+'" title="Năm trước"><div class="n-p-button-cover _cYear">«</div></a>';
}

function getNextYearLink(mm, yy) {
	return '<a href="'+window.location.pathname+'?yy='+(yy+1)+'&mm='+mm+'" title="Năm sau"><div class="n-p-button-cover _cYear">»</div></a>';
}

function printHead(mm, yy) {
	var res = "";
	var monthName = mm;
	var yearName = yy;
	res += ('<tr><td colspan="2" class="navi-l">'+getPrevYearLink(mm, yy)+' &nbsp;'+getPrevMonthLink(mm, yy)+'</td>\n');
	res += ('<td colspan="3" class="tenthang"><p class="header-dy1">'+yy+'</p><p class="header-dy2">THÁNG '+monthName+'</p><p id="lunaBigTitle1">...</p><p id="lunaBigTitle2">...</p><button id="backButton" onclick="byMonth()">Chuyển Xem Theo Tháng</button>'+(currentYearKeep!=currentYear||currentMonthKeep!=currentMonth||currentDayKeep!=currentDay||currentBlockHourKeep!=currentBlockHour?'<br><br><button id="backButton" onclick="showSelectHourPlus()">Bấm Quay Về Hiện Tại</button>':'')+'</td>\n');
	res += ('<td colspan="2" class="navi-r">'+getNextMonthLink(mm, yy)+' &nbsp;'+getNextYearLink(mm, yy)+'</td></tr>\n');
	
	res += ('<tr class="tpo-day" onClick="alertAbout();">\n');
	for(var i=0;i<=6;i++) {
		res += ('<td class=ngaytuan>'+DAYNAMES[i]+'</td>\n');
	}
	res += ('<\/tr>\n');
	return res;
}

function printHeadSearch(mm, yy) {
	var res = "";
	var monthName = mm;
	var yearName = yy;
	res+=printStyle();
	res += ('<table class="thang" border="0" cellpadding="1" cellspacing="1">\n');
	res += ('<tr><td colspan="2" class="navi-l">'+getPrevYearLink(mm, yy)+' &nbsp;'+getPrevMonthLink(mm, yy)+'</td>\n');
	res += ('<td colspan="3" class="tenthang"><p class="header-dy1">'+yy+'</p><p class="header-dy2">THÁNG '+monthName+'</p><p id="lunaBigTitle1">...</p><p id="lunaBigTitle2">...</p><button id="backButton" onclick="byDay()">Chuyển Xem Theo ngày</button>'+(currentYearKeep!=currentYear||currentMonthKeep!=currentMonth||currentDayKeep!=currentDay||currentBlockHourKeep!=currentBlockHour?'<br><br><button id="backButton" onclick="showSelectHourPlus()">Bấm Quay Về Hiện Tại</button>':'')+'</td>\n');
	res += ('<td colspan="2" class="navi-r">'+getNextMonthLink(mm, yy)+' &nbsp;'+getNextYearLink(mm, yy)+'</td></tr></table>\n');
	return res;
}

function printEmptyCell() {
		return '<td class=ngaythang><div class=cn>&nbsp;</div> <div class=am>&nbsp;</div></td>\n';
}



function printCell(lunarDate, solarDate, solarMonth, solarYear) {
	var cellClass, solarClass, lunarClass, solarColor;
	cellClass = "ngaythang";
	solarClass = "t2t6";
	lunarClass = "am";
	solarColor = "black";
	var dow = (lunarDate.jd + 1) % 7;
	if (dow == 0) {
		solarClass = "cn";
		solarColor = "red";
	} else if (dow == 6) {
		solarClass = "t7";
		solarColor = "green";
	}
	if (solarDate == today.getDate() && solarMonth == today.getMonth()+1 && solarYear == today.getFullYear()) {
		cellClass = "homnay";
	}
	if (lunarDate.day == 1 && lunarDate.month == 1) {
		cellClass = "tet";
	}
	if (lunarDate.leap == 1) {
		lunarClass = "am2";
	}
	var lunar = lunarDate.day;
	if (solarDate == 1 || lunar == 1) {
		lunar = lunarDate.day + "/" + lunarDate.month;
	}
	if (solarDate == currentDay && solarMonth == currentMonth && solarYear == currentYear) {
		cellClass += " ngayDangChon";
	}
	var res = "";
	var args = lunarDate.day + "," + lunarDate.month + "," + lunarDate.year + "," + lunarDate.leap;
	args += ("," + lunarDate.jd + "," + solarDate + "," + solarMonth + "," + solarYear);
	res += ('<td class="'+cellClass+'"');
	if (lunarDate != null) res += (' title="'+getDayName(lunarDate)+'" onClick="showSelectDay('+solarDate+','+solarMonth+','+solarYear+',1);"');
	// if (lunarDate != null) res += (' title="'+getDayName(lunarDate)+'" onClick="alertDayInfo('+args+');"');
	res += '>';
	res += (' <div style=color:'+solarColor+' class="dl '+solarClass+'">'+solarDate+'</div> <div class="'+lunarClass+'">'+lunar+'</div></td>\n');
	return res;
}



function printFoot() {
	var res = "";
	res += '<script language="JavaScript" src="amlich-hnd.js"></script>\n';
	return res;
}

// function showMonthSelect() {
// 	var home = "http://www.ifis.uni-luebeck.de/~duc/amlich/JavaScript/";
// 	window.open(home, "win2702", "menubar=yes,scrollbars=yes,status=yes,toolbar=yes,resizable=yes,location=yes");
// 	window.location = home;
// 	alertAbout();
// }

function showSelectDay(dd,mm,yy,bh) {
	if(currentDayKeep==dd&&currentMonthKeep==mm&&currentYearKeep==yy){
		window.location = window.location.pathname+"?dd="+dd+"&mm="+mm+"&yy="+yy;
	}else{
		window.location = window.location.pathname+"?dd="+dd+"&mm="+mm+"&yy="+yy+"&bh="+bh;
	}
}

function showSelectHour(dd,mm,yy,bh) {
	window.location = window.location.pathname+"?dd="+dd+"&mm="+mm+"&yy="+yy+"&bh="+bh+"#hourBlock";
}

function showSelectHourPlus() {
	window.location = window.location.pathname;
}

function byDay() {
	window.location = 'http://lichdichly.amtradichly.vn/show/index.html';
}

function byMonth() {
	window.location = 'http://lichdichly.amtradichly.vn/show/search.html';
}

function goYear(year) {
	if(currentDayKeep==year){
		window.location = window.location.pathname+"?yy="+year;
	}else{
		window.location = window.location.pathname+"?dd=1&mm=1&yy="+year+"&bh=1";
	}
}

function extractDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}

function showYearSelect() {
	//window.open("selectyear.html", "win2702", "menubar=yes,scrollbars=yes");
	window.print();
}

function infoCellSelect(id) {
	if (id == 0) {
	}
}

function alertDayInfo(dd, mm, yy, leap, jd, sday, smonth, syear) {
	var lunar = new LunarDate(dd, mm, yy, leap, jd);
	var s = getDayString(lunar, sday, smonth, syear);
	s += " \u00E2m l\u1ECBch\n";
	s += getDayName(lunar);
	s += "\nGi\u1EDD \u0111\u1EA7u ng\u00E0y: "+getCanHour0(jd)+" "+CHI[0];
	s += "\nTi\u1EBFt: "+TIETKHI[getSunLongitude(jd+1, 7.0)];
	s += "\nGi\u1EDD ho\u00E0ng \u0111\u1EA1o: "+getGioHoangDao(jd);
	alert(s);
}


function firstTimeOfDay(jd) {
	return getCanHour0(jd);
}

function alertAbout() {
	alert(ABOUT);
}

function showVietCal() {
	window.status = getCurrentTime() + " -+- " + getTodayString();
	window.window.setTimeout("showVietCal()",5000);
}

var firstTimeOfDay1 = getCanHour0(jdn(currentDay,currentMonth,currentYear));
var canChi = ["Canh", "Tân", "Nhâm", "Quí", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
var canChiCode = ["canh", "tan", "nham", "qui", "giap", "at", "binh", "dinh", "mau", "ky"];
var canChi2 = ["Tý", "Sửu", "Dần", "Mẹo", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
var lunaYH = ["Tý", "Sửu", "Dần", "Mẹo", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
var blockHours1 = [-1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
var blockHours2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
var symbols = ["null", "thien.png", "trach.png", "hoa.png", "loi.png", "phong.png", "thuy.png", "son.png", "dia.png"];
var symbolsCode = [["null"], ["thien","1","1","1"], ["trach","0","1","1"], ["hoa","1","0","1"], ["loi","0","0","1"], ["phong","1","1","0"], ["thuy","0","1","0"], ["son","1","0","0"], ["dia","0","0","0"]];
var tenQue = [
	{'i':'111011','m':'Thiên Trạch','n':'Lý','c':'<u>Lễ dã</u>. <font color="red">Lộ hành</font>. Nghi lễ, có chường mực, khuôn phép, dẫm lên, không cho đi sai, có ý chận đường sái quá, hệ thống , pháp lý. <font color="blue">Hổ lang đang đạo chi tượng: Tượng hổ lang đón đường<font>. Lễ nghĩa, hợp lý, lý lẽ, lời nói, lên đường, xe cộ.'},
	{'i':'111101','m':'Thiên Hỏa','n':'Đồng Nhân','c':'<u>Thân dã</u>. <font color="red">Thân thiện</font>. Trên dưới cùng lòng, cùng người ưa thích, cùng một bọn người. <font color="blue">Hiệp lực đồng tâm chi tượng: Tượng cùng người hiệp lực</font>. Gần gũi, giống nhau, đồng tâm, một cập, bạn, đội bạn, người kế bên.'},
	{'i':'111001','m':'Thiên Lôi','n':'Vô Vọng','c':'<u>Thiên tai dã</u>. <font color="red">Xâm lấn</font>. Tai vạ, lỗi bậy bạ, không lề lối, không qui củ, làm càn đại, chống đối, khứng chịu. <font color="blue">Cương tự ngoại lai chi tượng: Tượng kẻ mạnh từ ngoài đến</font>. Làm bậy, không hy vọng, thất vọng, hư.'},
	{'i':'111110','m':'Thiên Phong','n':'Cấu','c':'<u>Ngộ dã</u>. <font color="red">Tương ngộ</font>. Gặp gỡ, cấu kết, liên kết, kết hợp, móc nối, mềm gặp cứng. <font color="blue">Phong vân bất trắc chi tượng: Gặp gỡ thình lình, ít khi, bất trắc</font>. Bắt tay, thông đồng, dính nhau.'},
	{'i':'111010','m':'Thiên Thủy','n':'Tụng','c':'<u>Luận dã</u>. <font color="red">Bất hòa</font>. Bàn cãi, kiện tụng, bàn tính, cãi vã, tranh luận, bàn luận. <font color="blue">Đại tiểu bất hào chi tượng: Lớn nhỏ không hòa</font>. Không vừa ý, trái ý nhau, không hợp, bất ổn.'},
	{'i':'111100','m':'Thiên Sơn','n':'Độn','c':'<u>Thoái dã</u>. <font color="red">Ẩn trá</font>. Lui, ẩn khuất, tránh đời, lừa dối, trá hình, có ý trốn tránh, trốn cái mặt đưa thấy cái lưng. <font color="blue">Báo ẩn nam sơn chi tượng: Tượng con báo ẩn trong núi Nam</font>. Đi mất, đồ giả.'},
    {'i':'111000','m':'Thiên Địa','n':'Bỉ','c':'<u>Tắc dã</u>. <font color="red">Gián cách</font>. Bế tắc, không thông, không tương cảm nhau, xui xẻo, dèm pha, chê bai lẫn nhau, mạnh ai nấy theo ý riêng.  <font color="blue">Thượng hạ tiếm loại chi tượng: Tượng trên dưới lôi thôi</font>. Chấm hết, không hiểu, không xong.'},
    {'i':'111111','m':'Thiên Thiên','n':'Thuần Kiền','c':'<u>Kiện dã</u>. <font color="red">Chính yếu</font>. Cứng mạnh, khô, lớn, khỏe mạnh, đức không nghỉ.  <font color="blue">Nguyên Hanh Lợi Trinh chi tượng: Tượng vạn vật có khởi đầu, lớn lên, toái chí, hóa thành</font>. Chính mình, chính diện, trước mắt.'},

	{'i':'011101','m':'Trạch Hỏa','n':'Cách','c':'<u>Cải dã</u>. <font color="red">Cải biến</font>. Bỏ lối cũ, cải cách, hoán cải, cách tuyệt,cánh chim thay lông. <font color="blue">Thiên uyên huyền cách chi tượng: Tượng vực trời xa thẳm</font>; thay đổi, trở mặt, cách xa.'},
	{'i':'011001','m':'Trạch Lôi','n':'Tùy','c':'<u>Thuận dã</u>. <font color="red">Di động</font>. Cùng theo, mặc lòng, không có chí hướng, chỉ chìu theo, đại thể chỉ việc di động thuyên chuyển như chiếc xe. <font color="blue">Phản phúc bất định chi tượng: Tượng loại không ở</font>; việc còn chạy, còn động, đi.'},
	{'i':'011110','m':'Trạch Phong','n':'Đại Quá','c':'<u>Họa dã</u>. <font color="red">Cả quá</font>. Cả quá ắt có tai họa, quá mực thường, quá nhiều, giàu cương nghị ở trong. <font color="blue">Nộn thảo kinh sương chi tượng: Tượng cỏ non bị sương tuyết</font>; quá đáng, quá cở.'},
	{'i':'011010','m':'Trạch Thủy','n':'Khốn','c':'<u>Nguy dã</u>. <font color="red">Nguy lo</font>. Cùng quẫn, bị người làm ách, lo lắng, cùng khổ, mệt mỏi, nguy cấp, lo hiểm nạn. <font color="blue">Thủ kỷ đãi thời chi tượng: Tượng giữ mình đợi thời</font>.'},
	{'i':'011100','m':'Trạch Sơn','n':'Hàm','c':'<u>Cảm dã</u>. <font color="red">Thụ cảm</font>. Cảm xúc, cảm ứng, thọ nhận, nghe thấy, nghĩ đến, xúc động. <font color="blue">Nam nữ giao cảm chi tượng: Tượng nam nữ có tình ý</font>; nhạy cảm, nhận biết.'},
	{'i':'011000','m':'Trạch Địa','n':'Tụy','c':'<u>Tu dã</u>. <font color="red">Trưng tập</font>. Nhóm hợp, biểu tình, dồn đống, quần tụ nhau lại, kéo đến, kéo thành bầy. <font color="blue">Long vân tế hội chi tượng: Tượng rồng mây giao hội</font>; tụ hội, gom lại.'},
	{'i':'011111','m':'Trạch Thiên','n':'Quải','c':'<u>Quyết dã</u>. <font color="red">Dứt khoát</font>. Dứt hết, biên cương, ranh giới, thành phần, thành khoảnh, quyết định, quyết nghị, cổ phần, thôi, khai lề lối. <font color="blue">Ích chi cực tắc quyết chi tượng: Tượng lợi đã cùng ắt thôi</font>; gãy, đứt.'},
	{'i':'011011','m':'Trạch Trạch','n':'Thuần Đoài','c':'<u>Duyệt dã</u>. <font color="red">Hiện đẹp</font>. Đẹp đẽ, ưa thích, vui hiện trên mặt, không buồn chán, cười nói, khuyết mẻ, hủy triết, lý thuyết. <font color="blue">Hỉ dật mi tự chi tượng: Tượng vui hiện trên mặt, khẩu khí</font>; chỉ nói năng, đổ bể, xuất khẩu, cửa, lời nói.'},

	{'i':'101001','m':'Hỏa Lôi','n':'Phệ Hạp','c':'<u>Khiết dã</u>. <font color="red">Cắn hợp</font>. Cấu hợp, bấu vấu, vặn vẹo, nhai, bấu quào, dày xéo, đay nghiến, phỏng vấn, hỏi han(học hỏi). <font color="blue">Uy mị bất chấn chi tượng: Tượng yếu đuối không chạy được</font>; cào cấu, bắt tay, chà đạp.'},
	{'i':'101110','m':'Hỏa Phong','n':'Đỉnh','c':'<u>Định dã</u>. <font color="red">Nung đúc</font>. Đứng được, cậm đứng, trồng, nung nấu, rèn luyện, vững chắc, ước hẹn. <font color="blue">Luyện dược thành đan chi tượng: Tượng luyện thuốc thành linh đơn</font>; hứa hẹn, học, đứng tại chỗ, an định.'},
	{'i':'101010','m':'Hỏa Thủy','n':'Vị Tế','c':'<u>Thất dã</u>. <font color="red">Thất cách</font>. Thất bác, mất, thất bại, dở dang, chưa xong, nửa chừng. <font color="blue">Ưu trung vọng hỷ chi tượng: Tượng trong cái lo có cái mừng</font>; nửa đường, không hay, xui, việc nửa thành nửa bại, ...'},
	{'i':'101100','m':'Hỏa Sơn','n':'Lữ','c':'<u>Khách dã</u>. <font color="red">Thứ yếu</font>. Đỗ nhờ, khách, ở đậu, tạm trú, kê vào, gá vào, ký ngụ bên ngoài, tính cách lang thang, ít người thân, không chính. <font color="blue">Ỷ nhân tác giá chi tượng: Tượng nhờ người mai mối</font>; tạm thời, ngoài lề, phụ trợ.'},
	{'i':'101000','m':'Hỏa Địa','n':'Tấn','c':'<u>Tiến dã</u>. <font color="red">Hiển hiện</font>. Đi hoặc tới, tiến tới gần, theo mực thường, lửa đã hiện trên mặt đất, ra mặt, trưng bày. <font color="blue">Long kiến từơng trình chi tượng: Tượng rồng hiện điềm lành</font>; phát triển.'},
	{'i':'101111','m':'Hỏa Thiên','n':'Đại Hữu','c':'<u>Khoan dã</u>. <font color="red">Cả có</font>. Có nhiều, thong dong, dung dưỡng nhiều. Độ lượng rộng, có đức dày, chiếu sáng lớn. <font color="blue">Kim ngọc mãn đường chi tượng: Tượng vàng bạc đầy nhà</font>; bạn hữu, số nhiều.'},
	{'i':'101011','m':'Hỏa Trạch','n':'Khuể','c':'<u>Quai dã</u>. <font color="red">Hổ trợ</font>. Trái lìa, lìa xa, 2 bên lợi dụng lẫn nhau, cơ biến quai xảo, như cung tên, súng đạn. <font color="blue">Hồ giả hổ oai chi tượng: Tượng con hồ nhờ oai con hổ</font>; nhờ, mượn sức, ra oai, giả tạo, lỡ việc, dở dang.'},
	{'i':'101101','m':'Hỏa Hỏa','n':'Thuần Ly','c':'<u>Lệ dã</u>. <font color="red">Nóng sáng</font>. Sáng sủa, trống trải, trống trơn, toả ra, bám vào, phụ bám, phô trương ra ngoài. <font color="blue">Môn hộ bất ninh chi tượng: Tượng nhà cửa không yên</font>; có việc xui rủi.'},

	{'i':'001110','m':'Lôi Phong','n':'Hằng','c':'<u>Cửu dã</u>. <font color="red">Trường cửu</font>. Lâu dài. Chậm chạp, đạo lâu bền như vợ chồng, kéo dài câu chuyện, thâm giao, nghĩa cố tri, xưa, cũ. <font color="blue">Trường cửu chi nghĩa chi tượng: Tượng lâu bền như đạo nghĩa</font>; thường ngày, vết hằng, lối cũ, thói quen, đường mòn, không thay đổi.'},
	{'i':'001010','m':'Lôi Thủy','n':'Giải','c':'<u>Tán dã</u>. <font color="red">Nơi nơi</font>. Làm cho tan đi như làm tan sự nguy hiểm, giải phóng, giải tán, loan truyền, phân phát, lưu thông, ban rải, ân xá. <font color="blue">Lôi vũ tác giải chi tượng: Tượng sấm động  mây bay</font>; bung ra, ly tán.'},
	{'i':'001100','m':'Lôi Sơn','n':'Tiểu Quá','c':'<u>Họa dã</u>. <font color="red">Bất túc</font>. Thiểu não, thiểu lý, hèn mọn, nhỏ nhặt, bẩn thỉu, thiếu cường lực. <font color="blue">Thượng hạ truân chuyên chi tượng: Tượng trên dưới gian nan, vất vả, buồn thảm</font>; ép bức, không đầy đủ, vật nhỏ.'},
	{'i':'001000','m':'Lôi Địa','n':'Dự','c':'<u>Duyệt dã</u>. <font color="red">Thuận động</font>. Dự bị, dự phòng, canh chừng, sớm, vui vầy. <font color="blue">Thượng hạ duyệt dịch chi tượng: Tượng trên dưới vui vẻ; chờ, do dự, động trên đất, hàng rào, động trong âm u, động trong manh nha</font>; dè chừng.'},
	{'i':'001111','m':'Lôi Thiên','n':'Đại Tráng','c':'<u>Chí dã</u>. <font color="red">Tự cường</font>. Ý riêng, bụng nghĩ, hướng thượng, ý định, vượng sức, thịnh đại, trên cao, chót vót, lên trên, chí khí, có lập trường, đơn độc. <font color="blue">Phượng tập đăng sơn chi tượng: Tượng phượng đậu trên núi</font>; cõi trên, việc riêng, tự mình, động trên cao, bay trên cao, độc lập.'},
	{'i':'001011','m':'Lôi Trạch','n':'Qui Muội','c':'<u>Tai dã</u>. <font color="red">Xôn xao</font>. Tai nạn, rối ren, lôi thôi, chen lẫn, nữ chi chung, gái lấy chồng. <font color="blue">Ác qủy vi sủng chi tượng: Tượng ma quái làm rối</font>; ngu muội, mờ mịt.'},
	{'i':'001101','m':'Lôi Hỏa','n':'Phong','c':'<u>Thịnh đại dã</u>. <font color="red">Hoà mỹ</font>. Thịnh đại, được mùa, nhiều người góp sức. <font color="blue">Chí đồng đạo hợp chi tượng: Tượng cùng đồng tâm hiệp lực</font>; nở lớn.'},
	{'i':'001001','m':'Lôi Lôi','n':'Thuần Chấn','c':'<u>Động dã</u>. <font color="red">Động dụng</font>. Rung động, sợ hãi do chấn động, phấn phát, nổ vang, phấn khởi, chấn kinh, nẩy mầm. <font color="blue">Trùng trùng chấn kinh chi tượng: Tượng khắp cùng dấy động</font>; âm thanh, mở ra, xúc động.'},

	{'i':'110010','m':'Phong Thủy','n':'Hoán','c':'<u>Tán dã</u>. <font color="red">Ly tán</font>. Lan ra, tràn lan, nổi trôi, tán thất, trốn đi xa, lánh xa, thất nhân tâm, hao hớt. <font color="blue">Thủy ngộ phong tắc hoán tán chi tượng: Tượng nước gặp gió thì phải tan phải chạy</font>; phân ly, đi xa.'},
	{'i':'110100','m':'Phong Sơn','n':'Tiệm','c':'<u>Tiến dã</u>. <font color="red">Tuần tự</font>. Từ từ, thong thả đến, lần lần, bậc thang, bò tới, chậm chạp, nhai nhỏ nuốt vào. <font color="blue">Phúc lộc đồng lâm chi tượng: Tượng phúc lộc cùng đến</font>; đi tới, tiến hành, tiến trình, trật tự, từng bước, (động từ).'},
	{'i':'110000','m':'Phong Địa','n':'Quan','c':'<u>Quan dã</u>. <font color="red">Quan sát</font>. Xem xét, trông coi, cảnh tượng xem thấy, thanh tra, duyệt binh, khán trận, lướt qua, sơ qua, sơn phết, quét nhà.<font color="blue">Vân bình tụ tán chi tượng: Tượng bèo mây tan hợp</font>; Thấy, nhìn thấy, khách.'},
	{'i':'110111','m':'Phong Thiên','n':'Tiểu Súc','c':'<u>Tắc dã</u>. <font color="red">Dị đồng</font>. Lúc bế tắc, không đồng ý nhau, cô quả, cô độc, súc oán, chứa mối oán hận, có ý trái lại, không hòa hợp, nhỏ nhen. <font color="blue">Cầm sắc bất điệu chi tượng: Tượng tiếng đờn không hoà điệu</font>; khác lạ, đặc biệt, tiểu nhân, nhỏ, ít.'},
	{'i':'110011','m':'Phong Trạch','n':'Trung Phu','c':'<u>Tín dã</u>. <font color="red">Trung thật</font>. Tín thật, không ngờ vực, có uy tín cho người tin tưởng, tín ngưỡng, ở trong, ở giữa. <font color="blue">Nhu tại nội nhi đắc trung chi tượng: Tượng âm ở bên trong mà được giữa</font>; trung hư, tư tưởng tinh thần thôi, trung niên, nội bộ bên trong.'},
	{'i':'110101','m':'Phong Hỏa','n':'Gia Nhân','c':'<u>Đồng dã</u>. <font color="red">Nẩy nở</font>. Là người nhà, gia đinh, cùng gia đình, đồng chủng, người đồng nghiệp, người cùng xóm, sinh sôi, thêm nữa, khai thác mở mang thêm. <font color="blue">Khai hoa kết tử chi tượng: Tượng trổ bông sinh trái, nẩy mầm</font>; việc trẻ con, phát sinh, việc phụ, việc nhỏ, làm thêm nữa, nhân sự.'},
	{'i':'110001','m':'Phong Lôi','n':'Ích','c':'<u>Ích dã</u>. <font color="red">Tiến ích</font>. Thêm được lợi, giúp dùm, tiếng dội xa, vượt lên, phóng mình tới. <font color="blue">Hồng Hộc xung tiêu chi tượng: Tượng chim Hồng, chim Hộc bay qua mây mù</font>; vọt đi, bay đi, Thêm lợi, thêm lên, lấn tới.'},
	{'i':'110110','m':'Phong Phong','n':'Thuần Tốn','c':'<u>Thuận nhập dã</u>. <font color="red">Thuận nhập</font>. Thẩm thấu, theo lên theo xuống, theo tới theo lui, có sự giấu diếm ở trong. <font color="blue">Âm dương thăng giáng chi tượng: Tượng khí âm dương lên xuống giao hợp</font>; thu nhập, nhập vào, nhập lại.'},

	{'i':'010100','m':'Thủy Sơn','n':'Kiển','c':'<u>Nạn dã</u>. <font color="red">Trở ngại</font>. Cản ngăn, chận lại, chậm chạp, khập khiển, què quặt, khó khăn. <font color="blue">Bất năng tiến giả chi tượng: Tượng không năng đi</font>; ngưng lại.'},
	{'i':'010000','m':'Thủy Địa','n':'Tỷ','c':'<u>Tư dã</u>. <font color="red">Chọn lọc</font>. Thân liền, gạn lọc, mật thiết, tư hữu riêng, trưởng đoàn, trưởng toán, chọn lựa, quy căn, quy về một mối. <font color="blue">Khử xàm nhiệm hiền chi tượng: Tượng bỏ nịnh dụng trung</font>; tuyển chọn, người thân, chiết xuất.'},
	{'i':'010111','m':'Thủy Thiên','n':'Nhu','c':'<u>Thuận dã</u>. <font color="red">Tương hội</font>. Chờ đợi vì có hiểm đằng trước, thuận theo, quây quần, hội tụ, vui hội, cứu xét, nghiên cứu, chầu về. <font color="blue">Quân tử hoan hội chi tượng: Tượng quân tử hội hợp vui vẻ, ăn uống chờ thời</font>; song hội, bằng hữu gặp nhau.'},
	{'i':'010011','m':'Thủy Trạch','n':'Tiết','c':'<u>Chỉ dã</u>. <font color="red">Giảm chế</font>. Ngăn ngừa, tiết độ, chừng mực, kềm chế, giảm bớt, nhiều thì tràn. <font color="blue">Trạch thượng hữu thủy chi tượng: Tượng trên đầm có nước</font>; tiết ra, nước trên đầm tràn ra nhưng cũng còn giữ lại phần nào, nên gọi là giảm bớt thôi.'},
	{'i':'010101','m':'Thủy Hỏa','n':'Ký Tế','c':'<u>Hợp dã</u>. <font color="red">Hiện hợp</font>. Gặp nhau, cùng nhau, đã xong, việc xong, hiện thực, ích lợi nhỏ. <font color="blue">Hanh tiểu giả chi tượng: Tượng việc nhỏ thì thành</font>; kết hợp, hợp tác, từng cặp, hoàn thành, kế bên.'},
	{'i':'010001','m':'Thủy Lôi','n':'Truân','c':'<u>Nạn dã</u>. <font color="red">Gian lao</font>. Yếu đuối, chưa đủ sức, ngần ngại, do dự, vất vả, phải nhờ sự giúp đỡ. <font color="blue">Tiền hung hậu kiết chi tượng: Tượng trước dữ sau lành</font>; khó khăn, gian nan, vướng víu.'},
	{'i':'010110','m':'Thủy Phong','n':'Tĩnh','c':'<u>Tịnh dã</u>. <font color="red">Trầm lặng</font>. Ở chỗ nào cứ ở yên chỗ đó, xuống sâu, vực thẳm có nước, dưới sâu, cái giếng. <font color="blue">Kiền Khôn sất phối chi tượng: Tượng Trời Đất phối hợp lại</font>; im lặng, bất động, bình an, ổn định.'},
	{'i':'010010','m':'Thủy Thủy','n':'Thuần Khảm','c':'<u>Hãm dã</u>. <font color="red">Hãm hiểm</font>. Hãm vào ở trong, xuyên sâu vào trong, đóng cửa lại, gập gềnh, trắc trở, bắt buộc, kiềm hãm, thắng. <font color="blue">Khổ tận cam lai chi tượng: Tượng hết khổ mới đến sướng</font>; cột gút, trụ cột, kẹt, kẹp, khóa, nước, lạnh, đen tối, hiểm sâu, nghe được, ý thích.'},

	{'i':'100000','m':'Sơn Địa','n':'Bác','c':'<u>Lạc dã</u>. <font color="red">Tiêu điều</font>. Đẽo gọt, lột cướp đi, không lợi, rụng rớt, đến rồi lại đi, tản lạc, lạt lẽo nhau, xa lìa nhau, hoang vắng, buồn thảm. <font color="blue">Lục thân băng thán chi tượng: Tượng bà con thân thích xa lìa nhau</font>; gạt bỏ, mất đi.'},
	{'i':'100111','m':'Sơn Thiên','n':'Đại Súc','c':'<u>Tụ dã</u>. <font color="red">Tích tụ</font>. Chứa tụ, súc tích, lắng tụ một chỗ, dự trữ, đựng, để dành. <font color="blue">Đồng loại hoan hội chi tượng: Tượng đồng loại hội hợp vui vẻ, cục bộ</font>; đại hội, gặp gỡ trong một phe.'},
	{'i':'100011','m':'Sơn Trạch','n':'Tổn','c':'<u>Thất dã</u>. <font color="red">Tổn hại</font>. Tổn thất, hao mất, thua thiệt, bớt kém, bớt phần dưới cho phần trên là tổn hại. <font color="blue">Phòng nhân ám toán chi tượng: Tượng đề phòng sự ngầm hại, hao tổn</font>.'},
	{'i':'100101','m':'Sơn Hỏa','n':'Bí','c':'<u>Sức dã</u>. <font color="red">Quang minh</font>. Trang sức, phản chiếu, sửa sang, trang điểm, thấu suốt, nội soi, rõ ràng. <font color="blue">Quang minh thông đạt chi tượng: Tượng quang minh, sáng sủa, thấu suốt</font>; bày tỏ.'},
	{'i':'100001','m':'Sơn Lôi','n':'Di','c':'<u>Dưỡng dã</u>. <font color="red">Dung dưỡng</font>. Chăm lo, tu bổ, càng thêm, ăn uống, bổ dưỡng, bồi dưỡng, ví như Trời nuôi muôn vật, thánh nhân nuôi người. <font color="blue">Phi Long nhập uyên chi tượng: Tượng Rồng vào vực nghỉ ngơi</font>; Ý nuôi dưỡng, chờ đợi.'},
	{'i':'100110','m':'Sơn Phong','n':'Cổ','c':'<u>Sự dã</u>. <font color="red">Sự biến</font>. Sự cố, có sự không yên trong lòng, làm ngờ vực, khua, đánh, mua chuốc cái hại, đánh trống, làm cho sợ sệt, sửa lại cái lỗi trước đã làm. <font color="blue">Am hại tương liên chi tượng: Tượng điều hại cùng có liên hệ</font>; sửa lại, hư hại.'},
	{'i':'100010','m':'Sơn Thủy','n':'Mông','c':'<u>Muội dã</u>. <font color="red">Bất minh</font>. Tối tăm, mờ mịt, mờ ám, không minh bạch, che lấp, bao trùm, phủ chụp, ngu dại, ngờ nghệch. <font color="blue">Thiên võng tứ trương chi tượng: Tượng lưới trời giăng bốn mặt</font>; âm mưu, gài bẫy, hư ảo, không biết.'},
	{'i':'100100','m':'Sơn Sơn','n':'Thuần Cấn','c':'<u>Chỉ dã</u>. <font color="red">Ngưng nghỉ</font>. Ngăn giữ, ở, thôi, dừng lại, gói ghém, ngăn cấm, vừa đúng chỗ. <font color="blue">Thủ cựu đãi thời chi tượng: Tượng giữ mức cũ đợi thời</font>; chờ đợi.'},

	{'i':'000111','m':'Địa Thiên','n':'Thái','c':'<u>Thông dã</u>. <font color="red">Điều hoà</font>. Thông hiểu, thông suốt, hiểu biết, am tường, quen biết, quen thuộc. <font color="blue">Thiên Địa hòa xướng chi tượng: Tượng Trời Đất giao hòa</font>; bằng nhau, thông nhau, huề, biết người hiểu mình, thông tin.'},
	{'i':'000011','m':'Địa Trạch','n':'Lâm','c':'<u>Đại dã</u>. <font color="red">Bao quản</font>. Lớn lên, việc lớn, cha nuôi, vú nuôi, giáo học, nhà sư, kẻ cả, dạy dân, nhà thầu, giáng lâm, giáng hạ. <font color="blue">Quân tử dĩ giáo tư chi tượng: Tượng người quân tử dạy dân, che chở, bảo bọc dân vô bờ bến</font>; thầy, chủ nhà, giám đốc, học.'},
	{'i':'000101','m':'Địa Hỏa','n':'Minh Sản','c':'<u>Thương dã</u>. <font color="red">Hại đau</font>. Thương tích, bệnh hoạn, buồn lo, đau lòng, ánh sáng bị thương. <font color="blue">Kinh cức mãn đường chi tượng: Tượng gai góc đầy đường</font>; u uất, vắng bóng, tối tăm, bóng đêm, khuất dạng.'},
	{'i':'000001','m':'Địa Lôi','n':'Phục','c':'<u>Phản dã</u>. <font color="red">Tái hồi</font>. Tái diễn, lại có, trở về, quây đầu, bên ngoài, phản phục, phục hưng, phục hồi. <font color="blue">Sơn ngoại thanh sơn chi tượng: Tượng ngoài núi lại có núi nữa</font>; phản bội, phản đòn, động trong manh nha, giật.'},
	{'i':'000110','m':'Địa Phong','n':'Thăng','c':'<u>Tiến dã</u>. <font color="red">Tiến thủ</font>. Thăng tiến, trực chỉ, tiến mau, bay lên, vọt tới trước, bay lên không trung, thăng chức, thăng hà . <font color="blue">Phù giao trực thượng chi tượng: Tượng chòi đạp để ngoi lên trên</font>.'},
	{'i':'000010','m':'Địa Thủy','n':'Sư','c':'<u>Chúng dã</u>. <font color="red">Chúng trợ</font>. Đông chúng, vừa làm thầy vừa làm bạn, học hỏi lẫn nhau, níu nắm nhau qua truông, nâng đỡ. <font color="blue">Sĩ chúng ủng tòng chi tượng: Tượng chúng ủng hộ nhau</font>; chủ nhà, đứng đầu các ngành.'},
	{'i':'000100','m':'Địa Sơn','n':'Khiêm','c':'<u>Thoái dã</u>. <font color="red">Thoái ẩn</font>. Khiêm tốn, nhún nhường, khiêm từ, cáo thoái, từ giã, lui vào trong, giữ gìn nhốt vào trong, bế cửa, nội ngoại lăng nhục. <font color="blue">Thượng hạ mông lung chi tượng: Tượng trên dưới hoang mang</font>; phía sau, thoái lui.'},
	{'i':'000000','m':'Địa Địa','n':'Thuần Khôn','c':'<u>Thuận dã</u>. <font color="red">Nhu thuận</font>. Thuận tòng, mềm dẽo, theo đường mà được lợi, hòa theo lẽ, chịu lấy, chìu theo, toại chí, đạt thành. <font color="blue">Nhu thuận lợi trinh chi tượng</font>; biết chỗ có lợi mà nhờ, âm khí, âm u.'}
];
var queTotCho = [
	{'it':'101111101110','nt':'Đại Hữu - Đỉnh','in':'101110101111','nn':'Đỉnh - Đại Hữu','c':'- Lễ động thổ cất nhà ở hoặc sửa nhà.<br>- Lễ nhập trạch (vô nhà ở).<br>- Lễ khai trương.<br>- Lễ cúng Ông Địa, Thần Tài.<br>- Lễ cúng vong linh trong nhà phò trợ kinh doanh, Cúng Cửu Huyền Thất Tổ.<br>- Giao tiếp giới thiệu khách hàng, hợp tác, bàn thảo.<br>- Lễ Hỏi, Lễ Cưới.<br>- Họp Nhân viên truyền lửa và tình cảm thân mật.<br>- Ký hợp đồng.<br>- Khai bút viết kế hoạch, vẽ tranh, viết thư pháp.<br>'},

	{'it':'101111111111','nt':'Đại Hữu - Thuần Kiền','in':'111111101111','nn':'Thuần Kiền - Đại Hữu','c':'- Lễ động thổ cất nhà ở hoặc sửa nhà.<br>- Lễ khai trương.<br>- Lễ cúng Ông Địa, Thần Tài.<br>- Lễ cúng vong linh trong nhà phò trợ kinh doanh, Cúng Cửu Huyền Thất Tổ.<br>- Họp Nhân viên truyền lửa và tình cảm thân mật.<br>- Ký hợp đồng (Hợp đồng lớn).<br>- Khai bút viết kế hoạch, vẽ tranh, viết thư pháp.<br>- Treo bảng hoặc Cúng bán nhà, bán đất.<br>'},

	{'it':'110101110100','nt':'Gia Nhân - Tiệm','in':'110100110101','nn':'Tiệm - Gia Nhân','c':'- Lễ động thổ cất nhà ở hoặc sửa nhà.<br>- Lễ Nhập trạch (vô nhà ở).<br>- Lễ Khai trương.<br>- Lễ cúng Ông Địa, Thần Tài.<br>- Giao tiếp giới thiệu khách hàng, hợp tác, bàn thảo.<br>- Tặng quà tạo tình cảm thân thiện.<br>- Họp Nhân viên truyền lửa và tình cảm thân mật.<br>- Ký hợp đồng.<br>- Khai bút viết kế hoạch, vẽ tranh, viết thư pháp.<br>'},

	{'it':'110101110001','nt':'Gia Nhân - Ích','in':'110001110101','nn':'Ích - Gia Nhân','c':'- Lễ động thổ cất nhà ở hoặc sửa nhà.<br>- Lễ Khai trương.<br>- Lễ cúng Ông Địa, Thần Tài.<br>- Ký hợp đồng.<br>- Khai bút viết kế hoạch, vẽ tranh, viết thư pháp.<br>'},

	{'it':'011100011101','nt':'Hàm - Cách','in':'011101011100','nn':'Cách - Hàm','c':'- Lễ Động thổ cất nhà để bán.<br>- Nhà làm ăn trục trặc hoài thì quét dọn, thanh toán đồ hư, bể, … sắp xếp nội thất mới mẻ hơn, cắt tóc kiểu mới, mua 5 bộ y phục mới.<br>'},

	{'it':'011100011000','nt':'Hàm - Tụy','in':'011000011100','nn':'Tụy - Hàm','c':'- Lễ Động thổ cất nhà để bán.<br>- Lễ Nhập trạch (vô nhà ở).<br>- Lễ cúng vong linh trong nhà phò trợ kinh doanh, Cúng Cửu Huyền Thất Tổ.<br>- Giao tiếp giới thiệu khách hàng, hợp tác, bàn thảo.<br>- Lễ Hỏi, Lễ Cưới.<br>- Tặng quà tạo tình cảm thân thiện.<br>- Ký hợp đồng.<br>- Khai bút viết kế hoạch, vẽ tranh, viết thư pháp.<br>'},

	{'it':'001101011101','nt':'Phong - Cách','in':'011101001101','nn':'Cách - Phong','c':'- Lễ Động thổ cất nhà để bán.<br>- Nhà làm ăn trục trặc hoài thì quét dọn, thanh toán đồ hư, bể, … sắp xếp nội thất mới mẻ hơn, cắt tóc kiểu mới, mua 5 bộ y phục mới.<br>- Treo bảng hoặc Cúng bán nhà bán đất.<br>'},

	{'it':'001101001001','nt':'Phong - Thuần Chấn','in':'001001001101','nn':'Thuần Chấn - Phong','c':'- Lễ Động thổ cất nhà để bán.<br>- Giãi bày tâm sự, giải tỏa mâu thuẩn.<br>- Treo bảng hoặc Cúng bán nhà bán đất.<br>'},

	{'it':'001000101000','nt':'Dự - Tấn','in':'101000001000','nn':'Tấn - Dự','c':'- Lễ Nhập trạch (vô nhà ở).<br>'},

	{'it':'000010000000','nt':'Sư - Thuần Khôn','in':'000000000010','nn':'Thuần Khôn - Sư','c':'- Lễ Khai trương.<br>- Lễ cúng Ông Địa, Thần Tài.<br>- Lễ cúng vong linh trong nhà phò trợ kinh doanh, Cúng Cửu Huyền Thất Tổ.<br>- Giao tiếp giới thiệu khách hàng, hợp tác, bàn thảo.<br>- Tặng quà tạo tình cảm thân thiện.<br>- Thuyết phục.<br>- Họp Nhân viên truyền lửa và tình cảm thân mật.<br>- Giãi bày tâm sự, giải tỏa mâu thuẩn.<br>'},

	{'it':'110011111011','nt':'Trung Phu - Lý','in':'111011110011','nn':'Lý - Trung Phu','c':'- Lễ cúng Ông Địa – Thần Tài.<br>- Lễ cúng vong linh trong nhà phò trợ kinh doanh, Cúng Cửu Huyền Thất Tổ.<br>- Lễ Hỏi, Lễ Cưới.<br>'},

	{'it':'111111111011','nt':'Thuần Kiền - Lý','in':'111011111111','nn':'Lý - Thuần Kiền','c':'- Lễ cúng vong linh trong nhà phò trợ kinh doanh, Cúng Cửu Huyền Thất Tổ.<br>- Khai bút viết kế hoạch, vẽ tranh, viết thư pháp.<br>'},

	{'it':'111111111110','nt':'Thuần Kiền - Cấu','in':'111110111111','nn':'Cấu - Thuần Kiền','c':'- Lễ cúng vong linh trong nhà phò trợ kinh doanh, Cúng Cửu Huyền Thất Tổ.<br>- Tặng quà tạo tình cảm thân thiện.<br>'},

	{'it':'000111000011','nt':'Thái - Lâm','in':'000011000111','nn':'Lâm - Thái','c':'- Lễ cúng vong linh trong nhà phò trợ kinh doanh, Cúng Cửu Huyền Thất Tổ.<br>- Giao tiếp giới thiệu khách hàng, hợp tác, bàn thảo.<br>- Thuyết phục.<br>- Giãi bày tâm sự, giải tỏa mâu thuẩn.<br>- Ký hợp đồng.<br>- Khai bút viết kế hoạch, vẽ tranh, viết thư pháp.<br>'},

	{'it':'000111010111','nt':'Thái - Nhu','in':'010111000111','nn':'Nhu - Thái','c':'- Lễ cúng vong linh trong nhà phò trợ kinh doanh, Cúng Cửu Huyền Thất Tổ.<br>- Giao tiếp giới thiệu khách hàng, hợp tác, bàn thảo.<br>- Tặng quà tạo tình cảm thân thiện.<br>- Thuyết phục.<br>- Họp Nhân viên truyền lửa và tình cảm thân mật.<br>- Giãi bày tâm sự, giải tỏa mâu thuẩn.<br>- Khai bút viết kế hoạch, vẽ tranh, viết thư pháp.<br>'},

	{'it':'111110101110','nt':'Cấu - Đỉnh','in':'101110111110','nn':'Đỉnh - Cấu','c':'- Lễ cúng vong linh trong nhà phò trợ kinh doanh, Cúng Cửu Huyền Thất Tổ.<br>'},

	{'it':'011011011001','nt':'Thuần Đoài - Tùy','in':'011001011011','nn':'Tùy - Thuần Đoài','c':'- Giao tiếp giới thiệu khách hàng, hợp tác, bàn thảo.<br>- Thuyết phục.<br>'},

	{'it':'000010001010','nt':'Sư - Giải','in':'001010000010','nn':'Giải - Sư','c':'- Giãi bày tâm sự, giải tỏa mâu thuẩn.<br>- Thấy vận hạn xui xẻo, cúng giải hạn, đồng thời dọn dẹp nhà cửa cho thanh sạch, tẩy uế.<br>'},

	{'it':'110010110000','nt':'Hoán - Quan','in':'110000110010','nn':'Quan - Hoán','c':'- Thấy vận hạn xui xẻo, cúng giải hạn, đồng thời dọn dẹp nhà cửa cho thanh sạch, tẩy uế.<br>- Treo bảng hoặc Cúng bán nhà bán đất.<br>'}
];

function arrayLookup(array, prop, val) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (array[i].hasOwnProperty(prop) && array[i][prop] === val) {
            return array[i];
        }
    }
    return null;
}

function arrayLookupWhatGood(array, prop1, prop2, code) {
    for (var i = 0, len = array.length; i < len; i++) {
        if(array[i].hasOwnProperty(prop1) && array[i][prop1] === code) {
            return array[i]['c']; break;
        }else if(array[i].hasOwnProperty(prop2) && array[i][prop2] === code) {
            return array[i]['c']; break;
        }
    }
    return null;
}

function arrayLookupPlus(array, prop1, val, prop2) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (array[i].hasOwnProperty(prop1) && array[i][prop1] === val) {
            return array[i][prop2];
        }
    }
    return null;
}

function getThisLunaMonthxxxxx(dd, mm, yy, leap, jd) {
	var lunar = new LunarDate(dd, mm, yy, leap, jd);
	return lunar.month;
}

function getThisLunaMonth(dd, mm, yy, leap, jd) {
	var lunar = new LunarDate(dd, mm, yy, leap, jd);
	return lunar.month;
}

function getThisLunaDay(dd, mm, yy, leap, jd) {
	var lunar = new LunarDate(dd, mm, yy, leap, jd);
	// alert(lunar);
	return lunar.day;
}

function getLeap(mm,yy){
	var currentMonth = getMonth(mm, yy);
	var lunarDate = currentMonth[0];
	var args = lunarDate.day + "," + lunarDate.month + "," + lunarDate.year + "," + lunarDate.leap; //dự phòng
	return lunarDate.leap;
}

function getThisBlockHours(getBlockHours, getThisHours, getThisMinutes){
	var tmpi = 1;
	for (var i = 0; i < 12; i++) {
		if(getBlockHours>blockHours1[i]&&getBlockHours<=blockHours2[i]){tmpi = i+1;}			
	}
	return tmpi;
}

var dayMonthYearLunar = getLunarName(getLunarDate(currentDay, currentMonth, currentYear));

var currentLunarYearKeep = getLunarName(getLunarDate(currentDayKeep, currentMonthKeep, currentYearKeep))[3];
var currentLunarYear = getLunarName(getLunarDate(currentDay, currentMonth, currentYear))[3];

var getThisNumberYear = getPosition(lunaYH,currentLunarYear)+1;
var getThisNumberMonth = getLunarDate(currentDay, currentMonth, currentYear).month;
var getThisNumberDay = getLunarDate(currentDay, currentMonth, currentYear).day;
var getThisNumberHours = getThisBlockHours(currentBlockHour, currentHour, currentMinute);
// alert(getLunarDate(currentDay, currentMonth, currentYear).year);

function findChanhQue1(getThisNumberYear, getThisNumberMonth, getThisNumberDay){
	var du = (getThisNumberYear+getThisNumberMonth+getThisNumberDay)%8;
	if(du==0){du=8;}
	return du;	
}

function findChanhQue2(getThisNumberYear, getThisNumberMonth, getThisNumberDay, getThisNumberHours){
	var du = (getThisNumberYear+getThisNumberMonth+getThisNumberDay+getThisNumberHours)%8;
	if(du==0){du=8;}
	return du;	
}

function findChanhQue1s(getThisNumberYears, getThisNumberMonths, getThisNumberDays){
	var du = (getThisNumberYears+getThisNumberMonths+getThisNumberDays)%8;
	if(du==0){du=8;}
	return du;	
}

function findChanhQue2s(getThisNumberYears, getThisNumberMonths, getThisNumberDays, getThisNumberHourss){
	var du = (getThisNumberYears+getThisNumberMonths+getThisNumberDays+getThisNumberHourss)%8;
	if(du==0){du=8;}
	return du;	
}

function findBienQue(getThisNumberYear, getThisNumberMonth, getThisNumberDay, getThisNumberHours){
	var du = (getThisNumberYear+getThisNumberMonth+getThisNumberDay+getThisNumberHours)%6;
	if(du==0){du=6;}
	return du;	
}

var pos = getPosition(canChi,firstTimeOfDay1);
var timeOfDayArray = setTimeOfDay(firstTimeOfDay1, pos);
var timeOfDayArrayPlus = setTimeOfDayPlus(firstTimeOfDay1, pos);

function getPosition(arrayName,arrayItem){
    for(var i=0;i<arrayName.length;i++){ 
        if(arrayName[i]==arrayItem){
        	return i;
        }        
    }	
}

function setTimeOfDay(firstTimeOfDay1, pos){
	var tmpTimeOfDay = [];
	var tmpPos = pos;
	for (var i = 0; i < 12; i++) {
		tmpTimeOfDay[i] = canChi[tmpPos];
		if(tmpPos==9){
			tmpPos = 0;
		}else{
			tmpPos+=1;
		}
	}
	return tmpTimeOfDay;
}

function setTimeOfDayPlus(firstTimeOfDay1, pos){
	var tmpTimeOfDay = [];
	var tmpPos = pos;
	for (var i = 0; i < 12; i++) {
		tmpTimeOfDay[i] = canChiCode[tmpPos];
		if(tmpPos==8){
			tmpPos = 0;
		}else{
			tmpPos+=1;
		}
	}
	return tmpTimeOfDay;
}

function getBockHours(getThisHoursx, getThisMinutesx){
	if(getThisMinutesx>0){
		return getThisHoursx+1;
		// return getThisHoursx+1;
	}else{
		return getThisHoursx;
	}
}

function getBlockHours(getThisHoursx, getThisMinutesx){
	if(getThisMinutesx>0){
		return getThisHoursx+1;
	}else{
		return getThisHoursx;
	}
}

var canCode = findBlockHourName();

function findBlockHourName(){
	var tmpCanCode = [];
	tmpCanCode[0] = 'Tên Block Hour Trong Ngày';
	for (var i = 0; i < 12; i++) {
		tmpCanCode[(i+1)] = timeOfDayArrayPlus[i];				
	}	
	return tmpCanCode;
}

var linhVat = [
				['Thanh Long', 'Chu Tước', 'Câu Trần', 'Đằng Xà', 'Bạch Hổ', 'Huyền Vũ'],

				{'i':'giap','n':'Thanh Long','m':'Điềm lành, hỉ tín, hiền hòa','h':'Mộc','p':1},
				{'i':'at','n':'Thanh Long','m':'Điềm lành, hỉ tín, hiền hòa','h':'Mộc','p':1},

				{'i':'binh','n':'Chu Tước','m':'Chim chóc, tin tức, văn thơ, văn chương','h':'Hỏa','p':2},
				{'i':'dinh','n':'Chu Tước','m':'Chim chóc, tin tức, văn thơ, văn chương','h':'Hỏa','p':2},

				{'i':'mau','n':'Câu Trần','m':'Trì trệ, ù lì, điền thổ','h':'Thổ','p':3},

				{'i':'ky','n':'Đằng Xà','m':'Điển linh, nhanh nhẹn, quái dị','h':'Không chính vị','p':4},

				{'i':'canh','n':'Bạch Hổ','m':'Hung dữ, thô bạo, tang thương','h':'Kim','p':5},
				{'i':'tan','n':'Bạch Hổ','m':'Hung dữ, thô bạo, tang thương','h':'Kim','p':5},

				{'i':'nham','n':'Huyền Vũ','m':'Mưu kế, đen tối, quỷ quái, ám muội','h':'Thủy','p':6},
				{'i':'qui','n':'Huyền Vũ','m':'Mưu kế, đen tối, quỷ quái, ám muội','h':'Thủy','p':6},
				{'i':'quy','n':'Huyền Vũ','m':'Mưu kế, đen tối, quỷ quái, ám muội','h':'Thủy','p':6}
			  ];

function findChanhQueByBlockHour(blockHour){
	var _tmpCodeQueChanh = '';
	var _tmpResultChanhQue = [];
	for (var _q1 = 1; _q1 <= 3; _q1++) {										
		var _qNameCode1 = findChanhQue1(getThisNumberYear, getThisNumberMonth, getThisNumberDay);
		var _qCode1 = symbolsCode[_qNameCode1][_q1];
		_tmpCodeQueChanh +=''+_qCode1;
	};

	for (var _q2 = 1; _q2 <= 3; _q2++) {										
		var _qNameCode2 = findChanhQue2(getThisNumberYear, getThisNumberMonth, getThisNumberDay, blockHour);
		var _qCode2 = symbolsCode[_qNameCode2][_q2];
		_tmpCodeQueChanh +=''+_qCode2;
		if(_q2==3){_tmpResultChanhQue[0]=_qCode2;}
	};

	_tmpResultChanhQue[1] = arrayLookupPlus(tenQue, 'i', _tmpCodeQueChanh, 'n');
	return _tmpResultChanhQue;
}

function findChanhQueByBlockHours(d, m, y, bh, ld, lm, ly){
	var ly = getThisNumberYear;
	var _tmpCodeQueChanhs = '';
	var _tmpResultChanhQues = [];
	for (var _q1s = 1; _q1s <= 3; _q1s++) {										
		var _qNameCode1s = findChanhQue1s(ly, lm, ld);
		var _qCode1s = symbolsCode[_qNameCode1s][_q1s];
		_tmpCodeQueChanhs +=''+_qCode1s;
	};

	for (var _q2s = 1; _q2s <= 3; _q2s++) {										
		var _qNameCode2s = findChanhQue2s(ly, lm, ld, bh);
		var _qCode2s = symbolsCode[_qNameCode2s][_q2s];
		_tmpCodeQueChanhs +=''+_qCode2s;
		if(_q2s==3){_tmpResultChanhQues[0]=_qCode2s;}
	};

	_tmpResultChanhQues[1] = arrayLookupPlus(tenQue, 'i', _tmpCodeQueChanhs, 'n');
	return _tmpResultChanhQues;
}

function findHoQueByBlockHour(blockHour){
	var _tmpCodeQueHo = '';
	var _tmpResultHoQue = [];
	var _qNameCode1 = findChanhQue1(getThisNumberYear, getThisNumberMonth, getThisNumberDay);
	var _qNameCode2 = findChanhQue2(getThisNumberYear, getThisNumberMonth, getThisNumberDay, blockHour);
	var _qCode = '';
	for (var _q = 1; _q <= 6; _q++) {		
	    if(_q==1){
			_qCode = symbolsCode[_qNameCode1][2];
		}else if(_q==2){
			_qCode = symbolsCode[_qNameCode1][3];
		}else if(_q==3){
			_qCode = symbolsCode[_qNameCode2][1];
		}else if(_q==4){
			_qCode = symbolsCode[_qNameCode1][3];
		}else if(_q==5){
			_qCode = symbolsCode[_qNameCode2][1];
		}else{
			_qCode = symbolsCode[_qNameCode2][2];
		}
		_tmpCodeQueHo +=''+_qCode;										
	};		
	_tmpResultHoQue[0] = 'Hộ Quẻ';
	_tmpResultHoQue[1] = arrayLookupPlus(tenQue, 'i', _tmpCodeQueHo, 'n');
	return _tmpResultHoQue;
}	

function findBienQueByBlockHour(blockHour){
	var _tmpCodeQueBien = '';
	var _tmpResultBienQue = [];
	var _bienQue = findBienQue(getThisNumberYear, getThisNumberMonth, getThisNumberDay, blockHour);
	var _cUp = 6; var _cDown = 3;
	for (var _q3 = 1; _q3 <= 3; _q3++) {
		var _qNameCode3 = findChanhQue1(getThisNumberYear, getThisNumberMonth, getThisNumberDay);
		var _qCode3 = symbolsCode[_qNameCode3][_q3];
		if(_bienQue>=4){
			if(_bienQue == _cUp){
				_qCode3 = (_qCode3==0?1:0);
			}
		}
		_tmpCodeQueBien +=''+_qCode3;
		_cUp--;
	};

	for (var _q4 = 1; _q4 <= 3; _q4++) {										
		var _qNameCode4 = findChanhQue2(getThisNumberYear, getThisNumberMonth, getThisNumberDay, blockHour);
		var _qCode4 = symbolsCode[_qNameCode4][_q4];
		if(_bienQue<4){
			if(_bienQue == _cDown){
				_qCode4 = (_qCode4==0?1:0);
			}
		}
		_tmpCodeQueBien +=''+_qCode4;
		if(_q4==3){_tmpResultBienQue[0]=_qCode4;}
		_cDown--;
	};
	_tmpResultBienQue[1] = arrayLookupPlus(tenQue, 'i', _tmpCodeQueBien, 'n');
	return _tmpResultBienQue;
}

function findBienQueByBlockHours(d, m, y, bh, ld, lm, ly){
	var _tmpCodeQueBien = '';
	var _tmpResultBienQue = [];
	var _bienQue = findBienQue(ly, lm, ld, bh);
	var _cUp = 6; var _cDown = 3;
	for (var _q3 = 1; _q3 <= 3; _q3++) {
		var _qNameCode3 = findChanhQue1s(ly, lm, ld);
		var _qCode3 = symbolsCode[_qNameCode3][_q3];
		if(_bienQue>=4){
			if(_bienQue == _cUp){
				_qCode3 = (_qCode3==0?1:0);
			}
		}
		_tmpCodeQueBien +=''+_qCode3;
		_cUp--;
	};

	for (var _q4 = 1; _q4 <= 3; _q4++) {										
		var _qNameCode4 = findChanhQue2s(ly, lm, ld, bh);
		var _qCode4 = symbolsCode[_qNameCode4][_q4];
		if(_bienQue<4){
			if(_bienQue == _cDown){
				_qCode4 = (_qCode4==0?1:0);
			}
		}
		_tmpCodeQueBien +=''+_qCode4;
		if(_q4==3){_tmpResultBienQue[0]=_qCode4;}
		_cDown--;
	};
	_tmpResultBienQue[1] = arrayLookupPlus(tenQue, 'i', _tmpCodeQueBien, 'n');
	return _tmpResultBienQue;
}

function findDongLucThu(){
	var _tmpChanh = [];
	var _tmpBien = [];
	var _tmpDong;
	for (var _lt = 1; _lt <= 12; _lt++) {
		_tmpChanh = findChanhQueByBlockHour(_lt);
		_tmpBien = findBienQueByBlockHour(_lt);
		if(_tmpChanh[0]!=_tmpBien[0]){
			_tmpDong = _lt;
			break;
		}
	}	
	return _tmpDong;
} 

function findDongLucThus(d, m, y, bh, ld, lm, ly){
	// var ly = getThisNumberYear;
	var _tmpChanhs = [];
	var _tmpBiens = [];
	var _tmpDongs;
	for (var _lts = 1; _lts <= 12; _lts++) {
		_tmpChanhs = findChanhQueByBlockHours(d, m, y, _lts, ld, lm, ly);
		_tmpBiens = findBienQueByBlockHours(d, m, y, _lts, ld, lm, ly);
		if(_tmpChanhs[0]!=_tmpBiens[0]){
			_tmpDongs = _lts;
			break;
		}
	}	
	return _tmpDongs;
} 

var _tmpDataLucThu = findLucThu(); 
var printLucThu = setLucThu(_tmpDataLucThu[3], _tmpDataLucThu[0]); //theo gio

var _tmpDataLucThuTheoNgay = findLucThuTheoNgay(); 
var printLucThuTheoNgay = setLucThuTheoNgay(_tmpDataLucThuTheoNgay[0], _tmpDataLucThuTheoNgay[1], _tmpDataLucThuTheoNgay[2]);

function printLucThuTheoNgays(d, m, y, bh, ld, lm, ly){
	// var ly = getThisNumberYear;
	var _tmpDataLucThuTheoNgays = findLucThuTheoNgays(d, m, y, bh, ld, lm, ly);
	var printLucThuTheoNgays = setLucThuTheoNgays(_tmpDataLucThuTheoNgays[0], _tmpDataLucThuTheoNgays[1], _tmpDataLucThuTheoNgays[2]);
	return printLucThuTheoNgays[bh-1];
}

function setLucThu(firstLucThu, _pos){
	var tmpGetLucThu = [];
	for (var i = 0; i < 12; i++) {
		tmpGetLucThu[i] = linhVat[0][(_pos-1)];
		if(_pos==6){
			_pos = 1;
		}else{
			_pos+=1;
		}
	}
	return tmpGetLucThu;
}

function setLucThuTheoNgay(_tmpDong, _pos, firstLucThu){
	var tmpGetLucThu = [];
	if(_tmpDong==1){
		for (var i = 0; i < 12; i++) {
			tmpGetLucThu[i] = linhVat[0][(_pos-1)];
			if(_pos==6){
				_pos = 1;
			}else{
				_pos++;
			}
		}
	}else{
		for (var i = (_tmpDong-1); i < 12; i++) {
			tmpGetLucThu[i] = linhVat[0][(_pos-1)];
			if(_pos==6){
				_pos = 1;
			}else{
				_pos++;
			}
		}
		for (var i = 0; i < (_tmpDong-1); i++) {
			tmpGetLucThu[i] = linhVat[0][(_pos-1)];
			if(_pos==6){
				_pos = 1;
			}else{
				_pos++;
			}
		}		
	}
	return tmpGetLucThu;
}

function setLucThuTheoNgays(_tmpDong, _pos, firstLucThu){
	var tmpGetLucThu = [];
	if(_tmpDong==1){
		for (var i = 0; i < 12; i++) {
			tmpGetLucThu[i] = linhVat[0][(_pos-1)];
			if(_pos==6){
				_pos = 1;
			}else{
				_pos++;
			}
		}
	}else{
		for (var i = (_tmpDong-1); i < 12; i++) {
			tmpGetLucThu[i] = linhVat[0][(_pos-1)];
			if(_pos==6){
				_pos = 1;
			}else{
				_pos++;
			}
		}
		for (var i = 0; i < (_tmpDong-1); i++) {
			tmpGetLucThu[i] = linhVat[0][(_pos-1)];
			if(_pos==6){
				_pos = 1;
			}else{
				_pos++;
			}
		}		
	}
	return tmpGetLucThu;
}

function setLucThuTheoNgayx(_tmpDong, _pos, firstLucThu){
	var tmpGetLucThu = [];
	for (var i = 0; i < 12; i++) {
		tmpGetLucThu[i] = linhVat[0][(_pos-1)];
		if(_pos==6){
			_pos = 1;
		}else{
			_pos++;
		}
	}
	return tmpGetLucThu;
}

function findLucThu(){
	var _tmpDongLucThu = [];
	_tmpDongLucThu[0] = findDongLucThu();
	_tmpDongLucThu[1] = arrayLookupPlus(linhVat, 'i', canCode[findDongLucThu()], 'p');
	_tmpDongLucThu[2] = arrayLookupPlus(linhVat, 'i', canCode[findDongLucThu()], 'n');
	return _tmpDongLucThu;
}

function findLucThuTheoNgay(){
	var _tmpDayCan = remove_unicode(getLunarName(getLunarDate(currentDay, currentMonth, currentYear))[4]);
	var _tmpDongLucThu = [];
	_tmpDongLucThu[0] = findDongLucThu(); // tim duoc block gio dau tien dong hao 1
	_tmpDongLucThu[1] = arrayLookupPlus(linhVat, 'i', _tmpDayCan, 'p');
	_tmpDongLucThu[2] = arrayLookupPlus(linhVat, 'i', _tmpDayCan, 'n');
	return _tmpDongLucThu;
}

function findLucThuTheoNgays(d, m, y, bh, ld, lm, ly){
	// var ly = getThisNumberYear;
	var _tmpDayCan = remove_unicode(getLunarName(getLunarDate(d, m, y))[4]);
	var _tmpDongLucThu = [];
	_tmpDongLucThu[0] = findDongLucThus(d, m, y, bh, ld, lm, ly); // tim duoc block gio dau tien dong hao 1
	_tmpDongLucThu[1] = arrayLookupPlus(linhVat, 'i', _tmpDayCan, 'p');
	_tmpDongLucThu[2] = arrayLookupPlus(linhVat, 'i', _tmpDayCan, 'n');
	return _tmpDongLucThu;
}

function remove_unicode(str) 
{  
	str= str.toLowerCase();  
	str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");  
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");  
	str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");  
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");  
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");  
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");  
	str= str.replace(/đ/g,"d");  
	str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-"); 

	str= str.replace(/-+-/g,"-"); //thay thế 2- thành 1- 
	str= str.replace(/^\-+|\-+$/g,"");  

	return str;  
} 

// note that month is 0-based, like in the Date object. Adjust if necessary.
// alert(getNumberOfDays(currentYear, currentMonth));
function getNumberOfDays(year, month) {
	month = month-1;
    var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
    return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

function getQueSearch(d, m, y, bh, ld, lm ,ly){
	// var d=20; var m=1; var y=2017; var bh=8; var ld=23; var lm=12; var ly=getThisNumberYear;	
	// function getQueSearch(d, m, y, bh, ld, lm ,ly){
	// function getQueSearch(d1, m1, y1, bh1, ld1, lm1 ,ly1){
	var ly= getPosition(lunaYH,getLunarName(getLunarDate(d, m, y))[3])+1;
	var tenChanhQue, tenBienQue;
	var _codeChanhQue, _codeBienQue;

	// chanh
	var tmpCodeQueChanhs ='';	
	for (var qs1 = 1; qs1 <= 3; qs1++) {										
		var qNameCodes1 = findChanhQue1s(ly, lm, ld);
		var qCodes1 = symbolsCode[qNameCodes1][qs1];
		tmpCodeQueChanhs +=''+qCodes1;
	};
	for (var qs2 = 1; qs2 <= 3; qs2++) {										
		var qNameCodes2 = findChanhQue2s(ly, lm, ld, bh);
		var qCodes2 = symbolsCode[qNameCodes2][qs2];
		tmpCodeQueChanhs +=''+qCodes2;
	};

	tenChanhQue = arrayLookupPlus(tenQue, 'i', tmpCodeQueChanhs, 'n');
	_codeChanhQue = tmpCodeQueChanhs;

	// bien
	var tmpCodeQueBiens ='';
	var bienQues = findBienQue(ly, lm, ld, bh);
	var cUps = 6; var cDowns = 3;
	for (var qs3 = 1; qs3 <= 3; qs3++) {
		var qNameCodes3 = findChanhQue1s(ly, lm, ld);
		var qNames3 = symbolsCode[qNameCodes3][0];
		var qCodes3 = symbolsCode[qNameCodes3][qs3];	
		if(bienQues>=4){
			if(bienQues == cUps){
				qCodes3 = (qCodes3==0?1:0);
			}
		}
		tmpCodeQueBiens +=''+qCodes3;
		cUps--;
	};

	for (var qs4 = 1; qs4 <= 3; qs4++) {										
		var qNameCodes4 = findChanhQue2s(ly, lm, ld, bh);
		var qNames4 = symbolsCode[qNameCodes4][0];
		var qCodes4 = symbolsCode[qNameCodes4][qs4];
		if(bienQues<4){
			if(bienQues == cDowns){
				qCodes4 = (qCodes4==0?1:0);
			}
		}
		tmpCodeQueBiens +=''+qCodes4;
		cDowns--;
	};
	tenBienQue = arrayLookupPlus(tenQue, 'i', tmpCodeQueBiens, 'n')
	_codeBienQue = tmpCodeQueBiens;

	// luc thu

	var _getQueSearch = [_codeChanhQue, tenChanhQue, _codeBienQue, tenBienQue, printLucThuTheoNgays(d, m, y, bh, ld, lm, ly)];	

	return _getQueSearch;
}

function isWeekend(dd, mm, yy){
	var myDate = new Date(yy,(mm-1),dd);
	if(myDate.getDay() == 6 || myDate.getDay() == 0){
		return true;
	}else{
		return false;
	}
}

function  dayDay(dd, mm, yy){
	var myDate = new Date(yy,(mm-1),dd);
	var days = ['Chủ Nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7'];
	return days[myDate.getDay()];
}