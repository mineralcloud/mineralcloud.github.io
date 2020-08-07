function load_iframe(iframe_id){
    var iFrameID = document.getElementById(iframe_id);
    if (iFrameID) {
        if (iframe_id == "vlab_people"){
            var dir = "https://mineralcloud.github.io/people/vlab_people.html";
            var height = 5030;
        }
        if (iframe_id == "vlab_publication") {
            var dir = "https://mineralcloud.github.io/publications/vlab_publications.html";
            var height = 18200;
        }
        if (iframe_id == "vlab_events") {
            var dir = "https://mineralcloud.github.io/events/vlab_events.html";
            var height = 5350;
        }

        if (iframe_id == "vlab_news") {
            var dir = "https://mineralcloud.github.io/events/vlab_news.html";
            var height = 4760;
        }

        if (iframe_id == "vlab_institutions") {
            var dir = "https://mineralcloud.github.io/people/vlab_institutions.html";
            var height = 4760;
        }

        if (iframe_id == "vlab_alumni") {
            var dir = "https://mineralcloud.github.io/people/vlab_alumni.html";
            var height = 4050;
        }

        iFrameID.src = dir;
        iFrameID.height = height + "px";

        
    }
}
