import React from 'react';
import VisibleProducts from "./containers/VisibleProducts";
import Loading from "./containers/Loading";
import Header from "./containers/Header";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <VisibleProducts/>
            <Loading/>
        </div>
    );
}