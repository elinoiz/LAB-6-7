import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const labWorks = ["Lab 1", "Lab 2", "Lab 3"]; // список лабораторных работ

  return (
    <nav>
      <ul>
        {labWorks.map((lab, index) => (
          <li key={index}>
            <Link to={`/content/${index}`}>{lab}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
