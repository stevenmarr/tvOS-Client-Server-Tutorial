function getDocument(url) {
    //var url = 'http://www.google.com'
    var templateXHR = new XMLHttpRequest();
    templateXHR.responseType = "document";
    templateXHR.addEventListener("load", function() {pushDoc(templateXHR.responseXML);}, false);
    templateXHR.open("GET", url, true);
    templateXHR.send();
    return templateXHR;
}

function pushDoc(document) {
    navigationDocument.pushDocument(document);
}

App.onLaunch = function(options) {
    var templateURL = 'http://localhost:8000/hello.tvml';
    getDocument(templateURL);
}

App.onExit = function() {
    console.log('App finished');
}