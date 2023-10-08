import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar";
import { Banner } from './components/Banner';



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  

  return (
    <Router>
     
      <Switch>
        <Route  path="/">
          <NavBar />
          <Banner />
        </Route>
      </Switch>
      
       
    </Router>
  );
};

export default App;
