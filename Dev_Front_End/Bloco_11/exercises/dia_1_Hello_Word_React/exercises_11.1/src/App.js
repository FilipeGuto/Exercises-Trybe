import React from 'react';
import './App.css';

const myTasks = ['Acordar', 'Escovar os dentes', 'Fazer Ingles', 'Estudar programação', 'Almoçar', 'iniciar estudos da Trybe'];


const Task = (value) => {
  return (
    <li key = {value} > {value} </li>
    );
  }

  class App extends React.Component {
    render() {
      return (
        <ul>{ myTasks.map(task => Task(task)) }</ul>
      )
    }
  }

export default App;
