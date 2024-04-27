import React from 'react';
import Button from './button';
import { useTheme } from './themeContext';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const Header = () => {
  const { toggleTheme, selectContent } = useTheme();
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate('/registration');
  };

  const handleMainClick = () => {
    navigate('/');
  };

  const handleConsoleClick = () => {
    navigate('/console');
  };

  return (
    <header>
      <Navbar expand="md">
        <Navbar.Brand href="/">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button onClick={handleMainClick} label="Главная" />
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Menu
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Lab1</Dropdown.Item>
                <Dropdown.Item>Lab2</Dropdown.Item>
                <Dropdown.Item>Lab3</Dropdown.Item>
                <Dropdown.Item>Lab4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button onClick={toggleTheme} label="Смена темы" />
          </Nav>
          {/* Показываем кнопки Регистрация и Консоль только на больших экранах */}
          <Nav className="ml-auto">
            <Button onClick={handleRegistrationClick} label="Регистрация" />
            <Button onClick={handleConsoleClick} label="Консоль" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;