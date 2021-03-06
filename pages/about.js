import Layout from '../components/BaseLayout'


const about = () => (
    <Layout>
        <h1>About Ikhsan N. Huda</h1>
        <p>(sometimes my friend call me "Sans")</p>
        <p id="part2">
            Ikhsan is a Frontend Engineer based in Indonesia.
            He graduated from Telkom University majoring in Electronic Engineer.
            <br></br>
            With his experience in the <b><a href="https://uxid.org/" target="_blank">UXiD Community</a></b> as a Coordinator of Human Resource for 1 years, 
            He particulary interested in web technologies, user experience. Self-motivated to learn, and grow in tech industry.
            <br></br>
            <br></br>
            Have anything in mind to collaborate profesionally ? Ping him on<b> <a href="mailto:ikhsannurhuda25@gmail.com" target="_blank">email</a></b> ! :)
        </p>
        <style jsx>{`
        #part2 {
            font-size:32px;
        }
        a {
          color: black;  
        }
         h1 {
            font-size:40px;
            margin-left: 15%;
            margin-top : 5%;
         }
         p {
            text-align: justify center;
            max-width : 100%;
            width:50%;
            margin-left:15%;
        }

        @media only screen and (max-width:600px){
            #part2 {
                font-size:150%;
            }
            h1 { 
                margin-top:50px;
            }
            p {
                width: 80%;
                margin-top: 0px;
                text-align: justify center;
            }
        }
        `}</style>
    </Layout>
)
export default about

