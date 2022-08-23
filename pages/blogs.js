import Link from "next/link";
import CommentForm from "../components/commentForm";
import Head from 'next/head';
import { blogs } from "../utils/data";

const BlogsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>مدونه | التقارير و الدراسات</title>
        <meta property="og:title" content=" التقارير والدراسات" />
      </Head>
      <div className="bg-hero-pattern w-full flex flex-col items-center relative h-[336px]">
        <section style={{'direction': 'rtl'}} className="hero-section flex flex-col items-start justify-center gap-[10px] right-[107px] max-w-[1600px] w-full absolute mwmd2:static mwmd2:mr-[50px] mwmd2:gap-4 mwmd2:h-[260px]">
          <div className="flex items-center gap-[6px] h-[21px] font-normal text-sm leading-[21px]">
            <img src="./icons/home.svg" alt="home icon" />
            <Link href="/"><a className="text-brand">الرئيسية</a></Link>
            <span className="text-[#f7f7f7]">/ المقالات</span>
          </div>
          <h1 className="m-0 font-bold text-[50px] leading-[74px] flex items-center text-right text-white max-w-[767px] mwmd2:font-semibold mwmd2:text-[40px] mwmd2:leading-[60px] mwsm:font-normal mwsm:text-[30px] mwsm:leading-[36px] mwsm:max-w-[500px] mwsm:pl-[15px]">{blogs.blogTitle}</h1>
          <div className="gap-[10px] h-[35px] text-sm leading-[21px] flex items-center text-white">
            <img src={blogs.AuthorProfileImg} alt="profile" />
            <span>بواسطة / {blogs.blogAuthor}</span>
            <span>|</span>
            <span>منذ: {blogs.blogDate}</span>
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center py-[60px] gap-[30px] max-w-[1050px] w-full bg-white rounded-[4px] mx-[10px] mwlg:py-[36.5px] mwsm:py-[36.5px]">
        <div className="w-full max-w-[1050px] h-[428px] rounded mwmd2:h-auto">
          <img className="w-full h-full" src={blogs.blogImage} alt="blog" />
        </div>
        <div className="incr-controll"></div>
        <p className="m-0 font-normal text-base text-right text-[#606564] mwlg:px-[15px]" dangerouslySetInnerHTML={{ __html: blogs.blogDesc }}>
        </p>
        {blogs.blogContents.map(ele => {
          return (
            <div key={ele.id} className="flex flex-col items-end p-0 gap-5">
              <div className="flex flex-row items-center p-0 gap-2 mwlg:px-[15px]">
                <h2 className="m-0 font-normal text-2xl leading-[30px] text-right text-black">{ele.title}</h2>
                <div className="h-[21px] w-[1px] bg-brand border-brand border border-solid"></div>
              </div>
              {ele.image ? <div className="w-full max-w-[1050px] h-[534px] rounded mwmd2:h-auto">
                <img className="w-full h-full" src="./images/image 12.jpg" alt="laptop" />
              </div> : null}
              <p className="m-0 font-normal text-base text-right text-[#606564] mwlg:px-[15px]" dangerouslySetInnerHTML={{ __html: ele.content }}>
              </p>
            </div>
          )
        })}
        <div className="flex flex-col items-center gap-5 w-full max-w-[1050px] h-[80px] mwsm:h-40">
          <div className="max-w-[1050px] w-full h-0 border border-solid border-[#eeeeee]"></div>
          <div className="flex flex-row-reverse justify-between p-0 gap-3 max-w-[1050px] w-full h-10 mwsm:flex-col mwsm:items-center mwsm:justify-center mwsm:gap-3 mwsm:h-auto">
            <div className="flex flex-row-reverse justify-end items-center p-0 gap-[10px] max-w-[894px] h-10">
              {blogs.blogTags.map(tag=>{
                return(<div key={tag} className="flex flex-row-reverse justify-center items-center gap-[10px] h-[39px] py-[3px] px-[10px] min-w-[80px] bg-[#f7f7f7] rounded-[100px]">
                <span className="font-normal text-sm leading-[21px] text-[#808686]">{tag}#</span>
              </div>)
              })}
            </div>
            <div className="flex flex-row-reverse items-center p-0 gap-3 w-[144px] h-10">
              <div className="flex items-center justify-center border border-solid border-[#eceeed] rounded-[30px] w-[38px] h-[38px] cursor-pointer hover:bg-[#fafafa]">
                <img className="w-4 h-4" src="./icons/facebook_bold.svg" alt="facebook" />
              </div>
              <div className="flex items-center justify-center border border-solid border-[#eceeed] rounded-[30px] w-[38px] h-[38px] cursor-pointer hover:bg-[#fafafa]">
                <img className="w-4 h-4" src="./icons/twitter_bold.svg" alt="twitter" />
              </div>
              <div className="flex items-center justify-center border border-solid border-[#eceeed] rounded-[30px] w-[38px] h-[38px] cursor-pointer hover:bg-[#fafafa]">
                <img className="w-4 h-4" src="./icons/linkedin_bold.svg" alt="linkedin" />
              </div>
            </div>
          </div>
          <div className="max-w-[1050px] w-full h-0 border border-solid border-[#eeeeee]"></div>
        </div>
        <CommentForm />
      </div>
    </div>
  );
};

export default BlogsPage;
