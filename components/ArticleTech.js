

const ArticleTech = () => {
    return (
     <div className="grid">

            <a href="#" className="card">
            <h2>Github | Version Control System &rarr;</h2>
            <p>Learn how github works</p>
            </a>

            <a href="#" className="card">
            <h2>Intro Javascript &rarr;</h2>
            <p> Learn how to use and javascript works </p>
            </a>

            <a href="#" className="card">
            <h2>React from scratch &rarr;</h2>
            <p> React with pure javascript </p>
            </a>

          
            <style jsx>{`
            .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                margin-top: 10rem;
              }
              
              .card {
                margin: 1rem;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
                width: 20%;
                box-shadow: 0 5px 20px rgb(140, 131, 131);
              }
              
              .card:hover,
              .card:focus,
              .card:active {
                color: #0c315c;
                border-color: #0070f3;
              }
              
              .card h2 {
                margin: 0 0 1rem 0;
                font-size: 1.2rem;
              }
              
              .card p {
                margin: 0;
                font-size: 1rem;
                line-height: 1.5;
              }
              @media (max-width: 600px) {
                .grid {
                  width: 100%;
                  flex-direction: column;
                  margin-top: 10%;
                }
             
              }

            `}</style>


    </div>)
}

export default ArticleTech