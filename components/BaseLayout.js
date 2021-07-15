import Navigation from '../components/Navigation'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|Catamaran|Roboto+Condensed"></link>
        </Head>

        <Navigation />

        {props.children}

        <style jsx>{`
         
            * {
         width: 960px;
         margin: 0 auto;       
         font-family: 'Catamaran', sans-serif;
                }

        `}</style>

    </div>
)
export default Layout

