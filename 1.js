'use strict';

//定义FS操作 fs
var fs = require('graceful-fs'); 
// 输出outarr
out(getCaiyun());

// 33选6,用来导出所有排列组合1107568。
function getAll(){
	var qq= new Array();
	for (var i = 1; i <=33; i++) {
		for (var k = i+1; k <=33; k++) {
			for (var j = k+1; j <=33; j++) {
				for (var l = j+1; l <=33; l++) {
					for (var m = l+1; m <=33; m++) {
						for (var n = m+1; n <=33; n++) {
							if (i!=k && i!=j && i!=l && i!=m && i!=n && k!=j && k!=l && k!=m && k!=n && j!=l && j!=m && j!=n && l!=m && l!=n && m!=n){
								qq.push(i+' '+k+' '+j+' '+l+' '+m+' '+n+'\r\n');
							}
						};	
					};
				};
			};
		};	
	};	
	return qq;
}

// 输出函数。data为array时，速度最快。
function out(data){
	fs.appendFile('1.txt', data, function(err){
		if(err) throw err;
		console.log('2 ok!');
	});	
}

// 从33位中随机抽取6位数字
function getCaiyun(){
	var arr= getAll();
	console.log('1ok');
	var c = new Array();
	for (var i = 0; i <553784; i++) {
		// zz是要抽取qq数组的下标
		var zz = Math.floor(Math.random()*(1107567-i));
		console.log(zz);
		c.push(arr.slice(zz,zz+1));
		arr.splice(zz,1);
	};
	console.log('ok!');
	return c;
}

