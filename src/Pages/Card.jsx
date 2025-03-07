import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const Card = ({ card }) => {
     
     
     return (
          <div data-aos="flip-down" data-aos-delay="500">
               <div className="card p-7  bg-green-50 shadow-xl">
                    <figure><img src={card.image} className="h-[250px]" alt="Shoes" /></figure>
                    <div className="card-body">
                         <p className="text-green-500"> {card.estate_title} </p>
                         <h2 className="card-title"> {card.segment_name} </h2>
                         <p className="text-blue-500 font-medium"> Location :  {card.location} </p>
                         <p className="text-lg"> Description :  {card.description} </p>
                         <p className="text-purple-500"> Price : <span className="font-bold"> {card.price}</span> </p>
                         <div className="card-actions justify-center">
                              <Link to={`/${card.id}`}><button  className="btn btn-accent w-full">Read Details</button></Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Card;