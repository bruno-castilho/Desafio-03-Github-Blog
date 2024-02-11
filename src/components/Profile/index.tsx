import { ArrowSquareOut } from 'phosphor-react'

import { Avatar, ProfileContainer, Info, User } from './styles'

import avatar from '../../assets/avatar.svg'
import github from '../../assets/github.svg'
import company from '../../assets/company.svg'
import followers from '../../assets/followers.svg'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src={avatar} alt="" />
      <div>
        <User>
          <strong>Cameron Williamson</strong>
          <a href="">
            <span>github</span>
            <ArrowSquareOut weight="bold" />
          </a>
        </User>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <Info>
          <div>
            <img src={github} alt="" />
            <span>cameronwll</span>
          </div>
          <div>
            <img src={company} alt="" />
            <span>Rocketseat</span>
          </div>
          <div>
            <img src={followers} alt="" />
            <span>32 seguidores</span>
          </div>
        </Info>
      </div>
    </ProfileContainer>
  )
}
