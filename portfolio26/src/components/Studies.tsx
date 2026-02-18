type StudiesProps = {
    title: string;
    school: string;
    year: string;
    examen: string;
};


function Studies({title, school, year, examen}: StudiesProps) {


  return (

    <div className="studiesInput">
    <h3>{title} - {school}</h3>
    <p>{year}</p>
    <p>{examen}</p>
    </div>

  )
}

export default Studies