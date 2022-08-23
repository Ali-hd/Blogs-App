import "../styles/globals.css";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
//
import '../styles/Carousel.css'
import '../styles/Loading.css'
//
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
