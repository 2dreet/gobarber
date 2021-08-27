import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';
import { Toast } from './style';

import { ToastMessage, useToast } from '../../../hooks/toast';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};

const ToastComponent: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => removeToast(message.id), 3000);

    // quando retorna uma funcao em um useEffect vai ser disparado sempre que o componente morrer
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Toast
      key={message.id}
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {/* como não é obrigatoria preicisa passar um valor defaul || no caso é info */}
      {icons[message.type || 'info']}
      <div>
        <strong> {message.title} </strong>
        {message.description && <p> {message.description} </p>}
      </div>

      {/* para passar parametro em chamada de funcao precisa criar uma arrow function */}
      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Toast>
  );
};

export default ToastComponent;
