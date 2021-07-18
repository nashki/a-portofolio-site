import Layout from '../components/BaseLayout'


const Index = () => (
    <Layout>
      <h1>Ikhsan N. Huda </h1> 
      <h2>Jr. User Experience Engineer</h2>
      
      <style jsx>{`
      h1 
      {
        text-align  : center;
        font-style  : italic!important;
        font weight : 700!important;
        font-size   : 100px;
        margin-top  : 12%;
        margin-bottom :0;
        margin-right : 30%;
        text-decoration : 5px underline;
        
      }
      
      h2 
      {
        text-align : center;
        margin-right: 53%;
        margin-top: 0;
        margin-left: 90px;
      }
      
    @media only screen and (max-width:600px){

      h1 
      {
        font-size:50px;
        margin-top:60%;
        margin-left:25px;
      }
        
      h2 
      {
        font-size   : 15px;
        margin-left: 0px;
      }
      
    }
    
    `}</style>
    
    </Layout>
)


export default Index

