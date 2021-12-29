import "../styles/globals.css";
import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div className='bodyWrapper'>
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
