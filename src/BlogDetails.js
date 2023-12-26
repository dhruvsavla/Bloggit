import React from 'react'
import Blog from "./Blog.js"
import "./BlogDetails.css"
import BlogDetailsCard from './BlogDetailsCard'

function BlogDetails() {
  return (
      <div className='home'>
        <BlogDetailsCard
            id = '1234567'
            title='Future of Technology'
              
            blog='Here at Purple Lizard, the winter holidays always put us in a reflective mood - we notice  our choices as individuals and as a business, reflect on our growth, our values, and our community.
            This holiday season we offer our sincere thanks to the amazing, loyal Lizard Maps community that has grown with us over the years, from a single mapmaker with a vision of making the best outdoor recreation map out there to a small business with 18 titles and growing! 
            Looking back on 2023, we started the year by publishing two new Lizard Maps: an absolutley beautiful two-map cartographic masterpiece of Shenandoah National Park, one of our favorite places. We also published new editions of Rincon, Michaux, Pine Creek and Ohiopyle during the year, and closed it out with our latest creation, the Pennsylvania Statewide Outdoor Recreation Lizard Map,which instantly became a runaway best seller! Weve never published seven Lizard Maps in one season before, and we thank you all for your enthusiasm and support.        
            It is you who continue to inspire us to do the best work we can, to keep improving our map designs and to continue making new maps of amazing places. For next year we have two maps to finalizae and publish this spring: our first Maryland Lizard Map: Deep Creek Lake and Savage/Garrett/Potomac State Forests, and our second Ohio Lizard Map with the Wayne National Forest, a continuation north of our Athens-Zaleski Lizard Map.
            You are adventurers, explorers, athletes and weekend warriors, forest bathers, backpackers, overlanders, family campers, and so much more. Together we are on an incredible journey, exploring the gorgeous public lands and special places that we love. We know what your outdoor experiences bring to your life, because we have those experiences too.
            We have have discovered new trails, climbed some hard hills, and basked in the sunshine at beautiful vistas. 
            Like you, we do our best to appreciate the opportunity that each day brings to enjoy a little time outside, to encourage friends and family to share in the beauty of the natural world and the adventure it brings. 
            We understand that time in the outdoors, alone or among friends, is precious and critical to our happiness, health and well being. 
            And, like many of you, sometimes our own recreation slips lower on the list and we dont get to do that ride, or that hike, or that day in the sun that we planned or hoped for. But the next day, if were lucky, we get a second chance to make that happen and fully appreciate the gift of embracing the outdoors in our lives. 
            This holiday season, we offer our gratitude to you for helping us remember every day what outdoor adventures and experiences can mean for all of us. The stories you share inspire us to explore more, to make new maps of amazing places, and help get more people to spend more time away from devices, unplugged and experiencing the natural world. 
            We are grateful to have an amazing team of talented cartographic designers: Mighty Wiggus (Bill Wilgus), Erin Greb, Shaun Faith and all the help we get from so many amazing organizations, partners and friends who are a part of the Purple Lizard community. '
           
            author='Dhruv Savla'
            img='https://images.squarespace-cdn.com/content/v1/5fce63270356d927d7eecdbd/033e9988-2ac8-4cb9-8b9f-5bf05fb22dcb/gff.jpg'
            date={"12/25/2023"}
          />
    </div>
  )
}

export default BlogDetails