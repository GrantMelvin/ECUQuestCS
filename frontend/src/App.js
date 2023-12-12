import Views from "./Views" ;
import UserContext from './components/AccountContext';
import "../src/App.css"

function App() {
  return (
    <UserContext>
      <Views />
    </UserContext>
  );
}

export default App;
