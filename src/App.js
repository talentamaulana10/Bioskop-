import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Home/Home';
import Movie from './Movie/Movie';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/movie/:movieId" component={Movie} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
