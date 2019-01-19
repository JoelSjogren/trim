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
	} else {
	    var m = document.getElementsByTagName("main")[0]
	    m.parentNode.removeChild(m);
	}
    }

    chrome.extension.onMessage.addListener(init);

};
