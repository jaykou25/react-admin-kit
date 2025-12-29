import { Descriptions, DescriptionsProps } from 'antd';

export default function () {
  const items: DescriptionsProps['items'] = [
    {
      label: 'UserName',
      children: 'Zhou Maomao',
    },
    {
      label: 'Live',
      span: 'filled', // span = 2
      children: 'Hangzhou, Zhejiang',
    },
    {
      label: 'Remark',
      span: 'filled', // span = 3
      children: 'empty',
    },
    {
      label: 'Address',
      span: 1, // span will be 3 and warning for span is not align to the end
      children:
        'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
  ];
  return (
    <div>
      <Descriptions bordered title="User Info" items={items} />
    </div>
  );
}
