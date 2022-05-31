import Head from 'next/head'
import BlockChain from '../components/blockchain'


export default function Home() {
  return (
   <div className="bg-gray-50 h-full max-h-full flex py-10 justify-center align-center">
    
    <BlockChain/>
   </div>
  )
}
