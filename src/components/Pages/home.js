import React, {Component} from 'react';
import Header from '../common/header';
import image from '../assets/img/services.jpg';

//Re-Usable components
import Services from '../common/services';
import Portfolio from '../common/Portfolio';
import About from './About';
import Team from '../common/Team';
import Contact from './Contact';

class Home extends Component {

    render(){
        return (
            <div>
                <Header
                    title="Welcome To The Jungle!" 
                    subtitle="we've got fun and games!"
                    buttonText="Jungle"
                    link="/"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Portfolio />
                <About />
                <Team />
                <Contact />
            </div>
        )
    }
}

export default Home;