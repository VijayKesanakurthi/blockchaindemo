import Head from 'next/head'
import BlockChain from '../components/blockchain'
import Header from '../components/header'
import Nav from '../components/nav'

export default function Home() {
  return (
    <>
    <Head>
    <title>Block Chain Demo</title>  
    </Head>
   <div className=" min-h-screen flex flex-col py-2 space-y-5 justify-center items-center">
    <Header/>
    <BlockChain/>
   </div>
      </>
  )
}
