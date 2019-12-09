import { QuoteInfo } from "src/models/quote-info";
import { Message } from 'semantic-ui-react'
import Head from "next/head";
export interface QuoteBannerProps {
  headerMsg?: string;
  data?: QuoteInfo;
}

export const QuoteBanner: React.SFC<QuoteBannerProps> = (props: QuoteBannerProps) => {
  return (
    <>
    <Message>
    <Message.Header>{props.headerMsg}</Message.Header>
      <p>
        {props.data && props.data.quote}
      </p>
      <p>
        {props.data && props.data.author}
      </p>
      <p>
        {props.data && props.data.source}
      </p>
    </Message>
    </>
  );
}