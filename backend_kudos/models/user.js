const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Role = require("../handlers/enums/roles");
const Service = require("../handlers/enums/services");

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    profileImageUrl: {
      type: String
    },
    phone: {
      type: String
    },
    fieldOfStudy: {
      type: String
    },
    institution: {
      type: String
    },
    school: {
      type: String
    },
    flag: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      default: Role.Learner
    },
    hoursWorked: {
      type: Number,
      default: 0
    },
    serviceType: {
      type: String,
      default: Service.None
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
      }
    ],
    availabilities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Availability"
      }
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
      }
    ]
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", async function(next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword, next) {
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    return next(err);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
