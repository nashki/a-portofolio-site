import ProfilPic from '/assets/roetin.png'
import PizzaQyu from '/assets/pizza.jpg'
import Image from 'next/image'

const WorkList = () => (
    <div id="work">
    <div className="tracks1" >  
    <div className="img1"> <Image src={PizzaQyu}></Image> </div>
        <div className="post-img1"> </div>
        <div className="post-info">
            <a href="#" className="link"> build process  </a> |
            <a href="#" className="link"> link site </a> |
            <a href="#" className="link"> instagram </a>
        </div>
    </div>

    <div className="tracks2" >  
    <div className="img1"> <Image src={ProfilPic}></Image> </div>
        <div className="post-img2"></div>
        <div className="post-info">
              <a href="#" className="link"> build process  </a> |
              <a href="#" className="link"> link site  </a> |
              <a href="#" className="link"> instagram  </a> 
        </div>
    </div>

  
    <style jsx>{`
        a {
            text-decoration: none;
        }
            #work {
                margin-top:5%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                width:70%;
            }
            .tracks1 {
                border-radius : 5%;
                border: 1px solid black;
                width : 300px;
                height: 300px;
                margin-bottom: 10px;
            }
            .tracks2 {
                border-radius : 5%;
                border: 1px solid black;
                width : 300px;
                height: 300px;
                margin-bottom: 10px;
            }
            .img1 {
                border-radius: 50%;
                margin-top:2%;
                padding: 0 1.2rem;
            }

            .post-info {
                text-align: center;
            }
            @media only screen and (max-width:863px){
                    
                #work {
                    margin-top:10%;
                }
                .tracks1 {
                    margin-bottom:10%;
                }
            }
        `}</style>
</div>

)

export default WorkList