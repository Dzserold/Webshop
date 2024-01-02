import { connectToDb } from "@utils/db";

export async function POST(req) {
  connectToDb();
  try {
    const data = await req.json();
  } catch (error) {}
}
