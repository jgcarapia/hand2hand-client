import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './components/cards';
import Navbar from './components/navbar';
import HeadPhoto from './components/HeadPhoto';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="container">
      <Navbar />
      <HeadPhoto />
      <br/>
      <Card needs="Everything Lost in Fire" description="A Family of 6 looking for any items. They lost everything last night ..."/>
      <Card needs = "Shoes 10.5 Mens" description="Family in need of Shoes: 2 Boys looking for shoes size 10-10.5"/>

      <Card needs = "Size 7 shirt womens"  description="There is a lady that is looking for size 7 shirts in McAllen"/>
      <Card needs = "Looking for Beds" description="We are a church that houses homeless people. We are in need of Beds ..."/>
      <Footer />
      </div>



    );
  }
}

export default App;
