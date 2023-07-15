import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";


// デフォルトのDocumentをMyDocumentで上書き
export default class MyDocument extends Document {
  // サーバーサイドでの初期レンダリング時に実行されます。このメソッド内で、スタイルを収集するための ServerStyleSheet を作成し、 renderPage 関数をカスタマイズします。
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () => originalRenderPage({enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)})
  
      // 初期値を流用
      const initialProps = await Document.getInitialProps(ctx)

      // initialPropsに加えて、styleを返す
      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          sheet.getStyleElement()
        ]
      }
    } finally {
      sheet.seal()
    }
  }
}
