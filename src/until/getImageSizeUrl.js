export default function (imgUrl,sizeX=140,sizeY = 140) {
  return imgUrl+`?param=${sizeX}y${sizeY}`
}