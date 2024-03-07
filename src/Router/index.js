import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Home, About, Product, Contact, SingleProduct, Cart, ErrorPage } from "../Pages";

export default function MyRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/about'} element={<About />} />
                <Route path={'/product'} element={<Product />} />
                <Route path={'/contact'} element={<Contact />} />
                <Route path={'/singleProduct/:id'} element={<SingleProduct />} />
                <Route path={'/cart'} element={<Cart />} />
                <Route path={'*'} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
};