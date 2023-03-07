const { Schema, model } = require("mongoose");


const userSchema = new Schema(

  {
    username: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'El email es obligatorio'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'El password es obligatorio']
    },
    avatar: {
      type: String,
      default: 'https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg'
    },
    description: {
      type: String,
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    interests: {
      type: [String],
    },
    trips: [{
      ref: 'Trip',
      type: Schema.Types.ObjectId,
    }],

    age: {
      type: String,
      // required: [true, 'La edad es obligatoria'],
      //ver si ponemos numero y como en el form
    },
    gender: {
      type: String,
      // enum: ['mujer', 'hombre', 'no binario', 'no definido'],
      // default: 'no definido'
    }
  },

  {
    timestamps: true
  }
);

const User = model("User", userSchema)

module.exports = User
