$(document).ready(function () {
  function verif() {
   
    var envoi = true;

    if ($("#prenom").val()=="") {
        envoi= false;
      $("#prenom").addClass("alert alert-danger");
    }


    if ($("#nom").val()=="") {
        envoi= false;
      $("#nom").addClass("alert alert-danger");
    }
  
    if ($("#ddn").val()=="") {
        envoi= false;
      $("#ddn").addClass("alert alert-danger");
    }
  
    if ($("#CP").val()=="") {
        envoi= false;
      $("#CP").addClass("alert alert-danger");
    }

    if ($("#email").val()=="") {
        envoi= false;
      $("#email").addClass("alert alert-danger");
    }
    if ($("#question").val()=="") {
        envoi= false;
      $("#question").addClass("alert alert-danger");
    }

    if ($("#sujet option[1]").is()) {
        envoi= false;
      $("#sujet").addClass("alert alert-danger");
    }
    if ($("#traitement_info").is(":not(:checked)")){
        envoi= false;
      $("#label_info").addClass("text-danger");
    }



if(envoi==true)
{
    $("#contact").submit();
}
};


  $("#envoyer").click(function(e) {
    e.preventDefault();
    verif();
  })


});
