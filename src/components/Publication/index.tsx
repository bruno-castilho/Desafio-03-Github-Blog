import { Issue } from '../../pages/Home'
import { PublicationContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PublicationProps {
  issue: Issue
}

export function Publication({ issue }: PublicationProps) {
  return (
    <PublicationContainer>
      <div>
        <h3>{issue.title}</h3>
        <span>
          {formatDistanceToNow(issue.created_at, {
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{issue.body}</p>
    </PublicationContainer>
  )
}
