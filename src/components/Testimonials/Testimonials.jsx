import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';


const Testimonials = () => {

    // this is getitng hold of the ul element using (ref) 
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    
    const slideBackward = () => {
        if (tx < 0) {
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    
    
  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next__btn' onClick={slideForward}/>
      <img src={back_icon} alt='' className='back__btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user__info'>
                        <img src={user_1} alt='' />
                        <div>
                            <h3>Jenifer Daniel</h3>
                            <span>Unicity, Zambia</span>
                        </div>
                    </div>
                    <p>
                        The best option in my life wasn choosing to pursue my education at Unicity.
                        The environment here is amazing and very condusive for studying. I am really enjoying a lot here
                    </p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user__info'>
                        <img src={user_2} alt='' />
                        <div>
                            <h3>Francis Mwansa</h3>
                            <span>Moscow, Russia</span>
                        </div>
                    </div>
                    <p>
                        There were a lot of options that I would have taken to pursue my graduate and post graduate degree.
                        I decided to choose Unicity and it has delivered to the expectation as promised. I am really grateful for this opportunity
                    </p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user__info'>
                        <img src={user_3} alt='' />
                        <div>
                            <h3>Mary Lowrand</h3>
                            <span>New York, USA</span>
                        </div>
                    </div>
                    <p>
                        A friend of mine introduced me to this university and I decided to join and it was a good or let me say
                        the best decision I have ever made
                    </p>
                </div>
            </li>
            
            <li>
                <div className='slide'>
                    <div className='user__info'>
                        <img src={user_4} alt='' />
                        <div>
                            <h3>Usher Spear</h3>
                            <span>New York, USA</span>
                        </div>
                    </div>
                    <p>
                        I really love it here. From the teaching stuf to  my fellow students
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials;
