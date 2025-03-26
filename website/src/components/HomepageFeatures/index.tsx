import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '丰富的文档用例',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>每个组件都配合丰富的用例，用例层层递进, 新手友好。</>,
  },
  {
    title: '有限的组件',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>组件分类清晰，数量有限, 与 Ant Design 深度配合.</>,
  },
  {
    title: 'API 提示友好',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>TS编写，api 提示方便.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
