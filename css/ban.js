function unmouse(){	
	document.oncontextmenu = new Function("return false;");
	document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if (e && (e.keyCode == 123 || (e.keyCode == 116 && e.type!='keypress'))) 
		{
			e.returnValue = false;
			return (false);
		}
	}
}
unmouse()
