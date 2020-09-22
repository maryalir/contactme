import React, {Component} from 'react';
import FlippingPages from 'flipping-pages'
import 'flipping-pages/FlippingPages.css'
import VideoHome from './components/homeVideo'
import VideoHomedos from './components/homeVideodos'
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
                <div className="Proyectos">I CAN DO...</div>
                <div className='languages'>
                    <img className='laguagesOrden' src={require('./images/agile.jpg')} alt='aqui va react, css, git, etc'/>
                    <img className='laguagesOrden' src={require('./images/github-logo.jpg')} alt='aqui va react, css, git, etc'/>
                    <img className='laguagesOrden' src='https://pixels4kids.files.wordpress.com/2014/10/code-chillout.png?w=772' alt='aqui va react, css, git, etc'/>
                    <img className='laguagesOrden' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH5xbyHds8XxB1V8Cfwi-aeKRWSXPNysn5NOeI_ZBJbwuvfyPP&usqp=CAU' alt='aqui va react, css, git, etc'/>
                    <img className='laguagesOrden' src='https://www.netveloper.com/cw/eoo4oza8drvnrbtbsosg1350/cal_eoo4oza8drvnrbtbsosg1350_logo-Node.jpg' alt='aqui va react, css, git, etc'/>
                    <img className='laguagesOrden' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqgFF0dEzAh_MPnkxfPqwSplTGJexkJRx9JMHrFzIVJtGnnN0C&usqp=CAU' alt='aqui va react, css, git, etc'/>
                </div>
                <div className="Proyectos">PROJECTS</div>
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
                        <div className="App-page App-page_brown">
                            <div>
                                <p>At</p>
                                <p>the</p>
                                <p>beginning...</p>
                            </div>
                        </div>
                        <div className="App-page App-page_blue">
                        <div className="pagesonetwo">
                                <div className="pageone">
                                    <div className='Titulo'>Star War</div>
                                    <div className='Descrip'>
                                        <p className='userStory'>As a: </p><p></p> Star war movies lover<p></p>
                                        <p className='userStory'>I would like:</p> To have all the movies in just one place<p></p>
                                        <p className='userStory'>So I can:</p> Watch them wherever I want...
                                    </div>
                                </div>
                                <div className="pagetwo">
                                    <VideoHome /> 
                                </div>
                            </div>
                        </div>

                        <div className="App-page App-page_blue"> 
                            <div className="pagesonetwo">
                                <div className="pageone">                                
                                 <div className='Titulo'>Odd Jobs</div>
                                    <div className='Descrip'>
                                        <p className='userStory'>As a: </p><p></p> Contractor<p></p>
                                        <p className='userStory'>I would like:</p> To hire cualified people for specific task I need to be done...<p></p>
                                        <p className='userStory'>So I can:</p> Have always someone to help me solve my problems......
                                    </div>
                                </div>
                                <div className="pagetwo">
                                    <VideoHomedos /> 
                                </div>
                            </div>
                        </div>
                        <div className="App-page App-page_brown">
                            <div>
                                <p>It Will</p>
                                <p>be</p>
                                <p>continued...</p>
                            </div>
                        </div>
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
