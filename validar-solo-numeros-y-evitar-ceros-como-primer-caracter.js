jQuery(function ($) {
  $(".calculator").keydown(function (event) {
    var valorx = event.target.value;
    console.log("valor", valorx);

    if (event.shiftKey == true) {
      event.preventDefault();
    }

    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 190) {
      // Permitir la entrada de números, retroceso, tabulador, flechas, eliminar y punto decimal.
    } else {
      event.preventDefault();
    }

    // Evitar la entrada del número cero como primer caracter.
    if (valorx === "" && (event.keyCode == 48 || event.keyCode == 96)) {
      event.preventDefault();
    }

    if ($(this).val().indexOf(".") !== -1 && event.keyCode == 190) {
      event.preventDefault();
    }
  });
});
