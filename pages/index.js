import Layout from '../components/BaseLayout'
import Head from 'next/head'
const Index = () => (
  
    <Layout>
      
      <h1>Ikhsan N. Huda </h1> 
      <style jsx>{`
      h1 
      {
        text-align  : center;
        font-style  : italic!important;
        font weight : 700!important;
        font-size   : 80px;
        margin-top  : 15%;
        margin-bottom :0;
        margin-right : 30%;
        text-decoration : 5px underline;  
      }
  
  
      @media only screen and (max-width:1024px){
        h1 {font-size:30px;
            margin-top:60%;}
        }
      
      @media only screen and (max-width:768px){
        h1 {font-size:60px;
          margin-top:30%;}
      }

      @media only screen and (max-width:640px){
        h1 {font-size:50px;
          margin-top:40%;}
          }
      
          @media only screen and (max-width:445px){
            h1 {font-size:35px;
              margin-top:80%;}
              }
      
    
    `}</style>
    
    </Layout>
)


export default Index

