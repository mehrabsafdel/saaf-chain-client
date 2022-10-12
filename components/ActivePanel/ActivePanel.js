import style from './ActivePanel.module.scss'
import {Button, Form, Input, message, Upload} from 'antd';
import {InboxOutlined} from "@ant-design/icons";
const { Dragger } = Upload;

const ActivePanel = ({ activePanelType }) => {

    const onUpload = (file, fileList) => {
    }

    return (
        <div className={style.root}>
            {activePanelType === 'file' ? (
                <div>
                    <Dragger name='pdf-upload' beforeUpload={onUpload} customRequest={console.log}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </Dragger>
                    <div className={style.fileList}>
                        <h3>list of files: </h3>
                        <ul>
                        {/* TODO: render list of files here */}
                        </ul>
                    </div>
                </div>
            ) : (
                <div>
                    <div className={style.addNewAdminForm}>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            // onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div>
                        <h3>list of admins: </h3>
                        <ul>
                            {/* TODO: render list of admins here */}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ActivePanel;