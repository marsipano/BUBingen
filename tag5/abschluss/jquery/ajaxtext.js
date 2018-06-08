$(document).ready(function() {
    
    // Ausschalten des Browser Caches. Buch jQuery kurz S.132
    $.ajaxSetup({ cache: false });

    $("#nameselect").change(function() {
        $("#ausgabeliste").fadeOut(1000);
        SelectedValue = $("#nameselect").val();
        console.log("Change on nameselect to => " + SelectedValue);

        if (SelectedValue === "ralf") {
            FileName = "meta-ralf.txt";
        }
        if (SelectedValue === "franz") {
            FileName = "meta-franz.txt";
        }
        if (SelectedValue === "schorsch") {
            FileName = "meta-schorsch.txt";
        }
        if (SelectedValue === "") {
            FileName = "";
            $("#ausgabeinfo").fadeOut(1000);
        }

        if (FileName != "") {
            $.get(FileName, function(data) {
                $("#ausgabeinfo").html(data); 
                $("#ausgabeinfo").fadeIn(1000); 
            }).done(function(data) {
                console.log("data successful loaded from " + FileName);
            }).fail(function(data) {
                console.log("error in fetching data from " + FileName);
            });
        }
    });
});
