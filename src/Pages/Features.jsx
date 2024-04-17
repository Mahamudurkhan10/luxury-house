import { useEffect, useState } from "react";
import Card from "./Card";


const Features = () => {
     const [cards , setCards ]=useState([])
     useEffect(()=>{
          fetch('luxury.json')
          .then(res =>res.json())
          .then(data => setCards(data))
     },[])
    
     return (
          <div>
              <div  >
              <h1 className="text-3xl  text-center mt-7  font-bold"> Luxury Home Features </h1>
               <p className="text-lg text-center font-normal  ">
                    Escape to your own paradise on a private island,
                    Where turquoise waters  lap against sandy shores.
                     </p>
              </div>
               <div className="grid mt-6 grid-cols-3 gap-5">
                    {
                         cards.map(card =><Card key={card.id} card={card}></Card>)
                    }
               </div>
          </div>
     );
};

export default Features;