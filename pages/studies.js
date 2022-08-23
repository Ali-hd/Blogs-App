import Head from 'next/head';
import { studies } from "../utils/data";

function StudiesPage() {
  return (
    <div className="page-wrap flex flex-col items-center gap-10 py-[70px] mwsm2:gap-[30px]">
      <Head>
        <title>مدونة | المقالات</title>
        <meta property="og:title" content="المقالات" />
      </Head>
      <h1 className="page-header font-normal text-4xl leading-[45px] text-black text-center mwsm2:font-normal mwsm2:text-3xl">التقارير والدراسات</h1>
      <div className="studies-container flex flex-row content-center p-0 gap-[30px] max-w-[1170px] flex-wrap mwsm2:max-w-[343px]">
        {studies.map(study => {
          return (
            <div key={study.id} className="content-card study-card w-[370px] h-[421px] mwsm2:w-full">
              <div className="card-image w-[370px] h-[230px] bg-[#efefef] rounded-t mwsm2:w-full mwsm2:h-[230px]">
                <img className='w-full h-full' src={study.image} alt="image1" />
              </div>
              <div className="card-details pt-3 px-[18px] pb-[18px] gap-3 flex flex-col">
                <div className="card-type gap-2 flex justify-end relative">
                  <div className='h-[19px] w-0 absolute border border-solid border-brand right-[-8px]'></div>
                  <span className='font-normal text-sm leading-[21px] text-right text-[#404343]'>{study.type}</span>
                </div>
                <h2 className='m-0 font-normal text-xl leading-[29px] text-right text-[#202221] mwsm2:text-lg mwsm2:leading-[26px]'>{study.title}</h2>
                <p className='m-0 text-right text-base text-[#808686] mwsm2:text-sm mwsm2:leading-[21px]'>
                  {study.content}
                </p>
                <span className='font-normal text-sm leading-[21px] text-right text-[#404343]'>بواسطة {study.author}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default StudiesPage;
