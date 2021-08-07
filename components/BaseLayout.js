import Navigation from '../components/Navigation'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>Ikhsan N. Huda - Jr. UX Engineer</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|Catamaran|Roboto+Condensed"></link>
        </Head>

        <Navigation />

        {props.children}

       
        <style jsx global>{`
         
               body {
                 background-color: #f5f5f5;  
                 margin: 0;       
                 font-family: 'Catamaran', sans-serif;
                 }

        `}</style>

    </div>
)
export default Layout

