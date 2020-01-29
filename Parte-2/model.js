let mongoose = require( 'mongoose' );
let uuid = require( 'uuid' );

mongoose.Promise = global.Promise;

/* Tu código va aquí */

let Bookmark = mongoose.model("bookmars", bookCollection);



let bookCollection = mongoose.Schema({
    id : {type:String},
    titulo: {type:String},
    descripcion: {type:String},
    url : {type: String}
});

let BookmarkList = {
    actualizar : function(id, titulo, descripcion, url) {
        let act = {
            id
        }
        if(titulo){
            act.titulo = titulo;
        }
        if(descripcion){
            act.contenido = contenido;

        }
        if (url){
            id.url = url; 
        }
        return Bookmark.updateMany({id},act)
        .then(bookmark =>{
            return bookmark;

        })
        .catch(error =>{
            throw Error(error);
        });
    }
}


module.exports = {
    
};