import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'

const Index = props => {
  return (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)
}

Index.getInitialProps = async function() {
  const result = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await result.json()

  return {
    shows: data.map(item => ({
      ...item.show,
      score: item.score,
    }))
  }
}

export default Index