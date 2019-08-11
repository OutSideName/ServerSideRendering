import Link from 'next/link';
import Image from '../components/images';

const About = () => {

  return (
    <div style={{fontSize: '20px', color: 'yellow'}}>
      <h1>About</h1>
      <div>
        <Link href='/'>
          <button>Back</button>
        </Link>
        <Link href='/robots'>
          <button>Robots</button>
        </Link>
      </div>
      <Image />
    </div>
  )
}

export default About;