import React, {Component} from 'react';
// Custom Components
import HeaderOne from './common/headers/header-one';
import HeaderTwo from './common/headers/header-two';
import HeaderThree from './common/headers/header-three';

import FooterOne from "./common/footers/footer-one";
import FooterTwo from "./common/footers/footer-two";
import FooterThree from "./common/footers/footer-three";

// ThemeSettings
import ThemeSettings from "./common/theme-settings"



class App extends Component {

    render() {
        return (
            <div>
                <HeaderThree logoName={'logo/14.png'}/>
                {this.props.children}
                <FooterOne logoName={'logo/14.png'}/>

                <ThemeSettings />

            </div>
        );
    }
}

export default App;
