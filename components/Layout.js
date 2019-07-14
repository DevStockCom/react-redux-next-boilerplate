import Header from './Header'
import styled from 'styled-components'

const S = {
  Layout: styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid #DDD;
  `
}

const Layout = props => (
  <S.Layout>
    <Header />
    {props.children}
  </S.Layout>
)

export default Layout