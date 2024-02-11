import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  height: 212px;
  padding: 2rem 2rem 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 8px;

  z-index: 0;

  gap: 32px;
  align-items: center;

  & > div {
    height: 100%;
  }
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin-bottom: 8px;

  strong {
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    font-size: 12px;
    line-height: 160%;

    display: flex;

    gap: 8px;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 30px;

  & > div {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`
