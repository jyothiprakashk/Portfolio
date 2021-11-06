import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const DarkThemeData=`function getUserPreference(){
        if(window.localStorage.getItem("theme")){
            return window.localStorage.getItem("theme")
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'dark' 
          : 'light'
        document.body.dataset.theme=getUserPreference()
    }` 
    console.log(DarkThemeData)
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{__html:DarkThemeData}}/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument