import Link from "next/link";
import CommentForm from "../components/commentForm";
import Head from 'next/head';
import { blogs } from "../utils/data";

const BlogsPage = () => {
  return (
    <div className="blogpage-wrap">
      <Head>
        <title>مدونه | التقارير و الدراسات</title>
        <meta property="og:title" content=" التقارير والدراسات" />
      </Head>
      <div className="hero-wrap">
        <section className="hero-section">
          <div className="path-container">
            <img src="./icons/home.svg" alt="home icon" />
            <Link href="/">الرئيسية</Link>
            <span>/ المقالات</span>
          </div>
          <h1>{blogs.blogTitle}</h1>
          <div className="blog-author">
            <img src={blogs.AuthorProfileImg} alt="profile" />
            <span>بواسطة / {blogs.blogAuthor}</span>
            <span>|</span>
            <span>منذ: {blogs.blogDate}</span>
          </div>
        </section>
      </div>
      <div className="blog-container">
        <div className="blog-image">
          <img src={blogs.blogImage} alt="blog" />
        </div>
        <div className="incr-controll"></div>
        <p className="blog-read" dangerouslySetInnerHTML={{ __html: blogs.blogDesc }}>
        </p>
        {blogs.blogContents.map(ele => {
          return (
            <div key={ele.id} className="blog-content">
              <div className="blog-content-hdr">
                <h2>{ele.title}</h2>
                <div></div>
              </div>
              {ele.image ? <div className="blog-image-lg">
                <img src="./images/image 12.png" alt="laptop" />
              </div> : null}
              <p className="blog-read" dangerouslySetInnerHTML={{ __html: ele.content }}>
              </p>
            </div>
          )
        })}
        <div className="blog-socials-wrap">
          <div className="blog-divider"></div>
          <div className="blog-socials">
            <div className="blog-tags">
              {blogs.blogTags.map(tag=>{
                return(<div key={tag} className="tag">
                <span>{tag}#</span>
              </div>)
              })}
            </div>
            <div className="blog-socialmedia">
              <div>
                <img src="./icons/facebook_bold.svg" alt="facebook" />
              </div>
              <div>
                <img src="./icons/twitter_bold.svg" alt="twitter" />
              </div>
              <div>
                <img src="./icons/linkedin_bold.svg" alt="linkedin" />
              </div>
            </div>
          </div>
          <div className="blog-divider"></div>
        </div>
        <CommentForm />
      </div>
    </div>
  );
};

export default BlogsPage;
