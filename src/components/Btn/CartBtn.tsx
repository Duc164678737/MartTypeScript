import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {State} from '../../redux/reducers/index' 
import store from '../../redux/store'

type RootState = ReturnType<typeof store.getState>
const CartBtn = () => {
    
    // type IInit = {
    //     id: number,
    //     title: string,
    //     price: number,
    //     desc: string,
    //     img: string,
    // }
    const state = useSelector((state: State  ) => state.addItems)
    console.log(state.length);
    
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart 
                ({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn