function load_iframe(iframe_id){
    var iFrameID = document.getElementById(iframe_id);
    if (iFrameID) {
        if (iframe_id == "vlab_people"){
            var dir = "https://mineralcloud.github.io/people/vlab_people.html";
        }
        if (iframe_id == "vlab_publication") {
            var dir = "https://mineralcloud.github.io/publications/vlab_publications.html";
        }
        if (iframe_id == "vlab_events") {
            var dir = "https://mineralcloud.github.io/events/vlab_events.html";
        }

        iFrameID.src = dir;

        
        fit_iframe(iframe_id);
    }
}

function fit_iframe(iframe_id){
    var iFrameID = document.getElementById(iframe_id);
    if (iFrameID) {
        iFrameID.height = "";
        var newHeight = iFrameID.contentWindow.document.body.height;
        newHeight = parseInt(newHeight) + 60;
        iFrameID.height = newHeight + "px";
    }

}