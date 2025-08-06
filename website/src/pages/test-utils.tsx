import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';

export default function TestUtils() {
  const [utilsLoaded, setUtilsLoaded] = useState(false);
  const [utilsContent, setUtilsContent] = useState<any>(null);

  useEffect(() => {
    // 检查 window._ 是否已经挂载
    if (typeof window !== 'undefined' && window._) {
      setUtilsLoaded(true);
      setUtilsContent(window._);
    }
  }, []);

  return (
    <Layout title="测试 Utils 工具库">
      <div style={{ padding: '2rem' }}>
        <h1>测试 React Admin Kit Utils 工具库</h1>

        <div style={{ marginBottom: '1rem' }}>
          <strong>Utils 加载状态:</strong>{' '}
          {utilsLoaded ? '✅ 已加载' : '❌ 未加载'}
        </div>

        {utilsLoaded && (
          <div>
            <h2>可用的工具函数:</h2>
            <ul>
              {Object.keys(utilsContent).map((key) => (
                <li key={key}>
                  <code>{key}</code> - {typeof utilsContent[key]}
                </li>
              ))}
            </ul>
          </div>
        )}

        {!utilsLoaded && (
          <div style={{ color: 'red' }}>
            <p>Utils 工具库未正确加载，请检查配置。</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
