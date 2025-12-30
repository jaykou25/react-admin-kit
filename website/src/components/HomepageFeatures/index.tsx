import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ id: 'home.features.0.title' }),
    Img: require('@site/static/img/feature0.png').default,
    description: translate({ id: 'home.features.0.description' }),
  },
  {
    title: translate({ id: 'home.features.1.title' }),
    Img: require('@site/static/img/flower-0.png').default,
    description: translate({ id: 'home.features.1.description' }),
  },
  {
    title: translate({ id: 'home.features.2.title' }),
    Img: require('@site/static/img/feature2.png').default,
    description: translate({ id: 'home.features.2.description' }),
  },
];

function Feature({ title, description, Img }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Img && <img height={145} src={Img} style={{ marginBottom: '10px' }} />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
