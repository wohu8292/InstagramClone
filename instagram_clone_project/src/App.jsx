import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post';
import {db} from './firebase'

const userData=[
  {
    username:"Ronaldo",
    caption:"hello",
    imgURL:""
  },
  {
    username:"Messi",
    caption:"how are you?",
    imgURL:""
  },
  {
    username:"Mbape",
    caption:"Thanks",
    imgURL:""
  },
]

function App() {
  const [posts, setPosts] = useState(userData)

  useEffect(()=>{
    db.collection('posts')
  }, [])

  return (

    <div className="app">
      <div className="app__header">
        <img className='app__headerImage' 
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
        alt="" />
      </div>
      <h1>hello developer!</h1>

      <div>
        {userData.map((e,i)=>(
          <div key={i}>
            <Post username={e.username} caption={e.caption} imgURL={e.imgURL} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
