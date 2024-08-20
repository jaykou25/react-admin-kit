import { Helmet, Link } from 'dumi';
import './index.less';

const title = 'React Admin Kit | 快速构建表单表格';
const description =
  'React Admin Kit (简称RAK) 是一个基于 React 和 Ant Design 的组件库, 用于在中后台系统中快速的构建表单表格. RAK 的使用不仅能极大的提升开发效率, 而且由于其约定式的 api 还能降低后期不同开发人员的维护成本. 另外由于表单和表格都是由配置式数组生成, 使得不同页面间的表单和表格的复用变得非常简单.';

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <html lang="zh-CN" />
        <title>{title}</title>
        <link
          rel="stylesheet"
          crossorigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Bold.min.css"
        />
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Helmet>
      <section id="hero">
        <h1 className="tagline">
          <span className="tagline-inner">
            <span className="word">
              <span className="first-letter">R</span>eact{' '}
            </span>
            <span className="word">
              <span className="first-letter">A</span>dmin{' '}
            </span>
            <span className="word">
              <span className="first-letter">K</span>it
            </span>
          </span>
        </h1>
        <div className="slogon">开发中后台应用的最佳伴侣</div>
        <p className="description">构建高质量的表单和表格</p>
        <p className="actions">
          <Link className="get-started" to="/components/schema-form">
            开始使用
          </Link>
          <Link className="intro" to="/intro">
            介绍
          </Link>
        </p>
      </section>

      <section id="highlights" className="box-container">
        <div className="box">
          <h2>丰富的文档用例</h2>
          <p>每个组件都配合丰富的用例，用例层层递进, 新手友好。</p>
        </div>
        <div className="box">
          <h2>有限的组件</h2>
          <p>组件分类清晰，数量有限, 与 Ant Design 深度配合.</p>
        </div>
        <div className="box">
          <h2>API 提示友好</h2>
          <p>TS编写，api 提示方便.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
