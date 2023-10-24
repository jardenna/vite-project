import { Path, Title } from '../enums';

interface LeftLinks {
  path: Path;
  title: Title;
}

interface ILeft {
  perceivableLinks: LeftLinks[];
  operableLinks: LeftLinks[];
  understandableLinks: LeftLinks[];
}
export const left: ILeft = {
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
const perceivableLinks: LeftLinks[] = [
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
];

export default perceivableLinks;
