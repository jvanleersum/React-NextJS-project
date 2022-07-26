import { Fragment } from "react";
import Link from 'next/link';

const NewsPage = () => {
  return <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href='/news/nextjs-is-great'>NextJS Is Great</Link></li>
        <li><Link href='/news/some-other-thing'>Some Other Thing</Link></li>
      </ul>
    </Fragment>
}

export default NewsPage;