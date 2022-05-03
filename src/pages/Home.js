import React, { useState } from 'react'
import { PhotoList } from '../components/PhotoList'

export default function Home() {
    const [photos] = useState([
        {   id: "1",
            title: "scooby", 
            category: "dogs",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            url: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=pexels-lumn-406014.jpg&fm=jpg"
        },
        {   id: "2",
            title: "scooby2",
            category: "dogs", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            url: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {   id: "3",
            title: "Tommy",
            category: "cats", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            url: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {   id: "4",
            title: "Tommy2",
            category: "cats", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            url: "https://thumbs.dreamstime.com/b/little-cats-20284533.jpg"
        },
        {   id: "5",
            title: "Bunny",
            category: "rabbits", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            url: "https://images.pexels.com/photos/104373/pexels-photo-104373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {   id: "6",
            title: "Bunny2",
            category: "rabbits", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            url: "https://naldzgraphics.net/wp-content/uploads/2011/02/2-rabbits_are_quiet_by_lostindistractions.jpg"
        },
        {   id: "7",
            title: "Snakey",
            category: "snakes", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            url: "https://images.pexels.com/photos/80474/grass-snake-snake-serpentes-natrix-80474.jpeg?cs=srgb&dl=pexels-pixabay-80474.jpg&fm=jpg"
        },
        {   id: "8",
            title: "Snakey2",
            category: "snakes", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            url: "https://images.pexels.com/photos/36714/snake-rattlesnake-reptile-skin.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },

    ])
  return (
    <div className='home'>   
        {photos && <PhotoList photos={photos}/> }
    </div>
  )
}
