export enum PageName {
  About = 'About',
  Badminton = 'Badminton'
};

export const PageInfos = new Map<PageName, string>([
  [PageName.About, 'about'],
  [PageName.Badminton, 'badminton']
]);