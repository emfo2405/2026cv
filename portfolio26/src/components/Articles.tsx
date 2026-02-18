type ArticleProps = {
    title: string;
    description: string;
    linkText: string;
    buttonText: string;
};


function Article({title, description, linkText, buttonText}: ArticleProps) {


  return (

    <div className="articleInput">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={linkText}>{buttonText}</a>
    </div>

  )
}

export default Article