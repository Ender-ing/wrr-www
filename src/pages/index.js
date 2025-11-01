//import clsx from 'clsx';
import Link from '@docusaurus/Link';
//import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
//import Layout from '@theme/Layout';


import PresentationMain from './presentation/main.js';


export default function Home() {
  //const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <PresentationMain>
        <h1>Temporary navigational links</h1>
        <Link className="button button--secondary button--lg"
          to="/blog">
          Blog
        </Link>
        <Link className="button button--secondary button--lg"
          to="/docs/contribution/intro">
          Contribution Guide
        </Link>
        <Link className="button button--secondary button--lg"
          to="/docs/frankie/intro">
          PolarFrankie
        </Link>
      </PresentationMain>
    </>
  );
}
