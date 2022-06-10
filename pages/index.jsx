import BlockChain from '../components/blockchain'
import Header from '../components/header'

export default function Home() {
  return (
    <>
    
   <div className=" min-h-screen flex flex-col py-2 space-y-5 justify-center items-center">
    <Header/>
    <BlockChain/>
   </div>
      </>
  )
}
