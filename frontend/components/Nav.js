import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/sell">
      <a>Go to Sell Page</a>
    </Link>
    <Link href="/">
      <a>Go to Home Page</a>
    </Link>
  </div>
);

export default Nav;
