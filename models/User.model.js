const { Schema, model } = require("mongoose")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new Schema(

  {
    username: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio']
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
      required: [true, 'El password es obligatorio'],
      minlength: [2, 'La contraseña tiene que tener mínimo 2 carácteres']
    },
    avatar: {
      type: String,
      default: 'https://res.cloudinary.com/dzq7qbklp/image/upload/v1678437959/movie-gallery/j7h3w4bggpbvugpeqblc.png'
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
    },
    gender: {
      type: String,
    }
  },

  {
    timestamps: true
  }
)

userSchema.pre('save', function (next) {

  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword

  if (!this.avatar) {
    this.avatar = 'https://res.cloudinary.com/dzq7qbklp/image/upload/v1678437959/movie-gallery/j7h3w4bggpbvugpeqblc.png'
  }

  next()
})

userSchema.methods.signToken = function () {

  const { _id, username, email, role, avatar } = this
  const payload = { _id, username, email, role, avatar }

  const authToken = jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: "6h" }
  )

  return authToken
}

userSchema.methods.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
}


const User = model("User", userSchema)

module.exports = User
