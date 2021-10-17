import React, { Component } from 'react'
import { connect } from 'react-redux'
import {subtractQuantity,addQuantity} from './actions/cartActions'
 class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    handleAddQuant = (id) => {
       this.props.addQuantity(id)
    }
    handleSubQuant = (id) => {
      this.props.subtractQuantity(id)
    }

    render() {
        const show = this.props.items.length ? (
            this.props.items.map(e => {
                return(
                    <div key={e.id}>
                            {e.quant}
                    <h1>  {e.price}</h1>
                    <button onClick={() =>this.handleAddQuant(e.id)}>Inc</button>
                    <button onClick={() => this.handleSubQuant(e.id)}>Dec</button>
                    </div>
                )
            })
        ) : <p>jbjhj</p>
        console.log(this.props.items,"cartttt");
        return (
            <div>
                Cart........
                <h1>Quantity: {show}</h1>
                <p>total: {this.props.total}</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items : state.addedItems,
        total:state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity:(id) => {dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
