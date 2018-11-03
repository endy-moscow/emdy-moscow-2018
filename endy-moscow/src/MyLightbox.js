import React, { Component } from 'react'
import { Section } from 'react-fullpage'
import Lightbox from 'react-images'



export default class MyLightbox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      images: [
        {src: 'https://northbridgecos.com/wp-content/uploads/2016/01/sample4_l.jpg'},
        {src: 'https://images.unsplash.com/photo-1518144591331-17a5dd71c477'}
      ]
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.goOpen = this.goOpen.bind(this);
  }
  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }
  goOpen () {
    this.setState({
      lightboxIsOpen: true,
    });
  }
  render() {
    return (
      <Section>
        <div className='slide'>
          <div className='content-wrapper'>

              {this.state.images.map(image => (
                    <img
                      key={image.id} 
                      href={image.src}/>
                  )
                )
              }
              <Lightbox
          			currentImage={this.state.currentImage}
          			images={this.state.images}
                isOpen={this.state.lightboxIsOpen}
                backdropClosesModal={true}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                onClose={this.closeLightbox}
          			onClickImage={this.handleClickImage}
          			onClickNext={this.gotoNext}
          			onClickPrev={this.gotoPrevious}
          			onClickThumbnail={this.gotoImage}
          			onClose={this.closeLightbox}
                showCloseButton={false}
                preventScroll={true}
                imageCountSeparator={' / '}
          		/>
            <button onClick={this.goOpen}> Aded </button>

          </div>
        </div>
      </Section>

    )
  }
}
