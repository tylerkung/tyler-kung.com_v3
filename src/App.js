import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/Pages/HomePage";
import AboutPage from "./Components/Pages/AboutPage";
import FootballPage from "./Components/Pages/FootballPage";
import BasketballPage from "./Components/Pages/BasketballPage";

function App() {
   return (
      <div className="App">
         <Router>
            <Header />
            <main>
					<Navigation />
               <Switch>
                  <Route exact path="/" component={HomePage} />
						<Route exact path="/about" component={AboutPage} />
                  <Route exact path="/football" component={FootballPage} />
                  <Route exact path="/basketball" component={BasketballPage} />
               </Switch>
            </main>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
