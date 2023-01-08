/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, useLayoutEffect, useRef } from 'react';
import useWindowSize from '../hooks/useWindowWidth';

interface ParentProps {
  children: ReactNode;
}
const Parent: FC<ParentProps> = ({ children }) => {
  const testRef = useRef<HTMLDivElement | null>(null);
  const [winwidth] = useWindowSize();
  useLayoutEffect(() => {
    testRef.current?.childNodes.forEach((node: any) =>
      console.log({ width: node?.clientWidth })
    );
  }, []);

  return (
    <>
      <span>Window size: {winwidth}</span>
      <div ref={testRef}>{children}</div>
    </>
  );
};
export default Parent;
