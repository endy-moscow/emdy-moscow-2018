import React, { Component } from 'react'
import { Section } from 'react-fullpage'
import Gallery from 'react-grid-gallery'
import MyLightBox from './MyLightbox.js'
import { StyleSheet, css } from 'aphrodite/no-important';

export default class AboutMe extends Component {
  render() {
    return (
      <Section>
        <div className='slide'>
          <div className='content-wrapper'>
      			<div className="section1">
              <button >приветики</button>
      				<MyLightBox/>
      			</div>

          </div>
        </div>
      </Section>
    )
  }
}
const gutter = {
	small: 2,
	large: 4,
};
const classes = StyleSheet.create({
	gallery: {
		marginRight: -gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			marginRight: -gutter.large,
		},
	},

	// anchor
	thumbnail: {
		boxSizing: 'border-box',
		display: 'block',
		float: 'left',
		lineHeight: 0,
		paddingRight: gutter.small,
		paddingBottom: gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			paddingRight: gutter.large,
			paddingBottom: gutter.large,
		},
	},

	// orientation
	landscape: {
		width: '30%',
	},
	square: {
		paddingBottom: 0,
		width: '40%',

		'@media (min-width: 500px)': {
			paddingBottom: 0,
		},
	},

	// actual <img />
	source: {
		border: 0,
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
		width: 'auto',
	},
});
