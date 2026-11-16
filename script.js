var button = document.getElementById("complete-button");
var count = document.getElementById("workout-count");

if (button != null && count != null) {
    var workoutCount = Number(localStorage.getItem("workoutCount"));
    count.textContent = workoutCount;

    button.onclick = function() {
        workoutCount = workoutCount + 1;
        count.textContent = workoutCount;
        localStorage.setItem("workoutCount", workoutCount);
    };
}

var goalFilter = document.getElementById("goal-filter");
var levelFilter = document.getElementById("level-filter");
var workoutCards = document.getElementsByClassName("workout-card");

if (goalFilter != null && levelFilter != null) {
    function filterWorkouts() {
        var selectedGoal = goalFilter.value;
        var selectedLevel = levelFilter.value;

        for (var i = 0; i < workoutCards.length; i++) {
            var cardGoal = workoutCards[i].getAttribute("data-goal");
            var cardLevel = workoutCards[i].getAttribute("data-level");

            if ((selectedGoal == "all" || selectedGoal == cardGoal) &&
                (selectedLevel == "all" || selectedLevel == cardLevel)) {
                workoutCards[i].style.display = "block";
            } else {
                workoutCards[i].style.display = "none";
            }
        }
    }

    goalFilter.onchange = filterWorkouts;
    levelFilter.onchange = filterWorkouts;
}

var sendButton = document.getElementById("send-button");
var formResponse = document.getElementById("form-response");

if (sendButton != null && formResponse != null) {
    sendButton.onclick = function() {
        var name = document.getElementById("name").value;
        var message = document.getElementById("message").value;

        if (name == "" || message == "") {
            formResponse.textContent = "Please enter your name and message.";
        } else {
            formResponse.textContent =
                "Thanks, " + name + "! Your message has been recorded.";
        }
    };
}