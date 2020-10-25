import React from 'react';

const styles = {
    backgroundColor: '#2f3640',
    border: '#aaa69d solid 1.5px',
    borderRadius: 12,
    boxAlign: 'center',
    color: '#f5f6fa',
    margin: '0px auto 15px',
    padding: 10,
    textAlign: 'center',
    width: 400,
    height: 100
}

function BlogTile (props) {
 return (
     <div style={styles}>
         <h2>{props.title}</h2>
         <p>{props.intro}</p>
     </div>
 )
}

export default BlogTile;