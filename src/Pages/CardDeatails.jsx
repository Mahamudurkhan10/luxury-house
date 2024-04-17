import { Link, useLoaderData, useParams } from "react-router-dom";


const CardDeatails = () => {
     const cards = useLoaderData();
     const { id } = useParams();
     const newId = parseInt(id)
     const card = cards.find(card => card.id === newId)

     return (
          <div>
               <div className="card card-side space-x-10 bg-gray-200 shadow-xl">
                    <figure><img src={card.image} className="h-[550px] p-5" alt="Movie" /></figure>
                    <div className=" text-xl p-7">
                       
                         <h2 className=" mt-4 text-2xl text-blue-500"> {card.segment_name} </h2>
                         <p className="text-green-800">  {card.estate_title} </p>
                         <p className="text-gray-600"> Location : <span className="text-green-500">{card.location} </span></p>
                         <div className="divider"></div>
                         <p className="text-gray-600"> Description : <span className="text-sm "> {card.description}</span> </p> 
                          <div className="divider"></div>
                          <p className="text-gray-600"> Price : <span className="text-blue-700">{card.price}</span> </p>
                          <p className="text-gray-600"> Area : <span className="text-green-500"> {card.area} </span> </p>
                          <p className="text-gray-600"> Status : <span className="text-red-400"> {card.status}</span> </p>
                          <div>
                              Facilites :
                             <div className="text-lg text-green-700">
                             <li> {card.facilities[0]} </li>
                               <li> {card.facilities[1]} </li>
                               <li> {card.facilities[2]} </li>
                               <li> {card.facilities[3]} </li>
                             </div>
                              
                          </div>
                         <div className="card-actions justify-center ">
                             <Link to={'/'}> <button className="btn btn-success rounded-xl text-white "> Go Back </button></Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CardDeatails;