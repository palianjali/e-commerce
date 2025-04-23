import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 shadow-lg'>
        <img 
        className='w-full md:max-w-[450px] '
        src={assets.about_us_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, animi in quasi perferendis quibusdam id, quidem cum modi accusamus obcaecati consectetur, ea expedita enim voluptas architecto? Quia sit est numquam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellendus aliquid, autem ullam fugit facere, sapiente iure ipsam fugiat harum dolores. Placeat aut consectetur quod temporibus tempora exercitationem nostrum tempore.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere id aut veritatis soluta fugiat optio, odit eius pariatur animi odio obcaecati, reprehenderit nesciunt? Magnam, deserunt incidunt vel aspernatur distinctio totam.</p>
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='text-gray-600 flex flex-col md:flex-row text-sm mb-20 hover:shadow-lg'> 
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eius at vitae blanditiis odio, sequi temporibus animi quidem necessitatibus amet repellendus culpa voluptatibus aut nisi, quaerat esse laudantium, recusandae nobis?</p>
        </div>

        <div className='text-gray-600 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eius at vitae blanditiis odio, sequi temporibus animi quidem necessitatibus amet repellendus culpa voluptatibus aut nisi, quaerat esse laudantium, recusandae nobis?</p>
        </div>

        <div className='text-gray-600 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eius at vitae blanditiis odio, sequi temporibus animi quidem necessitatibus amet repellendus culpa voluptatibus aut nisi, quaerat esse laudantium, recusandae nobis?</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
