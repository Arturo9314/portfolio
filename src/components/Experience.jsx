import { experience } from '../data/experience'
import { useState } from 'react'

export default function Experience() {
    const [current, setCurrent] = useState(experience[0])
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index)=>{
        setCurrent(experience[index])
        setActiveIndex(index)
    }
  return (
    <section id='experience'>
        <header>
            <div className='line'></div>
            <h2>Experice and Professional achievements</h2>
            <div className='line'></div>
        </header>
        <div className='experience-container'>
            <ExperienceNavbar activeIndex={activeIndex} handleClick={handleClick}/>
            <article className='experience-details'>
                <h4>{current.position} <a target='new_blank' href={current.site}>{current.company}</a></h4>
                <p>{current.date}</p>
                <ul>
                    {current.activities.map((e,index)=>(<li key={index}><span>&#128640;</span><p>{e}</p></li>))}
                </ul>
                {current.link&&<a target='new_blank' href={current.link}>Certificate</a>}
            </article>
        </div>
    </section>
  )
}

function ExperienceNavbar({activeIndex, handleClick}) {
    const updateIndex = (index)=>{
        handleClick(index)
    }
    return (
    <nav>
        <ul className='menu-experience'>
            {experience.map((e,index)=>(<li key={index}><ExperienceBTN activeIndex={activeIndex} updateIndex={updateIndex} index={index} company={e.company}/></li>))}
        </ul>
    </nav>
  )
}

function ExperienceBTN({ activeIndex, updateIndex, index, company }) {
   
    const onClickIndex=()=>{
    updateIndex(index)
  }
    return (
    <button className={activeIndex===index?'experience-btn active': 'experience-btn'} onClick={onClickIndex}>{company}</button>
  )
}


