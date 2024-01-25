
import { User } from "@/models/User";
import mongoose from "mongoose"


export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const pass = body.password;
  if (!pass?.length || pass.length < 5) {
    console.log("５文字未満")
    new Error('password must be at least 5 characters');
    return
  }

  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
