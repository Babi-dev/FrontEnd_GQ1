import React from "react";

import { TextField, Button, Icon } from "@material-ui/core";
import "./style/Style.css";

export default function ScreenLogin() {
  return (
    <div className="container">
      <div className="form-container">
        <div className="logo-container">
          <Icon style={{ fontSize: 40, color: "#35459E" }}>menu_book</Icon>
          <span>BibComp</span>
        </div>
      
        <div className="form-component">
          <TextField required label="Login" type="text" margin="normal" variant="outlined" />
          <TextField required label="Senha"  type="password" margin="normal" variant="outlined" />
          <div className="btn-container">
            <Button>Acessar</Button>
            <Button>Registrar-se</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
