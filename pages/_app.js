import "../styles/globals.css";
import { Header } from "../components/Header/header";
import {Footer} from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <div className="bodyWrapper">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
