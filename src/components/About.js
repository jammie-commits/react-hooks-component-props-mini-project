import React from 'react'

const defaultImage ="https://via.placeholder.com/215";

function About(props) {
    const { image = defaultImage, about } = props;

  return (
    <aside>
        <img src={image} alt="blog logo" />
        <p>{about}</p>
    </aside>
  )
}

export default About;