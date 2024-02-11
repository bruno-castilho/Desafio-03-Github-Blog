import { useEffect, useState } from 'react'
import { Profile } from '../../components/Profile'
import { Filter, Publications } from './styles'
import { api } from '../../lib/axios'
import { Publication } from '../../components/Publication'

export interface Issue {
  number: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchProfile() {
    const response = await api.get('/search/issues', {
      params: {
        q: 'repo:bruno-castilho/Desafio-03-Github-Blog',
      },
    })

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <>
      <Profile />
      <section style={{ marginTop: '72px' }}>
        <Filter>
          <div>
            <label htmlFor="">Publicações</label>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder="Buscar conteúdo" />
        </Filter>

        <Publications>
          {issues.map((issue) => (
            <Publication key={issue.number} issue={issue} />
          ))}
        </Publications>
      </section>
    </>
  )
}
