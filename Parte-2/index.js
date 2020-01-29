let express = require( 'express' );
let bodyParser = require( 'body-parser' );
let mongoose = require( 'mongoose' );
let jsonParser = bodyParser.json();
let { DATABASE_URL, PORT } = require( './config' );

let app = express();

let server;

app.put("/api/bookmarks/:id", jsonParser, (req,res) =>{
	let id = req.params.body;
	let titulo = req.body.titulo;
	let descripcion = req.body.descripcion;
	let url = req.body.url;

	if (req.body.id){
		if (id == req.body.id){
			if (titulo != "" && descripcion != "" && url != ""){
				BooksMarkList.actualizar(titulo,descripcion,url,id)
                .then( (bookmark) =>{
                    return res.status(202).json(bookmark); 
                })
                .catch((error) =>{
                    return res.status(500).json(error);
                })
			}else{	
				res.status(406).send("No hay ningun campo a cambiar");

			}
			
		} else{
			res.status(409).send("no Coinciden los IDs");
		}

	} else {
		res.status(406).send("No se envio el Id en el cuerpo");
	}


});



function runServer( port, databaseUrl ){
	return new Promise( (resolve, reject ) => {
		mongoose.connect( databaseUrl, response => {
			if ( response ){
				return reject( response );
			}
			else{
				server = app.listen(port, () => {
					console.log( "App is running on port " + port );
					resolve();
				})
				.on( 'error', err => {
					mongoose.disconnect();
					return reject(err);
				})
			}
		});
	});
}

function closeServer(){
	return mongoose.disconnect()
		.then( () => {
			return new Promise( (resolve, reject) => {
				console.log( 'Closing the server' );
				server.close( err => {
					if ( err ){
						return reject( err );
					}
					else{
						resolve();
					}
				});
			});
		});
}
runServer( PORT, DATABASE_URL );

module.exports = { 
    app, 
    runServer, 
    closeServer 
}