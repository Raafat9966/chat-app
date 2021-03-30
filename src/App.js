import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed.jsx";

function App() {
	return (
		<ChatEngine
			height="100vh"
			userName="faust"
			userSecret="123456"
			projectID="e95c57f0-a63c-43f4-aa46-8d9f75ab14de"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}
export default App;
