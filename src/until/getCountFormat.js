export default function getCountFormat (count){
  let countNum = typeof count === 'number'?count:Number(count)
  if(countNum<10000){
    return countNum
  }else {
    return Math.floor(countNum/10000)+'万'
  }
}