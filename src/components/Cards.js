import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://assets.omron.com/m/5711486c5d56d2a5/Landscape_XL-IMG_2066_robotics_V2.jpg'
              text='We support and create custom solutions for your problems! Nothing is too complex to be asked.'
              label='We Provide'
              path='/services'
            />
            <CardItem
              src='https://www.bila.dk/Files/Billeder/BILA/galleri/UR/UR3/UR16_galleri01_720x440.jpg'
              text='Do you want to tweak our creations? Go ahead! With our IR10+ Pro plan, we support users fully custom code!'
              label='Product'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/IntelRobotics-Cover.jpg'
              text='Read about how we give an arm for every single project we create!'
              label='Info'
              path='/about'
            />
            <CardItem
              src='images/Development.jpeg'
              text='How do we create our projects, and develop robotics for your need?'
              label='Info'
              path='/about'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1516055619834-586f8c75d1de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBjYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              text='Want to get in touch? Do not hesitate, contact us here!'
              label='Contact'
              path='/about'
            />
            <CardItem
              src='https://www.bring.dk/en/services/parcels-and-cargo/to-companies/pallets-to-companies/_/image/2cd86603-346c-4328-bb06-153896b94f8a:99a13a2c71719fe164a8e1fa35fa73c5f19e418c/block-1000-600/Bring_anst%C3%A4lld_scannar_flera_paket.JPG.jpeg?quality=50'
              text='How do our products get from factory to our clients?'
              label='Services'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
