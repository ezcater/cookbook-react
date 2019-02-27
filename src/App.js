import React from 'react';
import RecipeForm from './RecipeForm';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>Cookbook</h1>
        <RecipeForm />
      </div>
    );
  }
}

export default App;
