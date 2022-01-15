import React from 'react'
import { FooterContainer,FooterWrap,SocialMedia,WebsiteRights,SocialLogo,SocialMediaWrap,FooterLinksContainer, FooterLinksWrapper,FooterLinksItems,FooterLinkTitle,FooterLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About us  </FooterLinkTitle>
                              <FooterLink to='/signIn'>How it works</FooterLink>
                              <FooterLink to='/signIn'>Investors</FooterLink>
                              <FooterLink to='/signIn'>Terms of Services</FooterLink>    
                           </FooterLinksItems>
                           <FooterLinksItems>
                            <FooterLinkTitle>About us  </FooterLinkTitle>
                              <FooterLink to='/signIn'>How it works</FooterLink>
                              <FooterLink to='/signIn'>Investors</FooterLink>
                              <FooterLink to='/signIn'>Terms of Services</FooterLink>    
                           </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About us  </FooterLinkTitle>
                              <FooterLink to='/signIn'>How it works</FooterLink>
                              <FooterLink to='/signIn'>Investors</FooterLink>
                              <FooterLink to='/signIn'>Terms of Services</FooterLink>    
                           </FooterLinksItems>
                           <FooterLinksItems>
                            <FooterLinkTitle>About us  </FooterLinkTitle>
                              <FooterLink to='/signIn'>How it works</FooterLink>
                              <FooterLink to='/signIn'>Investors</FooterLink>
                              <FooterLink to='/signIn'>Terms of Services</FooterLink>    
                           </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                
                <SocialMedia>
                    <SocialMediaWrap>
                        {/* <SocialLogo to='/'>
                          Dollar
                        </SocialLogo> */}
                        <WebsiteRights>
                        Dollar © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
