// JavaScript Document

function setMyCookie()
  { var now = new Date();
var time = now.getTime();
var expireTime = time + 1000*3600;
now.setTime(expireTime);
var tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
document.cookie = 'verify=true;expires='+now.toGMTString()+';path=/';
document.getElementById("AVoverlay").style.setProperty('display', 'none', 'important');
document.getElementById("AVcontentBox").style.display="none";
document.getElementById("avLink").style.display="none";
document.getElementById("AVenterLink").style.display="none";


}

document.addEventListener("DOMContentLoaded", function ageVerify() {
	
	if(document.cookie.replace(/(?:(?:^|.*;\s*)verify\s*\=\s*([^;]*).*$)|^.*$/,"$1")!=="true"){
	
	var AVoverlay = document.createElement("iframe");
   AVoverlay.setAttribute("id","AVoverlay");
   AVoverlay.setAttribute("src","/content/TVL-iFrame.html");
   AVoverlay.style.width = "100%";
   AVoverlay.style.height = "100%";
   AVoverlay.style.setProperty('position', 'fixed', 'important');
   AVoverlay.style.setProperty('left', '0px', 'important');
   AVoverlay.style.setProperty('top', '0px', 'important');
   AVoverlay.style.zIndex = "100000";
   AVoverlay.style.border = "0";
   document.body.appendChild(AVoverlay);
   
   var AVcontentBox = document.createElement("div");
   AVcontentBox.setAttribute("id","AVcontentBox");
   AVcontentBox.style.position = "fixed";
   AVcontentBox.style.left = "50%";
   AVcontentBox.style.top = "100px";
   AVcontentBox.style.marginLeft = "-150px";
   AVcontentBox.style.height = "250px";
   AVcontentBox.style.width = "300px";
   AVcontentBox.style.zIndex = "100001"; 
   AVcontentBox.style.textAlign = "center";
   AVcontentBox.style.setProperty('color', '#000', 'important');
   AVcontentBox.style.setProperty('font-size', '28px', 'important');
   AVcontentBox.style.setProperty('font-family', 'Helvetica', 'important');
AVcontentBox.style.setProperty('letter-spacing', '0px', 'important');
AVcontentBox.style.setProperty('text-transform', 'none', 'important');
   AVcontentBox.style.paddingTop = "20px";
   AVcontentBox.style.lineHeight = "30px";
   AVcontentBox.innerHTML = "<img src=\'/content/Vapour_Lounge_Logo.png\'><br />Please verify your<br />age to enter.";
   document.body.appendChild(AVcontentBox);
   
   var avLink = document.createElement("input");
   avLink.setAttribute("id","avLink");
   avLink.setAttribute("type","button");
   avLink.setAttribute("onclick","window.location='http://www.google.com';");
   
   avLink.style.position = "fixed";
   avLink.style.cursor = "pointer";
   avLink.style.left = "50%";
   avLink.style.marginLeft = "-130px";
   avLink.style.top = "300px";
   avLink.style.setProperty('height', '40px', 'important');
   avLink.style.setProperty('width', '120px', 'important');
   avLink.style.setProperty('color', '#fff', 'important');
   avLink.style.setProperty('font-size', '16px', 'important');
avLink.style.setProperty('min-width', '1em', 'important');
avLink.style.setProperty('line-height', '1em', 'important');
avLink.style.setProperty('letter-spacing', '0px', 'important');
avLink.style.setProperty('text-transform', 'none', 'important');
avLink.style.setProperty('padding','0','important');
avLink.style.setProperty('font-family','Helvetica','important');
avLink.style.setProperty('font-weight','lighter','important');
   avLink.style.setProperty('background-color', '#03ac6c', 'important');
avLink.style.setProperty('background-image', 'none', 'important');
   avLink.setAttribute("onMouseOver","this.style.setProperty('background-color','#8b8b8b','important')");
avLink.setAttribute("onMouseOut","this.style.setProperty('background-color','#03ac6c','important')");
   avLink.style.setProperty('border', '0', 'important');
avLink.style.setProperty('border-radius', '0', 'important');
avLink.style.setProperty('outline', 'none', 'important');
avLink.style.setProperty('box-shadow', 'none', 'important');
   avLink.setAttribute("value","Under 18");
   avLink.style.setProperty('-webkit-appearance', 'none', 'important');
document.getElementById('AVcontentBox').appendChild(avLink);
   
   var AVenterLink = document.createElement("input");
   AVenterLink.setAttribute("id","AVenterLink");
   AVenterLink.setAttribute("type","button");
   AVenterLink.setAttribute("onclick","setMyCookie();");
   
   AVenterLink.style.position = "fixed";
   AVenterLink.style.cursor = "pointer";
   AVenterLink.style.left = "50%";
   AVenterLink.style.marginLeft = "10px";
   AVenterLink.style.top = "300px";
   AVenterLink.style.setProperty('height', '40px', 'important');
   AVenterLink.style.setProperty('width', '120px', 'important');
   AVenterLink.style.setProperty('color', '#fff', 'important');
   AVenterLink.style.setProperty('font-size', '16px', 'important');
AVenterLink.style.setProperty('min-width', '1em', 'important');
AVenterLink.style.setProperty('line-height', '1em', 'important');
AVenterLink.style.setProperty('letter-spacing', '0px', 'important');
AVenterLink.style.setProperty('text-transform', 'none', 'important');
AVenterLink.style.setProperty('padding','0','important');
AVenterLink.style.setProperty('font-family','Helvetica','important');
AVenterLink.style.setProperty('font-weight','lighter','important');
   AVenterLink.style.setProperty('background-color', '#03ac6c', 'important');
AVenterLink.style.setProperty('background-image', 'none', 'important');
   AVenterLink.setAttribute("onMouseOver","this.style.setProperty('background-color','#8b8b8b','important')");
AVenterLink.setAttribute("onMouseOut","this.style.setProperty('background-color','#03ac6c','important')");
   AVenterLink.style.setProperty('border', '0', 'important');
AVenterLink.style.setProperty('border-radius', '0', 'important');
AVenterLink.style.setProperty('outline', 'none', 'important');
AVenterLink.style.setProperty('box-shadow', 'none', 'important');
   AVenterLink.setAttribute("value","18 & Over");
   AVenterLink.style.setProperty('-webkit-appearance', 'none', 'important');
document.getElementById('AVcontentBox').appendChild(AVenterLink);


}else{};
}, false);