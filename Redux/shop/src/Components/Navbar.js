import React,{Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand" >Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navBar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/addProduct" className="nav-link" >Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/removeProduct" className="nav-link" >Remove Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link" >Cart</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;