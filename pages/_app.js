import "../styles/globals.css";
import "../Components/TopRibbon/TopRibbon.css";
import "../Components/NavBar/NavBar.css";
import "bootstrap/dist/css/bootstrap.css";
import "../Components/Hedder/Hedder.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
