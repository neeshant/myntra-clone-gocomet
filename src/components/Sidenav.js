import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Sidenav(props){
    return(
    <div style={{textAlign:'left'}}>
        <br></br>
        <br></br>
        
        Fliters
        <div id="radio1">
            <Link to='/search/name/men'>
        <label for="rad1" id="answer1">Men</label>
        </Link>
        </div>
        <div id="radio2">
        <Link to='/search/name/women'>
        <label for="rad1" id="answer1">Women</label>
        </Link>
        </div>
        <div id="radio3">
        <Link to='/search/name/boy'>
        <label for="rad1" id="answer1">Boy</label>
        </Link>
        </div>
        <br></br>
        <hr/>
        Categories 
        <div id="radio1">
        <Link to='/search/name/shrit'>
        <label for="rad1" id="answer1">shrit</label>
        </Link>
        </div>
        <div id="radio2">
        <Link to='/search/name/pants'>
        <label for="rad1" id="answer1">Pants</label>
        </Link>
        </div>
        <div id="radio3">
        <Link to='/search/name/slim shrit'>
        <label for="rad1" id="answer1">slim shrit</label>
        </Link>
        </div>
        <br></br>
        <hr/>
        Brands
        <div id="radio1">
        <Link to='/search/name/adidas'>
        <label for="rad1" id="answer1">adidas</label>
        </Link>
        </div>
        <div id="radio2">
        <Link to='/search/name/nick'>
        <label for="rad1" id="answer1">nick</label>
        </Link>
        </div>
        <div id="radio3">
        <Link to='/search/name/gocommet'>
        <label for="rad1" id="answer1">gocommet</label>
        </Link>
        </div>
        
    </div>
    )
}