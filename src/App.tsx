import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

import AppProvider from './hooks/index';

const App: React.FC = () => (
  <>
    {/* tudo oque tiver dentro do contexto tera acesso
        precisa passar um value para o provider
        foi criado um compoente de contexto para poder
        isolar as funcoes dele
     */}

    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);
export default App;
