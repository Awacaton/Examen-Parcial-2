let mongoose = require( 'mongoose' );
let uuid = require( 'uuid' );

mongoose.Promise = global.Promise;

/* Tu código va aquí */

let bookmark = mongoose.model("bookmars", bookCollection);



let bookCollection = mongoose.Schema({
    id : {type:String},
    titulo: {type:String},
    descripcion: {type:String},
    url : {type: String}
});

let BookmarkList = {
    actualizar : function(titulo, descripcion, url) {
        return Bookmark.find()
        .then(Bookmarck=>{
            return Bookmarck;

        })
        .catch( error => {
            throw Error (error);
        });
    }

}


module.exports = {
    
};