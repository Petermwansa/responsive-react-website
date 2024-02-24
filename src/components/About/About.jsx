import React from 'react';
import './About.css';
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {

  return (
    <div className='about'>
      <div className='about__left'>
        <img src={about_img} alt='' className='about__img'/>
        <img src={play_icon} alt='' className='play__icon' onClick={() => {
          setPlayState(true)
        }}/>
      </div>
      <div className='about__right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Providing the future with competent leaders across all fields</h2>
        <p>
            Get along with us and embark on a journey to experience profesional and hands-on education
            with our professional teaching stuff which is top-notch and this will enable you to excel in any field 
        </p>
        <p>
            With our main forcus on innovation and solving real-world problems, our programs are designed to prepare you
            to make a meaningful impact on the communities that you live in.
        </p>
        <p>
            Regardles of what your ambitions are in life, or career, we are here to help shape your career into someone who
            will offer the best services in whatever field you decide to venture in.
        </p>
      </div>
    </div>
  )
}

export default About
