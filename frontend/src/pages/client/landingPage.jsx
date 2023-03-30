import React from 'react';
import Menuitems from '../../components/Menuitems';
import Nav from '../../components/nav'
import Footer from '../../components/Footer';
import Cards from '../../components/card';
import Partners from '../../components/partners';
import Services from '../../components/service';
import Features from '../../components/features';
function landingPage(){

    return(
        <>
        <Nav/>
        <Menuitems/>
        <Features/>
        <Services/>
        <Cards/>
      
        
        <Partners/>
        <Footer/>
        </>
       

    );


}

export default landingPage;