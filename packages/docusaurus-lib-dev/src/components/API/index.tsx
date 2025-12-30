// @ts-ignore
import useGlobalData from '@docusaurus/useGlobalData';
// @ts-ignore
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore
import { translate } from '@docusaurus/Translate';
import Table from './components/Table';
import MarkdownLink from './components/MarkdownLink';

type IProps = {
  name: string;
  nameStyles?: React.CSSProperties;
  descriptionStyles?: React.CSSProperties;
  typeStyles?: React.CSSProperties;
  defaultStyles?: React.CSSProperties;
};

type ItemProp = {
  defaultValue?: { value: string };
  description?: string;
  name: string;
  required?: boolean;
  type?: { name: string };
};

const API = (props: IProps) => {
  const { name } = props;

  const { i18n } = useDocusaurusContext();
  const {
    currentLocale, // 当前语言代码 (如 'zh-CN')
  } = i18n;

  const globalData = useGlobalData();
  const docGen = globalData['docusaurus-lib-dev']['default'] || [];
  const item = docGen.find((doc: any) => doc.displayName === name);

  const texts = {
    property: translate({ id: 'api.property', message: '属性名' }),
    description: translate({ id: 'api.description', message: '描述' }),
    type: translate({ id: 'api.type', message: '类型' }),
    default: translate({ id: 'api.default', message: '默认值' }),
    required: translate({ id: 'api.required', message: '(必选)' }),
  };

  if (!item) return null;

  const itemProps: ItemProp[] = Object.values(item.props);

  const getDesc = (desc: string = '') => {
    if (!desc) return '--';

    const descArr = desc.split('\n').filter((item) => item.trim() !== '');
    const targetItem = descArr.find((item) =>
      item.startsWith(`@${currentLocale}`),
    );
    const firstItem = descArr[0];
    const targetDesc = targetItem?.replace(/^@\S+/, '').trim();
    const firstDesc = firstItem?.replace(/^@\S+/, '').trim();
    return targetDesc || firstDesc || '--';
  };

  /**
   * 解析到的类型可能是这样的
   * {
      "defaultHideInSearch": {
        "type": {
          "name": "enum",
          "raw": "boolean",
          "value": [
            {
              "value": "false"
            },
            {
              "value": "true"
            }
          ]
        }
      },

      如果是 @type 指定的会是这样的
      "optionColumnSpaceProps": {
        "type": {
          "name": "[hi] (https://www.baidu.com)"
        }
      }
    }
   *
   */
  const getTypeName = (row: any) => {
    const typeObj = row.type || {};
    const text = typeObj.raw || typeObj.name;

    if (/\[(.*?)\]\s*\((.*?)\)/g.exec(text)) {
      // 兼容 markdown 链接标识
      return <MarkdownLink text={text} />;
    }

    return <code>{text}</code>;
  };

  return (
    <div className="markdown">
      <Table>
        <thead>
          <tr>
            <th style={props.nameStyles}>{texts.property}</th>
            <th style={props.descriptionStyles}>{texts.description}</th>
            <th style={props.typeStyles}>{texts.type}</th>
            <th style={props.defaultStyles}>{texts.default}</th>
          </tr>
        </thead>
        <tbody>
          {itemProps.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{getDesc(row.description)}</td>
              <td>{getTypeName(row)}</td>
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
