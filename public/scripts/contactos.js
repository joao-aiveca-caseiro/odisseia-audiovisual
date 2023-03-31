$(function (){
    $("form").on("submit", (e) => {
    console.log("Olá");
      e.preventDefault();

      const email = $('#email').val().trim();
      const assunto = $('#assunto').val().trim();
      const mensagem = $('#mensagem').val().trim();

      const data = {
        email,
        assunto,
        mensagem
      };

      $.post("/contactos", data, function(){
        console.log("Servidor recebeu os dados");
      });

      setTimeout(function(){ window.location.href = "/contactos"; },1000);
      // window.location.href = "/contactos"
});
});

if ($(window).width() <= 767) {
  $("#logo").attr("src", "media/logo_small.png");
} else {
   $("#logo").attr("src", "media/logo.png");
}