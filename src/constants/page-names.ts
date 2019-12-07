export enum PageName {
  ABOUT,
  BADMINTON
};

export interface PageNameInfo {
  label: string;
  fileName: string;
}

export const PageInfos = new Map<PageName, PageNameInfo>([
  [PageName.ABOUT, {label: 'About', fileName: 'about'}],
  [PageName.BADMINTON, {label: 'Badminton', fileName: 'badminton'}]
]);