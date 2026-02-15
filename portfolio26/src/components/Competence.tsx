type CompetenceProps = {
    title: string;
    items: string[];
};


function Competence({title, items}: CompetenceProps) {


  return (

    <div className='competence'>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

  )
}

export default Competence