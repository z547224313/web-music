import React, {memo, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from "react-redux";
import ThemeHeaderRmc from "@/components/theme-header-rmc";
import {getNewAlbumAction} from "@/pages/home/c-pages/recommend/store/actionCreators";
import {NewAlbumWrapper} from "@/pages/home/c-pages/recommend/c-cpn/new-album/style";
import {Carousel} from 'antd'
import NewAlbumCover from "@/components/new-album-cover";
function NewAlbum(props) {
  const carRef = useRef()
  const {newAlbum} = useSelector(state => ({
    newAlbum: state.getIn(['recommend', 'newAlbum'])
  }))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRmc title='新碟上架'/>
      <div className='content'>
        <div className='rightArrow' onClick={event => carRef.current.prev()}></div>
        <div className="albums">
          <Carousel ref={carRef} dots={false}>
            {
              [0,1].map(item =>{
                return (
                  <div key={item} className='albums-list'>
                    {newAlbum.slice(item*5,(item+1)*5).map(iten => {
                      return(
                        <NewAlbumCover key={iten.picId} album={iten}/>
                      )
                    })}
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className='leftArrow' onClick={event => carRef.current.next()}></div>
      </div>
    </NewAlbumWrapper>
  );
}

export default memo(NewAlbum);