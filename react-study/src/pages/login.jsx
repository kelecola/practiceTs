// 简单一点就是账号密码和校验
import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';

function LoginPage() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const login = () => {
    console.log(account, password);
  }
  return (
    <Form>
      <Form.Item name="account" label="账号">
        <Input
          value={account}
          onChange={ e => setAccount(e.target.value) }
          placeholder="请输入账号" />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password
          value={password}
          onChange={ e => setPassword(e.target.value) }
          placeholder="请输入密码" />
      </Form.Item>
      <Button type="primary" htmlType="submit" onClick={ login }>登录</Button>
    </Form>
  )
}

export  { LoginPage }
// function useState() {
//   const state = {count: 1};
//   const setCount = (count) => {
//     state.count = count;
//   };

//   return [state.count, setCount];

// }