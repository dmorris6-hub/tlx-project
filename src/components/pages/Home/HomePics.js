import React from 'react'
import './HomePics.css'

function HomePics() {
    return (
        <div className="hp-container hp-row">
            <div className='hp-column'>
                <h3 className='hp-heading'>
                    Live Stream
                </h3>
                <img src='/images/hp-live-event.jpg' alt='Live Event' className="hp-img"/>
            </div>
            <div className='hp-column'>
                <h3 className='hp-heading'>
                    Past Videos
                </h3>
                <img src='/images/hp-past-videos.jpg' alt='Past Videos' className="hp-img"/>
            </div>

            
        </div>
    )
}

export default HomePics
