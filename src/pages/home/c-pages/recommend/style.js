import styled from 'styled-components'

const ContentWrapper = styled.div`
  width: 980px;
  margin:0 auto;
  background-color: #fff;
  display: flex;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`

const RecommendLeft = styled.div`
  width: 729px;
  padding: 20px 20px 40px 20px;
  
`
const RecommendRight = styled.div`
  width: 250px;
`
export {
  ContentWrapper,
  RecommendLeft,
  RecommendRight
}