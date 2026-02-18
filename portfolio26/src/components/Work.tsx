type WorkProps = {
    title: string;
    description: string;
    year: string;
};


function Work({title, year, description}: WorkProps) {


  return (

    <div className="cvInput">
        <h3>{title}</h3>
        <p>{year}</p>
        <p>{description}</p>
    </div>

  )
}

export default Work