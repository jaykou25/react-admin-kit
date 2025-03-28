import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { translate } from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx(styles.tagline)}>
          <span className={clsx(styles['tagline-inner'])}>
            <span className="word">
              <span className={clsx(styles['first-letter'])}>R</span>eact{' '}
            </span>
            <span className="word">
              <span className={clsx(styles['first-letter'])}>A</span>dmin{' '}
            </span>
            <span className="word">
              <span className={clsx(styles['first-letter'])}>K</span>it
            </span>
          </span>
        </h1>

        <p className="hero__subtitle">{translate({ id: 'tagline' })}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            style={{ marginRight: '10px' }}
            to="/docs/intro"
          >
            {translate({ id: 'home.buttons.start' })}
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            {translate({ id: 'home.buttons.intro' })}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="React Admin Kit (简称RAK) 是一个基于 React 和 Ant Design 的组件库, 用于在中后台系统中快速的构建表单表格. RAK 的使用不仅能极大的提升开发效率, 而且由于其约定式的 api 还能降低后期不同开发人员的维护成本. 另外由于表单和表格都是由配置式数组生成, 使得不同页面间的表单和表格的复用变得非常简单."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
