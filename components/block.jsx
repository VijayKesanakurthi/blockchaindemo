import {BsFileEarmarkText} from 'react-icons/bs';
import {GiMiner} from 'react-icons/gi';
import {useState} from 'react';

const Block=({data,hashChange,mine})=>{
  const styles={
    wrapper:`flex space-y-5 font-extralight   bg-white align-center w-full p-5 pt-8 border min-w-xl max-w-xl justify-center flex-col w-full shadow-md rounded-lg hover:shadow-2xl transition-all`,
    inputwrapper:"  flex   w-full  items-center ",
    input:"outline-none text-xs p-[4px]  flex-1 ",
    inputgroup:`p-[3px]  hover:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100 focus-within:border-sky-400 flex rounded-r-lg items-center border flex-1`,
    texticon:"p-[4px] pl-2",
    inputtext:"border rounded-l-lg p-[5px] text-sm font-light bg-gray-50 px-4"
  }
  const text={
    wrapper:"space-y-2 ",
    prev:"flex space-x-2 items-center",
    scroll:"overflow-x-scroll scrollbar-thin text-[13px] max-md",
    green:" bg-lime-50 border text-[#52c41a] rounded border-[#52c41a] px-2",
    txt:"text-sm",
    greenprev:"text-[#52c41a] text-[0.7rem]",
    redprev:"text-red-400 text-[0.7rem]",
   red:" bg-red-50 border text-red-400 rounded border-red-400 px-2",
    
  }
  const button={
    btn:`flex items-center text-md  bg-gradient-to-r from-gray-700 via-gray-900 to-black px-4 space-x-2 py-[5px] rounded-full text-white`
  }
  
  return(
 
    <div className={styles.wrapper}>
      <div className={styles.inputwrapper}>
        <div className={styles.inputtext}>
          DATA
        </div>
        <div className={styles.inputgroup}>
        <span className={styles.texticon}>
       <BsFileEarmarkText />
          </span>
        <input 
        value={data.data}
          onChange={(e)=>hashChange(data,e.target.value)}
          placeholder="welcome to blockchain demo!"
          className={styles.input} type="text"/>
      </div>
    </div>
   <div className={text.wrapper}>
    <div className={text.prev}>
      <p className={text.txt}>PREVIOUS HASH</p>
      <div className={`${data.previous.slice(0,4)==="0000"?text.greenprev:text.redprev} ${text.scroll}`}>{data.previous}</div>
    </div>
     <div className={text.prev}>
       <p className={text.txt}>HASH</p> 
       <div className={`${data.hash.slice(0,4)==="0000"?text.green:text.red} ${text.scroll}`}>{data.hash}  </div>
     </div>
     </div>
      <div className="flex space-x-2">
      <p className={text.txt}>Nounce</p>
        <div className="text-sm ">
    {data.nonce}
          </div>
      </div>
      <div className="flex justify-between">
        <div>
          Block #{data.block}
        </div>
    <div >
      <button disabled={data.hash.slice(0,4)==="0000"} onClick={()=>mine(data,true)} className={button.btn}><GiMiner/>Mine</button>
    </div>
        </div>
  </div>
)
}

export default  Block;