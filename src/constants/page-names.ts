export enum PageName {
  ABOUT,
  BADMINTON
};

export const PageLabels = new Map<PageName, string>([
  [PageName.ABOUT, 'About'],
  [PageName.BADMINTON, 'Badminton']
]);