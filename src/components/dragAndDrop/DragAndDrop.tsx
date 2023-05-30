import { FC, useRef, useState } from 'react';

interface DragAndDropProps {}
const DragAndDrop: FC<DragAndDropProps> = () => {
  console.log(123);

  return <div draggable>hello</div>;
};
export default DragAndDrop;
