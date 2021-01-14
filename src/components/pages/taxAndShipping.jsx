import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {Helmet} from 'react-helmet'
import {getAllProductsTax} from '../../firebase/firebase.utils'
class TaxAndShipping extends Component {

  constructor(props) {
    super(props);
    this.state = {
        open: false,
        allProductsTax:[],
    };
}
    componentDidMount=async()=>{
      const allProductsTax = await getAllProductsTax()
      this.setState({allProductsTax})
  }

    render (){

        return (
            <div>
                 <Helmet>
                    <title>GlobalbuyBD | tax & shipping</title>
                </Helmet>
                <Breadcrumb title={'Tax and Shipping'}/>
                {/*about section*/}
                <section className="about-page  section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" style={{marginBottom:'3rem'}}>
                            <div class="table-responsive">
                            <table class="table table-striped">
  <thead style={{backgroundColor:'orange', color:'white'}}>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Product</th>
      <th scope="col"> below 1kg</th>
      <th scope="col"> 1kg++</th>
      <th scope="col">5kg++</th>
      <th scope="col">10kg++</th>
    </tr>
  </thead>
  {
    this.state.allProductsTax.length > 0? <tbody>
    {
      this.state.allProductsTax.map(product=>(<tr>
        <th scope="row">{product.id}</th>
        <td>{product.name}</td>
        <td>{product.below_1kg} tk/kg</td>
        <td>{parseInt(product.below_1kg) - 30} tk/kg</td>
        <td>{parseInt(product.below_1kg) - 60} tk/kg</td>
        <td>{parseInt(product.below_1kg) - 90} tk/kg</td>
      </tr>))
    }
  </tbody>:''
  }
 
</table>
</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default TaxAndShipping;