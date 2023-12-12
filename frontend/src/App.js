import Views from "./Views" ;
import UserContext from './components/AccountContext';
import ToggleColorMode from "./components/ToggleColorMode";
import "../src/App.css"

function App() {
  return (
    <UserContext>
      <ToggleColorMode/>
      <Views />
    </UserContext>
  );
}

export default App;
