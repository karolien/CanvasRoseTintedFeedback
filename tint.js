const THRESHOLD = 0.8;

var feedbackItems = document.getElementsByClassName("recent_feedback_icon");
for(let i=0;i<feedbackItems.length;i++){
    var current = feedbackItems[i];
    try {
        var eventDetail = current.getElementsByTagName("div")[0].getElementsByTagName("p")[1].firstChild.innerHTML;
        var words = eventDetail.split(" ");
        var score = words[0];
        var max = words[3];
        var percentage = score/max;
        if(percentage<THRESHOLD){ // Bad grade
            current.style.display = "none";
        }
    }
    catch (e) {
        // Not quantitative feedback, display by default
    }
}
document.getElementsByClassName("events_list recent_feedback")[0].style.display = "block";