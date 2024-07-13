import './index.css'
import Hannah from '../Images/Hannah.jpg';
import Nataly from '../Images/Nataly.jpg';
import Faith from '../Images/Faith.jpg';
import Esther from '../Images/Esther.jpg';
import Sharon from '../Images/Sharon.jpg';
import Logo from  '../Images/Alogo.png';


const Resumes = () =>{
    const pdfUrl1 = 'https://drive.google.com/file/d/1zxsUrhD3WQYxtzdORIwxJWYHiIsvaBHy/view?usp=sharing'
    const pdfUrl2 = 'https://drive.google.com/file/d/1fD9Y2l6a3Kw4fX3u36b_NUBeuy724PVZ/view?usp=sharing'
    const pdfUrl3 = 'https://drive.google.com/file/d/1IGEELPAu6TOeHDi0scBBwFikZyIXU6xo/view?usp=sharing'
    const pdfUrl4 = 'https://drive.google.com/file/d/1HqqQxRBqNp9AncOaNH2_eE7v61oVl4pQ/view?usp=sharing'
    const pdfUrl5 = 'https://drive.google.com/file/d/1rMRaX073yOAWLlTmPhDAu6pyhrkN9O28/view?usp=sharing'
    return(
        <div>
        <div className="team">
            <h1>OUR TEAM</h1>
        </div>
        <div className='profiles1'>
            <div className='hannah'>
                <img src={Hannah}  alt='Hannah' className='images'/>
                <h4 className='title1'>Hannah Unyolo<br/> Software Developer<br/><a href={pdfUrl1} target='"_blank' rel='noopener nonreferrer' className='resume'>Resume</a></h4>
              
          </div>
            <div className='nataly'>
                <img src={Nataly} alt='Nataly' className='images'/>
                <h4 className='title2'>Natalie Wambui<br/> Software Developer<br/><a href={pdfUrl2} target='"_blank' rel='noopener nonreferrer' className='resume'>Resume</a></h4>
            </div>
            <div className='faith'>
                <img src={Faith} alt='Faith' className='images'/>
                <h4 className='title3'>Faith Mutava<br/> Software Developer<br/><a href={pdfUrl3} target='"_blank' rel='noopener nonreferrer' className='resume'>Resume</a></h4>
            </div>
        </div>
        <div className='profile2'>
            <div className='sharon'>
                <img src={Sharon} alt='Sharon' className='images'/>
                <h4 className='title4'>Sharon Njung'e<br/> Software Developer<br/><a href={pdfUrl4} target='"_blank' rel='noopener nonreferrer' className='resume'>Resume</a></h4>
            </div>
            <div className='esther'>
                <img src={Esther} alt='Esther' className='images'/>
                <h4 className='title5'>Esther Shiamagovi<br/> Software Developer<br/><a href={pdfUrl5} target='"_blank' rel='noopener nonreferrer' className='resume'>Resume</a></h4>
            </div>

        </div>
        <div className='footer'>
            <div className='part1'>
                <img src={Logo} alt='Logo' className='image'/>
            </div>
            <div className='part2'>
               <h3><b>Quick Links</b></h3>
               <h4>Home</h4>
               <h4>Blogs</h4>
               <h4>About us</h4>
               <h4>Contact us</h4>
            </div>
            <div className='part3'>
                <h3><b>Our patners</b></h3>
                <h4>Akirachix</h4>
            </div>
            <div className='part4'>
                <h3><b>Privacy</b></h3>
                <h4>Data Privacy</h4>
                <h4>General terms</h4>

            </div>
        </div>
        <div className='footer2'>
            <h4>copyright@Upile 2024</h4>
        </div>
        </div>
        
    )
  };
  
  export default Resumes;