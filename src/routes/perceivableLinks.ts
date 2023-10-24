import { Path, Title } from '../enums';

interface ILeftLinks {
  path: Path;
  title: Title;
}

interface IMenuRoutes {
  perceivableLinks: ILeftLinks[];
  operableLinks: ILeftLinks[];
  understandableLinks: ILeftLinks[];
}
const leftMenuRoutes: IMenuRoutes = {
  perceivableLinks: [
    {
      path: Path.Alt,
      title: Title.AlternativeText,
    },
    {
      path: Path.TimebasedMedia,
      title: Title.TimebasedMedia,
    },
    {
      path: Path.Adaptable,
      title: Title.Adaptable,
    },
    {
      path: Path.Distinguishable,
      title: Title.Distinguishable,
    },
  ],
  operableLinks: [
    {
      path: Path.Keyboard,
      title: Title.Keyboard,
    },
    {
      path: Path.EnoughTime,
      title: Title.EnoughTime,
    },
    {
      path: Path.Seizures,
      title: Title.Seizures,
    },
    {
      path: Path.Navigable,
      title: Title.Navigable,
    },
  ],
  understandableLinks: [
    {
      path: Path.Readable,
      title: Title.Readable,
    },
    {
      path: Path.Predictable,
      title: Title.Predictable,
    },
    {
      path: Path.InputAssistance,
      title: Title.InputAssistance,
    },
  ],
};

export default leftMenuRoutes;
