window.onpageshow = function () {

    function MATCH(full, sub) {
	return full.indexOf(sub) != -1;
    }

    function TIDY() {
	l = document.getElementsByTagName("aside");
	for (var i = 0; i < l.length; i++) {
	    l[i].parentNode.removeChild(l[i]);
	}
    }

    function REMOVE(name) {
	var d = document.getElementsByClassName(name)[0];
	if (d === undefined) return;
	d.parentNode.removeChild(d);
    }
    
    function init(message, sender, callback) {
	if (MATCH(location.href, "/browse/")) {
	    TIDY();
	    TIDY();
	} else if (MATCH(location.href, "/misspelling?")) {
	    REMOVE("css-6yia5l e1qo4u831");
	    REMOVE("css-829tqn-EditorialComponent e1bbcgok0");
	} else if (MATCH(location.href, "dictionary.com")) {
	    REMOVE("css-124o9s9 eyeuakq2");
	    REMOVE("css-1j44f8t e15rv17m0");
	    REMOVE("css-uq902e e5o20ld0");
	} else if (MATCH(location.href, "thesaurus.com")) {
	    REMOVE("css-l1ynfs eyeuakq2");
	    REMOVE("css-1j44f8t e15rv17m0");
	    REMOVE("css-uq902e e5o20ld0");
	}
    }

    chrome.extension.onMessage.addListener(init);

};
