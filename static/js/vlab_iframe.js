function load_iframe(iframe_id){
    var iFrameID = document.getElementById(iframe_id);
    if (iFrameID) {
        if (iframe_id == "vlab_people"){
            var dir = "https://mineralcloud.github.io/people/vlab_people";
        }
        if (iframe_id == "vlab_publication") {
            var dir = "https://mineralcloud.github.io/publications/vlab_publications.html";
        }
        if (iframe_id == "vlab_events") {
            var dir = "https://mineralcloud.github.io/events/vlab_events.html";
        }

        iFrameID.src = dir;
        
    }
}

function l(iframe_id){
    var iFrameID = document.getElementById(iframe_id);
    if (iFrameID) {
        // here you can make the height, I delete it first, then I make it again
        iFrameID.height = "";
        var newHeight = iFrameID.contentWindow.document.body.scrollHeight + 50;
        iFrameID.height = newHeight + "px";
    }

}