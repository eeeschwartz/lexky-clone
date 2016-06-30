function ddmOut (num)
{
	if (num > 0)
	{
		rootNode = document.getElementById("dropdownrootitem" + num);
		if (rootPageForDDM != num)
			if (rootNode.className == "dropdownrootitem" + num + "_over")
				rootNode.className = "dropdownrootitem" + num;
	}
}

function ddmOver (num)
{
	if (num > 0)
	{
		rootNode = document.getElementById("dropdownrootitem" + num);
		if (rootNode.className == "dropdownrootitem" + num)
			rootNode.className = "dropdownrootitem" + num + "_over";
	}
}

startList = function() 
			{
				if (document.all&&document.getElementById)
				{
					cssdropdownRoot = document.getElementById("dropdownmenu");
					for (x=0; x<cssdropdownRoot.childNodes.length; x++) 
					{
						node = cssdropdownRoot.childNodes[x];
						// code begins for sub-menu class change to make menu works for IE6. 
						if (node.nodeName=="LI") 
						{
							node.onmouseover=function()
							{
								this.className+=" over";
							}
							node.onmouseout=function()
							{
								this.className=this.className.replace(" over", "");
							}
						}
						// code ends for sub-menu class change to make menu works for IE6. 
					}
				}
			}

if (window.attachEvent)
	window.attachEvent("onload", startList)
else
	window.onload=startList;



// The following scripts is to fix the problem that when user uses 1024 resolutions and mouse over the last 
// right hand drop down, the 3rd level menu open to the right which makes the page having horizontal scroll
// bar. We use javascript to dynamically turn on/off the extra CSS reference, dropdownmenu_1024.css. 
// You may set the browser width as you want in below. 
// ========================================================================================================
function dynamicLayout(){
    var browserWidth = getBrowserWidth();
    
    if (browserWidth <= 1024){
        var theStyleLink = document.getElementById('dropDownMenu_1024');
		theStyleLink.disabled = false;
    }
    else
    {
		var theStyleLink = document.getElementById('dropDownMenu_1024');
		theStyleLink.disabled = true;
    }
    
    if (browserWidth <= 800){
        var theStyleLink = document.getElementById('dropDownMenu_800');
		theStyleLink.disabled = false;
    }
    else
    {
		var theStyleLink = document.getElementById('dropDownMenu_800');
		theStyleLink.disabled = true;
    }
}

function getBrowserWidth(){
    if (window.innerWidth){
        return window.innerWidth;}  
    else if (document.documentElement && document.documentElement.clientWidth != 0){
        return document.documentElement.clientWidth;    }
    else if (document.body){return document.body.clientWidth;}      
        return 0;
}

function addEvent( obj, type, fn ){ 
   if (obj.addEventListener){ 
      obj.addEventListener( type, fn, false );
   }
   else if (obj.attachEvent){ 
      obj["e"+type+fn] = fn; 
      obj[type+fn] = function(){ obj["e"+type+fn]( window.event ); } 
      obj.attachEvent( "on"+type, obj[type+fn] ); 
   } 
} 

//Run dynamicLayout function when page loads and when it resizes.
addEvent(window, 'load', dynamicLayout);
addEvent(window, 'resize', dynamicLayout);
// ========================================================================================================
