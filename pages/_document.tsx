import Document, { DocumentContext, Html, Main, Head, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialsProps = await Document.getInitialProps(ctx);
    return initialsProps;
  }

  render(){
    return (
      <Html>
        <Head>
          
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}

export default MyDocument;