import { getNumbers } from '@/lib/get'
import { Col, Row, Statistic } from 'antd'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

    const [numbers, setNumbers] = useState<{
        numberOfMenus: number,
        numberOfPages: number,
        numberOfContents: number
    }>()

    useEffect(() => {
        getNumbers().then(res => setNumbers(res));

    }, [])
    return (
        <div>
            <h1>Dashboard</h1>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Active Menu" value={numbers?.numberOfMenus} />
                </Col>
                <Col span={12}>
                    <Statistic title="Account Pages" value={numbers?.numberOfPages} precision={2} />
                </Col>
                <Col span={12}>
                    <Statistic title="Account Contents" value={numbers?.numberOfContents} precision={3} />
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard