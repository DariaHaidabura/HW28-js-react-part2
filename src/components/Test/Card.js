import React from 'react';
import { addCart, removeCart } from '../../redux/actions/cart'
import cart from '../../redux/reducers/cart';
import { useSelector } from "react-redux";




function Card({cart}) {
  return(
    <div>
      <h2 style={{textAlign:'center'}}>Корзина {cart.totalCount}</h2>
      <ul>
        {cart.todos.map((todo) =>
        <li>{todo.title}</li>
        )}
      </ul>
    </div>
  )
}

export default Card;