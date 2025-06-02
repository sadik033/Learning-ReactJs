import React, {useState} from 'react'
import {AnimateSharedLayout} from 'framer-motion'

const Card = (props) => {

  const [expanded, setExpanded] = useState(false)
  return (
      <AnimateSharedLayout>
        {
          expanded? (
            'Expanded'
          ):
          <CompactCard param = {props} />
        }
      </AnimateSharedLayout>
  )
}

function CompactCard ({param}){
  // const Png = param.png;
  return(
    <div className="CompactCard">
      <div className="radialBar">
        Chart
      </div>
      <div className="details">
        {/* <Png/> */}
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  )
}

export default Card