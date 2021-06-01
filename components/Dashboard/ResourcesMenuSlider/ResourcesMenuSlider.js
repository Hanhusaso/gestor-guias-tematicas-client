import React, { Component } from "react";
import Slider from "react-slick";
import classNames from "classnames";
import { Icon, Button } from "semantic-ui-react";

const tabs = 1;

export default class ResourcesMenuSlider extends Component {
  state = {tabs}

  handleChange1 = () => {
    this.setState({tabs:1})
    this.props.setTabsp(1)
  }

  handleChange2 = () => {
    this.setState({tabs:2})
    this.props.setTabsp(2)
  }

  handleChange3 = () => {
    this.setState({tabs:3})
    this.props.setTabsp(3)
  }

  handleChange4 = () => {
    this.setState({tabs:4})
    this.props.setTabsp(4)
  }

  handleChange5 = () => {
    this.setState({tabs:5})
    this.props.setTabsp(5)
  }

  handleChange6 = () => {
    this.setState({tabs:6})
    this.props.setTabsp(6)
  }

  handleChange7 = () => {
    this.setState({tabs:7})
    this.props.setTabsp(7)
  }

  handleChange8 = () => {
    this.setState({tabs:8})
    this.props.setTabsp(8)
  }

  handleChange9 = () => {
    this.setState({tabs:9})
    this.props.setTabsp(9)
  }

  handleChange10 = () => {
    this.setState({tabs:10})
    this.props.setTabsp(10)
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4
    };

    return (
      <div className="resources-slider ">
        {/* <h2> Multiple items </h2> */}
        <Slider {...settings}>
          <div className={`resources-slider__item ${this.state.tabs == 1 ? ' active' : ''}`} 
          onClick={this.handleChange1}>
            <Icon name="book" size='large'/>
            <h4 className="m-0">Libros</h4>
          </div>
          
          {/* className="resources-slider__item"  */}
          
          <div className={`resources-slider__item ${this.state.tabs == 2 ? ' active' : ''}`} 
          onClick={this.handleChange2}>
            <Icon name="graduation" size='large'/>
            <h4 className="m-0">Tesis</h4>
          </div>

          <div className={`resources-slider__item ${this.state.tabs == 3 ? ' active' : ''}`} 
          onClick={this.handleChange3}>
            <Icon name="file outline" size='large'/>
            <h4 className="m-0">Revistas</h4>
          </div>

          <div className={`resources-slider__item ${this.state.tabs == 4 ? ' active' : ''}`} 
          onClick={this.handleChange4}>
            <Icon name="database" size='large'/>
            <h4 className="m-0">Enciclopedias y Diccionarios</h4>
          </div>

          <div className={`resources-slider__item ${this.state.tabs == 5 ? ' active' : ''}`} 
          onClick={this.handleChange5}>
            <Icon name="database" size='large'/>
            <h4 className="m-0">Bases de Datos</h4>
          </div>

          <div className={`resources-slider__item ${this.state.tabs == 6 ? ' active' : ''}`} 
          onClick={this.handleChange6}>
            <Icon name="window restore outline" size='large'/>
            <h4 className="m-0">Otros sitios web</h4>
          </div>

          <div className={`resources-slider__item ${this.state.tabs == 7 ? ' active' : ''}`} 
          onClick={this.handleChange7}>
            <Icon name="window restore outline" size='large'/>
            <h4 className="m-0">Publicaciones periódicas</h4>
          </div>

          <div className={`resources-slider__item ${this.state.tabs == 8 ? ' active' : ''}`} 
          onClick={this.handleChange8}>
            <Icon name="file video" size='large'/>
            <h4 className="m-0">Videos</h4>
          </div>

          <div className={`resources-slider__item ${this.state.tabs == 9 ? ' active' : ''}`} 
          onClick={this.handleChange9}>
            <Icon name="file outline" size='large'/>
            <h4 className="m-0">Test/Exámenes</h4>
          </div>

          <div className={`resources-slider__item ${this.state.tabs == 10 ? ' active' : ''}`} 
          onClick={this.handleChange10}>
            <Icon name="paperclip" size='large'/>
            <h4 className="m-0">Syllabus</h4>
          </div>
        </Slider>
      </div>
    );
  }
}