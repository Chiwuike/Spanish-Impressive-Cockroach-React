import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1616179054043-7570cd0d47d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODU2NjU2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription:
    'Discover the key features that set BlueGreen Productions apart from the rest.',
  feature1Title: 'Professional Video Production',
  feature2ImageAlt: 'Creative Editing Services Image',
  sectionTitle: 'Our Features',
  slogan: 'Elevate Your Video Content',
  secondaryAction: 'Contact Us',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1526348744409-ceb6eafefa4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODU2NjU1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  mainAction: 'View Our Portfolio',
  feature3Title: 'Strategic Marketing Support',
  feature2Title: 'Creative Editing Services',
  feature1ImageAlt: 'Professional Video Production Image',
  feature3ImageAlt: 'Strategic Marketing Support Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1694665136659-992b792789f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODU2NjU2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Our team of experts will bring your vision to life with high-quality video production services tailored to your needs.',
  feature3Description:
    "Boost your video content's reach and engagement with our strategic marketing support to help you achieve your goals.",
  feature2Description:
    'Transform your raw footage into captivating videos with our creative editing services that enhance storytelling.',
}

Features1.propTypes = {
  feature1ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.string,
  slogan: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  mainAction: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Description: PropTypes.string,
}

export default Features1
