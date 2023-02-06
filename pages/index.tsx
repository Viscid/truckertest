import React, { useState } from "react";

const Home = () => {
	const [someText, setSomeText] = useState("Hello from the inside of the Planet Earth!");
	const [messages, setMessages] = useState([]);

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");

	const messageListItems = messages.map((message, index) => {
		return <li key={index}>{message}</li>;
	});

	const addToMessages = () => {
		setMessages([...messages, someText]);
		setSomeText("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(username, email);

		const result = await fetch("/api/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username,
				email
			})
		});
	};

	return (
		<div>
			<h1>Home</h1>
			<p>{someText}</p>
			{messages.length > 0 && (<ul> {messageListItems} </ul>)}

			<input type="text" value={someText} onChange={(e) => setSomeText(e.target.value)} onKeyUp={(e) => e.key == "Enter" ? addToMessages() : null } />

			<form>
				<input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
				<input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
};

export default Home;