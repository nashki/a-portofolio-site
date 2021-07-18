import Navigation from '../components/Navigation'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>Portofolio Site - Ikhsan N. Huda</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|Catamaran|Roboto+Condensed"></link>
        </Head>

        <Navigation />

        {props.children}

        <style jsx>{`
         
               * {
                 margin: 0;       
                 font-family: 'Catamaran', sans-serif;
                 }

        `}</style>

    </div>
)
export default Layout

