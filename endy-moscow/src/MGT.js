import React, { Component } from 'react'
import { Section } from 'react-fullpage'
import Swiper from 'react-id-swiper'
import arrowL from './arrow-l.svg'
import arrowR from './arrow-r.svg'

class ArrowL extends Component{
  render() {
    return(
      <img src={arrowL} alt="prev" />
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

export default class MGT extends Component {

  render() {
    let swiper = {
      lazy: true,
      navigation: {
        nextEl: '.my-swiper-button-next',
        prevEl: '.my-swiper-button-prev'
      },
      renderPrevButton: () => <div className="my-swiper-button-prev"><ArrowL/></div>,
      renderNextButton: () => <div className="my-swiper-button-next"><ArrowR/></div>,
    }
    return (
      <Section>
          <Swiper {...swiper}>
            <div className='slide'>
              <div className='content-wrapper'>
                <span className='p2'>2018, апрель-июнь</span>
                <h2>Название проекта</h2>
                <p>Mentitum nam cupidatat, id summis distinguantur an an aliquip philosophari quo
                  cillum illustriora voluptate nulla doctrina e vidisse quem eu quamquam
                  fidelissimae est et aute officia vidisse, quae nam officia aut illum, constias
                  quis ne cupidatat consectetur.</p>
              </div>
            </div>
            <div className='slide'>
              <div className='content-wrapper'>
                <span className='p2'>2018, апрель-июнь</span>
                <h2>Название проекта</h2>
                <p>Mentitum nam cupidatat, id summis distinguantur an an aliquip philosophari quo
                  cillum illustriora voluptate nulla doctrina e vidisse quem eu quamquam
                  fidelissimae est et aute officia vidisse, quae nam officia aut illum, constias
                  quis ne cupidatat consectetur.</p>
              </div>
            </div>
            <div className='slide'>
              <div className='content-wrapper'>
                <span className='p2'>2018, апрель-июнь</span>
                <h2>Название проекта</h2>
                <p>Mentitum nam cupidatat, id summis distinguantur an an aliquip philosophari quo
                  cillum illustriora voluptate nulla doctrina e vidisse quem eu quamquam
                  fidelissimae est et aute officia vidisse, quae nam officia aut illum, constias
                  quis ne cupidatat consectetur.</p>
              </div>
            </div>
            <div className='slide'>
              <div className='content-wrapper'>
                <span className='p2'>2018, апрель-июнь</span>
                <h2>Название проекта</h2>
                <p>Mentitum nam cupidatat, id summis distinguantur an an aliquip philosophari quo
                  cillum illustriora voluptate nulla doctrina e vidisse quem eu quamquam
                  fidelissimae est et aute officia vidisse, quae nam officia aut illum, constias
                  quis ne cupidatat consectetur.</p>
              </div>
            </div>
          </Swiper>
      </Section>
    )
  }
}
