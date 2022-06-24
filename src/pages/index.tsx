import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import MenuMobile from '../components/MenuMobile/MenuMobile'
import Services from '../components/Services/Services'


const Home: NextPage = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  return (
    <>
      {menuVisible && <MenuMobile setMenuVisible={setMenuVisible} menuVisible={menuVisible}/>}
      <Head>
        <title> Edie | Homepage</title>
      </Head>
      <Header setMenuVisible={setMenuVisible}/>
      <Hero/>
      <Services/>
    </>
  )
}

export default Home
