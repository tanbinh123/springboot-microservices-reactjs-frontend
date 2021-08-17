import React from 'react';
import ProductService from '../services/ProductService';

class ProductComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            product:[]
        }
    }

    componentDidMount(){
        
        ProductService.getProducts().then((response) => {
            this.setState({ product: response.data})
            console.log(response.data);
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Product List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                       
                            <td> Product Id</td>
                            <td> Product Name</td>
                            <td> Product Batch No</td>
                            <td> Product Price</td>
                            <td> Total Product</td>
                            
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.product.map(
                                product => 
                                
                                <tr key = {product.id}>
                                     <td> {product.id}</td>   
                                     <td> {product.pname}</td>   
                                     <td> {product.batchno}</td>   
                                     <td> {product.price}</td>   
                                     <td> {product.noofproduct}</td>  
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default ProductComponent