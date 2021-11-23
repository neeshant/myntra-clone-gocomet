import React, {Component} from 'react';
import Product from "./Product";
// DONT NEEED     import {storeProducts} from '../data';
import {ProductConsumer} from '../context';
/*
BENIM COZUMUM:
                            <ProductConsumer>
                                {

                                    ({}) => {
                                        return (<h1> {}</h1>);
                                    }
                                }
                            </ProductConsumer>
*/


export default class ProductList extends Component{

  /*        DONT NEEED state of this class BECAUSE OF the code>
   value.products.map( product => { return <Product key={product.id} product={product}/>;} )

    state={
        products: storeProducts,

  };
  */

    render(){
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                            <div className="row"> 
                            <ProductConsumer>
                                {

                                    value => {
                                        return (
                                            value.products.map( product => { return <Product key={product.id} product={product}/>;} )
                                            );
                                    }
                                }
                            </ProductConsumer>
                            </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
