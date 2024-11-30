import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    /*font-family: 'Arial', sans-serif;*/
    //font-family: "Gitalona";
    font-family:cursive;
    line-height: 1.6;
    color: #333;
    display:flex; 
    flex-direction:column;
    background-color: #9c9cdd;
  

  }
    .App{
  min-height: 150vh;
  color: white;
  background-image: url('./images/bckgr.jpg'); /*
  background-color: white; */ /* Uncomment if you want a fallback background color */
  background-size: cover; /* Optional: Ensures the image covers the full viewport */
  background-position: center; /* Optional: Centers the image 
background-image: radial-gradient(#f9bdbd 1.5px, transparent 1.5px);
background-size: 10px 10px;*/

}

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #edecec;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #edecec;
    text-align:center;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #fdeaea;
  }

   h4 {
    font-size: 1.55rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #555;
    
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #fff1f1;
    text-align:center;
  }

  a {
    font-size: 1.3rem;
    color: #ffffff;
    text-decoration: none;

    
    &:hover {
      text-decoration: underline;
      text-decoration: none;
      // color:#F9BDBD;
     color: #888BC0;
    }
  }

  .App-header{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    // background-color: #151659;
// background-color: #e0e0e994;
    z-index:1;
     margin-bottom: 2em;
}
   

  .icon{
 border: none; 
 display: flex; 
 align-Items: center; 
 font-size: 1.3em; 
 cursor: pointer;
// color:#F9BDBD;
color: #888BC0;
  
  }

 

.navigation {
                top: 0;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                margin: 0.4em;
                gap: 3em;
                align-items: flex-end;
                font-size: 1.5em;
           
}

     .calendar-day{
    color:white;
     transition:0.3s;
     &:hover{
      color:transparent;
      cursor:pointer;
     }
     }
  
`;

export default GlobalStyles;
