import React from 'react';


const Footer = () => {
  return (
    <div className='w-full mx-auto py-32 px-16 gap-8 bg-teal-900 text-white'>

      <div className='lg:col-span-2 flex flex-col md:flex-row justify-between mt-6 '>
        <div className='flex justify-center items-center'>
          
          <ul>
          <li className='py-2 text-xl'>About Us</li>
            <li className='py-2 text-sm'>Mankind Medicare</li>
            <li className='py-2 text-sm'>IG Road</li>
            <li className='py-2 text-sm'>Arayiduthupalam</li>
            <li className='py-2 text-sm'>Kozhikode,Kerala</li>
          </ul>
        </div>
        <div className='flex justify-center items-center'>
          
          <ul>
          <li className='py-2 text-xl'>Contact Us</li>
            <li className='py-2 text-sm'>+91-475-956241</li>
            <li className='py-2 text-sm'>info@mankind.org</li>
            <li className='py-2 text-sm'>+91-97458541452</li>
            <li className='py-2 text-sm'>Emergency-+91452654789</li>
          </ul>
        </div>
        <div className='flex justify-center items-center'>
       
          <ul>
          <li className='py-2 text-xl'>Other Locations</li>
            <li className='py-2 text-sm'>Kochi</li>
            <li className='py-2 text-sm'>Bengaluru</li>
            <li className='py-2 text-sm'>Mumbai</li>
            <li className='py-2 text-sm'>Goa</li>
          </ul>
        </div>

      </div>
    </div>
  );
};
export default Footer;