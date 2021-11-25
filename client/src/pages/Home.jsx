import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { useState,useEffect } from "react";

const Home = () => {


  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')))

  useEffect(() => {
    if(!user){
      setUser(null)
    }
   
  }, [user])
  return (
    <div>
      <Announcement />
      <Navbar user={user} setUser={setUser}/>
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
