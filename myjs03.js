"use strict";

$(function() {

    $.ajaxSetup({
        cache: false
    });


    $.ajax({
        url: "https://reqres.in/api/users",
        type: "GET"
    }).done(showusers);


    function showusers(data) {
        $("#userTemplate").tmpl(data["data"]).appendTo("#ausgabe");
    }

});