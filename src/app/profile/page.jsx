"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

export default function page() {
  const session = useSession();

  const {status} = session;
  if (status === 'loading') {
    return 'Loading...'
  }

  if (status === 'unauthenticated') {
    redirect('login')
  }

  const userImage = session.data.user.image

  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>
        profile
      </h1>
      <form className='max-w-xs mx-auto border'>
        <div className='flex items-center gap-2'>
          <div>
            <Image src={userImage} alt="userImage" width={64} height={64} className='rounded-full' />
          </div>
          <div>
            <input type="text" placeholder='お名前' />
          </div>
        </div>
      </form>
    </section>
  )
}

