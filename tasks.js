var now = new Date();
var datestring = now.getFullYear() + "-" +
    now.getMonth().toString().padStart(2, "0") + "-" +
    now.getDay().toString().padStart(2, "0");

$("[datetime]").attr("datetime", datestring);
$("time").each(function() { this.innerHTML = datestring; });