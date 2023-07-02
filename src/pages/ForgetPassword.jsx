import React, { useState } from 'react'
import Photo from '../Assets/photo.jpg';
import { Link } from 'react-router-dom';
import { OAuth } from '../Components/OAuth';

export const ForgetPassword = () => {
  const [email, setEmail] = useState("")
  function onChange(e) {
    setEmail(e.target.value)
  }
  return (
    <section className='bg-gray-100'>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forget Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src={Photo} alt="key" className='w-[100%] rounded-3xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input type="email" placeholder='Email Address' className='w-full p-3 text-xl px-4 text-gray-700 border-gray-300 rounded transition ease-in-out mb-6' id='email' value={email} onChange={onChange} />

            <div className='flex items-center justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='text-black font-bold'>Don't have a account?
                <Link to="/sign-up" className='text-red-500'>Register</Link>
              </p>
              <p>
                <Link to="/forget-password" className='text-xl text-black underline'>Sign In Here</Link>
              </p>
            </div>
            <button type='submit' className='w-full  bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-950 my-5 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-900'>Sign In</button>
            <div className='my-4 flex items-center before:border-t  before:flex-1 before:border-gray-300 after:border-t  after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold text-xl mx-4 '>OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}
