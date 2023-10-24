import { ReactNode } from 'react';
import Operable from '../pages/Operable';
import Perceivable from '../pages/percievable/Perceivable';
import Robust from '../pages/Robust';
import Understandable from '../pages/Understandable';
import { Path, Title } from '../enums';
import Home from '../pages/Home';
import AlternativeText from '../pages/percievable/AlternativeText';
import Media from '../pages/percievable/Media';
import Adaptable from '../pages/percievable/Adaptable';
import Distinguishable from '../pages/percievable/Distinguishable';

interface IRoutes {
  path: string;
  element: ReactNode;
  index?: boolean;
  linkName?: string;
  headerLink?: boolean;
}

const routes: IRoutes[] = [
  {
    path: '/',
    element: <Home />,
    index: true,
  },
  {
    path: Path.Perceivable,
    element: <Perceivable />,
    linkName: Title.Perceivable,
    headerLink: true,
  },
  {
    path: `${Path.Perceivable}/${Path.Alt}`,
    element: <AlternativeText />,
    linkName: Title.AlternativeText,
  },
  {
    path: `${Path.Perceivable}/${Path.TimebasedMedia}`,
    element: <Media />,
    linkName: Title.TimebasedMedia,
  },
  {
    path: `${Path.Perceivable}/${Path.Adaptable}`,
    element: <Adaptable />,
    linkName: Title.Adaptable,
  },
  {
    path: `${Path.Perceivable}/${Path.Distinguishable}`,
    element: <Distinguishable />,
    linkName: Title.Distinguishable,
  },
  {
    path: Path.Operable,
    element: <Operable />,
    linkName: Title.Operable,
    headerLink: true,
  },
  {
    path: Path.Understandable,
    element: <Understandable />,
    linkName: Title.Understandable,
    headerLink: true,
  },
  {
    path: Path.Robust,
    element: <Robust />,
    linkName: Title.Robust,
    headerLink: true,
  },
];

export default routes;
