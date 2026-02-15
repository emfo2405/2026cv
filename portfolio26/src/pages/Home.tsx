import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {


  return (
    <>
    
    <div className='headerContent'>
    <div className='frame'>
    <img className='cvprofile' src='cvprofilbild.jpg'></img>
    </div>
    <h1 className='headerText'>Emma Forsmalm <br/> Fullstackutvecklare</h1>
    </div>

    <div id='homeAbout'>
        <div id="aboutContent">
        <h2>- Om mig -</h2>
        <p>Hej! <br /> <br /> Jag heter Emma och läser sista året av webbutvecklingsprogrammet vid Mittuniversitetet.
            Jag är bosatt i Göteborg och läser hela utbildningen på distans. Under programmets gång har jag 
            fått erfarenhet inom flera olika områden, däribland att bygga fullskaliga webbapplikationer med 
            olika verktyg och i olika programmeringsspråk. Jag har även läst kurser inriktade på frontend och backend 
            såväl som fullstack-utveckling. Den här utbildningen har gett mig en bred kompetens samt praktisk 
            erfarenhet av utveckling med fokus på funktionalitet och användbarhet.
        </p>
        <div id='buttonDiv'>
        <a id="maillink" href="mailto:emma_forsmalm@.com">Kontakta mig!</a>
        <Link to="/About" id='moreInfo'>Läs mer</Link>
    </div>
    </div>
</div>

    <h1>Det här är startsidan!</h1>
    </>
  )
}

export default Home