let botonEnviar = document.querySelector("button")
let input = document.querySelector("input")
botonEnviar.addEventListener("click", cargarCiudad)


function cargarCiudad() {
    if (!input.value) {
        alert("No ingreso informacion")
        return
    }
    let ciudad = input.value
    input.value = ""
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&units=metric&appid=fdd533266e28101881f610f2b8f1ebe1"
        , function (data) {
            console.log(data)
            
            document.querySelector(".container").style.visibility = "visible"
            document.querySelector("#ciudad").textContent = data.name
            document.querySelector("#temperatura").innerHTML = data.main.temp + "<sup>°C</sup>"
            document.querySelector("#wicon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"



        }).fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error
            console.log( "Request Failed: " + err )
            if (error == "Not Found") {
                alert("No se encontro la ciudad!")
            } else {
                alert(err)
            }
          })

}














