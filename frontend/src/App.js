import Views from "./Views" ;
import UserContext from './components/AccountContext';
import "../src/App.css"
import Sidebar from "./components/Navbar/Navbar";

function App() {
  return (
    <UserContext>
      <Sidebar/><Views/>
    </UserContext>
  );
}

export default App;
