import './Hero.css';
import heroImg from '../../assets/avatar1.png';
import instaDark from '../../assets/insta.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import githubIcon from '../../assets/github-light.svg'
function Hero() {
  return (
   <section id="hero" className="container">

    <div>
      <img className='hero-img'  src={heroImg} alt="hero-image" />  

    </div>
    <div className='hero-txt'>

      <h1>Mohammed misfar<br/> Yusaf c</h1>
      <h2>Frontend Developer</h2>
      <span>
        <a href='https://www.instagram.com/misfar_bin_yusaf/' target='_blank'><img src={instaDark}  alt="twitter icon"  className='insta-light'/></a>
        <a href='https://www.linkedin.com/in/mohammed-misfar-41a78a279/'target='_blank'><img src={linkedinIcon} alt="linkedin icon" /></a>
        <a href='https://github.com/Misfarz' target='_blank'><img src={githubIcon} alt="github icon" /></a>

      
      
      </span>
      <p className='description'>
        with a passion for developing modern react web apps for commercial business
      </p>
       
    </div>

   

   </section>
  )
}

export default Hero
