import {BrowserRouter as Router, Route, Link} from  "react-router-dom";
import React from 'react';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import ServicesDetail from './Components/ServicesDetail'
import './App.css';

function App() {
  return (
    
       <>
    <Router>
    <div className="nav">
      <Link to = "/"><button>Home</button> </Link>
      <Link to = "/about"><button>About</button></Link>
      <Link to = "/contact"><button>Contact</button> </Link>
      <Link to = "/services"><button>Services</button> </Link>
    </div>

    <Route path ="/" exact component ={Home}/>
    <Route path ="/about" component ={About}/>
    <Route path ="/contact"  component ={Contact}/>
    <Route path ="/services" component ={Services}/> 
    <Route path ="/services/ :id" component ={ServicesDetail}/>

    </Router>
    </>
  );
}

export default App;
