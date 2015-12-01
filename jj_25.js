'use strict';
// **********************************
// *激进版25% 保守版15改为10
// *
// **********************************



//定义FS操作 fs
var fs = require('graceful-fs'); 
//定义剔除小概率后的数组
var tt = new Array();
// 剔除小概率组合数据
remove5();
removeOdd();
from15();
to15();
jump15();
empty9();
same2();
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
								qq.push(i+' '+k+' '+j+' '+l+' '+m+' '+n+' '+'\r\n');
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
	fs.appendFile('jj_25.txt', data, function(err){
		if(err) throw err;
		console.log('2 ok!');
	});	
}

function outlog(data){
	fs.appendFile('log.txt', data, function(err){
		if(err) throw err;
		console.log('log ok!');
	});	
}

// 从33位中随机抽取6位数字 50%
function getCaiyun(){
	var t1= tt.length;
	var t2= tt.length*0.25;
	console.log('start getCaiyun');
	console.log('tt length:'+tt.length*0.25);
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

// 从qq数组中去除5连号和4连号
function remove5(){
	tt = getAll();
	var jsq = 0;
	var m='' ;
	for(var j=1; j <= 30; j++){
		m=j+' '+(j+1)+' '+(j+2)+' '+(j+3);
		for (var i = 0; i < tt.length ; i++) {
			if(tt[i].match(m)){
				tt.splice(i,1);
				i--;
				jsq++;
			}
		};		
	}
	console.log('5连号'+jsq);
}

// 从qq数组中去除全奇数和全偶数
function removeOdd(){
	var jsq = 0;
	var s0 =  new Array();
	var s1,s2,s3,s4,s5,s6;
	var y1,y2,y3,y4,y5,y6;
	for (var i = 0; i < tt.length; i++) {
		s0 = tt[i].split(' ');
		s1=Number(s0[0]);
		s2=Number(s0[1]);
		s3=Number(s0[2]);
		s4=Number(s0[3]);
		s5=Number(s0[4]);
		s6=Number(s0[5]);
		y1=s1%2;
		y2=s2%2;
		y3=s3%2;
		y4=s4%2;
		y5=s5%2;
		y6=s6%2;
		// 偶数判定
		if((y1+y2+y3+y4+y5+y6)==0){
			tt.splice(i,1);
			i--;
			jsq++;
		}
		// 奇数判定
		if(y1!=0 && y2!=0 && y3!=0 && y4!=0 && y5!=0 && y6!=0){
			tt.splice(i,1);
			i--;
			jsq++;
		}
	};
	console.log('奇偶数：'+jsq);
}

// 从qq数组中去除15起组合
function from15(){
	var jsq = 0;
	for (var i = 0; i < tt.length; i++) {
		var ta = tt[i].split(' ');
		if (ta[0]>=10){
			tt.splice(i,1);
			i--;
			jsq++;
		}
	};
	console.log('大于10：'+jsq);
}

// 从qq数组中去除15满组合
function to15(){
	var jsq = 0;
	for (var i = 0; i < tt.length; i++) {
		var ta = tt[i].split(' ');
		var tl = ta.length;
		if (ta[tl-2]<=10){
			tt.splice(i,1);
			i--;
			jsq++;
		}
	};
	console.log('小于10：'+jsq);	
}

// 从qq数组中去除15跳组合
function jump15(){
	var jsq = 0;
	var s1,s2,s3,s4,s5;
	for(var i = 0; i<tt.length; i++){
		var ta = tt[i].split(' ');	
		s1 = ta[1]-ta[0];	
		s2 = ta[2]-ta[1];	
		s3 = ta[3]-ta[2];	
		s4 = ta[4]-ta[3];	
		s5 = ta[5]-ta[4];	
		if(s1>=9 || s2>=9 || s3>=9 || s4>=9 || s5>=9){
			tt.splice(i,1);
			i--;
			jsq++;
		}
	}
	console.log('10跳:'+jsq);
}

// 从qq数组中去除两头空组合 左9右9
function empty9(){
	var jsq = 0;
	for(var i = 0; i<tt.length; i++){
		var ta = tt[i].split(' ');
		if(tt[0]>9 && tt[5]<25){
			tt.splice(i,1);	
			i--;		
			jsq++;			
		}

	}
	console.log('两头空:'+jsq);	
}

// 从qq数组中去除等间隔组合 1 2 3 4
function same2(){
	var jsq = 0;
	var s0,s1,s2,s3,s4,s5;	
	for(var i = 0; i<tt.length; i++){
		var ta = tt[i].split(' ');
		s1 = ta[1]-ta[0];	
		s2 = ta[2]-ta[1];	
		s3 = ta[3]-ta[2];	
		s4 = ta[4]-ta[3];	
		s5 = ta[5]-ta[4];
		s0=(s1+s2+s3+s4+s5)/5;
		if(s1==s0 && s2==s0 && s3==s0 && s4==s0 && s5==s0){
			tt.splice(i,1);	
			i--;	
			jsq++;				
		}

	}
	console.log('等间隔:'+jsq);	
}

