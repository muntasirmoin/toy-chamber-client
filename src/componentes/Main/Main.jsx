import React from 'react';
import NavBar from '../shared/NavBar/NavBar';
import Footer from '../shared/Footer/Footer';
import Tab from '../Tab/TabSub';
import TabSub from '../Tab/TabSub';
import Banner1 from '../Banner/Banner1';
import Banner2 from '../Banner/Banner2';
import BannerThree from '../Banner/BannerThree';
import BannerFour from '../Banner/BannerFour';




const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
         <Banner1></Banner1>
         <Banner2></Banner2>
           
            <TabSub></TabSub>
            <BannerThree></BannerThree>
            <BannerFour></BannerFour>

            

            <Footer></Footer>
            
        </div>
    );
};

export default Main;