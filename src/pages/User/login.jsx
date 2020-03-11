/*
 * 登录页面
 * @Author: Jiang
 * @Date: 2019-06-13 16:45:59
 * @Last Modified by: Jiang
 * @Last Modified time: 2020-03-11 22:01:35
 */

import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    // 表单提交
    handleSubmit = e => {
        e.preventDefault();
        const { form, history } = this.props;
        form.validateFields((err) => {
            if (!err) {
                localStorage.token = 'login';
                history.push('/dashboard');
            }
        });
    }

    // 表单
    fieldDecorator = () => {
        const { form } = this.props;
        const formProps = {
            // 用户名
            loginName: form.getFieldDecorator('loginName', {
                rules: [
                    {
                        required: true,
                        message: '请输入账号'
                    }
                ]
            }),
            // 密码
            password: form.getFieldDecorator('password', {
                rules: [
                    {
                        required: true,
                        message: '请输入密码'
                    }
                ]
            })
        };
        return formProps;
    }

    render() {
        const formProps = this.fieldDecorator();
        return (
            <main className="login">
                {
                    <Form
                        onSubmit={this.handleSubmit}
                    >
                        <Form.Item>
                            {
                                formProps.loginName(
                                    <Input
                                        size="large"
                                        addonBefore="账号"
                                        placeholder="请输入账号"
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                formProps.password(
                                    <Input
                                        size="large"
                                        type="password"
                                        addonBefore="密码"
                                        placeholder="请输入密码"
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                            >
                                立即登录
                            </Button>
                        </Form.Item>
                    </Form>
                }
            </main>
        );
    }
}

const LoginForm = Form.create({ name: 'login' })(Login);

export default LoginForm;