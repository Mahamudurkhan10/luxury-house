import { useEffect, useState } from "react";
import Card from "./Card";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

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
              <h1 className="text-3xl  text-center mt-7  font-bold" data-aos="fade-down" data-aos-delay="200"> Luxury Home Features </h1>
               <p className="text-lg text-center font-normal  ">
                    Escape to your own paradise on a private island,
                    Where turquoise waters  lap against sandy shores.
                     </p>
              </div>
               <div className="grid mt-6 p-5 lg:grid-cols-3 grid-cols-1 gap-5" >
                    {
                         cards.map(card =><Card key={card.id} card={card}></Card>)
                    }
               </div>
          </div>
     );
};

export default Features;