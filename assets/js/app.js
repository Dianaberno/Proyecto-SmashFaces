$(function() {
    var ValNombre = $('#nombre');
    var valSede = $('#sede');
    var name;
    var cont = 0;
    var punto = 0;

    valSede.on('change', () => {
        if (valSede.val() == "peru") {
            transferirCoder(peru);
        }
        if (valSede.val() == "chile") {
            transferirCoder(chile);
        }
    });

    function transferirCoder(sede) {
        cont++;
        ValNombre.val("");
        $.each(sede, function() {
            if (cont < sede.length) {
                $('img').attr("src", "assets/img/" + valSede.val() + "/" + sede[cont].image);
                name = sede[cont].name.toLowerCase();
            }
        });
    }

    var newCoder = (sede) => {
        if (sede == "peru") {
            transferirCoder(peru);
        } else if (sede == "chile") {
            transferirCoder(chile);
        }
    }

    function compareName(nombre, input) {
        if (nombre == input) {
            swal("Buen Trabajo!", "+5 puntos , haz click en el botón", "success");
            setTimeout(newCoder(valSede.val()), 1000);
            punto += 5;
            $("#puntos").text("Puntos : " + punto);
        } else {
            swal("ohh nooo!", "-1 punto , haz click en el botón!", "error");
            setTimeout(newCoder(valSede.val()), 2000);
            punto -= 1;
            $("#puntos").text("Puntos : " + punto);
        }
    }

    $("button").click(function(event) {
        event.preventDefault();
        compareName(name, ValNombre.val().toLowerCase());
    });

});