import Block from './block'
import Add from './add'
import {useState} from 'react'
import {IoIosArrowDown} from 'react-icons/io'




const BlockChain=()=>{
  const[chain,setChain]=useState([{block: 1, chain: 1, nonce: 11316, previous: '0',hash:'000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf'}])
  

  return(
    <div className="flex flex-col space-y-5 justify-center items-center">
      {chain.map((e)=>
      <div className="flex flex-col items-center justify-center space-y-5">
      <div> 
        <IoIosArrowDown  className="h-10 w-10"/>
      </div> 
      <Block hash={e.hash} prevhash={e.previous}/>
        </div>
        )}
      <Add data={chain}  handle={setChain}/>
    </div>
  )
}
export default BlockChain;
