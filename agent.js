window.onpageshow = function () {
    
    function init(message, sender, callback) {
	if (location.href.indexOf("/browse/")!=-1) {
	    l = document.getElementsByTagName("aside");
	    for (var i = 0; i < l.length; i++) {
		l[i].parentNode.removeChild(l[i]);
	    }
	    l = document.getElementsByTagName("aside");
	    for (var i = 0; i < l.length; i++) {
		l[i].parentNode.removeChild(l[i]);
	    }
	} else if (location.href.indexOf("/misspelling?")!=-1) {
	    
	} else {
	    var m = document.getElementsByTagName("main")[0]
	    m.parentNode.removeChild(m);

	    var d = document.getElementsByClassName("css-c7eelc eis715q0")[0];
	    d.parentNode.removeChild(d);
	}
    }

    chrome.extension.onMessage.addListener(init);

};
