import React, { Component } from 'react'
import { Section } from 'react-fullpage'
import Swiper from 'react-id-swiper'
import bottleGif from './coca-cola/bottle.gif'


export default class CocaCola extends Component {

  render() {
    let swiper = {
      lazy: true,
      navigation: {
        nextEl: '.my-swiper-button-next',
        prevEl: '.my-swiper-button-prev'
      },
      renderPrevButton: () => <div className="my-swiper-button-wrapper"><div className="my-swiper-button-prev"/></div>,
      renderNextButton: () => <div className="my-swiper-button-wrapper"><div className="my-swiper-button-next"/></div>,
    }
    return (
      <Section>
          <Swiper {...swiper}>
            <div className='slide slide--coca-cola'>

              <div className='content-wrapper content-wrapper--coca-cola paper'>
                <img  alt="Gif инсталляции с бутылкой" src={bottleGif} style={{
                  'maxWidth':'100%',
                }} />
                <p>
                  Mentitum nam cupidatat, id summis distinguantur an an aliquip philosophari quo
                  cillum illustriora voluptate nulla doctrina e vidisse quem eu quamquam
                  fidelissimae est et aute officia vidisse, quae nam officia aut illum, constias
                  quis ne cupidatat consectetur.
                </p>
              </div>
              <div className='fade fade--coca-cola'/>

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
