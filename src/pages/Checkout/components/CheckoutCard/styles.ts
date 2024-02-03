import styled from 'styled-components'

export const CheckoutCardWrapper = styled.div`
  padding: 0.5rem 0.25rem;

  display: flex;
  align-items: start;
  justify-content: space-between;
`

export const CheckoutInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  & img {
    width: 4rem;
    height: 4rem;
  }
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const DeleteButton = styled.button`
  background: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.09375rem;

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const Separator = styled.hr`
  border: 0;
  border-top: 1px solid ${(props) => props.theme['base-button']};

  margin: 1.5rem 0;
`

export const CartChangeAmount = styled.div`
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
