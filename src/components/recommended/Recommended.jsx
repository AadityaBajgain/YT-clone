import React, { useEffect, useState } from 'react'
import "./Recommended.css"

import { API_KEY, valueConverter } from '../../data'
import { Link } from 'react-router-dom'
const Recommended = ({ categoryId }) => {
  const [recommended, setRecommended] = useState([])

  const fetchRecommendation = async () => {
    const recommendedUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=29&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`


    await fetch(recommendedUrl).then(res => res.json()).then(data => setRecommended(data.items))
  }
  useEffect(() => {
    fetchRecommendation();
    console.log(recommended)
  }, [categoryId])
  return (
    <div className='recommended'>
      {recommended && recommended.map((item,index)=>{
        return(
          <Link to={ `/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={index}>
            <img src={item.snippet.thumbnails.default.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{valueConverter(item.statistics.viewCount)}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Recommended
