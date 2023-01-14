/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, useLayoutEffect, useRef, useState } from 'react';
import useWindowSize from '../hooks/useWindowWidth';

interface ParentProps {
  children: ReactNode;
}
const Parent: FC<ParentProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [winwidth] = useWindowSize();
  const [width, setWidth] = useState('');

  useLayoutEffect(() => {
    ref.current?.childNodes.forEach((node: any) => {
      setWidth(node?.clientWidth);
    });
  }, [winwidth]);

  return (
    <div data-width={width} ref={ref}>
      {children}
    </div>
  );
};
export default Parent;
