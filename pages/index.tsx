import React, { useState } from "react";

const Home = () => {
	const [someText, setSomeText] = useState("Hello from the inside of the Planet Earth!");
	const [messages, setMessages] = useState([]);

	const messageListItems = messages.map((message, index) => {
		return <li key={index}>{message}</li>;
	});

	const addToMessages = () => {
		setMessages([...messages, someText]);
		setSomeText("");
	};

	return (
		<div>
			<h1>Home</h1>
			<p>{someText}</p>
			{messages.length > 0 && (<ul> {messageListItems} </ul>)}

			<input type="text" value={someText} onChange={(e) => setSomeText(e.target.value)} onKeyUp={(e) => e.key == "Enter" ? addToMessages() : null } />
		</div>
	);
};

export default Home;