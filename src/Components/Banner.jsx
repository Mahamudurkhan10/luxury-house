

const Banner = () => {
     return (
          <div className="carousel mt-7 ml-4 w-[350px] lg:w-full lg:h-[450px]">
               <div id="slide1" className="carousel-item relative w-full">
                    <img src=" https://i.ibb.co/mcy0YVg/hq720.jpg" className="w-full opacity-90" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide4" className="btn btn-circle">❮</a>
                           <div className="text-center lg:w-3/5"> <h1 className="text-white lg:text-4xl font-bold">
                              Discover your own private oasis,
                              Where tranquility meets extravagance in perfect harmony.
                            
                               </h1>
                               <button className="btn btn-success lg:text-xl mt-8 pb-1 text-white rounded-xl" > Read More</button>
                               </div>
                              
                         <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
               </div>
               <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/72sn9M4/Web2500-23.webp" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide1" className="btn btn-circle">❮</a>
                         <div className="text-center lg:w-3/5"> <h1 className="text-white   lg:text-4xl font-bold">
                              Discover your own private oasis,
                              Where tranquility meets extravagance in perfect harmony.
                            
                               </h1>
                               <button className="btn btn-success lg:text-xl mt-8 pb-1 text-white rounded-xl" > Read More</button>
                               </div>
                         <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
               </div>
               <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/3km81tC/maxresdefault.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide2" className="btn btn-circle">❮</a>
                         <div className="text-center lg:w-3/5"> <h1 className="text-sky-400   lg:text-4xl font-bold">
                              Discover your own private oasis,
                              Where tranquility meets extravagance in perfect harmony.
                            
                               </h1>
                               <button className="btn btn-success lg:text-xl mt-8 pb-1 text-white rounded-xl" > Read More</button>
                               </div>
                         <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
               </div>
               <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/NWgStGt/Soneva-Fushi.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide3" className="btn btn-circle">❮</a>
                         <div className="text-center lg:w-3/5"> <h1 className="text-gray-100   lg:text-4xl font-bold">
                              Discover your own private oasis,
                              Where tranquility meets extravagance in perfect harmony.
                            
                               </h1>
                               <button className="btn btn-success lg:text-xl mt-8 pb-1 text-white rounded-xl" > Read More</button>
                               </div>
                         <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
               </div>
          </div>
     );
};

export default Banner;