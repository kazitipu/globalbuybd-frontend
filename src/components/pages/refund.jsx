import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";

class Refund extends Component {

    constructor (props) {
        super (props)

    }

    render (){

        return (
            <div>
                <Breadcrumb title={'Return and Refund Policy'}/>
                {/*about section*/}
                <section className="about-page  section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" style={{marginBottom:'3rem'}}>
                                <h2 style={{marginTop:'3rem', textTransform:'none'}}>Return and Refund Policy </h2>
                                <p style={{marginBottom:'1rem'}}>At GlobalbuyBd we ensure great service to the customer, sometimes a customer can ask for a refund if they have any issue with the item he received.</p>
                                <h3 style={{marginTop:'3rem', color:'black'}}>Broken Product:</h3>
                                <p> If you received a broken and unusable product then you can ask for a refund in our help center. You can claim a partial refund for broken products. In this case, you need to send some videos and still pictures as evidence. </p>
                                <h3 style={{marginTop:'3rem', color:'black'}}>Wrong Product:</h3>
                                <p style={{marginBottom:'1rem'}}>If you received the wrong product, the wrong size or the wrong color, then you will get a refund.</p>
                                <h3 style={{marginTop:'3rem', color:'black'}}>Seller not shipped the product:</h3>
                                <p style={{marginBottom:'1rem'}}>The maximum time of reaching the product is 90 days(Depend on buyer protection time). After this time period, you can claim the refund. But if there any critical situations like special offer time, long vacation, etc, then we suggest you be patient.</p>
                                <h3 style={{marginTop:'3rem', color:'black'}}>Illegal Items:</h3>
                                <p style={{marginBottom:'1rem'}}>If you order any illegal items that violate the terms and conditions of Ali2BD then you may not get any refund.</p>
                                <h3 style={{marginTop:'3rem', color:'black'}}>Refund Processing:</h3>
                                <p style={{marginBottom:'1rem'}}>We will refund within 15-30 business days but sometimes it will take up to 60 days to clear your fund.</p>
                                <h3 style={{marginTop:'3rem', color:'black'}}>Return Policy</h3>
                                <p style={{marginBottom:'1rem'}}>If the product you received is not the wrong one, but you don't like this, there is no chance of product return. AliExpress has no policy on returning products. Therefore in our business, there is no chance for returning products.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Refund;