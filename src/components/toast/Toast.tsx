import { FC, useEffect, useState } from 'react';

interface ToastProps {
  id: number;
  title: string;
  description: string;
  type?: string;
}

interface ToastListProps {
  toastList: ToastProps[];
  position: string;
}

const Toast: FC<ToastListProps> = ({ toastList, position }) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  return (
    <div className={`notification-container ${position} `}>
      {list.map((toast) => (
        <div
          key={toast.id}
          className={`notification toast ${position} ${toast.type || 'info'}`}
        >
          <button type="button">X</button>

          <div>
            <p className="notification-title">{toast.title}</p>
            <p className="notification-message">{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Toast;
