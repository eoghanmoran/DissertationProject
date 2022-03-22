import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Below are some of the services we offer</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='Webpages/Home/images/Urgent.jpeg'
                            text='Click here if you are in Crisis and Require immediate help'
                            label='Crisis'
                            path='/crisisHelp'
                        />
                        <CardItem
                            src='Webpages/Home/images/Search.png'
                            text='Search for Support'
                            label='Search'
                            path='/searchHelp'
                        />
                        <CardItem
                            src='Webpages/Home/images/SupportMap.png'
                            text='Support Map'
                            label='Support Map'
                            path='/allServicesMap'
                        />
                        <CardItem
                            src='Webpages/Home/images/ContactUs.png'
                            text='Contact Us'
                            label='Contact'
                            path='/contactUs'
                        />
                    </ul>

                    {/* next cards would be placed below the above */}
                    {/* <ul className='cards__items'>
            <CardItem
              src='images/logo.jpeg'
              text='Support Map'
              label='Support Map'
              path='/services'
            />
            <CardItem
              src='images/logo.jpeg'
              text='Contact Us'
              label='Contact'
              path='/contactUs'
            />
          </ul> */}
                </div>
            </div>
        </div>
    );
}

export default Cards;
