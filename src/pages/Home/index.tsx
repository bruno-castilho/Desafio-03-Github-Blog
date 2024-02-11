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

export interface Issue {
  number: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function fetchProfile(query = '') {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:bruno-castilho/Desafio-03-Github-Blog`,
      },
    })

    setIssues(response.data.items)
  }

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchProfile(data.query)
  }

  useEffect(() => {
    fetchProfile()
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
