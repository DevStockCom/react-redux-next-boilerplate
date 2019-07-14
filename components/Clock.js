import styled from 'styled-components'

const S = {
  Clock: styled.div`
    padding: 15px;
    display: inline-block;
    color: #82fa58;
    font: 50px menlo, monaco, monospace;
    background-color: #000;
    ${props => props.light && `
      background-color: #999;
    `}
  `
}

export default ({ lastUpdate, light }) => {
  return (
    <S.Clock light={light}>
      {format(new Date(lastUpdate))}
    </S.Clock>
  )
}

const format = t => t.toJSON().slice(11, 19) // cut off except hh:mm:ss