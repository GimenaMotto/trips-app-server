const { Schema, model } = require("mongoose")

const tripSchema = new Schema(

    {
        title: {
            type: String,
            required: [true, "El nombre es obligatorio"],
            unique: true
        },
        description: {
            type: String,
            required: [true, "La descripción es obligatioria"]
        },
        startDate: {
            type: Date,
            required: [true, "La fecha de comienzo de viaje es obligatoria"],
        },
        endDate: {
            type: Date,
            required: [true, "La fecha de regreso de viaje es obligatoria"],
        },
        images: {
            type: [String],
            default: ['https://res.cloudinary.com/dzq7qbklp/image/upload/v1678716866/movie-gallery/yu5zye8otu0feitubnwg.jpg']
        },
        organizer: {

            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        destination: {
            type: {
                type: String
            },
            coordinates: [Number]
        },
        travellers: [{
            ref: 'User',
            type: Schema.Types.ObjectId,
        }],
        budget: {
            type: String,
            required: [true, "El presupuesto es obligatorio"]
        },
    },

    {
        timestamps: true
    }

)

const Trip = model("Trip", tripSchema)

module.exports = Trip
