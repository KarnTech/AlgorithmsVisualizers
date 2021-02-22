import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import mergeSort from '../sorts/mergesort';


export default function Home() {
  const [arr, setArr] = useState([]);
 
  function generatearray(){
    let arr1 = []

    for(let i=20; i< 500; i+= 10){
      arr1.push(Math.round(Math.random() * 500))
    }
    
    setArr(arr1)

    }

    useEffect(() => {
      generatearray()
    },[]);


  return (
    <div className={styles.container}>
      <Head>
        <title>Sorting Visualizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.navbar}>
          <button onClick={() => generatearray()}> Reset the array</button>
          <button onClick={() => setArr(mergeSort(arr))}> MergeSort</button>
          <button> Quick Sort</button>
          <button> Bubble Sort</button>
        </div>
        <div className={styles.bars}>
          {arr.map((x, id) => (<div className="bar" key={id}>
              {x}
              <style jsx>{`
        .bar {
          margin:2px;
          height:200px;
          border:1px solid black;
          height: ${x}px;
          background-color:   lightgray

        }
        
      `}</style>
          </div>))}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
