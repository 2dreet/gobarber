// ValidationError é a tipagem dos erros do yup
import { ValidationError } from 'yup';

interface Erros {
  // aqui define que pode ter atributos dinamicos sendo que o nome
  // precisa ser uma string e o conteudo tbm
  [key: string]: string;
}

export default function getValidationErros(error: ValidationError): Erros {
  const validationErros: Erros = {};

  error.inner.forEach((err) => {
    if (err.path) {
      // aqui pega todos os erros e monta um objeto para ser passado para o Form
      validationErros[err.path] = err.message;
    }
  });

  return validationErros;
}
