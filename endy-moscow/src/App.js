import React, { Component } from 'react'
import {SectionsContainer, Section} from 'react-fullpage'
import MediaQuery from 'react-responsive'
import Swiper from 'react-id-swiper'
import './App.css'
import 'react-id-swiper/src/styles/css/swiper.css'
import arrowL from './arrow-l.svg'
import arrowR from './arrow-r.svg'
import MyLightbox from './MyLightbox'
import CocaCola from './Coca-Cola.js'

class ArrowL extends Component{
  render() {
    return(
      <img src={arrowL} alt="prev" style={{
          'width':'10px',
          'height':'10px',
        }}/>
    )
  }
}
class ArrowR extends Component{
  render() {
    return(
      <img src={arrowR} alt="next" />
    )
  }
}

class App extends Component {
  render() {
    let fullpageParams = {
        activeClass:      'active',
        sectionClassName:     'fullpage-slide flex-centred',
        anchors:              ['1', '2', '3', '4', '5'],
        className:            'App',
        navigation:           true,
        sectionPaddingTop:    '0px',
        sectionPaddingBottom: '0px',
        arrowNavigation:      true,
      };

    return (
      <SectionsContainer {...fullpageParams}>

        <CocaCola/>
        <CocaCola/>
        <Section>
          3
        </Section>
        <Section>
          4
        </Section>
        <Section>
          <div>
            <div>Device Test!</div>
            <MediaQuery query="(min-device-width: 1224px)">
              <div>You are a desktop or laptop</div>
              <MediaQuery query="(min-device-width: 1824px)">
                <div>You also have a huge screen</div>
              </MediaQuery>
              <MediaQuery query="(max-width: 1224px)">
                <div>You are sized like a tablet or mobile phone though</div>
              </MediaQuery>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
              <div>You are a tablet or mobile phone</div>
            </MediaQuery>
            <MediaQuery query="(orientation: portrait)">
              <div>You are portrait</div>
            </MediaQuery>
            <MediaQuery query="(orientation: landscape)">
              <div>You are landscape</div>
            </MediaQuery>
            <MediaQuery query="(min-resolution: 2dppx)">
              <div>You are retina</div>
            </MediaQuery>
          </div>

        </Section>

      </SectionsContainer>
    );
  }
}

export default App;
