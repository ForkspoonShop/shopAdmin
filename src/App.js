import React from 'react';
import Loading from "./components/Loading";
import Header from "./components/Header";
import ModalShop from "./components/ModalShop";
import ProductsList from "./components/ProductsList";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <ProductsList/>
            <Loading/>
            <ModalShop/>
        </div>
    );
}