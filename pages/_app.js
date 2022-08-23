import "../styles/globals.css";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
//
import '../styles/Blogs.css'
import '../styles/CardsSlider.css'
import '../styles/Carousel.css'
import '../styles/CommentForm.css'
import '../styles/Footer.css'
import '../styles/Home.css'
import '../styles/Loading.css'
import '../styles/NavBar.css'
import '../styles/Studies.css'
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
