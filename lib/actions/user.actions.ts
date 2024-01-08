"use server";

import { connectDB } from "../moongose";
import User from "../models/user.model";
import { revalidatePath } from "next/cache";
import { ParamsUpdateUser } from "../definitions";

export async function updateUser({
  userId,
  username,
  name,
  bio,
  image,
  path,
}: ParamsUpdateUser): Promise<void> {
  connectDB();

  try {
    await User.findOneAndUpdate(
      { id: userId },
      { username: username.toString(), name, bio, image, onboarded: true },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function fetchUser(userId: string) {
  connectDB();

  try {
    return await User.findOne({ id: userId });/* .populate({
      path: "communities",
      model: Community,
    }) */
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`)
  }
}
