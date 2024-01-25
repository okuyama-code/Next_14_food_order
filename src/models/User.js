import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
  name: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String},
  image: {type: String},
}, {timestamps: true});

// モデルを作成し、既に存在していればそれを使用する
export const User = models?.User || model('User', UserSchema);
