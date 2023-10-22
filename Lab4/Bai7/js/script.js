// script.js
$(document).ready(function() {
    var currentNumber = 1;

    for (var i = 1; i <= 64; i++) {
        var button = $("<button>", {
            class: "number-button",
            text: i
        });
        $("#buttonContainer").append(button);
    }

    $(".number-button").click(function() {
        var clickedNumber = parseInt($(this).text());

        if (clickedNumber === currentNumber) {
            $(this).remove();
            currentNumber++;

            if (currentNumber > 64) {
                alert("Chúc mừng bạn đã hoàn thành!");
            }
        } else {
            alert("Bạn đã nhấn sai! Hãy nhấn theo thứ tự từ " + currentNumber + ".");
        }
    });
});
