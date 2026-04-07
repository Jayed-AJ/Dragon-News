import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    
    const {image_url,title,details,category_id} = news;

    return (
        <div className='px-3 py-5 rounded border justify-items-center border-gray-200 space-y-5'>
            <img src={image_url} alt="photo" className='h-[400px] object-cover'/>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-lg">{details}</p>
            <Link className='btn py-2 text-white bg-secondary' to={`/category/${category_id}`}>All news in this cetagory.</Link>
        </div>
    );
};

export default NewsDetailsCard;