import React from 'react'
import Blog from "./Blog.js"
import "./Home.css"

function Home() {
  return (
      <div className='home'>
        <div className='home_row'>
                    <Blog
                      id = '1234567'
                      title='Future of Technology'
                      description='Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica'
                      author='Dhruv Savla'
                      img='https://images.squarespace-cdn.com/content/v1/5fce63270356d927d7eecdbd/033e9988-2ac8-4cb9-8b9f-5bf05fb22dcb/gff.jpg'
                      date={5} />
                    <Blog
                        id='123456'
                        title='Save Forest'
                        description='Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica'
                        author='Dhruv Savla'
                        img='https://cdn.britannica.com/87/138787-050-33727493/Belovezhskaya-Forest-Poland.jpg'
                        date={5} />
                    <Blog
                      id = '123456'
                        title='travelling around the world'
                        description='Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica'
                      author='Dhruv Savla'
                      img='	https://guides.williams.edu/files/2016/06/travel-04-1024x683.jpg'
                      date={5} />
              </div>
              <div className='home_row'>
              <Blog
                      id = '123456'
                  title='Artistic Minds'
                  description='Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica'
                      author='Dhruv Savla'
                      img='https://www.thisiscolossal.com/wp-content/uploads/2020/07/wray-3-960x1280@2x.jpg'
                      date={4} />
                <Blog
                      id = '123456'
                  title='Fast Food in America'
                  description='Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica'
                      author='Dhruv Savla'
                      img='	https://honehealth.com/wp-content/uploads/2023/06/high-protein-fast-food-1.webp'
                      date={5} />
                 <Blog
                      id = '123456'
                  title='Best Bed to sleep on'
                  description='Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica '
                      author='Dhruv Savla'
                      img='https://m.media-amazon.com/images/I/81Nnn3Rn7FL._AC_SX679_.jpg'
                      date={5} />
                 
              </div>
    </div>
  )
}

export default Home