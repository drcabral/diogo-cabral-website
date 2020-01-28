---
title: 'WeBookmark: começando 2020 com uma série de desenvolvimento Android'
description: Primeira série no blog com um desenvolvimento moderno de aplicação Android
date: '2020-01-28 03:46:00'
image: /assets/img/android-jetpack-image.png
category: andr
background: '#9DE0AD'
---
Como falei no post de boas vindas, resolvi por começar o ano mudando o meu foco. Em 2020 estarei me aprofundando cada vez mais em conceitos e novidades do Android, e, para não deixar de compartilhar tudo que vou experimentar (arquiteturas, componentes, testes, perrengues, soluções, etc) usarei esse espaço aqui em forma de alguns posts para trazer esse conteúdo para a comunidade.

Quando eu penso em começar a estudar algo, imediatamente me vem a vontade de pôr a mão na massa, usando, obviamente, leituras como parte auxiliar e complementar ao que eu estou tentando aprender. Além disso, sempre que faço algo que penso "nossa, poderia usar um app para isso", muitas vezes tenho a ideia de desenvolvê-la, mesmo que já exista algo para a finalidade, apenas para que eu treine e tenha algo utilizável no fim dos meus estudos.

Dessa forma começamos o ano com uma série de desenvolvimento Android, na jornada de construção da app carinhosamente (e com pouca criatividade) chamada WeBookmark: uma aplicação que vai ser capaz de buscar e salvar ou cadastrar livros, para que você salve a página que parou a leitura, sabendo assim a porcentagem de seu progresso na leitura. A ideia inicial é bastante simples e nada inovadora, mas parando para pensar um pouco, podemos crescer essa app adicionando features que envolvam diferentes conceitos para estudos, que é exatamente o propósito aqui.

Todo o código que será citado durante todos os posts poderão ser encontrados no [repositório WeBookmark no meu GitHub](https://github.com/drcabral/WeBookmark).

Em um primeiro momento, vamos construir o que vou chamar de "projeto base": uma codebase que pode ser facilmente configurável e extensível a qualquer outra aplicação de qualquer que seja sua finalidade. Esse projeto usará **MVVM** como arquitetura e, atrelado a isso, diversos **componentes do Android Jetpack (Room, LiveData, ViewModel)**, **Coroutines**, além de bibliotecas como **Koin e Retrofit2**. Um projeto não seria confiável sem testes, e por isso vamos ter uma pirâmide de testes inicial com **testes unitários escritos com JUnit4, Robolectric e MockK**.

É importante reforçar que essa série é fruto dos meus estudos me aprofundando na plataforma. Então trarei todos os detalhes que achei importante durante meu aprendizado, todos os conceitos sobre o que estou usando de forma a documentar e também fixar melhor todo o conteúdo. Então, qualquer feedback de ajuste no projeto, melhoria nos posts ou sugestões técnicas, não deixem de me contactar! Vamos conversar sobre!

Então, sem mais delongas, está aberta nossa série sobre desenvolvimento de uma app Android moderna, feita em etapas e robusta! No próximo post sobre ela falaremos sobre o setup inicial e a construção da nossa arquitetura com os componentes e bibliotecas citados.
