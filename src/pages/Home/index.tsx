import { useEffect, useState } from 'react'
import { Profile } from '../../components/Profile'
import { SearchForm, Publications } from './styles'
import { api } from '../../lib/axios'
import { Publication } from '../../components/Publication'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface User {
  login: string
}

export interface IssueType {
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: User
}

export function Home() {
  const [issues, setIssues] = useState<IssueType[]>([])
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function fetchIssues(query = '') {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:bruno-castilho/Desafio-03-Github-Blog`,
      },
    })

    setIssues(response.data.items)
  }

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <>
      <Profile />
      <section style={{ marginTop: '72px' }}>
        <SearchForm onSubmit={handleSubmit(handleSearchIssues)}>
          <div>
            <label htmlFor="">Publicações</label>
            <span>6 publicações</span>
          </div>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </SearchForm>

        <Publications>
          {issues.map((issue) => (
            <Publication key={issue.number} issue={issue} />
          ))}
        </Publications>
      </section>
    </>
  )
}
