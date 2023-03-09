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
        },
        images: {
            type: [String],
            // default: ['https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg']
        },
        organizer: {
            ref: 'User',
            type: Schema.Types.ObjectId,
        },
        destination: {
            type: String
            // type: {
            //     type: String
            // },
            // coordinates: [Number]
        },
        travellers: [{
            ref: 'User',
            type: Schema.Types.ObjectId,
        }],
        budget: {
            type: String,
            required: [true, "El presupuesto es obligatorio"]
        },
        // places_to_visit: {
        //     type: [Object]
        // }
    },

    {
        timestamps: true
    }

)

const Trip = model("Trip", tripSchema)

module.exports = Trip
