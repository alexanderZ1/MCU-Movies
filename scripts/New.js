function getMovies() {

    $.ajax({
        type: "Get",
        url: "https://wargameservicestemplate.azurewebsites.net/api/Players/movies/marvel",
        // data: "json",
        dataType: "json",
        success: function(response) {
            // alert(response[0].movieName)

            const table = document.getElementById("movietable")

            for (let index = 0; index < response.length + 2; index++) {
                let row = table.insertRow();
                let name = row.insertCell(0);
                name.innerHTML = response[index].movieName


            }
        }
    });
}

document.querySelector('.marvel').on('click', function() {
    document.querySelector('.marvel').hide()
})