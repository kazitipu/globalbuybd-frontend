import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

const CartHeader  = ({item, total, symbol, removeFromCart,history}) => (
            <li >
                <div className="media" style={{"cursor":"pointer"}} onClick={()=>history.push(`${process.env.PUBLIC_URL}/product/${item.id}`)}>
                    <img alt="" className="mr-3" src={item.colorUrl?item.colorUrl:item.pictures[0]} />
                    <div className="media-body">
                        <h4>{item.name.slice(0,50)}</h4>
                        <h4><span>{item.qty} x {symbol} {item.salePrice}</span></h4>
                    </div>
                </div>
                {/*<span>{cart}</span>*/}
                <div className="close-circle">
                    <a href={null} onClick={ removeFromCart}><i className="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </li>
        )



export default withRouter(CartHeader);
