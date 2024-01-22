import styled from 'styled-components'

export const SuccessHeading = styled.div`
  margin-top: 5rem;

  & h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};

    margin-bottom: 0.25rem;
  }
  & span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SuccessContent = styled.section`
  margin-top: 1.75rem;

  display: flex;
  align-items: center;
  gap: 6.375rem;
`

export const OrderInfo = styled.div`
  flex: 1;

  background: linear-gradient(
    to right,
    ${(props) => props.theme['yellow-dark']},
    ${(props) => props.theme.purple}
  );
  padding: 1px;
  border-radius: 6px 36px 6px 36px;

  overflow: hidden;

  & section {
    background: ${(props) => props.theme.background};

    border-radius: 4px 34px 4px 34px;

    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const OrderInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & span,
  & strong {
    color: ${(props) => props.theme['base-text']};
  }
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
