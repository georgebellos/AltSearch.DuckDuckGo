(function () {

    // List of search engines used in the search
    var searchEngines = [
        // {"Name": "", "Url": ""}
        {"Name": "Google",    "Url": "https://www.google.ca/search?q="},
        {"Name": "Bing",      "Url": "http://www.bing.com/search?q="},
        {"Name": "Yahoo!",    "Url": "http://search.yahoo.com/search?p="},
        {"Name": "Ask",       "Url": "http://www.ask.com/web?q="},
        {"Name": "Wikipedia", "Url": "https://en.wikipedia.org/wiki/Special:Search/"}
    ];

    // get the query string parameter
    function getQueryString(param) {
        param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + param + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if (results == null){
            return "";
        }
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    // generate the search link
    function generateSearchLink(searchEngineName, searchEngineUrl) {
        var divTag = document.createElement("div");
        divTag.className = "t-left";
        divTag.style.padding = "12px";
        divTag.style.fontSize = "13px";
        divTag.innerHTML = "<a href='" + searchEngineUrl + getQueryString("q") + "'> " + searchEngineName + "</a>";
        document.getElementsByClassName("results--sidebar")[0].appendChild(divTag); // inject it into the container.
    }

    (function(){

        // First we create the header
        var divTag = document.createElement("div");
        divTag.className = "region-indicator t-left"; // class predefined in the DDG styles
        divTag.style.color = "#888";
        divTag.style.paddingLeft = "12px";
        divTag.style.fontSize = "13px";
        divTag.style.marginBottom = "10px";
        divTag.innerHTML = "Search with: ";
        document.getElementsByClassName("results--sidebar")[0].appendChild(divTag); // inject it into the container

        // Then we loop through all the search engines and inject their links into DuckDuckGo.
        for(var i in searchEngines){
            var seName = searchEngines[i].Name;
            var seUrl = searchEngines[i].Url;
            generateSearchLink(seName, seUrl);
        }
    })();
})();
