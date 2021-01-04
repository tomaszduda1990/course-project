import React from 'react'
const Image = (props) => <img src={props.src} alt="event image" />

export default React.memo(Image)
