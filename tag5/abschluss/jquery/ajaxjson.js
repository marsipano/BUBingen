$(document).ready(function() {
    
    // Ausschalten des Browser Caches. Buch jQuery kurz S.132
    $.ajaxSetup({ cache: false });

    $("#profil").click(function() {
        $("#ausgabeliste").css("border", "2px solid red");
        $("#ausgabeliste").css("margin", "2px");
        SelectedValue = $("#nameselect").val();
        console.log("read profil for user " + SelectedValue);
        // Datei JSON auf dem Server anfragen
        $.getJSON("profil.json", function(data) {
            console.log(data);

            Output = "<ul>";
            for (var i in data) {
                if (data[i].name === SelectedValue) {
                    for (var j in data[i].hobby) {
                        Output += "<li>" + data[i].hobby[j] + "</li>";
                    }
                    Output += "</ul>";
                    $("#ausgabeliste").html(Output); 
                    $("#ausgabeliste").fadeIn(1000);
                }
            }            
        });
    })

});
