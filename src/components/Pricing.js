import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card1'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>€x.xx</h4>
                <p>single payment</p>
                <ul className='pricing__container-features'>
                  <li>1 advantage</li>
                  <li>2 advantage</li>
                  <li>$3 advantaget</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose product
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card2'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>€x.xx</h4>
                <p>single payment</p>
                <ul className='pricing__container-features'>
                  <li>1 advantage</li>
                  <li>2 advantage</li>
                  <li>3 advantaget</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Product
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card3'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>€x.xx</h4>
                <p>single payment</p>
                <ul className='pricing__container-features'>
                  <li>1 advantage</li>
                  <li>2 advantage</li>
                  <li>3 advantaget</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Product
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
