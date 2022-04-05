import React from "react";
import fakedate from './fakerdata.json';
import './App1.css';
import {useState} from "react";

function VideoRow({ video }) {
  
  function handleRow(name){
    
    setisselected(name)    

  }
  const [isselected,setisselected]=useState("flase");
  const color = (isselected===video.name) ? {backgroundColor:"black"} : { backgroundColor:null}
  return (
    <tr style={color} onClick={()=>handleClick(video.name)} >
      <td>{video.name}</td>
      <td>{video.year}</td>
      <td>{video.score}</td>
      <td>{video.size}</td>
      <td>{video.details ? "✅" : "❌"}</td>
      <td>{video.imginfo ? "✅" : "❌"}</td>
      <td>{video.comments ? "✅" : "❌"}</td>
    </tr>
  )
}

function VideoTableHeader() {
  return (
    <thead>
      <tr>
        <th>片名</th>
        <th>年份</th>
        <th>评分</th>
        <th>大小</th>
        <th>详情</th>
        <th>图片</th>
        <th>评论</th>
      </tr>
    </thead>
  )
}

function VideoTable({ videos }) {
  const [selected,setselected]=useState(null);


  const rows = [];
  videos.forEach((video) => {
    rows.push(
      <VideoRow
        video={video}
        key={video.name} />
    )
  })
  return (
    <table>
      <VideoTableHeader ></VideoTableHeader>
      <tbody>{rows}</tbody>
    </table>

  )
}


function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}


function FileterableVideoTable({ videos }) {
  return (
    <div  className="Layout-main">
      <SearchBar />
      <VideoTable videos={videos}></VideoTable>
    </div>

  )


}

function VideoDetails(){
  return (
    <div className="Layout-sidebar"> 
      <h1>这里是电影详情</h1>
    </div>
  )
}

function ScraperHome({videos}){
  return (
    <div>
      <FileterableVideoTable videos={videos}/>
      <VideoDetails />
    </div>
  )
}



export default function App() {
  return (<ScraperHome videos={fakedate}/>
  );
}