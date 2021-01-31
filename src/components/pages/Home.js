import React from 'react';
import '../../App.css';
import ShowCase from '../Showcase';
import Introduc from '../Introduc';
import Footer from '../Footer';
import Card from '../Card';
import Languages from '../Languages';


function Home() {
  return (
    <>
      <ShowCase />
      <Introduc />
      <Card />
      <Languages />
      <Footer />
    </>
  );
}

export default Home;
