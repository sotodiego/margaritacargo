
function selector_envio() {
    let tipo_envio = document.getElementById('tipo_envio');
    let valor = tipo_envio.value;
  
    if (valor == 1) {
      document.getElementById("maritimo").style.display = "block";
      document.getElementById("aereo").style.display = "none";
      document.getElementById("pies").style.display = "block";
      document.getElementById('aereo-min').style.display = "none";
  
    } else {
      document.getElementById("maritimo").style.display = "none";
      document.getElementById("aereo").style.display = "block";
      document.getElementById("pies").style.display = "none";
      //document.getElementById('pies').innerHTML =" ";
    }
  
  }
  
  function calculate_marit() {
    var height = document.getElementById('height').value;
    var width = document.getElementById('width').value;
    var length = document.getElementById('length').value;
    var destino = document.getElementById('destino').value;
    var minimo = 0;
    var total_ft = (height * width * length) / 1728;
    var price = 0;
  
    if (destino == 1) {
      price = 19.5;
    } else if (destino == 2) {
      price = 16
    } else {
      price = 19.5;
    }
  
    total = price * total_ft;
    //Si es menor a 2 pies
    if (total_ft <= 1.78 || total < 30) {
      if (total < 25) {
        price = 30;
        minimo = 30;
      } else {
        price = 30;
        minimo = 30;
      }
  
      document.getElementById('total-ft').innerHTML = "El monto a pagar por este paquete que es menor o igual a 1.78 píes cúbicos es de " + minimo + "$";
      document.getElementById('total-price').innerHTML = "$" + price.toFixed(2);
      return;
    } else {
      price = total_ft * price;
      document.getElementById('total-ft').innerHTML = total_ft.toFixed(2);
      document.getElementById('total-price').innerHTML = "$" + price.toFixed(2);
    }
  }
  function calculate_aereo() {
    var weight = document.getElementById('weight').value;
    var destino = document.getElementById('destino').value;
    var minimo = 0;
    // var total_ft = (weight) * 1728;
    var price = 0;
    if (destino == 1) {
      price = 6;
    } else {
      price = 4.5;
    }
  
    total = price * weight;
    //Si es menor a 2 pies
    if (total < 35) {
      minimo = 35;
      price = 35;
      document.getElementById('aereo-min').innerHTML = "El monto minimo a pagar por este paquete es de " + minimo + "$";
      document.getElementById('total-price').innerHTML = "$" + price.toFixed(2);
      return;
    } else {
  
      price = total;
      // document.getElementById('total-ft').innerHTML = total_ft.toFixed(2);
      document.getElementById('total-price').innerHTML = "$" + price.toFixed(2);
    }
  }
  
  
  
  
  function enviarcorreo() {
    if (($("#mail").val() === "")) {
      alert("Por favor ingrese un correo.");
  
      return false;
    }
  
    if ($("#nombre").val() === "") {
      alert("Por favor ingrese su nombre y apellido.");
  
  
      return false;
    } else {
  
      if (!validar_email($("#mail").val())) {
        alert("Por favor ingrese un correo valido.");
  
        return false;
      } else {
  
        $.ajax({
          type: "POST",
          url: "https://margaritacargo.com/correo.php",
          data: $("#form1").serialize(),
          success: function (enviado) {
            if (enviado) {
              alert("Su mensaje fue enviado satisfactoriamente")
              $("#mail").val("");
              $("#nombre").val("");
              $("#content").val("");
  
  
            } else {
              alert("Disculpe, hubo un problema y no se pudo enviar el mensaje.")
            }
  
  
          },
          dataType: "html"
        });
        return false;
  
      }
    }
  
  
  
  }
  
  
  function validar_email(valor) {
  
    // creamos nuestra regla con expresiones regulares.
  
  
  
    var filter = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    // var filter2 =pattern: /outlook/i;
  
    //var servidor=/algo/i;                 
  
    // utilizamos test para comprobar si el parametro valor cumple la regla
  
    if (filter.test(valor))
      return true;
    else
      return false;
  }
  
  
  //Responsive Menu
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += "  menuopen";
    } else {
      x.className = "topnav";
    }
  }
  
  //banner lateral
  
  $(document).ready(function () {
    $(".alternar-respuesta-ej1").click(function () {
      $(".wrapper").toggleClass("wrapper2");
      $(".wrapper .box p").html("Ver");
    });
  
  });
  