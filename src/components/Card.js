import React from 'react';
import './Card.css';
import './Utilities.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mini Picture Gallery in the Home Page</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Image description, the beauties of programming.'
              label='Title-1'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Image description, the beauties of programming.'
              label='Title-2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Image description, the beauties of programming.'
              label='Title-3'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Image description, the beauties of programming.'
              label='Title-4'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Image description, the beauties of programming.'
              label='Title-5'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;