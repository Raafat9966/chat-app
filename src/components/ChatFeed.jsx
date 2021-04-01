import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

function ChatFeed(props) {
	const { chats, activeChat, userName, messages } = props;
	const chat = chats && chats[activeChat];
	const renderMessage = () => {
		const keys = Object.keys(messages);
		return keys.map((key, index) => {
			const message = messages[key];
			const lastMessageKey = index === 0 ? null : keys[keys - 1];
			const isMyMessage = userName === message.sender.username;
			return (
				<div key={`msg_${index}`} style={{ width: "100%" }}>
					<div className="message-block">
						{isMyMessage ? <MyMessage /> : <TheirMessage />}
					</div>
					<div
						className="read-receipts"
						style={{
							marginRight: isMyMessage ? "180px" : "0px",
							marginLeft: isMyMessage ? "0px" : "180px",
						}}
					>
						read-receipts
					</div>
				</div>
			);
		});
	};

	if (!chat) return "Loading...";
	return (
		<div className="chat-feed">
			<div className="chat-title-container">
				<div className="chat-title">{chat.title}</div>
				<div className="chat-subtitle">
					{chat.people.map((person) => `${person.person.username}`)}
				</div>
			</div>
			{renderMessage()}
			<div style={{ height: "100px" }} />
			<div className="message-form-container">
				<MessageForm {...props} chatID={activeChat} />
			</div>
		</div>
	);
}

export default ChatFeed;
