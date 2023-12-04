import Views from "./components/Views" ;
import UserContext from './components/AccountContext';
import ToggleColorMode from "./components/ToggleColorMode";

function App() {
  return (
    <UserContext>
      <ToggleColorMode/>
      <Views />
    </UserContext>
  );
}

export default App;
