import { useNavigate } from 'react-router-dom'
import { IssueType } from '../../pages/Home'
import { PublicationContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PublicationProps {
  issue: IssueType
}

export function Publication({ issue }: PublicationProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/issue/${issue.number}`)
  }
  return (
    <PublicationContainer onClick={handleClick}>
      <div>
        <h3>{issue.title}</h3>
        <span>{formatDistanceToNow(issue.created_at, { locale: ptBR })}</span>
      </div>
      <p>{issue.body}</p>
    </PublicationContainer>
  )
}
