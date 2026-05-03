"use client"
import { UpdateModal } from '@/component/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import Image from 'next/image';


const ProfilePage = () => {
    const userData = authClient.useSession();
    // console.log(userData);
    const user = userData.data?.user;

    console.log(user);

    return (
        <div className='max-w-3xl mx-auto '>
            <Card className='flex flex-col items-center border'>
                <Avatar>
                    <Avatar.Image alt="John Doe" src={user?.image}
                    referrerPolicy="no-referrer"
                     />
                    
                    <Avatar.Fallback>{user?.email.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <p className='text-2xl font-bold'>{user?.name}</p>
                <p className='text-muted'>{user?.email}</p>

                <UpdateModal></UpdateModal>

            </Card>
        </div>
    );
};

export default ProfilePage;