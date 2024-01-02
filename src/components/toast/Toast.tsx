import { FC, useEffect, useState } from 'react';
import { TypesEnum } from '../../enums';

import './toast.scss';
import Portal from '../Portal';

export interface ToastProps {
  id: number;
  title: string;
  description: string;
  type?: TypesEnum;
}

export interface ToastListProps {
  toastList: ToastProps[];
  position?: string;
  autoDelete?: boolean;
  autoDeleteTime?: number;
  extendAutoDeleteTime?: number;
}

const Toast: FC<ToastListProps> = ({
  toastList,
  position = 'bottom-right',
  autoDelete,
  autoDeleteTime = 2000,
  extendAutoDeleteTime = 0,
}) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  const handleDeleteToast = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        handleDeleteToast(list[0].id);
      }
    }, autoDeleteTime + extendAutoDeleteTime);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, autoDeleteTime, list]);

  return (
    <Portal wrapperId="toast-portal">
      <section className={`notification-container ${position} `}>
        {list.map((toast) => (
          <div
            role="alert"
            key={toast.id}
            className={`notification toast  ${toast.type || 'info'}`}
          >
            <button
              type="button"
              onClick={() => handleDeleteToast(toast.id)}
              aria-label="Close notification"
            >
              X
            </button>

            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </section>
    </Portal>
  );
};
export default Toast;
