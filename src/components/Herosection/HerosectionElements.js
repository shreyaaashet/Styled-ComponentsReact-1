import styled from "styled-components";

export const HeroContainer=styled.div`
background:#0c0c0c;
display:flex;
justify-content:center;
align-items:center;
/* padding:0 30px; */
height:800px;
position:relative;
z-index:10000;
// : before styles
`;
 export const HeroBg=styled.div`
 position:0;
 right:0;
 bottom:0;
 left:0;
 width:100%;
 height:100%;
 overflow:hidden;`;


 export const Video =styled.video`
 width:100%;
 height:100%;
 -o-object-fit:cover;
 object-fit:cover;
 background:#232a34;`;