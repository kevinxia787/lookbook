import React, { Component } from 'react';
import { Dimmer, Loader, Menu, Container, Button, Icon } from 'semantic-ui-react';
import './Root.css';
import Slider from 'react-slick';

class Root extends Component {
  constructor(props) {
    super(props)

    this.state = {fitpics: []};

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

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

  next() {
    this.slider.slickNext();
  }

  prev() {
    this.slider.slickPrev();
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
        <div>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {fitpics.map(i => {
              console.log(i.url)
              return (
                
                <div key={i.id} style={{display: 'inline-block'}}>
                  <img className="image" src={i.url}/>  
                </div>
              )
            })}
          </Slider>
          <div style={{marginTop: '-300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button secondary icon labelPosition='left' onClick={this.prev}>
              <Icon name='left arrow'/>
              Previous
            </Button>
            <Button secondary animated='vertical'>
              <Button.Content hidden>Save</Button.Content>
              <Button.Content visible>
                <Icon name='heart' />
              </Button.Content>
            </Button>
            <Button secondary icon labelPosition='right' onClick={this.next}>
                Next
              <Icon name='right arrow'/>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Root;