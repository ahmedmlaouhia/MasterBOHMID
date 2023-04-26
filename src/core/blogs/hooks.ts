import data from './data.json'
import { useMemo, useState } from 'react'

const FILTERS = [
  {
    label: 'All',
    value: '*',
  },
  {
    label: 'DevOps',
    value: 'DevOps',
  },
  {
    label: 'Business intelligence',
    value: 'Business intelligence',
  },
  {
    label: 'Cloud computing',
    value: 'Cloud computing',
  },
]

export function useFilter() {
  const [filter, setFilter] = useState('*')

  function handleFilter(v: string) {
    setFilter(v)
  }

  const blogs = useMemo(() => {
    if (filter === '*') {
      return data
    }

    return data.filter(blog => blog.tags.includes(filter))
  }, [filter])

  return { filters: FILTERS, handleFilter, blogs }
}
