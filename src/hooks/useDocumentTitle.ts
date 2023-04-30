import { useEffect, useState } from 'react';
import { Title } from '../enums';

function useDocumentTitle(title: Title) {
  const [docTitle, setDocTitle] = useState('');

  useEffect(() => {
    setDocTitle((document.title = `A11Y | ${title}`));
  }, []);

  return docTitle;
}

export default useDocumentTitle;
