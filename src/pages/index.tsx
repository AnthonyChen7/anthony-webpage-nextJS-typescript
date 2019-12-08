// This is the Link API
// will prefetch page and navigation will happen without page refresh
// if use a tag, it will request server for next page and then refresh page
import * as React from 'react';
import { Header } from "src/components/header";
import { PageInfos, PageName } from 'src/models/page-names';
import Router from 'next/router';
import { NextPage, NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import { QuoteInfo } from 'src/models/quote-info';
import { QuoteBanner } from 'src/components/quote-banner';
// https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
// https://fettblog.eu/typescript-react/hooks/#usestate
// https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page

interface IndexProps {
  quoteInfo: QuoteInfo;
}

const Index: NextPage<IndexProps> = (props) => {
  return (
    <>
    <QuoteBanner
      headerMsg='Quote Of the Day'
      data={props.quoteInfo}/>
    <Header
      labels={Array.from(PageInfos.keys())}
      labelClicked={(label) => Router.push(`/${PageInfos.get(label as PageName)}`)}/>
    </>
  );
};

Index.getInitialProps = async (ctx: NextPageContext) => {
  // https://theysaidso.com/api/
  const response = await fetch('http://quotes.rest/qod.json');
  const json = await response.json();
  return { quoteInfo: parseQuoteJSON(json) };
}

function parseQuoteJSON(json: any): QuoteInfo {
  const jsonQuote = json.contents.quotes[0];
  return {
    quote: jsonQuote.quote,
    author: jsonQuote.author,
    source: jsonQuote.permalink
  };
}
// Make sure your React Component is the default export.
export default Index;