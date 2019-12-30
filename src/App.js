import React from 'react';
import './App.css';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";

import HomePage from "./Components/Pages/HomePage";
import AboutPage from "./Components/Pages/AboutPage";
import FootballPage from "./Components/Pages/FootballPage";
import BasketballPage from "./Components/Pages/BasketballPage";

function App() {
   return (
      <div className="App">
         <Router>
            <header className="sleeper-header">
               Header
            </header>
            <main>
					<div>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/football">Football</Link>
							</li>
							<li>
								<Link to="/basketball">Basketball</Link>
							</li>
						</ul>
					</div>
               <Switch>
                  <Route exact path="/" component={HomePage} />
						<Route exact path="/about" component={AboutPage} />
                  <Route exact path="/football" component={FootballPage} />
                  <Route exact path="/basketball" component={BasketballPage} />
               </Switch>
            </main>
            <footer className="sleeper-footer">
               Footer
            </footer>
         </Router>
      </div>
   );
}

export default App;
