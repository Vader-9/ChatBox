import { React } from 'react'
import { assets } from '../../assets/assets'
import './Home.css'
import { dummyStudentEnrolled } from '../../assets/assets'
import { dummyTestimonial } from '../../assets/assets'
import Footer from './Footer'

function Home() {


  console.log(dummyTestimonial)


  return (
    <div className='Home'>
      <div className="header">
        <img src={assets.logo} alt="" />
        <div id='other'>
          <p>Add Course</p>
          <h3>Login</h3>
          <button>Create  Account</button>
        </div>
      </div>
      <div className='title'>
        <div id='title'>
          <h1>Empower your future with the</h1>
          <h1>courses designed to fit your choice</h1>
          <p>We bring together world-class instructors, interactive content, and a supportive </p> <p> community to help you achive your personal and professional goals</p>
          <div className="input">
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="trusted">
        <div id='Trusted'>
          <p>Trusted by learners from</p>
          <div id='img'>
            <img src={assets.microsoft_logo} alt="" />
            <img src={assets.walmart_logo} alt="" />
            <img src={assets.accenture_logo} alt="" />
            <img src={assets.adobe_logo} alt="" />
          </div>
        </div>
      </div>
      <div className="filterinfo">
        <div id='filterinfo'>
          <h2>Learn from the best</h2>
          <p>Discover our top-rated courses across various cartegories. From coding and design to</p>
          <p>business and wellness, our courses are crafted to deliver result</p>
        </div>
      </div>
      <div className="eight">
        {dummyStudentEnrolled.map((students) => (
          <div className="cover">
            <div className="container" key={students.student._id} >
              <img src={students.student.imageUrl} alt="" />
              <h1>{students.courseTitle}</h1>
              <p>{students.student.name}</p>
            </div>

          </div>
        ))}
      </div>
      <div className='showbtn'>
        <button>Show button</button>
      </div>
      <div className="testimonial">
        <h1>Testimonials</h1>
        <p>Hear from our learners as they share their journeys of transformation, success and hoe our</p>
        <p>plstfprm has made a difference in their lives</p>
        <div id="rich">
          {dummyTestimonial.map((dummy) => (
            <div className="three">
              <div className="imgname">
                <img src={dummy.image} alt="" />
                <div>
                  {dummy.name} <br />
                  {dummy.role}
                </div>
              </div>
              <p>{dummy.feedback}</p>
              <p>Read more</p>
            </div>
          ))}
        </div>
      </div>
      <div className="learn">
        <h1>Learn anything, anytime, anywhere</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste consectetur fugit nesciunt quidem nihil, quae error aliquam atque voluptates quis dolo</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatem minima </p>
        <div className='getbtn'>
          <button id="blue">Get started</button>
          <button>Learn more</button>
        </div>
      </div>
      <Footer/>
    </div>)
}

export default Home