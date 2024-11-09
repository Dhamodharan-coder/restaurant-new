import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Secondpage = ({ menu }) => {
  const [filter, setFilter] = useState([]);
  const [value, setValue] = useState("Main Course");
  const [filterbutton, setFilterButton] = useState("rice");

  const handleSelectChange = (e) => setValue(e.target.value);

  useEffect(() => {
    const response = menu.filter((e) => e.category === filterbutton);
    setFilter(response);
  }, [filterbutton,filter,menu]);

  const inViewRef = React.useRef(null);
  const isInView = useInView(inViewRef, { once: true });

  return (
    <div id="menu">
      <h1 className="text-center text-4xl font-semibold">
        <span className="text-orange-600 font-bold">M</span>enu
      </h1>

      <div className="text-right m-10 sticky top-24 z-10">
        <select
          className="border-2 border-black w-fit p-2 rounded-lg"
          value={value}
          onChange={handleSelectChange}
        >
          <option value="Main Course">Main Course</option>
          <option value="Starters">Starters</option>
          <option value="Combos">Combos</option>
          <option value="Soups">Soups</option>
          <option value="Meals">Meals</option>
          <option value="South Indian">South Indian</option>
          <option value="Quick Bites">Quick Bites</option>
        </select>
      </div>

      <div className="sticky top-0 z-10 bg-white">
        {value === "Main Course" ? (
          <div className="flex w-full sm:justify-center items-center overflow-x-auto scrollbar-hide my-4">
            {["rice", "indianbreads", "friedrice", "non-veg", "biriyani", "noodles", "veg", "seafood", "egg"].map((category) => (
              <div
                key={category}
                className={`py-2 px-4 m-2 w-fit text-center rounded-xl cursor-pointer bg-white shadow-black border-2 border-slate-300 ${
                  filterbutton === category ? "bg-slate-900 text-white" : ""
                }`}
                onClick={() => setFilterButton(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            ))}
          </div>
        ) : value === "Starters" ? (
          <div className="flex w-full sm:justify-center items-center overflow-x-auto scrollbar-hide my-4">
            {["NonVeg", "Veg", "SeaFood"].map((category) => (
              <div
                key={category}
                className={`py-2 px-4 m-2 w-fit text-center rounded-xl cursor-pointer bg-white shadow-black border-2 border-slate-300 ${
                  filterbutton === category ? "bg-slate-900 text-white" : ""
                }`}
                onClick={() => setFilterButton(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            ))}
          </div>
        ) : value === "Soups" ? (
          <div className="flex w-full sm:justify-center items-center overflow-x-auto scrollbar-hide my-4">
            {["Nonveg", "Veg"].map((category) => (
              <div
                key={category}
                className={`py-2 px-4 m-2 w-fit text-center rounded-xl cursor-pointer bg-white shadow-black border-2 border-slate-300 ${
                  filterbutton === category ? "bg-slate-900 text-white" : ""
                }`}
                onClick={() => setFilterButton(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            ))}
          </div>
        ) : value === "Meals" ? (
          <div className="flex w-full justify-center items-center overflow-x-auto scrollbar-hide my-4">
            <div
              className={`py-2 px-4 m-2 w-fit text-center rounded-xl cursor-pointer bg-white shadow-black border-2 border-slate-300 ${
                filterbutton === "meals" ? "bg-slate-900 text-white" : ""
              }`}
              onClick={() => setFilterButton("meals")}
            >
              Meals
            </div>
          </div>
        ) : value === "Quick Bites" ? (
          <div className="flex w-full justify-center items-center overflow-x-auto scrollbar-hide my-4">
            {["kothu parota", "eggs to order"].map((category) => (
              <div
                key={category}
                className={`py-2 px-4 m-2 w-fit text-center rounded-xl cursor-pointer bg-white shadow-black border-2 border-slate-300 ${
                  filterbutton === category ? "bg-slate-900 text-white" : ""
                }`}
                onClick={() => setFilterButton(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <motion.div
        ref={inViewRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-6 m-12"
      >
        {filter.map((e, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 * index, duration: 0.4 }}
          >
            <div className="rounded-3xl w-80 h-70 sm:w-60 sm:h-80 overflow-hidden relative drop-shadow-2xl">
              <div className="cursor-pointer overflow-hidden relative">
                <img src={e.image} className="w-full transition duration-150 ease-out hover:scale-110" alt={e.title} />
              </div>
              <div className="absolute drop-shadow-2xl top-0 bg-white p-2 rounded-br-2xl w-fit">
                <p>{e.title}</p>
              </div>
              <div className="absolute overflow-y-auto drop-shadow-2xl bottom-0 bg-white p-2 rounded-s-lg w-full ms-4 h-8 hover:h-48 sm:hover:h-48 transition-all duration-300 ease-in-out cursor-pointer">
                <p className="text-sm max-w-80">{e.description}</p>
                <span className="text-xs font-semibold">Rs. {e.price}</span>
                <div className="flex justify-center gap-4 my-2">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 overflow-hidden border border-gray-300 rounded-full">
                      <img src="https://i.pinimg.com/736x/c2/6d/bd/c26dbde0506ab037abd5eb7119edb06f.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#F9DB78">
                        <g><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /></g>
                        <g><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" /></g>
                      </svg>
                      <span className="text-sm">{e.rating}</span>
                    </div>
                    <span className="text-sm">({e.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Secondpage;
