"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {
  const session = useSession();
  // console.log(session)
  const [userName, setUserName] = useState("")
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const {status} = session;

  useEffect(() => {
    if (status === 'authenticated') {
      setUserName(session.data.user.name)
    }
  }, [session, status])

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    setSaved(false);
    setIsSaving(true);
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: userName}),
    })
    setIsSaving(false)
    if (response.ok) {
      setSaved(true);
    }
  }

  if (status === 'loading') {
    return 'Loading...'
  }

  if (status === 'unauthenticated') {
    redirect('login')
  }

  const userImage = session.data.user.image

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData;
      data.set('file', files[0])
      const response = await fetch('api/upload', {
        method: 'POST',
        body: data,
        // headers: {'Content-Type': 'multipart/form-data'}
      });
      const json = await response.json()
      console.log(json)
    }

  }

  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>
        profile
      </h1>
      <div className='max-w-md mx-auto'>
        {saved && (
          <h2 className='text-center bg-green-100 p-4 rounded-lg'>
            Profile saved!
          </h2>
        )}
        {isSaving && (
          <h2 className='text-center bg-blue-100 p-4 rounded-lg'>
            Saving...
          </h2>
        )}
        <div className='flex items-center gap-4'>
          <div className='p-2 rounded-lg relative'>
            <Image src={userImage} alt="userImage" width={250} height={250} className='rounded-lg w-full h-full mb-1' />
            <label>
              <input type="file" className='hidden' onChange={handleFileChange}/>
              <span className='border rounded-lg p-2 block text-center border-gray-300 cursor-pointer'>Edit</span>
            </label>
          </div>
          <form className='grow' onSubmit={handleProfileInfoUpdate}>
            <input
              type="text" placeholder="First and last name"
              value={userName} onChange={ev => setUserName(ev.target.value)}
            />
            <input type="email" disabled={true} value={session.data.user.email} onChange={e => setUserName(e)} />
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </section>
  )
}

