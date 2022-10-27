import React from 'react';
import './App.css';
// import './styles/timeline.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
//import Dashboard from './pages/Dashboard.js';
//import About from './pages/About';
import About from './pages/Analytics.js';
import Comment from './pages/Comment.js';
//import Product from './pages/Product.js';
//import ProductList from './pages/ProductList.js';
import TodoList from './pages/TodoList';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
         
         
          
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<About/>} />
          
          <Route path="/TODOLIST" element={<TodoList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;