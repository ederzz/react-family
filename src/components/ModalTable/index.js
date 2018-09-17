import React from 'react'
import {
    Table
} from 'antd'


import './index.less'

export default class ModalTable extends React.PureComponent {

    render() {
        const columns = [
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name'
            }
        ]

        const dataSource = []

        return (
            <div>
                <Table 
                    columns={columns}
                    dataSource={dataSource}
                    />
            </div>
        )
    }
}