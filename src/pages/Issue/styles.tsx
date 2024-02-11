import styled from 'styled-components'

export const Header = styled.header`
  height: 168px;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 32px;
`
export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    font-size: 12px;
    line-height: 160%;

    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Title = styled.h3`
  font-size: 24px;
  line-height: 130%;
`

export const Info = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 8px;

  & > div {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`
export const Content = styled.main`
  padding: 40px 32px;

  p {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
  }

  pre {
    margin-bottom: 20px;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }
`
