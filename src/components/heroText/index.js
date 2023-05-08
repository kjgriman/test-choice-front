import Link from 'next/link';
import styles from './heroText.module.css';
import LinkHome from '../buttons/linkHome'

export default function HeroText() {
   
    return (
        <div className={styles.heroText}>
            <h1>Griman Kerbin</h1>
            <p>Thanks for the opportunity</p>
            <Link href="/test" passHref legacyBehavior> 
                <LinkHome text={'Show the test'} color={'primary'}/>
            </Link>
       </div>
    )
  }

 