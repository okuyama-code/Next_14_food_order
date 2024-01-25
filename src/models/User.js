import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
  // name: {type: String},
  email: {type: String, required: true, unique: true},
  password: {
    type: String,
    required: true,
    validate: pass => {
      if (!pass?.length || pass.length < 5) {
        new Error('パスワードが5文字未満です')
        return false
      }
    }
  },
  // image: {type: String},
}, {timestamps: true});

// モデルを作成し、既に存在していればそれを使用する
export const User = models?.User || model('User', UserSchema);
