
import mongoose from "mongoose";

import User from "./User";

const connectDb = async () => {
	const url = process.env.DATABASE_URL;

	mongoose.set("strictQuery", true);
	return await mongoose.connect(url);
};

connectDb();

export {
	User
};