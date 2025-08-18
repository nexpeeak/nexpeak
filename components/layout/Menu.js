import Link from "next/link";

export default function Menu() {
    return (
        <ul className="main-menu__list">
            <li className=" active menu-item-has-children">
                <Link href="/">Home</Link>
              
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li className="dropdown menu-item-has-children">
                <Link href="#">Services</Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/service">Services</Link>
                    </li>
                    <li>
                        <Link href="/criminal-case">Criminal Case</Link>
                    </li>
                    <li>
                        <Link href="/family-violence">Family Violence</Link>
                    </li>
                    <li>
                        <Link href="/business-law">Business Law</Link>
                    </li>
                    <li>
                        <Link href="/health-care">Health Care Law</Link>
                    </li>
                    <li>
                        <Link href="/insurance-law">Insurance Law</Link>
                    </li>
                    <li>
                        <Link href="/real-estate">Real Estate Law</Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown menu-item-has-children">
                <Link href="#">Pages</Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/case">Case</Link>
                    </li>
                    <li>
                        <Link href="/case-details">Case Details</Link>
                    </li>
                    <li>
                        <Link href="/team">Team</Link>
                    </li>
                    <li>
                        <Link href="/pricing">Price</Link>
                    </li>
                    <li>
                        <Link href="/faq">Faq</Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown menu-item-has-children">
                <Link href="#">Blog</Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/blog-details">Blog Details</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
}
