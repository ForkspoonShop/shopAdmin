import React from 'react';
import VisibleProducts from "./containers/VisibleProducts";
import AddProduct from "./components/AddProduct";
export default function App() {
    return (
        <div className="App">
            <AddProduct/>
            <VisibleProducts/>
        </div>
    );
}