import style from './Inquiry.module.scss';
import {InboxOutlined} from "@ant-design/icons";
import {Upload} from "antd";
const { Dragger } = Upload;

const Inquiry = () => {

    const onUpload = (file, fileList) => {}
    return (
        <div className={style.root}>
            <Dragger name='pdf-upload' beforeUpload={onUpload} customRequest={console.log} className={style.draggerBox}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">check Authenticity of pdf</p>
                <p className="ant-upload-hint">
                    upload or drag and drop you madrak here
                </p>
            </Dragger>
        </div>
    )
}

export default Inquiry;