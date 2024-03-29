import React , { useEffect, useState } from 'react'
import "./Quote.css"
import Loader from './Loader';
function Quote() {

    //function for input
    const [category, setCategory] = useState("success");
    const [quote, setQuote] = useState({});

    const[isLoading, setIsLoading] = useState(false);


    // function for data fetching data from API
    const generateQuote = async() =>{
      setIsLoading(true);
        console.log(category)
        const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
        console.log(url)
        const res = await fetch(url,{
            method: 'GET',
            headers: {
                'X-Api-Key': 'OLfHazMczcYJD5nL8PYmdQ==YAyOwP0xklItNhV2',
                "Content-Type": "application/json",
            },
        });
            
        //outputs
        const result = await res.json();
        setQuote(result[0]);
        setIsLoading(false);
    }
    // by default code ak bar run hoga 
     useEffect(()=>{
        generateQuote();
     },[])
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-blue-gray-500/40">
      
          {isLoading?(<Loader/>) :null }
  

      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {/* condition for loader: */}
        {
             isLoading?null:(
             quote.quote
          )}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
           {/* condition for loader: */}
        {
            isLoading?null:(
            quote.author)
          }
        </p>
      </div>
      <div className="flex justify-around p-6 pt-0">
        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="success">Success</option>
        <option value="knowledge">Knowledge</option>
        <option value="leadership">Leadership</option>
        <option value="learning">Learning</option>
        <option value="education">Education</option>
        </select>
        <button 
        onClick={generateQuote}
          className=" btn select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Generate
        </button>
      </div>
    </div>
  )
}

export default Quote