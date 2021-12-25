import axios from "axios";
import React,{useState,useEffect} from "react";
import Country from "./Country";
import "./Home.css";


const Home = () => {
const [countries,setCountries] = useState([])


useEffect( () => {
 fetch(`https://restcountries.com/v2/all`)
 .then(response => response.json())
 .then(data => setCountries(data))
},[])

console.log(countries)
  return (
    <div>
   {
    countries.map((country) => <Country country={country} ></Country>)
   }
    </div>
  );
};

export default Home;
 // <div className="text-center">
    //  <div className="mt-5">
    //  <div>
    //  <input  type="search" name="search" placeholder="Search here" />
    //  </div>
    //  <br></br>
    //  <br></br>
    //  <input type="submit" className="btn btn-primary" onClick={handleClick} />
     