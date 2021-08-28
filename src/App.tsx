import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';
import Routes from './routes/index';

const App: React.FC = () => (
  <>
    {/* tudo oque tiver dentro do contexto tera acesso
        precisa passar um value para o provider
        foi criado um compoente de contexto para poder
        isolar as funcoes dele
     */}
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  </>
);
export default App;
