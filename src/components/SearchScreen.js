import React, { Component } from 'react';
import Product from '../components/Product';
import { ProductConsumer } from '../context';
import { storeProducts } from '../data';

export default class SearchScreen extends Component{
    
    
    

  render(){
    const { name = 'all' } = this.props.match.params;
    const filteredProducts = storeProducts.filter((product) => {
      if (
        
        product.title.toLowerCase().includes(name) ||
        product.company.toLowerCase().includes(name)
      ) {
        return product;
      }
    });
    console.log(filteredProducts);
        return (
            <div>
                <div className="col-3">
                {
                    <>
                        <div className="py-5">
                            <div className="container">
                                    <div className="row"> 
                                    {
                                        (filteredProducts.length ==0)?(
                                            
                                            <div className = "container">
                                                <div className="row">
                                                <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                                                <h1 className="display-3">
                                                    404
                                                </h1>
                                                <h1>error</h1>
                                                <h2>page not found</h2>
                                                </div>
                                                </div>
                                            </div>
                                            
                                        ):
                                        (<React.Fragment>
                                            
                                                        <ProductConsumer>
                                                        {
                        
                                                            () => {
                                                                return (
                                                                    filteredProducts.map( product => { return <Product key={product.id} product={product}/>;} )
                                                                    );
                                                            }
                                                        }
                                                        </ProductConsumer>
                                               
                                        
                                        </React.Fragment>
                                            )}
                                    </div>
                            </div>
                        </div>
                    </>
                }
                </div>
            </div>
            
        )
    }
}

