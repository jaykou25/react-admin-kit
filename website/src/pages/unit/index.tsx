import {
  clearSelectCache,
  LinkButton,
  FormUpload,
  SchemaForm,
  ProTable,
  BusinessSelectBuilder,
  ProForm,
  Button,
} from 'react-admin-kit';

import type { TableColumnType } from 'react-admin-kit';
import { useState, useContext, useRef } from 'react';

// 标准列配置
export const mockColumns: TableColumnType[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    valueType: 'text',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    valueType: 'text',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    valueType: 'digit',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    valueType: 'text',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    valueType: 'select',
    valueEnum: {
      active: { text: '激活', status: 'Success' },
      inactive: { text: '未激活', status: 'Default' },
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    valueType: 'date',
  },
  {
    title: '操作',
    valueType: 'option',
    enableDelete: (record, index) => ({ btnText: `删除${index}` }),
    className: 'optionGroup',
    render: () => ['编辑'],
  },
];

const mockApi = async () => {
  return {
    data: [
      { id: 1, name: 'Cached Option 1' },
      { id: 2, name: 'Cached Option 2' },
    ],
    total: 2,
  };
};

const BusinessSelect = BusinessSelectBuilder({
  apis: [
    {
      type: 'type1',
      api: mockApi,
    },
  ],
});

const UnitTest = () => {
  const [toggle, setToggle] = useState(true);
  const innerRef = useRef();

  return (
    <>
      {/* <SchemaForm
        layout="horizontal"
        readonly
        readonlyType="descriptions"
        descriptionsProps={{
          bordered: true,
        }}
        grid
        colProps={{ span: 8 }}
        initialValues={{
          procurementProject: '测试',
          projectType: '服务类',
          procurementBudget: '20000',
          procurementType: '平台采购',
          procurementMethod: '音源直接采购',
          procurementCondition:
            '采用单源直接采购以外的采购方式，符合相应资格条件的供应商只有1家',
          needMeeting1: '是',
          meetingType: '办公会',
          applyDepartment: '数字赋能中心',
          projectDescription: '测试',
          other: '',
          createTime: 2025 - 12 - 24,
        }}
        columns={[
          {
            title: '项目介绍',
            dataIndex: 'projectDescription',
            colProps: { span: 24 },
          },
          {
            title: '其它',
            dataIndex: 'other',
            colProps: { span: 24 },
          },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            colProps: { span: 24 },
          },
        ]}
      /> */}

      {/* <SchemaForm
        layout="horizontal"
        readonly
        grid
        colProps={{ span: 8 }}
        initialValues={{
          procurementProject: '测试',
          projectType: '服务类',
          procurementBudget: '20000',
          procurementType: '平台采购',
          procurementMethod: '音源直接采购',
          procurementCondition:
            '采用单源直接采购以外的采购方式，符合相应资格条件的供应商只有1家',
          needMeeting1: '是',
          meetingType: '办公会',
          applyDepartment: '数字赋能中心',
          projectDescription: '测试',
          other: '',
          createTime: 2025 - 12 - 24,
        }}
        columns={[
          {
            title: '采购项目',
            dataIndex: 'procurementProject',
          },
          {
            title: '项目类型',
            dataIndex: 'projectType',
          },
          {
            title: '采购预算',
            dataIndex: 'procurementBudget',
          },
          {
            title: '采购类型',
            dataIndex: 'procurementType',
          },
          {
            title: '采购方式',
            dataIndex: 'procurementMethod',
          },
          {
            title: '采购适用条件',
            dataIndex: 'procurementCondition',
            colProps: { span: 24 },
          },
          {
            title: '是否上会',
            dataIndex: 'needMeeting',
          },
          {
            title: '会议类型',
            dataIndex: 'meetingType',
          },
          {
            title: '申请部门',
            dataIndex: 'applyDepartment',
          },
          {
            title: '项目介绍',
            dataIndex: 'projectDescription',
            colProps: { span: 24 },
          },
          {
            title: '其它',
            dataIndex: 'other',
            colProps: { span: 24 },
          },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            colProps: { span: 24 },
          },
        ]}
      /> */}

      <SchemaForm
        layout="horizontal"
        readonly
        readonlyType="descriptions"
        descriptionsProps={{
          bordered: true,
        }}
        grid
        colProps={{ span: 8 }}
        initialValues={{
          procurementProject: '测试',
          projectType: '服务类',
          procurementBudget: '20000',
          procurementType: '平台采购',
          procurementMethod: '音源直接采购',
          procurementCondition:
            '采用单源直接采购以外的采购方式，符合相应资格条件的供应商只有1家',
          needMeeting1: '是',
          meetingType: '办公会',
          applyDepartment: '数字赋能中心',
          projectDescription: '测试',
          other: '',
          createTime: 2025 - 12 - 24,
        }}
        columns={[
          {
            title: '采购项目',
            dataIndex: 'procurementProject',
          },
          {
            title: '项目类型',
            dataIndex: 'projectType',
          },
          {
            title: '采购预算',
            dataIndex: 'procurementBudget',
          },
          {
            title: '采购类型',
            dataIndex: 'procurementType',
          },
          {
            title: '采购方式',
            dataIndex: 'procurementMethod',
          },
          {
            title: '采购适用条件',
            dataIndex: 'procurementCondition',
            colProps: { span: 24 },
          },
          {
            title: '是否上会',
            dataIndex: 'needMeeting',
          },
          {
            title: '会议类型',
            dataIndex: 'meetingType',
          },
          {
            title: '申请部门',
            dataIndex: 'applyDepartment',
          },
          {
            title: '项目介绍',
            dataIndex: 'projectDescription',
            colProps: { span: 24 },
          },
          {
            title: '其它',
            dataIndex: 'other',
            colProps: { span: 24 },
          },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            colProps: { span: 24 },
          },
        ]}
      />
    </>
  );
};

export default UnitTest;
