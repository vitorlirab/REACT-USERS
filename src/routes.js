import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/Usuario';
import UserUpdate from './pages/UsuarioUpdate';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/user/new" exact component={User} />
        <Route path="/user/update/:id" exact component={UserUpdate} />
      </Switch>
    </BrowserRouter>
  );
}
