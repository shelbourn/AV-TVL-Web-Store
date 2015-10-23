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

var AVavalie = document.createElement("iframe");
   AVavalie.setAttribute("id","AVavalie");
   AVavalie.setAttribute("src","https://av.ageverify.co/iframes/AvalieIndex.html");
   AVavalie.style.width = "100%";
   AVavalie.style.height = "115px";
   AVavalie.style.setProperty('position', 'fixed', 'important');
   AVavalie.style.setProperty('margin','0px','important');
   AVavalie.style.setProperty('padding','0px','important');
   AVavalie.style.left = "0";
   AVavalie.style.bottom = "0";
   AVavalie.style.zIndex = "100001";
   AVavalie.style.border = "0";
   document.body.appendChild(AVavalie);
   

setTimeout(function(){document.getElementById("AVavalie").style.display="none";document.getElementById("AVcredLink").style.display="none";},7000);}

document.addEventListener("DOMContentLoaded", function ageVerify() {
	
	if(document.cookie.replace(/(?:(?:^|.*;\s*)verify\s*\=\s*([^;]*).*$)|^.*$/,"$1")!=="true"){
	
	var AVoverlay = document.createElement("iframe");
   AVoverlay.setAttribute("id","AVoverlay");
   AVoverlay.setAttribute("src","https://av.ageverify.co/iframes/vaping2.html");
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
   AVcontentBox.style.setProperty('color', '#fff', 'important');
   AVcontentBox.style.setProperty('font-size', '28px', 'important');
   AVcontentBox.style.setProperty('font-family', 'Helvetica', 'important');
AVcontentBox.style.setProperty('letter-spacing', '0px', 'important');
AVcontentBox.style.setProperty('text-transform', 'none', 'important');
   AVcontentBox.style.paddingTop = "20px";
   AVcontentBox.style.lineHeight = "30px";
   AVcontentBox.innerHTML = "Welcome!<br /><br />Please verify your<br />age to enter.";
   document.body.appendChild(AVcontentBox);
   
   var avLink = document.createElement("input");
   avLink.setAttribute("id","avLink");
   avLink.setAttribute("type","button");
   avLink.setAttribute("onclick","window.location='https://ageverify.co/';");
   
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
   avLink.style.setProperty('background-color', '#438ab7', 'important');
avLink.style.setProperty('background-image', 'none', 'important');
   avLink.setAttribute("onMouseOver","this.style.setProperty('background-color','#009900','important')");
avLink.setAttribute("onMouseOut","this.style.setProperty('background-color','#438ab7','important')");
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
   AVenterLink.style.setProperty('background-color', '#438ab7', 'important');
AVenterLink.style.setProperty('background-image', 'none', 'important');
   AVenterLink.setAttribute("onMouseOver","this.style.setProperty('background-color','#009900','important')");
AVenterLink.setAttribute("onMouseOut","this.style.setProperty('background-color','#438ab7','important')");
   AVenterLink.style.setProperty('border', '0', 'important');
AVenterLink.style.setProperty('border-radius', '0', 'important');
AVenterLink.style.setProperty('outline', 'none', 'important');
AVenterLink.style.setProperty('box-shadow', 'none', 'important');
   AVenterLink.setAttribute("value","18 & Over");
   AVenterLink.style.setProperty('-webkit-appearance', 'none', 'important');
document.getElementById('AVcontentBox').appendChild(AVenterLink);

if( window.innerWidth >= 800 ) {
var AVcredLink = document.createElement("a");
   AVcredLink.setAttribute("id","AVcredLink");
   AVcredLink.setAttribute("rel","author");
   AVcredLink.setAttribute("href","https://ageverify.co/");
   AVcredLink.style.position = "fixed";
   AVcredLink.style.cursor = "pointer";
   AVcredLink.style.right = "0px";
   AVcredLink.style.bottom = "0px";
   AVcredLink.style.setProperty('overflow','hidden','important');
   AVcredLink.style.setProperty('background-image', "url(https://av.ageverify.co/images/av_logo.jpg)", 'important');
   AVcredLink.style.setProperty('background-repeat','no-repeat','important');
   AVcredLink.style.setProperty('opacity', '0.2', 'important');
   AVcredLink.setAttribute("onMouseOver","this.style.setProperty('opacity','1.0','important')");
   AVcredLink.setAttribute("onMouseOut","this.style.setProperty('opacity','0.2','important')");
   AVcredLink.style.setProperty('width', '48px', 'important');
   AVcredLink.style.setProperty('height', '48px', 'important');
   AVcredLink.style.setProperty('border', '0', 'important');
   AVcredLink.style.setProperty('border-radius', '0', 'important');
   AVcredLink.style.setProperty('outline', 'none', 'important');
   AVcredLink.style.setProperty('box-shadow', 'none', 'important');
   AVcredLink.style.setProperty('-webkit-appearance', 'none', 'important');
   AVcredLink.style.zIndex = "100001";
   AVcredLink.innerHTML = "<br /><br /><br /><br />Website Age Checker & Age Verification Pop Up Script by AgeVerify.co";
   document.body.appendChild(AVcredLink);
	};
}else{};
}, false);