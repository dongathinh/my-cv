
import './App.css'
import AboutMe from './components/AboutMe'
import Avatars from './components/Avatars'
import Contacts from './components/Contacts'
import Educations from './components/Educations'
import Expert from './components/Expert'
import Name from './components/Name'
import Personals from './components/Personals'
import Works from './components/Works'


function App() {


  return (
    <>
    <div className='container mx-auto shadow-inner'>
      <div className="layout_wrapper flex justify-center">
        <div className="col_left text-left bg-indigo-700 text-white w-[386px] px-[90px] py-[100px]">
          <Avatars />
          <div className='text-[18px] font-bold my-[40px]'>CONTACT</div>
          <Contacts />
          <div className='text-[18px] font-bold my-[40px]'>EXPERTISE</div>
          <Expert label='Ms Word' scorce={5}/>
          <Expert label='Ms Excel' scorce={3}/>
          <Expert label='Photoshop' scorce={4}/>
          <Expert label='Illustrator' scorce={3}/>
          <Expert label='Corel Draw' scorce={4}/>
          <div className='text-[18px] font-bold my-[40px]'>PERSONAL SKILL</div>
          <Personals />
        </div>
        <div className="col_right text-left bg-slate-100 w-[600px] px-[90px] py-[100px]">
          <Name />
          <AboutMe />
          <div className='text-[18px] font-bold my-[40px]'>EDUCATION</div>
          <Educations title='BACHELOR OF DESIGN' desc='University/Collage/Institute' time='2012 - 2015'/>
          <Educations title='BACHELOR OF DESIGN' desc='University/Collage/Institute' time='2012 - 2015'/>
          <div className='text-[18px] font-bold my-[40px]'>WORK EXPERIENCE</div>
          <Works title='JOB TITLE' desc='COMPANY NAME' time='2012 - 2015' txt='Definition about your job. Lorem ipsum dolor sit amet, de
consectetuer set adipiscing elit, sed dolore magna' />
          <Works title='JOB TITLE' desc='COMPANY NAME' time='2012 - 2015' txt='Definition about your job. Lorem ipsum dolor sit amet, de
consectetuer set adipiscing elit, sed dolore magna' />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
