import { FC, useEffect, useState } from 'react';
import { TypesEnum } from '../../enums';

import './toast.scss';

interface ToastProps {
  id: number;
  title: string;
  description: string;
  type?: TypesEnum;
}

interface ToastListProps {
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

  const deleteToast = (id: number) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    console.log(id, toastList);

    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime + extendAutoDeleteTime);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, autoDeleteTime, list]);

  return (
    <section className={`notification-container ${position} `}>
      {list.map((toast) => (
        <div
          role="alert"
          key={toast.id}
          className={`notification toast  ${toast.type || 'info'}`}
        >
          <button
            type="button"
            onClick={() => deleteToast(toast.id)}
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
  );
};
export default Toast;
