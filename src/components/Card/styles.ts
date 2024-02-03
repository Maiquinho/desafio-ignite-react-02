import styled from 'styled-components'

export const CardWrapper = styled.div`
  position: relative;

  background: ${(props) => props.theme['base-card']};

  padding: 1.25rem 1.5rem;

  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  & img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;

  & span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;

    border-radius: 100px;

    padding: 0.25rem 0.5rem;
  }
`

export const Content = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  text-align: center;

  & h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const Footer = styled.footer`
  display: flex;
  gap: 1.4375rem;

  margin-top: 2.0625rem;
`

export const Price = styled.div`
  & > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    & > strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
    }
  }
`

export const Actions = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CartDispatchAmount = styled.div`
  background: ${(props) => props.theme['base-button']};

  padding: 0.53125rem 0.5rem;
  border-radius: 6px;

  min-height: 2.375rem;
  min-width: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  & > button {
    background: transparent;
    border: 0;
    line-height: 0;

    cursor: pointer;

    &:focus {
      box-shadow: none;

      & svg {
        fill: ${(props) => props.theme['purple-dark']};
      }
    }

    & svg {
      fill: ${(props) => props.theme.purple};
      transition: all 0.2s ease;

      &:hover {
        fill: ${(props) => props.theme['purple-dark']};
      }
    }
  }

  & > span {
    color: ${(props) => props.theme['base-title']};
  }
`

export const CartDispatchButton = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  padding: 0.5rem;

  line-height: 0;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  & svg {
    fill: ${(props) => props.theme['base-card']};
  }

  &:hover {
    background: ${(props) => props.theme.purple};
    transition: all 0.2s ease;
  }
`
