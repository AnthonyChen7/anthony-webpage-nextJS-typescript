// This is the Link API
// will prefetch page and navigation will happen without page refresh
// if use a tag, it will request server for next page and then refresh page
import * as React from 'react';
import { Header } from "src/components/Header";
import { PageInfos, PageName } from 'src/models/page-names';
import Router from 'next/router';
// https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
// https://fettblog.eu/typescript-react/hooks/#usestate
// https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page
const Index = () => {
  return (
    <>
    <Header
      labels={Array.from(PageInfos.keys())}
      selectedLabel={PageName.About}
      labelClicked={(label) => Router.push(`/${PageInfos.get(label as PageName)}`)}/>
    </>
  );
};
// Make sure your React Component is the default export.
export default Index;