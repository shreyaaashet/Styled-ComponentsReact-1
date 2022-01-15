import { Button } from "../ButtonElements/ButtonElements"

import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, SubTiltle, TextWrapper, TopLine } from "./InfosectionElements"


const Infosection = ({lightBg,id,imgStart,img, 
    topLine, headLine, description,buttonLabel,alt,
    lightText, darkText}) => {

    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper >
                <InfoRow imgStart={imgStart} >
                   <Column1>
                   <TextWrapper>
                       <TopLine>{ topLine}</TopLine>
                       <Heading  lightText={ lightText}>{headLine}</Heading>
                       <SubTiltle darkText={darkText}>{description}</SubTiltle>
                   <BtnWrap>
                   <Button 
                  primary={'primary' ? 1 : 0}
                  dark={'dark' ? 1 : 0}
                  dark2={'dark2' ? 1 : 0}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                     to='home'>{buttonLabel}</Button>
                   </BtnWrap>
                  
                   </TextWrapper>
                   </Column1> 
                   <Column2>
                   <ImgWrap>
                   <Img src={img} alt={alt}/>
                 
                   </ImgWrap>
                   </Column2>
                </InfoRow>
            </InfoWrapper>

        </InfoContainer>
            
        </>
    )
}

export default Infosection
