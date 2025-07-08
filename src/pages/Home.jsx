import React from 'react';
import profile from '../images/profile.png'
import resume from '../images/RESUME_SANYAM_USAR.pdf'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {
  return (
    <div className=' pt-32'>
      

      <div className="image">
        <img src={profile} alt="photo" />
      </div>

     

      <div className="section absolute left-2/5 top-1/3 z-30 space-y-4">
        <p className="text-blue-500 font-extrabold text-2xl">Hello  !!! ,<span className='text-gray-200 font-sans-serif font-bold'>I'm </span></p>
        <h1 className="text-9xl font-sans-serif font-bold">Sanyam  Jain</h1>
        <h3 className='text-3xl pt-3.5'>I'm a <span className='text-purple-800'>Web Devloper</span> and <span className='text-cyan-400'>Programer</span></h3>
        <div>
<a
  href={resume}
  download
  className="bg-blue-500 cursor-pointer text-gray-100 pt-2 px-8 py-4 rounded-2xl items-center font-poppins text-2xl transition"
  onClick={()=>{
    toast.success('Downloaded Succesfully')
  }}
>
  Download CV
</a>
            

        </div>
      </div>
    </div>
  );
}

export default Home;
