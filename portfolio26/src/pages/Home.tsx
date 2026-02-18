import Competence from '../components/Competence';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
  const languages: string[] = [
    "HTML", "CSS/SCSS/SASS", "JavaScript", "TypeScript", "C#", "PHP", "Python"
  ];

  const toolsSystem: string[] = [
    "Visual Studio Code", "Visual Studio 2022", "Git/GitHub", "npm/Node.js", "Vite", "Parcel", "WordPress", ".NET"
  ];

  const framework: string[] = [
    "LoopBack", "React", "Angular", "Express.js", "Tailwind", "Bootstrap", "Django"
  ];

  const databases: string[] = [
    "MySQL", "PostgreSQL", "MariaDB", "SQLite", "MongoDB"
  ];


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
        <a id="maillink" href="mailto:emma_forsmalm@hotmail.com">Kontakta mig!</a>
        <Link to="/About" id='moreInfo'>Läs mer</Link>
    </div>
    </div>
</div>

    <div id="competensesContent">
        <div id='competenceTitle'>
        <h2>Kompetenser</h2>
        </div>


<div id='backgroundCompetence'>
<Competence title="Språk" items={languages} />
<Competence title="Utvecklingsverktyg och system" items={toolsSystem} />
<Competence title="Ramverk" items={framework} />
<Competence title="Databaser" items={databases} />
</div>

            <div id='buttonsCompetence'>
        <Link to="/projects" id='projectBtn'>Till mina Projekt</Link>
        <Link to="/cv" id='cvBtn'>Till mitt CV</Link>
    </div>
</div>

    </>
  )
}

export default Home