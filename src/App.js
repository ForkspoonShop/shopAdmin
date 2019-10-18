import React from 'react';
import VisibleProducts from "./containers/VisibleProducts";
import Loading from "./containers/Loading";
import Header from "./components/Header";
import ModalShop from "./components/ModalShop";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <VisibleProducts/>
            <Loading/>
            <ModalShop/>
        </div>
    );
}