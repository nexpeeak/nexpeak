import Link from 'next/link';

export default function Menu() {
  return (
    <ul className="main-menu__list">
      <li className="">
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/service">Services</Link>
       
      </li>
      <li>
        <Link href="/team">Teams</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
