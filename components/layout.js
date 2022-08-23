import NavBar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta
          name="description"
          content="خطوات عملية حول كيفية بيع المنتجات عبر الانترنت"
        />
        <meta
          name="keywords"
          content="تجارة الكترونيه, بيع منتجات, مستقبل التجارة"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content=" مدونه | Blog " />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="./images/highlight.jpg" />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
