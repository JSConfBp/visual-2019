import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import './index.scss'
import JSLogo from '../JSLogo'
import PolygonGreenDash from '../Polygons/PolygonGreenDash'
import PolygonPurpleDash from '../Polygons/PolygonPurpleDash'
import PolygonGreenLine from '../Polygons/PolygonGreenLine'
import PolygonGreenFilled from '../Polygons/PolygonGreenFilled'
import PolygonPurpleFilled from '../Polygons/PolygonPurpleFilled'
import PolygonPurpleLine from '../Polygons/PolygonPurpleLine'

const JSVisual = ({ presentation, color, logoOnly, midSlide }) => {
  return (
    <div
      className={classnames(
        'visual',
        presentation ? 'presentation-active' : '',
        color,
        logoOnly ? 'logo-only' : '',
        midSlide ? 'midsession-slides-active' : ''
      )}
    >
      {/* <div className="rectangle-left"></div>
      <div className="rectangle-right"></div>
      <div className="rectangle-bottom"></div>
       */}
      <div className="logo-container">
        <JSLogo className="logo" variant="full" />
      </div>
      <div className="big-rectangle"></div>

      <div className="deco-1">
        <PolygonGreenLine />
      </div>
      <div className="deco-2">
        <PolygonPurpleLine /> 
      </div>
      <div className="deco-3">
        <PolygonGreenFilled />
      </div>
      <div className="deco-4">
        <PolygonPurpleFilled />
      </div>

      <div className="deco-5">
        <PolygonPurpleLine />
      </div>

      <div className="deco-6">
        <PolygonGreenLine />
      </div>
      <div className="deco-7">
        <PolygonPurpleLine />
      </div>
      <div className="deco-8">
        <PolygonPurpleFilled />
      </div>

      <div className="deco-9">
        <PolygonPurpleFilled />
      </div>
      <div className="deco-10">
        <PolygonGreenFilled />
      </div>
      <div className="deco-11">
        <PolygonGreenLine />
      </div>
      {/* <PolygonGreenDash />
          <PolygonPurpleLine /> 
        <PolygonPurpleDash />
        <PolygonGreenLine />
        <PolygonPurpleFilled />
        <PolygonGreenFilled />
        */}
    </div>
  )
}

export default JSVisual
