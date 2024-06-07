import React from 'react'
import TheBestOfTheBest from '../../Components/TheBestOfTheBest/TheBestOfTheBest'
import HomeBrandsBlock from '../../Components/HomeBrandsBlock/HomeBrandsBlock'
import HeadPageBanner from '../../Components/HeadPageBanner/HeadPageBanner';
import BootBlogMain from '../../Components/BootBlogMain/BootBlogMain';

function Home() {
  return (
    <div className='homePage'>
      <HeadPageBanner/>
      <TheBestOfTheBest/>
      <BootBlogMain/>
      <HomeBrandsBlock/>
    </div>
  )
}

export default Home;