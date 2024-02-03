import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
`

export const Navigation = styled.nav`
  & ul {
    display: flex;
    gap: 0.875rem;

    & li {
      list-style-type: none;

      & a {
        display: block;
        border-radius: 6px;
      }
    }
  }
`

export const ActionButtonBase = styled.span`
  padding: 0.5rem;

  display: flex;
  align-items: center;

  border-radius: 6px;
`

export const Location = styled(ActionButtonBase)`
  background: ${(props) => props.theme['purple-light']};
  gap: 0.25rem;

  & span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
  }

  & svg {
    fill: ${(props) => props.theme.purple};
  }
`

export const Cart = styled(ActionButtonBase)`
  position: relative;

  background: ${(props) => props.theme['yellow-light']};

  & svg {
    fill: ${(props) => props.theme['yellow-dark']};
  }
`

export const Counter = styled.span`
  position: absolute;

  top: -0.5rem;
  right: -0.5rem;

  width: 1.25rem;
  height: 1.25rem;

  background: ${(props) => props.theme['yellow-dark']};

  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
`
