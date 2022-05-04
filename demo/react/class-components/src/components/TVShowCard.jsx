// import all dependencies
import React, { Component } from 'react'

// define the class 
export class TVShowCard extends Component {
  render() {
    const {title, description, episodes, hasWatched, hashtags} = this.props
    return (
      <fieldset>
          <legend> TVShowCard.jsx</legend>
          <h1> Title: {this.props.title}</h1>
          <p> Description: {this.props.description}</p>
          <p> Epidoes: {episodes}</p>
          <p> Watched? {hasWatched?"Yes": "No"}</p>
            <ul>
                {
                    hashtags.map((hashtag, i)=>{
                        return (
                            <li key={i}> {hashtag}</li>
                        )
                    })
                }
                {
                    hashtags.map((hashtag, i)=>(
                        <li key={i}> {hashtag}</li>
                    ))
                }

            </ul>

      </fieldset>

    )
  }
}

// export the class
export default TVShowCard
