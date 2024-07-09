import "@/App.css";
import { Card, Space, Statistic, Input, Button } from "antd"
import { UilUserPlus,UilChatBubbleUser  } from '@iconscout/react-unicons'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};


const data = [
  {
    "name": "January",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "February",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "March",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "April",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "May",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "June",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "July",
    "uv": 3490,
    "pv": 4300
  }
]


export default function Dashboard() {
  return (
    <div>
      <div className="assign-left"  >
      <Space direction="horizontal" >
        <Card>
          <Space direction="horizontal" >
            <UilUserPlus></UilUserPlus>
            <Statistic title="Add Employee" value={2032} />
          </Space>
        </Card>
      </Space>

      
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
      <div>
        <Card>
<Space direction="horizontal"  >
        <Space.Compact 
          style={{
            width: '100%',
          }}
          direction="vertical"
          
        >
          
          <h3><UilChatBubbleUser></UilChatBubbleUser> Assigned Task</h3>
          <Input defaultValue="Employee Id" />
          <Input defaultValue="Employee Name" />
          
        </Space.Compact>
<Space direction="vertical" className='assign-right' >
        <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
  <Button type="primary">Submit</Button>
  </Space>
  </Space>
        </Card>
      </div>
    </div>
  )
}
