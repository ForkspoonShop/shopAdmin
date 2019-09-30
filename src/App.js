import React from 'react';
import VisibleProducts from "./containers/VisibleProducts";
import AddProduct from "./components/AddProduct";
import Loading from "./containers/Loading";

export default function App() {
    return (
        <div className="App">
            <AddProduct/>
            <VisibleProducts/>
            <Loading/>
        </div>
    );
}