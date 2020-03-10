import React from 'react';
import './App.scss';
import PassportForm from './screens/pasportForm/passportForm.jsx'
import Video from './screens/video/video.jsx'
import Theme from './assets/theme/theme.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


let App = ({ ...props }) => {
  return (
      <Theme>
        <div className="App">
          <div >
            {/* <Loader />
            <div className={ClassNames(classes.navbar)}>
              <Navbar />
            </div>
            <div className={ClassNames(classes.sidebar)}>
              <Sidebar />
            </div> */}
            <Router>
              <Switch>
                <Route path="/video" component={Video}></Route>
                <Route path="/passport-form" component={PassportForm}></Route>
              </Switch>
            </Router>
          </div>
        </div>
      </Theme>
  );
}
export default App;


