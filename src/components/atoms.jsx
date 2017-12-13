import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  animation: ${fadeIn} 1s forwards;
  opacity: 0;
`
export const SmallContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    animation: ${fadeIn} 1s forwards;
    opacity: 0;
    margin-left: 5%;
    margin-right: 5%;
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    animation: ${fadeIn} 1s forwards;
    opacity: 0;
    margin-left: 10%;
    margin-right: 10%;
`

export const LargeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    animation: ${fadeIn} 1s forwards;
    opacity: 0;
    margin-left: 25%;
    margin-right: 25%;
`

export const HeaderContainer = styled.div`
  align-self: flex-start;
  flex: 1;
  flex: 0 1 100%;
  font-size: 24px;
  padding-bottom: 20px;
`

export const MobileHeaderContainer = styled.div`
  align-self: flex-start;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 30px;
`

export const NavigationCard = styled.section`
  margin-top: 20px;
  padding: 35px 15px;
  border: 1px solid black;
  text-transform: uppercase;
  text-align: center;
`
export const LargeCategory = styled(Link)`
  color: #000;
  font-size: 18px;
  padding: 25px 25px;
  text-decoration: none;
  margin: 10px;
  margin-left: 20px;
  width: 30%;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0px;
  }

  p {
    color: grey;
  }
`

export const SmallCategory = styled(Link)`
    color: #000;
    font-size: 18px;
    padding: 25px 25px;
    text-decoration: none;
    margin: 10px;
    margin-left: 10px;
    width: 45%;

    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    }

    h2 {
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0px;
    }

    p {
      color: grey;
    }
`

export const Category = styled(Link)`
  color: #000;
  font-size: 18px;
  padding: 25px 25px;
  text-decoration: none;
  margin: 20px;
  margin-left: 20px;
  width: 35%;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0px;
  }

  p {
    color: grey;
  }`

export const MobileCategory = styled(Link)`
  color: #000;
  padding: 15px 15px;
  border: 1px solid black;
  text-decoration: none;
  margin-bottom: 20px;
  width:100%;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
    margin: 0px;
  }

  p {
    color: grey;
    font-size: 17px;
    margin-top: 5px;
  }
`

export const LargeExternal = styled.a`
  color: #000;
  font-size: 18px;
  padding: 25px 25px;
  text-decoration: none;
  margin: 10px;
  width: 30%;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0px;
  }

  p {
    color: grey;
  }
`
export const SmallExternal = styled.a`
    color: #000;
    font-size: 18px;
    padding: 25px 25px;
    text-decoration: none;
    margin: 10px;
    margin-left: 10px;
    width: 45%;

    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    }

    h2 {
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0px;
    }

    p {
      color: grey;
    }
`

export const External = styled.a`
    color: #000;
    font-size: 18px;
    padding: 25px 25px;
    text-decoration: none;
    margin: 20px;
    margin-left: 20px;
    width: 35%;

    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    }

    h2 {
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0px;
    }

    p {
      color: grey;
    }
`

export const MobileExternal = styled.a`
  color: #000;
  border: 1px solid black;
  padding: 15px 15px;
  text-decoration: none;
  margin-bottom: 20px;
  width:100%;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
    margin: 0px;
  }

  p {
    color: grey;
    font-size: 17px;
    margin-top: 5px;
  }
`

export const Footer = styled.footer`
  text-align: center;
`
