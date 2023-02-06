import { User } from "../../models";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { name, email } = req.body;

		const user = new User({
			name,
			email,
		});

		const savedUser = await user.save();

		return res.status(201).json(savedUser);
	} else if (req.method === "GET") {
		const users = await User.find();

		return res.status(200).json(users);
	} else {
		return res.status(405).json({ message: "Method not allowed" });
	}
}