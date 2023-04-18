import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default function Disciplinas() {
    return(
        <div>
            <h1>Disciplinas oferecidas:</h1>
            <Link to='/'>Retornar a pagina Inicial</Link>
            <article>
                <h2 class="titulo-article">Frameworks Full Stack - Desenvolvimento Web</h2>
                <p>Conhecer os conceitos de desenvolvimento de sistemas dinâmicos
					para a Internet, aplicando as mais recentes tecnologias e métodos
					para esta área.</p>
                <h3>Habilidades necessárias</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Python e Flask</li>
                </ul>
            </article>
            <article>
                <h2 class="titulo-article">Programação Orientada a Objetos</h2>
                <p>Desenvolver lógica de raciocínio para organizar os elementos
					necessários para o desenvolvimento de programas orientados a
					objetos..</p>
                <h3>Habilidades necessárias</h3>
                <ul>
                    <li>Dicionários</li>
					<li>Tratamento de exceções</li>
					<li>Testes unitários</li>
					<li>Contrução de classes, atributos e métodos</li>
					<li>Pilares da POO</li>
                </ul>
            </article>
            <footer>
                Cursinho Web - Todos os direitos reservados 
                Contato: <a href="mailto:email@provedor.com">email@provedor.com</a>
	        </footer> 
        </div>
        

    );

}