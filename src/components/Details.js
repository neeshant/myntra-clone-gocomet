import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link,Redirect} from 'react-router-dom';
import {ButtonContainer} from './Button';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default class Details extends Component {
    render() {
        
        return (
            <ProductConsumer>
                {      
                    
                     (value) => {
                        // between  2.40.00-2.58.00
                        //Before check
                        //console.log(value.detailProduct);
                        //Next
                        
                        var {id, company, img, info, price, title, inCart,size} = value.detailProduct;
                        return (
                            <div className="container py-5">
                                {/*title */}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>
                                        {title}
                                    </h1>
                                    </div>
                                </div>
                                 {/* end of title */}
                                 
                                 {/* product info */}
                                    <div className = "row">
                                    <div className = "col-10 mx-auto col-md-6 my-3">

                                    <TransformWrapper initialScale={1}>
                                    
                                        <TransformComponent>
                                        <img src={img} className ="img-fluid" alt="product"/>
                                        </TransformComponent>
                                        
                                    </TransformWrapper>
                                    
                                    </div> 
                                {/* product text */}
                                    <div className = "col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>model : {title}</h2>
                                        <h4 className = "text-title text-uppercase text-muted mt-3 mb-2">
                                            Made by : <span className = "text-uppercase">{company}</span>
                                        </h4>
                                        <h4 className = "text-blue">
                                            <strong>
                                                price : <span>$</span>{price}
                                            </strong>
                                        </h4>
                                        <p className = "text-capitalize font-weight-bold mt-3 mb-0">
                                            some info about product :
                                            <p className = "text-muted lead">
                                            {info}
                                            </p>
                                            <div>
                                            {/* for buttons */}
                                            <div>
                                            <>
                                            
                                            
                                                <button style={{borderRadius:'25px',backgroundColor:'white',border:'0px'}} onClick={size = "S"}>S</button>
                                                <button style={{borderRadius:'25px',backgroundColor:'white',border:'0px'}} onClick={size = "M"}>M</button>
                                                <button style={{borderRadius:'25px',backgroundColor:'white',border:'0px'}} onClick={size = "L"}>L</button>
                                                <button style={{borderRadius:'25px',backgroundColor:'white',border:'0px'}} onClick={size = "XL"}>XL</button>
                                            
                                            
                                            </>
                                            </div>
                                            <Link to = '/'>
                                                <ButtonContainer>
                                                    back to products
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer cart disabled = {inCart?true:false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                                

                                                //3.07
                                            }}>
                                                    {inCart?"inCart":"add to wishlist"}
                                            </ButtonContainer>

                                            </div>
                                        </p>

                                        </div>  
                                    </div>
                                 {/* end of product info */}



                            </div>
                        );

                    }
                }
            </ProductConsumer>
        )
    }
}
