import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "./contexts/ContactsProvider";
import { ConversationsProvider } from "./contexts/ConversationsProvider";

function App() {
	const [id, setId] = useLocalStorage("id");

	const dashboard = (
		<ContactsProvider>
			<ConversationsProvider id ={id}>
				<Dashboard id={id} />
			</ConversationsProvider>
		</ContactsProvider>
	);

	return <div>{id ? dashboard : <Login onSubmitId={setId} />}</div>;
}

export default App;
