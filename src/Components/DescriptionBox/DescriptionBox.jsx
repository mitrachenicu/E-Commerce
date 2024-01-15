import React from 'react'
import '../DescriptionBox/DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio natus rerum veniam quos vitae consectetur? Culpa magni eum in sed pariatur labore eos, inventore sint incidunt ipsa, eius fugiat deserunt, modi itaque dolor? Dolore, voluptate laborum inventore nam asperiores in earum fugiat odio hic ipsum pariatur explicabo. Nulla velit illo unde, adipisci numquam odio laborum!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam praesentium, doloremque aperiam quidem blanditiis nihil optio? Ullam, eaque incidunt odio officiis sequi nam quam eius consequuntur sunt.</p>
            </div>
        </div>
    )
}

export default DescriptionBox