import {BsFileEarmarkText} from 'react-icons/bs'


export default function add({data,handle}){
  const styles={
    wrapper:` mt-10 flex space-y-5 font-extralight   align-center w-full p-5 border max-w-sm justify-center flex-col w-full shadow-md rounded-lg hover:shadow-2xl transition-all`,
    inputwrapper:"  flex   w-full  items-center ",
    input:"outline-none text-xs p-[4px]  flex-1 ",
    inputgroup:`p-[3px]  hover:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100 focus-within:border-sky-400 flex rounded-r-lg items-center border flex-1`,
    texticon:"p-[4px] pl-2",
    inputtext:"border rounded-l-lg p-[5px] text-sm font-light  px-4",
    button:"border",
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
      <button 
        onClick={()=>handle([... data,{block: 1, chain: 1, nonce: 11316, previous: '0',hash:'000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf'}])}
        className={styles.button}> + ADD</button>
      </div>
  )
}