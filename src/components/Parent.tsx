/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, useLayoutEffect, useRef } from 'react';
import useWindowSize from '../hooks/useWindowWidth';

interface ParentProps {
  children: ReactNode;
}
const Parent: FC<ParentProps> = ({ children }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [winwidth] = useWindowSize();
  useLayoutEffect(() => {
    parentRef.current?.childNodes.forEach((node: any) =>
      console.log({
        width: node?.clientWidth,
        windowWidth: winwidth,
      })
    );
  }, [winwidth]);

  return (
    <>
      <span>Window size: {winwidth}</span>
      <div className="parent1" ref={parentRef}>
        {children}
      </div>
    </>
  );
};
export default Parent;
