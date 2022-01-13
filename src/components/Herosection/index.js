import React from "react";
import video from "../../video/video.mp4";
import { Button } from "../ButtonElements/ButtonElements";


import {
    ArrowInBoRightArrow,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  RightArrow,
  Video,
} from "./HerosectionElements";

const Herosection = ({hover,setHover,handleHover}) => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          {/* <Video>
                    <video src={video} type='video/mp4' autoPlay loop muted></video>
                </Video> */}
          <Video src={video} type='video/mp4' autoPlay loop muted></Video>
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account today and receive $250 in credit towards
            your ne payement.
          </HeroP>
          <HeroBtnWrapper>
              <Button
              primary="true"
              dark="true" to="signup" onMouseEnter={handleHover}
              onMouseLeave={handleHover}>
                Get started {hover ?<ArrowInBoRightArrow/> : <RightArrow/>  }
              </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Herosection;
