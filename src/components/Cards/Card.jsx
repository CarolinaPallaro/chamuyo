const Card = ({ title, paragraph }) => {
    return (
      <div className="card">
        <h1>{title}</h1>
       
        <p>{paragraph}</p>
      </div>
    );
  };

export {Card}