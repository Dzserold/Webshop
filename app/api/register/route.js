import { connectToDb } from "@utils/db";
import User from "@model/user";
import bcrypt from "bcrypt";

export async function POST(req) {
  await connectToDb();

  if (req.method === "POST") {
    try {
      const data = await req.json();
      const { username, email, password } = data;
      const hashedPassword = await bcrypt.hash(password, 10);

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return new Response("User already exists", {
          status: 400,
        });
      }

      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      return new Response("Successfull register", { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response("Error", { status: 400 });
    }
  } else {
    return new Response("Method not allowed", { status: 500 });
  }
}
