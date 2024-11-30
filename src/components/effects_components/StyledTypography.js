import styled from 'styled-components';

export const TypographyWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  max-width:100%;
  text-align: center;
  overflow: hidden;
  position: relative;
 left: 50%;
 transform: translate(-50%, 50%);
background-color: #e0e0e994;
    border-radius: 2.5em;
    width: fit-content;
    padding: 1em;

`;

export const StyledWord = styled.div`
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  color: #EF6503;
   
  display: inline-block;
   line-height: §rem;
  flex-wrap:wrap;
text-shadow: 2px 2px #ff0000;
  & span {
    transition: transform 1.3s ease-in-out, color 1.3s ease-in-out;
    display: inline-block;
  }

  & span:hover {
    transform: translateZ(50px) rotate(815deg) scale(0.8);
     cursor:pointer;
     font-weight: bold;
  }

  & span:active {
    transform: translateZ(50px) rotate(-65deg) scale(0.75);
     cursor:pointer;
     font-weight: bold;
  }
`;
