import React from 'react'
import './styles.css';

export const ItemList = (props) => {
  return (
    <div className='item-list'>
        <strong>{props.title}</strong>
        <p>{props.description}</p>
        <a href={props.url}>{props.url}</a>
        <hr />
    </div>
  )
}
