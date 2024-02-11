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

export const Filter = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  & > input {
    width: 100%;
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 12px 16px;
  }

  & > input:focus {
    border-color: ${(props) => props.theme.blue};
  }

  & > input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const Publications = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 48px;
  margin-bottom: 234px;
`
export const Publication = styled.div`
  width: 416px;
  height: 260px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 32px;
  cursor: pointer;

  &:hover {
    padding: 30px;
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  & > div {
    display: flex;
    gap: 16px;
  }

  & > div > h3 {
    width: 283px;
    font-size: 20px;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};
  }

  & > div > span {
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }

  & > p {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-top: 20px;
  }
`
