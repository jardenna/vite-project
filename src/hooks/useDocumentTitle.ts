import { useEffect, useState } from 'react';
import { Title } from '../enums';

function useDocumentTitle(title: Title) {
  const [docTitle, setDocTitle] = useState('');

  useEffect(() => {
    setDocTitle((document.title = `A11Y | ${title}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return docTitle;
}

export default useDocumentTitle;
