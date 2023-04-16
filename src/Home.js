import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Bem-vindo ao Cursinho Web!</h1>
      <p>Nossa empresa oferece cursos de aprofundamento em Programação.</p>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/disciplinas">Disciplinas</Link>
          </li>
        </ul>
      </nav>
  

    </div>
  );
}

export default Home;