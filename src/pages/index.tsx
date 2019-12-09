// This is the Link API
// will prefetch page and navigation will happen without page refresh
// if use a tag, it will request server for next page and then refresh page
import * as React from 'react';
import { NextPage } from 'next';
import Layout from 'src/components/layout';
// https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
// https://fettblog.eu/typescript-react/hooks/#usestate
// https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page

interface IndexProps {

}

const Index: NextPage<IndexProps> = (props) => {
  return (
    <>
      <Layout />
    </>
  );
};
// Make sure your React Component is the default export.
export default Index;