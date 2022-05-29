import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import DATA from '../Data';
import { State } from '../redux/reducers/index'
import { searchItem } from '../redux/actions'
const Product = () => {

  type IInit = {
    id: number,
    title: string,
    price: number,
    desc: string,
    img: string,
  }

  const [search, setSearch] = useState('')
  const searchText = useSelector((state: State) => state.searchItem)
  const dispatch = useDispatch()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    dispatch(searchItem(e.target.value))
  }

  const cartItem = (item: IInit) => {
    if (item.title.includes(search)) {
      return (
        <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
          <img src={item.img} className="card-img-top" alt={item.title} />
          <div className="card-body text-center">
            <h5 className="card-title">${item.title}</h5>
            <p className="load">${item.price}</p>
            <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <div className="input-group">
              <input value={search} onChange={handleSearch} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-primary">search</button>
            </div>
            <hr />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">

            {DATA.map(cartItem)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product