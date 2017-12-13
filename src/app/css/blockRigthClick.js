var message="";
///////////////////////////////////
function clickIE() 
{
    if (document.all) 
    {   
        (message);
        return false; 
    }
    
}

function clickNS(e) 
{ 
    if (document.layers||(document.getElementById&&!document.all)) 
    {
        if (e.which==2||e.which==3) 
        {
            (message);
            return false;
        }
    }
}

if (document.layers) 
{
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown=clickNS;
}
else
{
    document.onmouseup=clickNS;
    document.oncontextmenu=clickIE;
}

document.oncontextmenu=new Function("return false")

document.attachEvent("onkeydown", blockKey);

function blockKey() {
    if (event.keyCode == 37 && event.altKey || event.keyCode == 39 && event.altKey)  
    {  
        event.cancelBubble = true;  
        event.returnValue = false;  
    }  
    else if ((event.altKey) || ((event.keyCode == 8) &&
    (event.srcElement.type != "text" &&
    event.srcElement.type != "textarea" &&
    event.srcElement.type != "password")) ||
    ((event.ctrlKey) && (event.keyCode == 82)) || ((event.ctrlKey) && (event.keyCode == 78)) ||
    (event.keyCode == 122) || (event.keyCode == 116)) {
        event.keyCode = 0;
        event.returnValue = false;
        return false;
    }
}

