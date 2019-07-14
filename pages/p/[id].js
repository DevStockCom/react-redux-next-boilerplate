/* EXAMPLE OF DYNAMIC ROUTING */

import Layout from '../../components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Post = props => {
  const { name, summary, image } = props.show

  return (
    <Layout>
      <h1>{name}</h1>
      <p>{summary.replace(/<[/]?p>/g, '')}</p>
      <img src={image.medium} />
    </Layout>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const result = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await result.json()

  return { show }

}

export default Post