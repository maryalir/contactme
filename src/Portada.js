import React, {Component} from 'react';
import FlippingPages from 'flipping-pages'
import 'flipping-pages/FlippingPages.css'
import './Portada.css'

class portada extends Component {

  // <h1>Maryali Rondon</h1>
  constructor(props) {
    super(props)
    this.totalPages = 4
    this.state = {
        selected: 0,
    }
    this.handleSelectedChange = this.handleSelectedChange.bind(this)
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
}

handleSelectedChange(selected) {
    this.setState({selected})
}

previous() {
    this.setState(state => ({
        selected: state.selected - 1
    }))
}

next() {
    this.setState(state => ({
        selected: state.selected + 1
    }))
}

render() {
    return (
        <div className="AppGrande">
            <div className='AppShort'>
                <div className="Myname">
                    <span className="MynameStyleA">Hi, I am: </span>
                    <span className="MynameStyleB">Maryali Rondon</span>
                </div>
                <div className="Proyectos">
                    <h1>PROJECTS</h1>
                </div>
                <div className='libro'>
                    <FlippingPages
                        className="App-pages"
                        direction="horizontal"
                        selected={this.state.selected}
                        onSelectedChange={this.handleSelectedChange}
                        /* touch-action attribute is required by pointer events
                        polyfill */
                        touch-action="none"
                    >
                        <div className="App-page App-page_brown"></div>
                        <div className="App-page App-page_green"></div>
                        <div className="App-page App-page_blue"> </div>
                        <div className="App-page App-page_orange"></div>
                    </FlippingPages>
                </div>    
                    {/* Buttons are required for keyboard navigation */}
                    <div  className='NextBeforeBotton'>
                        <button
                        onClick={this.previous}
                        disabled={!this.state.selected}
                    >Previous</button>
                        <button
                            onClick={this.next}
                            disabled={this.state.selected + 1 === this.totalPages}
                        >Next</button>
                    </div>

            </div>
        </div>

    )
}
};

export default portada;
