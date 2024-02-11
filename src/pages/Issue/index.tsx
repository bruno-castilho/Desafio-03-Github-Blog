import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { Header, Menu, Info, Title, Content } from './styles'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'

import github from '../../assets/github.svg'
import date from '../../assets/date.svg'
import comments from '../../assets/comments.svg'

const markdown = '# Hi, *Pluto*!'

export function Issue() {
  return (
    <>
      <Header>
        <Menu>
          <Link to={'/'}>
            <CaretLeft />
            <span>voltar</span>
          </Link>
          <a href="">
            <span>ver no github</span>
            <ArrowSquareOut weight="bold" />
          </a>
        </Menu>
        <Title>JavaScript data types and data structures</Title>
        <Info>
          <div>
            <img src={github} alt="" />
            <span>cameronwll</span>
          </div>

          <div>
            <img src={date} alt="" />
            <span>Há 1 dia</span>
          </div>

          <div>
            <img src={comments} alt="" />
            <span>5 comentários</span>
          </div>
        </Info>
      </Header>
      <Content>
        <Markdown>{markdown}</Markdown>
      </Content>
    </>
  )
}
