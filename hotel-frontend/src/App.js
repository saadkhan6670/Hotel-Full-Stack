import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SearchComponent from './SearchComponent'
import MatchedHotels from './MatchedHotels'

const App = () => (
  
<Router>
  <div> 
  <Link hidden to="/MatchedHotels">Matching Hotels</Link>
    <Route 
         exact 
         path="/" 
         component={SearchComponent}
         />
    <Route  
         path="/MatchedHotels/:ahsan" 
         component={MatchedHotels}
         
         />
  </div>
</Router>
);

export default App;