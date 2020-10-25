import React from 'react';
import BlogTile from './BlogTile'

const posts = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]

function App() {
  const introLength = (intro) => {

    if(intro.length >= 25){
      return intro.substring(0, 24) + "..."
    }

    return intro;
  }
  
  return (
    <div className="App">

      {posts.map((el, index) => {
        return <BlogTile key={el.id} title={el.title} intro={introLength(el.intro)}></BlogTile>
      })}
      
    </div>
  );
}

export default App;
