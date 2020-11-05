import React from "react";
import Landing from "./Pages/Landing";
import { Router } from "@reach/router";
import Sejarah from "./Pages/AdditionalPage/Sejarah";
import Admin from "./Pages/Dashboard/Admin";
import Member, {
  RegisterMember,
  FormMember,
} from "./Pages/Dashboard/Admin/User/Member";
import Fakultas, {
  CreateFakultas,
  FormFakultas,
} from "./Pages/Dashboard/Admin/Fakultas";
import Jurusan, {
  CreateJurusan,
  FormJurusan,
} from "./Pages/Dashboard/Admin/Jurusan";

export default () => {
  return (
    <Router primary>
      <Landing path="/" />
      <Sejarah path="/Sejarah" />
      <Admin path="/Pages/Dashboard/Admin/">
        <Member path="/User/Member/Table/" />
        <RegisterMember path="/User/Member/InsertForm/" />
        <FormMember path="/User/Member/EditForm/:id" />
        <Fakultas path="Fakultas/Table/" />
        <CreateFakultas path="Fakultas/InsertForm/" />
        <FormFakultas path="Fakultas/EditForm/:id" />
        <Jurusan path="Jurusan/Table/" />
        <CreateJurusan path="Jurusan/InsertForm/" />
        <FormJurusan path="Jurusan/EditForm/:id" />
      </Admin>
    </Router>
  );
};
