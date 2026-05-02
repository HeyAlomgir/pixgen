import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import { FaArrowAltCircleDown, FaHeart } from 'react-icons/fa';


const PhotoCard = ({photo}) => {
    return (
        <div>
            <Card className='border rounded-xl '>


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
            </div>



            <div className='flex justify-between'>
                <div className='flex items-center gap-1'>
                    <FaHeart className='text-red-600'/>
                    <p>{photo.likes}</p>
                </div>

            <Separator orientation='vertical'/>

                <div className='flex items-center gap-1'>
                    <FaArrowAltCircleDown className='text-gray-700' />
                    <p>{photo.downloads}</p>
                </div>
            </div>

            <Button variant='outline' className={`w-full`}>View Details</Button>
            </Card>
        </div>
    );
};

export default PhotoCard;