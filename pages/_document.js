import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import theme from "../styles/theme";

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>
          <title>Cleanhaus</title>
          <style>
            {`*,
            *::before,
            *::after {
              box-sizing: border-box;
            }
            body,
            h2,
            p,
            img,
            ul,
            li,
            fieldset {
              margin: 0;
              padding: 0;
            }
            html {
              font-size: 1.125em;
              font-size: calc(1em + 0.25vw);
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
              color: ${theme.palette.dark};
            }`}
          </style>
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
