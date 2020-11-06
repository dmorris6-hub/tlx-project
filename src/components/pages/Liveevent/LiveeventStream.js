import React from 'react'
import './LiveeventStream.css'

function LiveeventStream() {
    return (
        <div className='ls-container'>
            <link href="https://vjs.zencdn.net/7.8.4/video-js.css" rel="stylesheet" />

            <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>

            <video
                id="my-video"
                class="video-js video-wrapper"
                controls=""
                preload="auto"
                width="800"
                height="450"
                poster="/images/logo-grunge-orbital.png"
                data-setup="{}">
                <source src="https://stream.mux.com/GijsCuH2l2Hdt2lXpyQ5THjFw0201Kn5zRzdcsxMKC6Dw.m3u8" 
                type="application/x-mpegURL" />

                <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noopener noreferrer"
                    >supports HTML5 video</a
                >
                </p>
            </video>

            <script src="https://vjs.zencdn.net/7.8.4/video.js"></script>
            
        </div>
    )
}

export default LiveeventStream
