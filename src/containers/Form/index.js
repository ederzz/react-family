import React from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    Radio,
    Table
} from 'antd'

import './index.less'

const { Option } = Select
const { RangePicker } = DatePicker
const FormItem = Form.Item
const RadioGroup = Radio.Group
const formItemLayout = {
    labelCol: {
        span: 3
    },
    wrapperCol: {
        span: 10
    }
}

export class ComplexForm extends React.PureComponent {
    _submit = () => {
        const { form } = this.props
        const values = form.getFieldsValue()
        console.log(values)
    }

    _cancel = () => {}

    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
        }, {
            title: 'Age',
            dataIndex: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
        }]

        const data = []
        for (let i = 0; i < 46; i++) {
            data.push({
              key: i,
              name: `Edward King ${i}`,
              age: 32,
              address: `London, Park Lane no. ${i}`,
            })
        }


        const {
            getFieldDecorator
        } = this.props.form

        return (
            <div className="form__container">
                <form className="form">
                    <FormItem
                        {...formItemLayout}
                        label="input"
                        className="form__item"
                        >
                        {getFieldDecorator('input', {
                                rules: [{ required: true, message: 'input is required!' }],
                            })(<Input />)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="input number"
                        className="form__item"
                        >
                        {getFieldDecorator('inputNumber', {
                                rules: [{ required: true, message: 'input number is required!' }],
                            })(<Input />)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="rangeDate"
                        className="form__item"
                        >
                        {getFieldDecorator('rangeDate', {
                                rules: [{ required: true, message: 'range date is required!' }],
                            })(<RangePicker />)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="select"
                        className="form__item"
                        >
                        {getFieldDecorator('slect', {
                                rules: [{ required: true, message: 'select is required!' }],
                            })(<Select defaultValue="lucy" style={{ width: 120 }}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="radio group"
                        className="form__item"
                        >
                        {getFieldDecorator('radioGroup', {
                                rules: [{ required: true, message: 'radio is required!' }],
                            })(<RadioGroup value={1}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                                <Radio value={4}>D</Radio>
                              </RadioGroup>
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="select table data"
                        className="form__item"
                        >
                        {getFieldDecorator('selectTableData', {
                                rules: [{ required: true, message: 'select table data is required!' }],
                            })(<Table 
                                columns={columns} 
                                dataSource={data} 
                                />)
                        }
                    </FormItem>
                </form>
                <div className="actions">
                    <Button 
                        onClick={this._submit} 
                        type="primary"
                        style={{
                            marginRight: '55px'
                        }}
                        >提交</Button> 
                    <Button onClick={this._cancel}>取消</Button>
                </div>
            </div>
        )
    }
}

export default Form.create()(ComplexForm)