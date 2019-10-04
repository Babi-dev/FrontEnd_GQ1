import React from "react";
import { Link } from 'react-router-dom'

import { Form, Input } from '@rocketseat/unform';

import { Button, Icon } from "@material-ui/core";
import "./style/Style.css";

function ScreenLogin() {
  function handleSubmit(data) {
    console.log(data);
 
    /**
     * {
     *   email: 'email@example.com',
     *   password: '123456'
     * }
     */
  }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <div className="logo-container">
          <Icon style={{ fontSize: 40, color: "#35459E" }}>menu_book</Icon>
          <span>BibComp</span>
        </div>
      
        <Input placeholder="email" name="email" />
        <Input placeholder="password" name="password" type="password" />

        <div>
          <Button type="submit">Acessar</Button>
          <p><Link to="/">cadastrar-se</Link></p>
        </div>
      </Form>
    </div>
  );
}

export default ScreenLogin;