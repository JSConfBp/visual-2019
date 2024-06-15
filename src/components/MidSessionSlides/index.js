import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import './index.scss'

import SponsorSlide from '../SponsorSlide'
import JSLogo from '../JSLogo'

import Abbyy from '../../../public/sponsors/abbyy.inline.svg'
import Auth0 from '../../../public/sponsors/auth0.inline.svg'
import Epam from '../../../public/sponsors/epam.inline.svg'
import Exadel from '../../../public/sponsors/exadel.inline.svg'
import Genesys from '../../../public/sponsors/genesys.inline.svg'
import Hasura from '../../../public/sponsors/hasura.inline.svg'
import Hotjar from '../../../public/sponsors/hotjar.inline.svg'
import Littledata from '../../../public/sponsors/littledata.inline.svg'
import Newrelic from '../../../public/sponsors/newrelic.inline.svg'
import Oracle from '../../../public/sponsors/oracle.inline.svg'
import Supercharge from '../../../public/sponsors/supercharge.inline.svg'
import Risingstack from '../../../public/sponsors/risingstack.inline.svg'
import CrabNebula from '../../../public/sponsors/crabnebula.inline.svg'
import CodeCool from '../../../public/sponsors/codecool.inline.svg'

import Wrike from '../../../public/sponsors/wrike.inline.svg'
import Xata from '../../../public/sponsors/xata.inline.svg'

const SLIDE_INTERVAL = 10000

const reset = (slides) => {
  slides.forEach((slide, i) => {
    slide.classList.remove('show')
  })
}

const next = (slides) => {
  let index = slides.findIndex((elem) => elem.classList.contains('show')) + 1

  if (index === slides.length) {
    index = 0
  }

  slides.forEach((slide, i) => {
    slide.classList.remove('show')
    if (i === index) {
      slide.classList.add('show')
    }
  })
}

const MidSessionSlides = ({ stage }) => {
  const { midSlide, coffee, lunch, event } = stage
  const slides = useRef(null)
  const slideShowInterval = useRef(0)

  useEffect(() => {
    slides.current = Array.from(window.document.querySelectorAll('.slideshow'))

    if (midSlide) {
      reset(slides.current)
      slides.current[0].classList.add('show')
      slideShowInterval.current = setInterval(
        () => next(slides.current),
        SLIDE_INTERVAL
      )
    } else {
      clearInterval(slideShowInterval.current)
    }

    return () => {
      reset(slides.current)
      clearInterval(slideShowInterval.current)
    }
  }, [midSlide, coffee, lunch])

  return (
    <div className={classnames('mid-session-slides')}>

      {(coffee || lunch) && (
        <div className="slideshow show">
          <h1>{`${coffee ? 'Coffee' : 'Lunch'} break`}</h1>

          <dl className="session-list">
            {stage.upcoming
              .filter((session) => !!session.name)
              .map((session) => (
                <React.Fragment key={session.topic}>
                  <dd>{session.start}</dd>
                  <dt>
                    {session.topic}
                    {session.name && (
                      <span className="session-name">by {session.name}</span>
                    )}
                  </dt>
                </React.Fragment>
              ))}
          </dl>
        </div>
      )} 

      <div className="sponsors slideshow">
        <div className="sponsors-mid">
          <Risingstack className="large" />
          <Supercharge className="large" />
          <CrabNebula className="large" />
        </div>
      </div>

      <div className="sponsors slideshow">
        <div className="sponsors-bottom">
        <div className="sponsor-container">
          <h4>Scholarship Support</h4>
          <CodeCool className="large" />
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default MidSessionSlides
