import React from 'react';

const App = () => {
  return (
    <>
      <a className="ativo" href="http://edsure.com.br" title="Isso é um site">
        Edsure Desenvolvimento
      </a>

      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" />
    </>
  );
};

export default App;
