import styled from 'styled-components';

export const ReviewList = styled.ul`
  display: block;
`

export const ReviewItem = styled.li`
  margin-left: 10px;
  margin-right: 10px;
`

export const ReviewAbsence = styled.p`
  display: flex;
  justify-content: center;
  font-size: 50px;

  text-shadow:
    -1px -1px #FFF,
    -2px -2px #FFF,
    -1px 1px #FFF,
    -2px 2px #FFF,
    1px 1px #FFF,
    2px 2px #FFF,
    1px -1px #FFF,
    2px -2px #FFF,
    -3px -3px 2px #BBB,
    -3px 3px 2px #BBB,
    3px 3px 2px #BBB,
    3px -3px 2px #BBB;
  color: steelblue;
  transition: all 1s;

  :hover {
    color: gold;
  }

`
