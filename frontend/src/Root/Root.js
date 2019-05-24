import React, { Component } from 'react';
import { Dimmer, Loader, Card, Menu, Container, Button, Icon } from 'semantic-ui-react';
import './Root.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';

class Root extends Component {
  constructor(props) {
    super(props)

    this.state = {fitpics: []};
  }

  componentDidMount() {
    fetch("http://localhost:5000/hot", {method: 'GET', dataType:'json'})
      .then(r => r.json())
      .then(r => {
        this.setState((state) => {
          return {fitpics: r}
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    const { fitpics } = this.state;
    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    if (fitpics.length === 0) {
      return (
        <div>
          <Menu fixed='top' inverted borderless>
          <Container>
            <Menu.Item >
              lookbook
            </Menu.Item>
          </Container>
        </Menu>
          <Dimmer active>
            <Loader/>
          </Dimmer>
        </div>
      )
    }
    return (
      <div>
        <Menu fixed='top' inverted borderless>
          <Container>
            <Menu.Item >
              lookbook
            </Menu.Item>
          </Container>
        </Menu>
        <Slider {...settings}>
          {fitpics.map(i => {
            return (
              <div style={{display: 'inline-block'}}>
                <img className="image" src={i.url}/>  
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Root;