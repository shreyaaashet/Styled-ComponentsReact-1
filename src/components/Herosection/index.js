import React from 'react'
import video from '../../video/video.mp4'
import { HeroBg, HeroContainer, Video } from './HerosectionElements'


const Herosection = () => {
    return (
        <>
        <HeroContainer>
            <HeroBg>
                {/* <Video>
                    <video src={video} type='video/mp4' autoPlay loop muted></video>
                </Video> */}
               <Video  src={video} type='video/mp4' autoPlay loop muted></Video>
            </HeroBg>
        </HeroContainer>
        </>
    )
}

export default Herosection
