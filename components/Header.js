import Link from 'next/link'
import styled from 'styled-components'

const S = {
  Link: styled.a`
    margin-right: 15px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  `
}

const Header = () => (
  <div>
    <Link href='/'>
      <S.Link>Home</S.Link>
    </Link>
    <Link href='/about'>
      <S.Link>About</S.Link>
    </Link>
    <Link href='/clock'>
      <S.Link>Clock</S.Link>
    </Link>
  </div>
)

export default Header