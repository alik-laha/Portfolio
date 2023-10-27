import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
       <div className='navbar'>
        <Link href="/"className='con'><h2 >Alik Laha</h2></Link>
      
      <ul className='control'>
        <li className='gmail con'>
          <h3>aliklaha0@gmail.com</h3>
        </li>
        <li className='project con'>
          <Link href="/projects" ><h3>Project</h3></Link>
        </li>
        <li className='blog con'>
          <Link href="/blogs" ><h3>Blogs</h3></Link>
        </li>
     </ul>
    </div>
    </>
  );
};
export default Navbar;