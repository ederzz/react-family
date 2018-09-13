import React from 'react'
import {
    Form,
    Input
} from 'antd'

import './index.less'

const FormItem = Form.Item

export class ComplexForm extends React.PureComponent {

    render() {
        const {
            getFieldDecorator
        } = this.props.form

        return (
            <div>
                <form>
                    <FormItem
                        label="Username"
                        >
                        {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Username is required!' }],
                            })(<Input />)
                        }
                    </FormItem>
                </form>
            </div>
        )
    }
}

export default Form.create()(ComplexForm)