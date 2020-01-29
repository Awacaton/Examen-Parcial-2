
function watchForm(){
    //function loadCountry(){
        let url = "https://restcountries.eu/rest/v2/all"; 
        let settings = {
            method: "GET"
        }
    
        fetch(url , settings).then(response  => {
            if (response.ok){
                return response.json();
            }
        }).then (responseJSON => {
            displayResults(responseJSON);
    
        });
   //};
}

function displayResults(responseJSON){

    let submit = $("#submit");
    let buscar  = $("#query").val();
    let resultado = $("#resultado");

    submit.on("click", (event) =>{
        event.preventDefault();
        
        
        console.log(buscar);
        console.log(responseJSON);

        
        if (buscar != null){
            for(let i = 0; i<responseJSON.length; i++ ){
                resultado.append(`<div><h3>Nombre: ${responseJSON[i].name}</h3>
                                        <h3>Capital: ${responseJSON[i].capital}</h3>
                                        <h3>Poblacion: ${responseJSON[i].population}</h3>
                                        <a><img src="${responseJSON[i].translations[4]}" /></a>
                                        <h3>Region: ${responseJSON[i].region}</h3>
                                        <h3>Zonas horarias: ${responseJSON[i].timezones}</h3>
                                        <h3>Paises colindadas: ${responseJSON[i].borders[i]}</h3></div>`);
    
            }

        }else{
            console.log("No hay ciudad");
        }
     

        
    
    });


    



};


function init () {

 watchForm();

}

init();