import OneProject from "../components/OneProject";

function Projects() {


  return (
<div>
        <div id='projectHead'>
        <h2 id="projectTitle">Mina projekt</h2>
    <p id="linkInfo">Ha lite tålamod med länkarna, de är uppladdade på skolservrar och gratisservrar, vilket gör att laddningen går lite långsammare. </p>
        </div>

    <div id="projectContent">

            <OneProject 
            title="Webbshop med WordPress"
            image="bildNSET.jpg"
            imageAlt="En bild på startsidan av webbshopen nästan som en tavla"
            description="En webbshop skapad med egenutvecklat WordPress-tema"
            link="https://studenter.miun.se/~emfo2405/writeable/nastansomentavla/"
            extraInfo="Webbshop och tema skapat med PHP och uppladdat till en skolserver. Plugins som användes i projektet är WooCommerce, Yoast SEO och Contact Form 7. Databas uppladdat till phpmyadmin."
             />

            <OneProject
            title="Lagerhantering med ramverk"
            image="furnitureStore.jpg"
            imageAlt="En bild på startsidan av lagerhanteringstjänsten för möbelaffären furnitureStore"
            description="En lagerhanteringstjänst skapades för det fiktiva företaget furnitureStore. Webbplatsen skapades med LoopBack, MongoDb och Vue."
            link="https://furniturestore-ramverk.netlify.app/"
            extraInfo="En backendtjänst skapades med full CRUD-funktionalitet för att lägga till kategorier/produkter och hantera lagersaldo. Backendtjänsten skapades
            med LoopBack och kopplades till en databas skapad med MongoDb. Frontend-tjänsten skapades med Vue och kopplades till den skapade backendtjänsten. För design
            användes CSS-ramverket Bootstrap."
             />

            <OneProject
            title="Portfolio (den här sidan)"
            image="cvbild.jpg"
            imageAlt="En bild på startsidan av portfolio-hemsidan för Emma Forsmalm"
            description="En portfolio skapad med React och TypeScript."
            link="/"
            extraInfo="Den här sidan skapades som ett hobbyprojekt för att lära mig React samt för att skapa en sida att visa upp mina projekt på."
             />

    </div>
    </div>
  )
}

export default Projects