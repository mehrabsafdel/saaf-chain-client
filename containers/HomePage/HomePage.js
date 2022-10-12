import {Col, Row} from "antd";
import style from './HomePage.module.scss'
import { AuditOutlined, UserAddOutlined } from '@ant-design/icons';
import Link from "next/link";

const HomePage = () => {
    return (
        <Row className={style.root}>
            <Col xs={24} md={12}>
                <Link href='/login'>
                    <a className={style.authBox}>
                        <UserAddOutlined />
                        <div>login</div>
                    </a>
                </Link>
            </Col>
            <Col xs={24} md={12}>
                <Link href='/inquiry'>
                    <a className={style.inquiryBox}>
                        <AuditOutlined />
                        <div>inquiry</div>
                    </a>
                </Link>
            </Col>
        </Row>
    )
}

export default HomePage;