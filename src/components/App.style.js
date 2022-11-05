import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-bottom: 20px;
  padding: 15px;

  background-color: #e9e9e9;
  box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.2),
    0px 10px 10px 0px rgba(0, 0, 0, 0.14), 0px 10px 10px 0px rgba(0, 0, 0, 0.12);

  
  `;

export const NavBtn = styled(NavLink)`
padding: 12px;
width: 120px;
cursor: pointer;
background: #e9e9e9;
color: black;
transition: 0.5s ease;
border-radius: 10px;
text-align: center;
transition: 0.1s ease;
box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.7);

&.active {
  background-color: #a9a9a9;
  color: black;
  box-shadow: inset 0px 3px 3px 4px rgba(0, 0, 0, 0.5);
}

    :hover,
    :focus {
      background: #a9a9a9
      transform: translateY(2px);
  box-shadow: 0px 7px 8px -5px rgba(0, 0, 0, 0.2),
    0px 8px 9px 0px rgba(0, 0, 0, 0.14), 0px 5px 15px 0px rgba(0, 0, 0, 0.12);
    }

    :active {
      transform: translateY(4px);
      box-shadow: inset 0px 3px 3px 4px rgba(0, 0, 0, 0.5);
    }
`;
