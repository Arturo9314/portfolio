import { ReactComponent as ReactIcon } from '../assets/icons/react.svg'
import { ReactComponent as NodeIcon } from '../assets/icons/node.svg'
import { ReactComponent as PythonIcon } from '../assets/icons/python.svg'
import { ReactComponent as HtmlIcon } from '../assets/icons/html5.svg'
import { ReactComponent as CSSIcon } from '../assets/icons/css.svg'
import { ReactComponent as JavascriptIcon } from '../assets/icons/javascript.svg'
import { ReactComponent as MySQLIcon } from '../assets/icons/mysql.svg'
import profileimg from '../assets/images/me.jpg'
export default function AboutMe() {
  return (
    <section id='aboutme'>
        <header>
            <div className='line'></div>
            <h2>About me</h2>
            <div className='line'></div>
        </header>
        <figure>
          <img src={profileimg} alt=''/>
        </figure>
        <article>
            <p>As a Software Development Engineer at <a href='https://www.cua.uam.mx/' target='new_blank'>UAM-C</a>, I currently assist in the upkeep and management of the <a href='http://dmas.cua.uam.mx/' target='new_blank'>site dmas</a>. Building projects helps me develop my Full-Stack Development and Data Science skills concurrently. My goal is to locate a position with a business where I may develop professionally and utilize cutting-edge technology.</p>
            <h4>Here are some technologies I&#39;ve been working with: </h4>
            <ul id='aboutmeul'>
                <li><ReactIcon className='techIcon'/>React.js</li>
                <li><NodeIcon className='techIcon'/>Node.js</li>
                <li><MySQLIcon className='techIcon'/>MySQL</li>
                <li><PythonIcon className='techIcon'/>Python</li>
                <li><JavascriptIcon className='techIcon'/>Javascript ES6+</li>
                <li><div><HtmlIcon className='techIcon'/><CSSIcon className='techIcon'/></div>HTML and CSS</li>
            </ul>
            <p>I enjoy attending to the movies, keeping up with scientific advancements, and working on my personal development outside of the workplace.</p>
        </article>
    </section>
  )
}
