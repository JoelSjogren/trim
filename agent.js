window.onpageshow = function () {

    function MATCH(full, sub) {
	return full.indexOf(sub) != -1;
    }

    function TIDY() {
	l = Array.from(document.getElementsByTagName("aside"));
	for (var i = 0; i < l.length; i++) {
	    l[i].parentNode.removeChild(l[i]);
	}
    }

    function REMOVE(name) {
	var d = document.getElementsByClassName(name)[0];
	if (d === undefined) return;
	d.parentNode.removeChild(d);
    }

    function TRY(f) {
	try {
	    return f();
	} catch (e) {}
    }

    function TRUST() {
	setTimeout(() => {
	    $("[id=onetrust-consent-sdk]").remove();  // maybe?
	}, 2000)
    }
    
    function init(message, sender, callback) {
	if (MATCH(location.href, "dictionary.com")) {
	    TRY(() => $('nav[aria-label*="Site Navigation"]').remove());
	    TRY(() => $("[class*=PageWrapper]").remove());
	    TRY(() => $("[class*=MarketingSlot]").remove());
	    TRY(() => $("[class*=FooterContainer]").remove());
	    TRY(() => TIDY());
	    TRY(() => TRUST());
	    TRY(() => $("[class*=page-footer]").remove());
	    if (MATCH(location.href, "/browse/")) {
		TRY(() => $("#quizzes").remove());
		TRY(() => $("[id*=marketing]").remove());	
	    } else if (MATCH(location.href, "/misspelling?")) {

	    }
	} else if (MATCH(location.href, "thesaurus.com")) {
	    TRY(() => TIDY());
	    TRY(() => TRUST());
	    TRY(() => $("[class*=page-footer]").remove());
	    TRY(() => $("[class*=MarketingSlot]").remove());
	    TRY(() => $("[class*=BaseContentContainer]").remove());
	    TRY(() => $("[class*=FooterContainer]").remove());
	    TRY(() => $('nav[aria-label*="Site Navigation"]').remove());
	} else if (MATCH(location.href, "context.reverso.net/traduction")) {
	    $("#blocked-results-banner").remove();
	    $("div").removeClass("blocked");
	}
    }

    chrome.extension.onMessage.addListener(init);

};
