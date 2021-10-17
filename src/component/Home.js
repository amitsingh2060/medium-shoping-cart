import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Home.css'
import { addToCart } from './actions/cartActions'

class Home extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }

     handleClick = (id) => {
        this.props.addToCart(id)
     }

    render() {
        // console.log(this.props.items,"homeeeeeeeee");
        const itemList = this.props.items.map(e => {
            return (
                <div key={e.id}>
                   <img src={e.img} alt ={e.title}/>
                   <p>{e.title} && Price: {e.price}</p>
                   <button to="/" onClick={() => this.handleClick(e.id)}>Add</button>
                </div>
            )
        })
        return (
            <div>
                <h3>Home....</h3>
                <div className="home_main">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        items:state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
