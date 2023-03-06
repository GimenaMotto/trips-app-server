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
    trips: {
      type: [String]
    },
    age: {
      type: String,
      // required: [true, 'La edad es obligatoria'],
    },
    gender: {
      type: String,
      // enum: ['mujer', 'hombre', 'no binario', 'no definido'],
      // default: 'desconocido'
    }
  },

  {
    timestamps: true
  }
);

const User = model("User", userSchema)

module.exports = User
