import React, {Component} from 'react';
import { Carousel, Jumbotron } from 'react-bootstrap';
import docks from './images/docks.jpg';
import LA from './images/la.jpg';
import ScrollableAnchor from 'react-scrollable-anchor'
import Splash from './splash'

export default class Welcome extends Component{

    constructor(props){
        super(props);
          this.state ={
            divClass: ['beginSplash'],
            textClass: [],
            logoClass:['hiddenLogo']
          }
      }
    
    componentDidMount(){
        console.log('INSIDE COMPONENT MOUNT!!')
        setTimeout(()=>{
            this.setState({textClass: ['splashTextFadeOut']})
            
        },1000)
        setTimeout(()=>{
            this.setState({logoClass:[' ']})
        },3000)
        setTimeout(()=>{
            this.setState({logoClass:['fadeInLogo']})
        },4000)
        setTimeout(()=>{
            this.setState({logoClass:['fadeOutLogo']})
        },5500)
        setTimeout(()=>{
            this.setState({divClass: ['fadeOut']})
            
        },6300)
    }
    render(){
        let language= this.props.language
        console.log('RENDERED!!!!!')
        console.log(this.state)   
        return(

            <ScrollableAnchor id={'splash'}>
                <div>
                    <Splash divClass={this.state.divClass}
                            textClass={this.state.textClass}
                            logoClass={this.state.logoClass}/>
                    <Jumbotron id='welcomeJumbo'  >
                        <div  id='ourWorkJumboText' className=' jumboTextBlack'>
                            { language==='eng' ?
                            <div>
                                <h1>Welcome</h1>
                            </div>
                            :
                            <div>
                                <h1>Bienvenido</h1>
                            </div>
                            }
                        </div>
                    </Jumbotron>


                    <div className='textBox'>
                        {
                        language==='eng' ?
                        <h2>
                        Your Brand is more than a logo or a business, your Brand has a story to tell, 
                        an unforgettable experience to create and the opportunity to see your product or service 
                        as a need that your audience wants to live.
                        <br />
                        <br />
                        Through a solid strategy of digital marketing, consulting, analysis
                        design, execution, and tracibility we implement or strengthen your online marketing campaigns.
                        </h2>
                        :
                        <h2>
                        El poder de una marca está en las historias que puede contar, en las experiencias que
                        construye, en la manera como se queda en la mente y corazón de sus audiencias, creando
                        identidad y apropiación de los productos o servicios.  
                        <br />
                        <br />
                        Implementamos y fortalecemos los canales digitales, a través de una sólida estrategia de
                        mercadeo digital fundamentada en la consultoría, análisis, diseño, ejecución y mecanismos de
                        medición que permiten llevar trazabilidad y efectividad.
                        </h2>
                        }

                        <div id='columns'className='clearfix'>
                        <div className='centered col-sm-12 col-md-4 '>
                            <h1><span className="glyphicon glyphicon-phone"></span>NewTech-digital</h1>
                        { language==='eng' ?
                            <h3>Consulting, Development and Administration</h3>
                            :
                            <h3>Consultoría, desarrollo y
                            administración</h3>
                            }
                        </div>

                        <div className='centered col-sm-12 col-md-4 '>
                            <h1><span className="glyphicon glyphicon-comment"></span>NewTech-social</h1>
                            { language==='eng' ?
                            <h3> Social Networking Strategies and Online Presence</h3>
                            :
                            <h3>Estrategia de redes
                            sociales y Publicidad
                            Online</h3>
                            }
                        </div>

                        <div className='centered col-sm-12 col-md-4 '>
                            <h1><span className='glyphicon glyphicon-bullhorn'></span>NewTech-ads<br/></h1>
                            { language==='eng' ?
                            <h3>Branding, Marketing Strategies and Events</h3>
                            :
                            <h3>Branding, Estrategia de
                            Mercadeo relacional,
                            Eventos</h3>
                            }
                        </div>
                    </div>







                    </div>

    
                </div>
            </ScrollableAnchor>
        );
    }

}