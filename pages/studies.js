import Head from 'next/head';
import { studies } from "../utils/data";

function StudiesPage() {
  return (
    <div className="page-wrap">
      <Head>
        <title>مدونة | المقالات</title>
        <meta property="og:title" content="المقالات" />
      </Head>
      <h1 className="page-header">التقارير والدراسات</h1>
      <div className="studies-container">
        {studies.map(study => {
          return (
            <div key={study.id} className="content-card study-card">
              <div className="card-image">
                <img src={study.image} alt="image1" />
              </div>
              <div className="card-details">
                <div className="card-type">
                  <div></div>
                  <span>{study.type}</span>
                </div>
                <h2>{study.title}</h2>
                <p>
                  {study.content}
                </p>
                <span>بواسطة {study.author}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default StudiesPage;
