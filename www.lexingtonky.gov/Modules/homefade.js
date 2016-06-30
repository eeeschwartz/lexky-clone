var bStart=0,num=0,imgName="imgSlide",imgHidden="imgHidden";
var directory = "ftp/home_rotation/";
var imgtype=".jpg";
var numpics=5;

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload!='function') {
		window.onload=func;
	} else {
		window.onload=function() {
			if (oldonload) { oldonload();}
			func();
		}
	}
}
addLoadEvent(function() {slideshow() })

function print_new_slide()
{
 var fwdImage=new Image;
 document['imgHidden'].src=directory+(num)+imgtype;
 if(bStart>0)
 {
	 fadeTrans(imgName, imgHidden, 900);
	 if (num < numpics-1)
		fwdImage.src=directory+(num+2)+imgtype;
 }
 else
 {
	bStart=1;
	document[imgName].src=document['imgHidden'].src;
 }

}
	
function slideshow()
{
	num++;
	if (num>numpics) { num=1;}
	print_new_slide();
	setTimeout('slideshow()',4000);
	var imgNew=new Image();
	imgNew.src=directory+(num+1)+imgtype; //preload next image
}

// Thanks to Des Kerrigan

var count=0,nCount=0,fade_started=0;

function fadeTrans(id1,id2,t1)
{
 if(fade_started==0)
 {
	fade_started=1;
	opacity(id1,100,0,t1);
	setTimeout("fadeTrans('"+id1+"','"+id2+"',"+t1+")",t1);
 }
 else
 {
	document.getElementById(id1).src=document.getElementById(id2).src;
	opacity(id1, 0, 100, t1);
	setTimeout("fadeTransComplete()",t1);
 }
}
function fadeTransComplete() { fade_started=0;}

// Thanks to http://www.brainerror.net/scripts_js_blendtrans.php
function opacity(id,opacStart,opacEnd,millisec)
	{
	//speed frames
	var speed=Math.round(millisec/100);
	var timer=0;

	//determine the direction for the blending, if start and end are the same nothing happens
	if(opacStart>opacEnd)
		{
		for(i=opacStart;i>=opacEnd;i--)
			{
			setTimeout("changeOpac("+i+",'"+id+"')",(timer*speed));
			timer++;
			}
		}
	else if(opacStart < opacEnd)
		{
		for(i=opacStart; i < opacEnd; i++)
			{
			setTimeout("changeOpac("+i+",'"+id+"')",(timer*speed));
			timer++;
			}
		}
	}
function changeOpac(opacity,id)
	{
	var object=document.getElementById(id).style; 
	object.opacity=(opacity/100);
	object.MozOpacity=(opacity/100);
	object.filter="alpha(opacity="+opacity+")";
	}
function shiftOpacity(id,millisec)
	{
	if(document.getElementById(id).style.opacity==0)
		{
		opacity(id,0,100,millisec);
		}
	else
		{
		opacity(id,100,0,millisec);
		}
	}
function blendimage(divid,imageid,imagefile,millisec)
	{
	var speed=Math.round(millisec/100);
	var timer=0;
	document.getElementById(divid).style.backgroundImage="url("+document.getElementById(imageid).src+")";
	changeOpac(0,imageid);
	document.getElementById(imageid).src=imagefile;
	for(i=0;i<=100;i++)
		{
		setTimeout("changeOpac("+i+",'"+imageid+"')",(timer*speed));
		timer++;
		}
	}