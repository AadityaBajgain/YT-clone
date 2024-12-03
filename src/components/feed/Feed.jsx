import React, { useEffect, useState } from 'react'
import "./Feed.css"
import moment from "moment"

import { API_KEY,valueConverter } from '../../data'
import { Link } from 'react-router-dom'
const Feed = ({category}) => {
    const [data,setData]=useState([]);
    const fetchData = async ()=>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }
    
    useEffect(()=>{
        fetchData();
    },[category])
  return (
    <div className="feed">
        {data.map((item,index)=>{

            // const viewCount = Math.round((item.statistics.viewCount)/1000)
            return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`}className="card" key={item.etag}>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{valueConverter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
            </Link>
            )
        })}
    </div>
   
  )
}

export default Feed
