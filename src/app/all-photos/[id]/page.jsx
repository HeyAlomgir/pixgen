import { Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaArrowAltCircleDown, FaHeart } from 'react-icons/fa';

const PhotoDetails = async({params}) => {
    const {id}=await params;
    const res = await fetch("https://pixgen-amber.vercel.app/data.json");
    const phots = await res.json();


  const photo = phots.find(p => p.id == id)

    console.log(photo);
    return (
         <div>
                    <Card className='border rounded-xl max-w-4xl my-5'>
        
        
                        <div className=' relative w-full aspect-square'>
                            <Image
                                src={photo.imageUrl}
                                fill
                                alt={photo.title}
                                className='object-cover rounded-2xl'></Image>
        
                            <Chip className='absolute top-2 right-2'>{photo.category}</Chip>
                        </div>
        
        
                        <div>
                            <p>{photo.title}</p>
                            <p>{photo.model}</p>
                            <p>{photo.prompt}</p>
                           

                        </div>
        
        
        
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-1'>
                                <FaHeart className='text-red-600' />
                                <p>{photo.likes}</p>
                            </div>
        
                            <Separator orientation='vertical' />
        
                            <div className='flex items-center gap-1'>
                                <FaArrowAltCircleDown className='text-gray-700' />
                                <p>{photo.downloads}</p>
                            </div>
                        </div>
        
                       
                    </Card>
                </div>
    );
};

export default PhotoDetails;