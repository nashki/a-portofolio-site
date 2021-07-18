import Layout from '../components/BaseLayout'


const work = () => (
    <Layout>
        <div id="menu">
            <div className="tracks">publish 1</div>
            <div className="tracks">publish 2</div>
            <div className="tracks">publish 3</div>
        </div>

        <style jsx>{`
            #menu {
                margin-top: 80px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                width: 70%;
                margin-left: 50px;
            }
            .tracks {
                border: 1px solid black;
                width : 30%;
                height: 200px;
                margin-bottom: 10px;
            }

        `}</style>
    </Layout>
)
export default work

