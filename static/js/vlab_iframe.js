function load_iframe(iframe_id){
    var iFrameID = document.getElementById(iframe_id);
    if (iFrameID) {
        if (iframe_id == "vlab_people"){
            var dir = "https://mineralcloud.github.io/people/vlab_people.html";
            var height = 5250;
        }
        if (iframe_id == "vlab_publication") {
            var dir = "https://mineralcloud.github.io/publications/vlab_publications.html";
            var height = 18000;
        }
        if (iframe_id == "vlab_events") {
            var dir = "https://mineralcloud.github.io/events/vlab_events.html";
            var height = 5350;
        }

        iFrameID.src = dir;
        iFrameID.height = height + "px";

        
    }
}
