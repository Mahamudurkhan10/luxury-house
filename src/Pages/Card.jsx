

const Card = ({ card }) => {
     console.log(card)
     const handleRead = ()=>{
          
     }
     return (
          <div>
               <div className="card p-7  bg-green-50 shadow-xl">
                    <figure><img src={card.image} className="h-[250px]" alt="Shoes" /></figure>
                    <div className="card-body">
                         <p className="text-green-500"> {card.estate_title} </p>
                         <h2 className="card-title"> {card.segment_name} </h2>
                         <p className="text-lg"> {card.description} </p>
                         <div className="card-actions">
                              <button onClick={()=>handleRead()} className="btn btn-success w-full">Read Details</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Card;