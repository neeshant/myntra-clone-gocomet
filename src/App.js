import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from './components/Modal';
import SearchScreen from './components/SearchScreen';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from './components/Sidenav';

export default class App extends Component {
  render(){
  return (
    
    <React.Fragment>
      <Navbar/>
      <Container >
        <Row style={{ marginLeft: '0', marginRight: '0' }}>
          <div >
        <Route
        render=
        {({ history }) => (  <Sidenav history={history} ></Sidenav>)}></Route>
        </div>
        <Col style={{paddingLeft:'30px',paddingRight:'0'}}>
      <Switch>
        <Route path="/search/name/:name?" component={SearchScreen} exact></Route>
        <Route  exact path="/" component={ProductList} />
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
        
      </Switch>
      </Col>
      <Modal />
      </Row>
      </Container>
    </React.Fragment>
    
  )
  }
}

