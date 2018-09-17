import React from 'react'
import {
    Form,
    Input,
    InputNumber,
    Button,
    Select,
    DatePicker,
    Radio,
    Table,
    Rate,
    Row,
    Col,
    Modal
} from 'antd'
import { connect } from 'react-redux'
import moment from 'moment'

import ModalTable from '../../components/ModalTable'

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
        form.validateFieldsAndScroll({ first: true }, (errors, values) => {
            console.log(errors, values)
        })
    }

    _cancel = () => {}

    _validateDeveloperNumber = (_, value, callback) => {
        if (value > 6) {
            callback('开发人数必须小于6人')
            return
        }
        callback()
    }

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

        const {
            getFieldDecorator
        } = this.props.form

        const {
            formData
        } = this.props
        console.log(formData.toJS(), '=====')
        const {
            difficulty,
            developNumber,
            developFramework,
            projectCycleType,
            projectName,
            specificDate
        } = formData.toJS()

        return (
            <div className="form__container">
                <form className="form">
                    <FormItem
                        {...formItemLayout}
                        label="项目名称"
                        className="form__item"
                        >
                        {getFieldDecorator('name', {
                                rules: [{ required: true, message: '请输入项目名称!' }]
                            })(<Input 
                                style={{
                                    width: '300px'
                                }}
                                placeholder="请输入项目名称"
                                />)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="开发人数"
                        className="form__item"
                        >
                        {getFieldDecorator('developerNumber', {
                                rules: [{ 
                                    required: true, 
                                    message: '请输入开发人数!' 
                                }, {
                                    validator: this._validateDeveloperNumber
                                }],
                            })(<InputNumber 
                                precision={0}
                                min={0}
                                />)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="项目周期"
                        className="form__item"
                        >
                        {getFieldDecorator('projectCycle', {
                                rules: [{ required: true, message: '请选择项目周期' }]
                            })(<RadioGroup>
                                <Radio value={1}>
                                    {
                                        getFieldDecorator('dateNumber', {})(
                                            <InputNumber 
                                                precision={0}
                                                min={0}
                                                style={{
                                                    width: '70px'
                                                }} /> 
                                        )
                                    } 天之内
                                </Radio>
                                <Radio value={2}>
                                    特定时间 {
                                        getFieldDecorator('specificDate', {})(
                                            <RangePicker 
                                                placeholder={['开始时间', '结束时间']}
                                                />
                                        )
                                    }
                                </Radio>
                              </RadioGroup>
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="开发框架"
                        className="form__item"
                        >
                        {getFieldDecorator('framework', {
                                rules: [{ required: true, message: '请选择开发框架' }],
                            })(<Select style={{ width: 120 }}>
                                    <Option value="react">React</Option>
                                    <Option value="vue">Vue</Option>
                                    <Option value="angular">Angular</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="项目难度"
                        className="form__item"
                        >
                        {getFieldDecorator('rate', {
                            rules: [{
                                required: true, message: '必须选择'
                            }]
                        })(
                            <Rate />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="项目开发依赖"
                        className="form__item"
                        >
                        {getFieldDecorator('selectTableData', {
                                rules: [{ required: true, message: 'select table data is required!' }],
                            })(<div>
                                    <Button type="primary">+ 添加</Button>
                                    <Table 
                                    columns={columns} 
                                    dataSource={data} 
                                    />
                                </div>)
                        }
                    </FormItem>
                </form>
                <Row>
                    <Col span={3}></Col>
                    <Col span={10}>
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
                    </Col>
                </Row>
            </div>
        )
    }
}

const insertDataForm = Form.create({
    mapPropsToFields({ formData = {} }) {
        const { 
            projectName,
            developerNumber,
            projectCycleType,
            developFramework,
            difficulty,
            dateNumber,
            specificDate
        } = formData.toJS()
        console.log(projectCycleType)

        return {
            name: Form.createFormField({
                value: projectName
            }),
            developerNumber: Form.createFormField({
                value: developerNumber
            }),
            projectCycle: Form.createFormField({
                value: projectCycleType
            }),
            framework: Form.createFormField({
                value: developFramework
            }),
            rate: Form.createFormField({
                value: difficulty
            }),
            dateNumber: Form.createFormField({
                value: dateNumber
            }),
            specificDate: Form.createFormField({
                value: specificDate.map(current => moment(current))
            })
        }
    }
})(ComplexForm)

export default connect(({
    formData
}) => ({
    formData
}), () => {})(insertDataForm)