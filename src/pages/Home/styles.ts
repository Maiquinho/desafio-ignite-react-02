import styled from 'styled-components'

export const Intro = styled.section`
  position: relative;
  padding: 5.875rem 0 6.75rem;
  margin-bottom: 2rem;

  &::before {
    content: '';

    position: absolute;
    display: block;

    width: 100%;
    height: 34rem;

    background: url('/intro-background.png');
    background-size: contain;

    z-index: -1;
  }
`

export const IntroContent = styled.div`
  display: flex;
  gap: 3.5rem;
`

export const IntroHeading = styled.section`
  flex: 1;

  & h1 {
    display: block;

    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};

    margin-bottom: 1rem;
  }

  & > span {
    display: block;

    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const DeliveryInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  margin-top: 4.125rem;

  & span {
    color: ${(props) => props.theme['base-text']};
    white-space: nowrap;
  }
`

export const DeliveryInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.34375rem;
`

interface IconBoxProps {
  background: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'
}

export const IconBox = styled.div<IconBoxProps>`
  background: ${(props) => props.theme[props.background]};

  padding: 0.5rem;
  border-radius: 64px;

  height: 2rem;
  width: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: ${(props) => props.theme.background};
  }
`

export const CoffeeList = styled.section`
  & h2 {
    font-size: 2rem;

    margin-bottom: 3.375rem;
  }
`

export const CoffeeGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`
