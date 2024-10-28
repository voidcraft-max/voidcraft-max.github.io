$(document).ready(function() {
    function updateShowModded() {
        var isChecked = $("#showModded").is(":checked");
        if (isChecked) {
            $("#moddedButtons").show();
        } else {
            $("#moddedButtons").hide();
        }
    }
    function updateButtons() {
        $(".modded-buttons").each(function() {
            var url = $(this).data("url");
            $(this).attr("href", url);
        });
    }
    $("#showModded").on("change", function() {
        updateShowModded();
        updateButtons();
    });
    updateShowModded();
});