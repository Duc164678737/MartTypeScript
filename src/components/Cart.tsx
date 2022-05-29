import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Data from '../Data'
import { addItem, delItem } from '../redux/actions/index'
import { State } from '../redux/reducers/index'
import store from '../redux/store'

const Cart = () => {
    type IInit = {
        id: number,
        title: string,
        price: number,
        desc: string,
        img: string,
    }

    const [changeProduct, setChangeProduct] = useState(1)
    const state = useSelector((state: State) => state.addItems)
    const proId: any = useParams();
    const proDatail = Data.filter(data => data.id == proId.id)
    const product = proDatail[0];
    const dispatch = useDispatch()

    const handleClose = (item: IInit) => {
        dispatch(delItem(item))
    }

    const handlePlus = (product: IInit) => {
        dispatch(addItem(product));
        setChangeProduct(changeProduct + 1)
        
    }
    const handleMinus = () => {
        setChangeProduct(changeProduct - 1)
        if (changeProduct <= 0) {
            setChangeProduct(0)
        }
    }
    
    const cartItem = (cartItem: IInit) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button
                        onClick={() => handleClose(cartItem)}
                        className="btn-close float-end" aria-label="Close" >
                    </button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title}
                                height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                            <div className="row align-items-end justify-content-center  mx-auto">
                                <button className="col-md-2 btn btn-outline-primary mt-5  mx-1"
                                    onClick={handleMinus}
                                >-</button>
                                <button className="col-md-2 btn btn-outline-primary mt-5 mx-2">{changeProduct}</button>
                                <button className="col-md-2 btn btn-outline-primary mt-5  mx-1"
                                    onClick={() => { handlePlus(cartItem) }}
                                >+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5" >
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto" >Proceed to Checkout</NavLink>
                </div>
            </div>
        )
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItem)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart