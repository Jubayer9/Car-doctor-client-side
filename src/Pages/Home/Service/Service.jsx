import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [services,setServices] =useState([]);
    const [asc,setAsc]=useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/services?sort=${asc ? 'asc':'desc'}`)
        .then(res=>res.json())
        .then(data => setServices(data));
    },[asc])

    return (
       <div className="m-5"> 
         <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-600">Service</h3>
            <h2 className=" text-5xl">Our Service Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            <button onClick={()=> setAsc(!asc)} className="btn btn primary">{asc ? 'Price High to Low':'Price Low to High'}</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                services.map(service=><ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
        </div>
       </div>
    );
};

export default Service;
