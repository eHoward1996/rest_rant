const db = require('../models')

// async function seed() {
//     let place = await db.Place.findOne({ name: 'H-Thai-ML' })
//     let comment = await db.Comment.create({
//         author: 'Famished Fran',
//         rant: false,
//         stars: 5.0,
//         content: 'Wow, simply amazing! Highly recommended!'
//     })

//     place.comments.push(comment.id)
//     await place.save()
//     process.exit()
// }

function seed() {
    db.place_schema.findOne({ name: 'H-Thai-ML' })
        .then((place) => {
            db.comment_schema.create({
                author: 'Famished Fran',
                rant: false,
                stars: 5.0,
                content: 'Wow, simply amazing! Highly recommended!' 
            })
                .then((comment) => {
                    place.comments.push(comment)
                    place.save()
                        .then(() => { process.exit() })
                })
        })
        .catch((err) => { console.log(err) })
}

seed()
