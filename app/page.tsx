'use client'

import Image from "next/image";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <BlogList/>
      <Footer/>
    </div>
        
  );
}
