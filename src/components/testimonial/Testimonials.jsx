import { useState, useEffect } from 'react'
import './testimonials.scss'
import { FaQuoteLeft } from 'react-icons/fa'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { users } from "./data"



const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = users.length;
  
  const nextSlide =()=> {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide =()=> {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide -1)
  }



  useEffect(() => {
    setCurrentSlide(0)
  }, [])


  return (
    <section className='main --flex-center'>
      {/* -------------------------------------------container start------------------------------------------- */}
      <div className="container --text-center">
        <h2 className='--text-center --mb2'>Testimonial Section</h2>

        {/* -----------------------------------slider start------------------------------------------- */}
        <div className="slider">
          <FaQuoteLeft className='icon' />
          {
            users.map((user, index) => {
              return (
                <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
                  {index === currentSlide && (
                    <div>
                      <p className='text'>{user.desc}</p>
                      <img src={user.img} alt='user' />
                      <h4>{user.name}</h4>
                      <p className='--fw-thin'>{user.job}</p>
                    </div>
                  )}

                </div>
              )
            })}
          <div className="buttons">
            <AiOutlineArrowLeft size={15} className='prev' onClick={prevSlide}/>
            <AiOutlineArrowRight size={15} className='next' onClick={nextSlide}/>
          </div>
        </div>
        {/* -----------------------------------slider end------------------------------------------- */}
      </div>
      {/* -------------------------------------------container end---------------------------------------- */}
    </section>
  )
}

export default Testimonials