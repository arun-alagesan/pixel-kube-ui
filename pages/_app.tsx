import "bootstrap/dist/css/bootstrap.min.css";



import '../styles/globals.css'
import "primereact/resources/themes/md-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import '../styles/prime-react-overwrite.css'


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
