'use strict';
// ****************************
// 跑马灯算法
// 
// ****************************
//定义FS操作 fs
var fs = require('graceful-fs'); 

// 输出outarr
out(getCaiyun());

//33个号码的数组
function getAll() {
	// 定义33个号码数组
	var qq = new Array();
	for (var i = 1; i <= 33; i++) {
		qq[i - 1] = i;
	}
	return qq;
}

// 输出函数。data为array时，速度最快。
function out(data) {
	fs.appendFile('o.txt', data, function (err) {
		if (err) throw err;
		console.log('out ok!');
	});
}

// 从33位中随机抽取6位数字
function getCaiyun() {
	console.log(' start ok');
	var c = new Array();
	// 定义跑马灯总和ZT
	var zt = 0;
	for (var i = 0; i < 553784; i++) {
		var num = new Array();
		var qq = getAll();
		for (var j = 0; j < 6; j++) {
			// zz是要抽取qq数组的下标
			var zz = Math.floor(Math.random() * 10);
			zt = zt + zz;
			if (zt > 32 - j) {
				zt = zt - (33 - j);
			}
			num.push(qq.slice(zt, zt + 1));
			qq.splice(zt, 1);
		}
		num.sort(sortNumber);
		c.push(getNumString(num) + '\r\n');
	};
	console.log('get ok!');
	return c;
}

// 数组排序函数
function sortNumber(a, b) {
	return a - b;
}

// 6位号码数组排成String
function getNumString(num){
	var snum = '';
	for (var i=0;i<6;i++){
		snum= snum + num[i] + ' ';
	}
	return snum;
}