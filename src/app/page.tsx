"use client";
import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Herosection from "./components/herosection/herosection";
import Services from './components/Services/services'
import Projectgallery from "./components/projectgallery/projectgallery";
import Projects from "./components/project/projects";
import TechStack from "./components/techstack/techstack";
import Portfolio from "./components/webdevportfolio/portfolio";
import Client from "./components/client/client";
import Bth from "./components/behindthescenes/bth";
import Companies from "./components/company/companies";
import ContactUs from "./components/contact/contact-us";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Herosection />
      </section>
      <section id="services">
        <Services />
      </section>
      <Projectgallery />
      <section id="blogs">
        <Projects />
      </section>
      <TechStack />
      <section id="portfolio">
        <Portfolio />
      </section>
      <Client />
      <Bth />
      <Companies />
      <ContactUs />
      <Footer />
    </div>
  );
}
