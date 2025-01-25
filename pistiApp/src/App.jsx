import { useState } from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import HomePage from './views/HomePage';
import GamePage from './views/GamePage';
import { Provider } from "./components/ui/provider";

function App() {

  return (
    <Provider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game' element={<GamePage />} />
      </Routes>
    </Provider>
  )
}

export default App
