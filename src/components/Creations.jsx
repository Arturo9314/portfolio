import { creations } from '../data/creations'
import { ReactComponent as RepositoryIcon } from '../assets/icons/github.svg'
import { ReactComponent as PreviewIcon } from '../assets/icons/eye-solid.svg'

export default function Creations() {
  return (
    <section id='creations'>
        <header>
            <div className='line'></div>
            <h2>Creations</h2>
            <div className='line'></div>
        </header>
        <div className='creations-container'>
        {creations.map((e, index)=>(
            <article key={index} className='creations-info'>
                <h4>{e.title}</h4>
                <p>{e.description}</p>
                <p>{e.tools}</p>
                <nav className='creations-footer'>
                    {e.repository && <a target='new_blank' href={e.repository}><RepositoryIcon/></a>}
                    {e.link && <a target='new_blank' href={e.link}><PreviewIcon/></a>}
                </nav>
            </article>
        ))}
        </div>
    </section>
  )
}
