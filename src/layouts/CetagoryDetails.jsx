import React, {  } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const CetagoryDetails = () => {

    // const [news,setNews] = useState(null);


    const data = useLoaderData();
    const {id} = useParams();
    // console.log(data,id);

    const news = data.find(singleNews => singleNews.id == id)

    // useEffect(()=>{
    //     const newsDetails = data.find(singleNews => singleNews.id == id)
    //     setNews(newsDetails); 
    // },[id,data])

    // console.log(news);


    return (
        <div className='w-11/12 mx-auto py-5'>

            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h1 className="mb-5 font-bold text-secondary">Dragon News</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default CetagoryDetails;