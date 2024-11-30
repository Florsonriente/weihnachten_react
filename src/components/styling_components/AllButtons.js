import styled from 'styled-components';

export const Button = styled.button`
  background-color:#151659 ;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  width:100px;

  &:hover {
    background-color: #888BC0;
  }
`;

export const CloseButton = styled.button`
  background-color: #f44; 
  color: white; 
  border: none;
  border-radius: 100%; 
  width: 15px; 
  height: 15px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px; 
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  position:absolute;
      top: 10%;
    right: 2%;

  &:hover {
    background-color: #c33; 
    transform: scale(1.1); 
  }

  &:focus {
    outline: none; 
  }
`;

export const PaginationButton = styled.button`
  background-color: rgb(119, 183, 239);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  width: 100px; 
  height: 40px; 

  &:hover {
    background-color: #888BC0;
  }
`;




