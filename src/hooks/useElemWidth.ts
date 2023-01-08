/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, useLayoutEffect, useState } from 'react';

function useElemWidth(parentRef: any) {
  const [elemWidth, setElemWidth] = useState<any>(0);
  useLayoutEffect(() => {
    parentRef.current?.childNodes.forEach((node: any) =>
      setElemWidth(node?.clientWidth)
    );
  }, []);
  return elemWidth;
}

export default useElemWidth;
