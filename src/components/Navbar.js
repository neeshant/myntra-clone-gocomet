import React, { Component } from 'react'
import {Link,Route} from "react-router-dom";
import logo from '../logo.svg';
import { domainToASCII } from 'url';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import SearchBar from './SearchBar';

//1.15.00 de kaldım
export default class Navbar extends Component{

    render(){
        return (
           <NavWrapper style={{backgroundColor:'white'}} className="navbar navbar-expand-sm navbar-light px-sm-5 bg-light">
               {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
               https://www.iconfinder.com/Makoto_msk */}
               <Link to = '/'>
               <img src='..\img\myntralogo.jpeg' alt="store" className="navbar-brand"/>

               </Link>
               {/* <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                    <Link to = "/" className="nav-link">
                        products
                    </Link>

                   </li>
               </ul> */}
                    <div className="ml-auto">
                    <div>
                            <Route
                            render={({ history }) => (
                                <SearchBar history={history}></SearchBar>
                            )}
                            ></Route>
                        </div>
                    </div>
               <Link to='/cart' className="ml-auto">
                   <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-heart" />
                       wishlist
                    </span>
                     
                   </ButtonContainer>

               </Link>



           </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    
}

`;