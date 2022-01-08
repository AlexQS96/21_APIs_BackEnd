const db = require('../../database/models');

const getURL = (req) => {
    return `${req.protocol}://${req.get('host')}${req.originalUrl}`
}

module.exports = {
    create : (req,res) => {
        const {title, rating, awards, release_date, length, genre_id} = req.body;
        db.Movie.create({
            title,
            rating,
            awards,
            release_date,
            length,
            genre_id
        })
        .then((movie) => {
            res.status(201).json({
                meta : {
                    endpoint: `${getURL(req)}/${movie.id}`,
                    msg: "La Pelicula fue agregada satisfactoriamente"
                },
                data : movie
            })
        })
        .catch(error => {
            console.log("error al crear pelicula : "+error);
        })
    },
    delete : (req,res) => {
        res.send("nose")
    },
}