"use strict";

$(function() {
    var kollegen = JSON.parse(localStorage.getItem("kollegen"));
    var aktkollege = 1;

    $.ajaxSetup({
        cache: false
    });

    $.ajax({
            url: "http://localhost/tag5/kollegen.json",
            type: "GET"
        })
        .done(fillstorage)
        .always(fillselect);

    function fillstorage(result) {
        if (!localStorage.getItem("kollegen")) {
            localStorage.setItem("kollegen", JSON.stringify(result));
        }

    }

    function fillselect() {
        var options = "";
        for (var i = 0; i < kollegen.length; i++) {
            options += '<option value="' + kollegen[i].id + '">' +
                kollegen[i].nachname + ', ' + kollegen[i].vorname +
                '</option>';
        }
        $("#auswahl").html(options);
        showdetails();
    }

    function showdetails() {
        var k = kollegen[aktkollege - 1];
        $("#details").find("#id").html(k.id);
        $("#details").find("#nachname").val(k.nachname);
        $("#details").find("#vorname").val(k.vorname);
        $("#zusatz").addClass("hidden");
    }

    $("#auswahl").change(function() {
        aktkollege = $("#auswahl").val();
        showdetails();
    });

    $("#btnBemerkungen").click(function() {
        $("#zusatz").removeClass("hidden");
        $("#bemerkungen").val(localStorage.getItem("bem" + aktkollege));
    });

    $("#bemerkungen").on("input", function() {
        localStorage.setItem("bem" + aktkollege, $("#bemerkungen").val());
    });

});