// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import Menu from './menu';
import Content from './content';
import { useTheme } from './themeContext';
import './theme.css';
import Registration from './registration';
import Console from './console';

const App = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={`app-container ${theme}`}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route path="/content/:id" element={<Content />} />
          <Route path="/console" element={<Console />} />
          <Route path="/" element={<Outlet />}>
            <Route path="registration" element={<Registration />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
