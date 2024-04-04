
if ($("#sujet option[1]").is()) {
    envoi= false;
  $("#sujet").addClass("alert alert-danger");
}















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