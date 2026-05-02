import React from 'react';
import PhotoCard from './PhotoCard';

const TopgenPhoto = async() => {
    const res = await fetch("https://pixgen-amber.vercel.app/data.json");
    const phots = await res.json();
    const topphoto = phots.slice(0,8);
    console.log(topphoto);

    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Top Generations</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {topphoto.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            </div>
        </div>
    );
};

export default TopgenPhoto;