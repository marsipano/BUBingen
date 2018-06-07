test
jq05.html:10:4
a1 =$("a:first").attr("href","http://www.vhs-bingen.de")
Object { 0: a, length: 1, prevObject: Object(1) }
$("a:first").attr("target","_blank")
Object { 0: a, length: 1, prevObject: Object(1) }
$("a:last").attr({href : "www.bingen.de","target:_blank"})
SyntaxError: missing : after property id[Weitere Informationen] debugger eval code:1:56
$("a:last").attr({href : "www.bingen.de","target: "_blank"})
SyntaxError: missing : after property id[Weitere Informationen] debugger eval code:1:51
$("a:last").attr({href : "www.bingen.de",target: "_blank"})
Object { 0: a, length: 1, prevObject: Object(1) }
$("a:last").attr({href : "http://www.bingen.de",target: "_blank"})
Object { 0: a, length: 1, prevObject: Object(1) }
$("a:last").html("www.bingen.de");
Object { 0: a, length: 1, prevObject: Object(1) }
