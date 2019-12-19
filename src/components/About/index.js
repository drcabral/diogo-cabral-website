import React from "react"

import * as S from "./styled"

const About = () => (
  <S.AboutContent>
    <h1>Sobre mim</h1>
    <p>
      Me chamo Diogo Cabral, sou nascido e criado em Recife/PE, porém morando
      atualmente em Belo Horizonte/MG. Tenho 5 anos de experiência profissional
      e hoje em dia trabalho como consultor de desenvolvimento na{" "}
      <a
        href="https://www.thoughtworks.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ThoughtWorks
      </a>
      , focado em desenvolvimento Android.
    </p>
    <p>
      Tenho formação em Ciência da computação pela UFPE (2011 - 2015), e durante
      a graduação participei da empresa júnior{" "}
      <a href="https://citi.org.br/" target="_blank" rel="noopener noreferrer">
        CITi
      </a>{" "}
      (como membro da equipe de gestão de pessoas) e também fui monitor por dois
      anos, o que me ajudou a construir habilidades de relacionamento com
      pessoas (que vim evoluindo em cada nova experiência profissional).
    </p>
    <p>
      No meu tempo livre, gosto de jogar, ouvir música, sair para conversar além
      de ver filmes e séries (mesmo que com menor frequência).
    </p>
    <h2>Algumas habilidades</h2>
    <ul>
      <li>Android</li>
      <li>Kotlin</li>
      <li>Java</li>
      <li>Testes</li>
      <li>TDD</li>
      <li>Código e arquitetura limpas</li>
      <li>Práticas ágeis</li>
      <li>Integração contínua</li>
      <li>Git</li>
      <li>O que não sei costumo aprender rápido</li>
    </ul>
    <h2>Experiências profissionais</h2>
    <ul>
      <li>
        <a
          href="http://www.l2tecnologia.com.br/EN/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          L2 Tecnologia
        </a>
        : desenvolvedor de software atuando sobre a plataforma web (usando Java,
        JSP e Hibernate) e a plataforma Android (usando Java).
      </li>
      <li>
        <a
          href="http://www.mv.com.br/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          MV Sistemas
        </a>
        : desenvolvedor de integrações dos sistemas da companhia, por várias
        vezes lidando diretamente com clientes para implantação de novas
        soluções que desenvolvi, além da sua manutenção.
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/kahuso-inc-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kahuso
        </a>
        : desenvolvimento web da plataforma da empresa, utilizando React, Flux,
        Redux além de Ruby para a construção do serviço, tudo isso com testes
        atrelados ao desenvolvimento.
      </li>
      <li>
        <a
          href="https://designculture.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design Culture
        </a>
        : fui professor por um tempo! Dei aulas de desenvolvimento web básico,
        passando por HTML, CSS e Javascript para alunas(os) de design da
        empresa.
      </li>
      <li>
        <a
          href="https://www.thoughtworks.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ThoughtWorks
        </a>
        : como consultor de desenvolvimento, trabalho diretamente com clientes
        da empresa, impulsionando suas práticas ágeis através de tomadas de
        decisões, planejamentos, cerimônias, dentre outros. Tudo isso atrelado
        no meu cotidiano com o desenvolvimento mobile, focado em Android
        (utilizando Kotlin) mas também passando algumas vezes pelo iOS
        (utilizando Swift 4), usando TDD, tendo uma pirâmide de testes rica e
        aplicando um processo de qualidade que garante a robustez e confiança no
        produto entregue.
      </li>
    </ul>
  </S.AboutContent>
)

export default About
