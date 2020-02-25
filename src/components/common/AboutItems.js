import React, {Component} from 'react';

class AboutItems extends Component {

    render() {
        return (
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="timeline">
                            <li>
                                <div className="timeline-inverted">
                                    <img className="rounded-circle img-fluid" src={this.props.image} alt=""/>
                                </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                        <h4>{this.props.title}</h4>
                                        <h4 className="subheading">{this.props.subtitle}</h4>
                                        </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">{this.props.subsubtitle}</p>
                                            </div>
                                            </div>
                                        </li>
                                    </ul>
                            </div>
                    </div>
        )
    }
}

export default AboutItems;