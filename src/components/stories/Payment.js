import React from 'react'
import creditCard from '../media/credit-card.png'
import paytm from '../media/paytm.png'
import visa from '../media/visa.png'
import debit from '../media/debit-card.png'
import master from '../media/master-card.png'
import cash from '../media/cash.png'

const Payment = () => {
    return (
        <div className = 'aboutRating'>
            <div className = 'ratingTitle'>
                <img src = {creditCard} className = 'ratingStar' alt = 'Card' />
                PAYMENT OPTIONS
            </div>
            <div className='ratingRating'>
                <img src ={cash} alt = 'Card' />
                <img src = {master} alt = 'Card' />
                <img src = {debit} alt = 'Card' />
                <img src = {visa} alt = 'Card' />
                <img src = {paytm} alt = 'Card' />
            </div>
        </div>
    )
}

export default Payment
