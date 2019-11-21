// cookie的加减查
function addCookie(key,value,time){
	let d=new Date();
	d.setDate(d.getDate()+time)
	document.cookie=key+'='+encodeURIComponent(value)+';expires='+d;
}

function searchCookie(key) {
   let mp = decodeURIComponent(document.cookie).split('; ');
   for(let v of mp){
	   let newarr=v.split('=');
	   if(newarr[0]===key){
		   return newarr[1];
	   }
   }
  
}

function reduceCookie(key){
   let d=new Date();
   d.setDate(d.getDate()-1);
   document.cookie=key+'=ab;expires='+d;
}

export {addCookie,searchCookie,reduceCookie}