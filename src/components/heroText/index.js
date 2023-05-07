import Link from 'next/link';
import './heroText.css'

export default function HeroText() {
    return (
        <div className="hero-text">
            <h1>Griman Kerbin</h1>
            <p>Thanks for the opportunity</p>
            <Link href="/test"> show test</Link>
       </div>
    )
  }

 