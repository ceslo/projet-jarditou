$(document).ready(function () {
  function verif() {
    var envoi = true;
    var x = $("[id^=req_");  

if (x.val() == "") {
  envoi = false;
  $(x).addClass("alert alert-danger");
  $(x+small).html("Ce champ est obligatoire.");
}

if ($("#traitement_info").is(":not(:checked)")) {
  envoi = false;
  $("#label_info").addClass("text-danger");
}
if( $("#sexeM").is(":not(:checked)") && $("#sexeF").is(":not(:checked)")) {
envoi=false
$(x).addClass("alert alert-danger")
$("#sexe").addClass("text-danger")
}

   if($("#req_nom").val().match(":not([A-Za-z]+)"))
   {
    envoi=false;
    $("#req_nom").addClass("alert alert-danger")
    
   }
    if (envoi == true) {
      $("#contact").submit();
    }
  }

  $("#envoyer").click(function (e) {
    e.preventDefault();
    verif();
  });
});
