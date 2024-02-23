
import { Route, Routes } from 'react-router-dom'
import { Home, Cart } from '../pages'

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/shoppingcart/cart' element={<Cart />}></Route>
            </Routes>
        </div>
    )
}
