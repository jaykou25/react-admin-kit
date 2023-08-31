import { useSiteData } from 'dumi';
import Table from '../Table';

const API = (props) => {
  const siteData = useSiteData();
  const docs = siteData.themeConfig.apiDoc || [];
  const { name, filePath } = props;
  const data = docs.find(
    (doc) => doc.displayName === name && doc.filePath === filePath,
  );

  const texts = {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '(必选)',
  };

  if (!data) return null;

  const apis = Object.values(data.props);

  const getDesc = (desc: string) => {
    if (!desc) return '--';

    return desc.replace('@description ', '');
  };

  return (
    <div className="markdown">
      <Table>
        <thead>
          <tr>
            <th>{texts.name}</th>
            <th>{texts.description}</th>
            <th>{texts.type}</th>
            <th>{texts.default}</th>
          </tr>
        </thead>
        <tbody>
          {apis.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{getDesc(row.description)}</td>
              <td>
                <code>{row.type?.name}</code>
              </td>
              <td>
                <code>
                  {row.defaultValue?.value ||
                    (row.required && texts.required) ||
                    '--'}
                </code>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default API;
