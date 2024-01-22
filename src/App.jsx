import { useState } from 'react'
import people from './data'
import './App.css'
import { FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'


function App() {
  const [index,setIndex] = useState(0)
  const {name,job,image,text} = people[index] 


  const checkNumber = (number) =>{
        if (number < 0){
          return people.length-1;
        }

        if (number > people.length-1){
          return 0;
        }

        return number;
       
  }

  const prevPerson = () =>{
        setIndex((cureentIndex)=>{
          const newIndex = cureentIndex - 1;
        
          return checkNumber(newIndex);
    })
  }

  const nextPerson = () =>{
       setIndex((cureentIndex)=>{
            const newIndex = cureentIndex + 1;
          
            return checkNumber(newIndex);
       })
  }

  const randomPerson = () =>{
      let randomNumber = Math.floor(Math.random() * people.length) 
      if (randomNumber === index){
         randomNumber = index+1;
      }

      setIndex(checkNumber(randomNumber))

  }


  // console.log(name)
  return (
       <main>
          <article className='review'> 
              <div className='img-container'>
                 <img src={image}  alt={name} className='person-img' /> 
                 <span className='quote-icon'>
                      <FaQuoteRight />
                 </span>
              </div>
              <h4 className='author'>{name}</h4>
              <p className='job'>{job}</p>
              <p className='info'>{text}</p>
              <div className='btn-container'>
                  <button className='prev-btn' onClick={prevPerson} >
                      <FaChevronLeft />
                  </button>
                  <button className='next-btn' onClick={nextPerson} >
                      <FaChevronRight />
                  </button>
              </div>
              <button className='btn btn-hipster' onClick={randomPerson}>Surprise Me</button>
          </article>
       </main>
  )
}

export default App
