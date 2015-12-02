'use strict';

//定义FS操作 fs
var fs = require('graceful-fs'); 

// 定义篮球数组 16个
var tt = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);

// 开始抽取
out(getCaiyun());

// 从16位中随机抽取2位数字 12.5%
function getCaiyun(){
	var t1= tt.length;
	var t2= tt.length/8;
	console.log('start getCaiyun');
	var o = 0;
	var c = new Array();
	for (var i = 0; i < t2; i++) {
		// zz是要抽取qq数组的下标
		var zz = Math.floor(Math.random()*(t1-1-i));
		c.push(tt.slice(zz,zz+1));
		tt.splice(zz,1);
		o++;
	};
	console.log('getCaiyun ok!'+o);
	return c;
}


// 输出函数。data为array时，速度最快。
function out(data){
	fs.appendFile('bluecxb.txt', data, function(err){
		if(err) throw err;
		console.log('2 ok!');
	});	
}