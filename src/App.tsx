import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    {/* tudo oque tiver dentro do contexto tera acesso
        precisa passar um value para o provider
        foi criado um compoente de contexto para poder
        isolar as funcoes dele
     */}

    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);
export default App;
