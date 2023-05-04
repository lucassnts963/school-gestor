import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '../components/Header'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='bg-zinc-900'>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}