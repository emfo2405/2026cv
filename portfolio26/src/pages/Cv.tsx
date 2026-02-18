import './Cv.scss';
import Work from '../components/Work';
import Studies from '../components/Studies';
import Article from '../components/Articles';

function Cv() {


  return (
    <>
        <h1 id="cvTitle">Mitt CV</h1>
<div id="cv">
    <h2>Studier</h2>
            <Studies 
            title="Webbutveckling"
            school="Mittuniversitetet"
            year="2024 - pågående"
            examen="Högskoleutbildning till webbutvecklare"
             />

            <Studies 
            title="Miljövetenskap"
            school="Göteborgs Universitet"
            year="2021 - 2023"
            examen="Masterexamen i miljövetenskap med inriktning atmosfärsvetenskap,
klimat och ekosystem"
             />

            <Studies 
            title="Fysik"
            school="Göteborgs Universitet"
            year="2016 - 2020"
            examen="Kandidatexamen i fysik"
             />

    <h2>Publikationer/utmärkelser</h2>
    <Article 
    title ="Årets pris för bästa examensarbete inom luftvårdsområdet 2023"
    description = "Svenska luftvårdsföreningen"
    linkText = "https://www.luftvard.se/basta-examensarbete-inom-luftvardsomradet-2023/"
    buttonText = "Se utmärkelsen här"/>

    <Article 
    title ="Air quality around preschools in Gothenburg: an evaluation of
measurement methods"
    description = "Masterarbete"
    linkText = "https://gupea.ub.gu.se/items/3ed1e3a2-873b-435b-a2f3-bf0565f40a9b"
    buttonText = "Läs arbetet här"/>

    <Article 
    title ="Single photon double and triple ionization of allene"
    description = "Artikel - physical chemistry chemical physics"
    linkText = "https://pubs.rsc.org/en/content/articlelanding/2022/cp/d1cp04666g"
    buttonText = "Läs artikeln här"/>

        <Article 
    title ="Dubbeljonisation av allen med hjälp av högenergetiska fotoner"
    description = "Kandidatarbete"
    linkText = "https://odr.chalmers.se/items/103e839e-138b-4c59-b406-7db4d793e441"
    buttonText = "Läs arbetet här"/>


      <h2>Arbetslivserfarenheter</h2>
<Work 
title = "Administrativ assistent"
year = "2018-2023" 
description = "Transkribering av intervjuer i forskningsprojekt på institutionen för didaktik och pedagogisk profession, institutionen för pedagogik och specialpedagogik samt institutionen för pedagogik, kommunikation och lärande."/>

<Work 
title = "Administrativ assistent"
year = "2016-2025" 
description = "Inmatning av data och arkivering av nationella prov i religionskunskap, samhällskunskap, engelska och spanska på institutionen för didaktik och pedagogisk profession samt institutionen för pedagogik och specialpedagogik."/>


             </div>
    </>
  )
}

export default Cv