import { ArrowSquareOut } from 'phosphor-react'

import { Avatar, ProfileContainer, Info, User } from './styles'

import github from '../../assets/github.svg'
import company from '../../assets/company.svg'
import followers from '../../assets/followers.svg'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface User {
  login: string
  name: string
  html_url: string
  blog: string
  followers: number
  avatar_url: string | null
  company: string | null
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User)

  async function fetchProfile() {
    const response = await api.get('/users/bruno-castilho', {})
    setUser(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContainer>
      <Avatar src={user.avatar_url ? user.avatar_url : ''} alt="" />
      <div>
        <User>
          <strong>{user.name}</strong>
          <a href={user.html_url}>
            <span>github</span>
            <ArrowSquareOut weight="bold" />
          </a>
        </User>
        <p>{user.blog}</p>
        <Info>
          <div>
            <img src={github} alt="" />
            <span>{user.login}</span>
          </div>
          {user.company && (
            <div>
              <img src={company} alt="" />
              <span>{user.company}</span>
            </div>
          )}
          <div>
            <img src={followers} alt="" />
            <span>{user.followers}</span>
          </div>
        </Info>
      </div>
    </ProfileContainer>
  )
}
