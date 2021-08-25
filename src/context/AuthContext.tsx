import React, { createContext, useCallback } from 'react';

import Api from '../services/Api';

interface SingInCreadencials {
  email: string;
  password: string;
}

interface AuthContextPayload {
  name: string;
  // aqui tipagem de funcao como é async deve retornar uma promisse
  // outra coisa é a tipagem dos parametros
  singIn(creadencials: SingInCreadencials): Promise<void>;
}

// aqui força criar um Objeto vaziu
// createContext cria o contexto
export const AuthContext = createContext<AuthContextPayload>(
  {} as AuthContextPayload,
);

// aqui criou-se o compoente de contexto para o login para poder isolar as funcoes desse contexto
export const AuthProvider: React.FC = ({ children }) => {
  const singIn = useCallback(async ({ email, password }) => {
    try {
      const response = await Api.post('/sessions', { email, password });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'teste', singIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
