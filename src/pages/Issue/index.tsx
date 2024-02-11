import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { Header, Menu, Info, Title, Content } from './styles'
import { Link, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import github from '../../assets/github.svg'
import date from '../../assets/date.svg'
import comments from '../../assets/comments.svg'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { IssueType } from '../Home'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Issue() {
  const { id } = useParams()
  const [issue, setIssue] = useState<IssueType>({} as IssueType)

  async function fetchIssue() {
    const response = await api.get(
      `/repos/bruno-castilho/Desafio-03-Github-Blog/issues/${id}`,
    )

    console.log(response.data)
    setIssue(response.data)
  }

  useEffect(() => {
    fetchIssue()
  }, [])

  return (
    <>
      <Header>
        <Menu>
          <Link to={'/'}>
            <CaretLeft size={12} />
            <span>voltar</span>
          </Link>
          <a href={issue.html_url}>
            <span>ver no github</span>
            <ArrowSquareOut weight="bold" size={12} />
          </a>
        </Menu>
        <Title>{issue.title}</Title>
        <Info>
          <div>
            <img src={github} alt="" />
            <span>{issue.user?.login}</span>
          </div>

          <div>
            <img src={date} alt="" />
            <span>
              {issue.created_at &&
                formatDistanceToNow(issue.created_at, { locale: ptBR })}
            </span>
          </div>

          <div>
            <img src={comments} alt="" />
            <span>{issue.comments}</span>
          </div>
        </Info>
      </Header>
      <Content>
        <Markdown remarkPlugins={[remarkGfm]}>{issue.body}</Markdown>
      </Content>
    </>
  )
}
