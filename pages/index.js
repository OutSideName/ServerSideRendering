import Link from 'next/link';

const Index = () => {

  return (
    <div  style={{fontSize: '20px', color:'yellow'}}>
      This is Pages index
      <Link href='/about'>
        <button>About</button>
      </Link>
      <Link href='/robots'>
        <button>Robots</button>
      </Link>
    </div>
  )
}

export default Index;