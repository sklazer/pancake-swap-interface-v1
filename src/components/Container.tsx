import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  width: 100%;
  padding: 32px 16px;

  background-image: url('/images/group-pancake.svg');
  background-repeat: no-repeat;
  background-position: bottom 24px center;
  background-size: 90%;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/bg.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    min-height: 90vh;
  }
`

export default Container
