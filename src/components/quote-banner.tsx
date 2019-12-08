import { QuoteInfo } from "src/models/quote-info";
import { Message } from 'semantic-ui-react'
import Head from "next/head";
export interface QuoteBannerProps {
  headerMsg?: string;
  data: QuoteInfo;
}

export const QuoteBanner: React.SFC<QuoteBannerProps> = (props: QuoteBannerProps) => {
  return (
    <>
    <Head>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
      />
    </Head>
    <Message>
    <Message.Header>{props.headerMsg}</Message.Header>
      <p>
        {props.data.quote}
      </p>
      <p>
        {props.data.author}
      </p>
      <p>
        {props.data.source}
      </p>
    </Message>
    </>
  );
}