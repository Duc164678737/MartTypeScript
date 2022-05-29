import React,{useState} from 'react';
import {useParams} from 'react-router';
import DATA from '../Data';
import {useDispatch} from 'react-redux';
import {addItem, delItem} from '../redux/actions/index';
import { NavLink } from 'react-router-dom';
// import {AppDispatch} from '../redux/store'
// export const useAppDispatch = () => useDispatch<AppDispatch>()
const ProductDatail = () => {
    
    type IInit = {
        id: number,
        title: string,
        price: number,
        desc: string,
        img: string,
    }
    interface IId {
        proId: string
    }
    const [cartBtn, setCartBtn] = useState("Add to Card")
    const [buyProduct, setBuyProduct] = useState("Buy Now")

    const proId: any = useParams();
    const proDatail = DATA.filter(data => data.id == proId.id)
    const product = proDatail[0];
    
    const dispatch = useDispatch()

    const handleCart = (product: IInit) => {
        if(cartBtn === "Add to Card" || buyProduct ==="Buy Now") {
            dispatch(addItem(product));
            setCartBtn("Add Success")
            setBuyProduct("Buy Success")
        }
        else {
            dispatch(addItem(product));
            setCartBtn("Add to Card")
            setBuyProduct("Buy Now")
        }
    }   
  return (
    <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.img} alt={product.title} height="400px" />
                </div>
                <div className="col-md-6 ">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <hr />
                    <h2 className="my-4">{product.price}</h2>
                    <p className="lead">{product.desc}</p>
                    <button onClick={() => handleCart(product)} className="btn btn-outline-primary " >{cartBtn}</button>
                    <button onClick={() => handleCart(product)} className="btn btn-outline-primary m-3">
                       <NavLink className="nav-link" to="/checkout">{buyProduct}</NavLink>
                    </button>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default ProductDatail