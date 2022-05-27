import {BsFileEarmarkText} from 'react-icons/bs'
import {GiMiner} from 'react-icons/gi'


const Block=({hash,prevhash})=>{
  const styles={
    wrapper:`flex space-y-5 font-extralight    align-center w-full p-5 border max-w-xl justify-center flex-col w-full shadow-md rounded-lg hover:shadow-2xl transition-all`,
    inputwrapper:"  flex   w-full  items-center ",
    input:"outline-none text-xs p-[4px]  flex-1 ",
    inputgroup:`p-[3px]  hover:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100 focus-within:border-sky-400 flex rounded-r-lg items-center border flex-1`,
    texticon:"p-[4px] pl-2",
    inputtext:"border rounded-l-lg p-[5px] text-sm font-light  px-4"
  }
  const text={
    wrapper:"space-y-2 ",
    prev:"flex space-x-2",
    scroll:"overflow-x-scroll scrollbar-thin text-[13px] py-0",
    green:" bg-lime-50 border text-[#52c41a] rounded border-[#52c41a] px-2",
    txt:"text-sm",
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
          placeholder="welcome to blockchain demo!"
          className={styles.input} type="text"/>
      </div>
    </div>
   <div className={text.wrapper}>
    <div className={text.prev}>
      <p className={text.txt}>PREVIOUS HASH</p>
      <div className={`${text.green} ${text.scroll}`}>{prevhash}</div>
    </div>
     <div className={text.prev}>
       <p className={text.txt}>HASH</p> 
       <div className={`${text.green} ${text.scroll}`}>{hash}</div>
     </div>
     </div>
      <p className={text.txt}>Nounce</p>
      <div className="flex justify-between">
        <div>
          Block #1
        </div>
    <div >
      <button className={button.btn}><GiMiner/>Mine</button>
    
    </div>
        </div>
  </div>
)
}

export default  Block;