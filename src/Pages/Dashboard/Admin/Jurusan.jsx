import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Form,
  Table,
  TableColumn,
  Field,
} from "../../../honeylib/Component";
import { DataContext } from "./index";

const json = require("../../../api.json");

const route = "Pages/Dashboard/Admin/Jurusan";

export default () => {
  const data = useContext(DataContext);

  return (
    <Container>
      <Table data={data.jurusan} title={"Jurusan"} route={route}>
        <TableColumn title={"Jurusan"} path={"jurusan_nama"} />
        <TableColumn
          title={"Fakultas"}
          path={"fakultas_id"}
          foreign={data.fakultas}
        />
        <TableColumn
          title={"Status"}
          path={"jurusan_status"}
          boolean={"Aktif/Non-Aktif"}
        />
      </Table>
    </Container>
  );
};

export const CreateJurusan = () => {
  const data = useContext(DataContext);
  const [item, setItem] = useState({
    nama_jurusan: "",
    fakultas_id: 0,
  });

  const handle = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const api = {
    url: "https://backend.jujitsu-upnvjatim.xyz/api/jurusan/insert",
    body: item,
  };

  return (
    <Form formTitle={"Jurusan"} api={api} removeDelete={true} route={route}>
      <Field
        title={"Jurusan"}
        type={"text"}
        name={"nama_jurusan"}
        value={item.nama_jurusan}
        onChange={handle}
      />
      <Field
        title={"Fakultas"}
        type={"text"}
        name={"fakultas_id"}
        value={item.fakultas_id}
        onChange={handle}
        selector={"multiple"}
        foreign={data.fakultas}
      />
    </Form>
  );
};

export const FormJurusan = (props) => {
  const data = useContext(DataContext);

  const { id } = props;
  let items = props.location.state.data;

  const [item, setItem] = useState(items);

  const handle = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <Form formTitle={"Jurusan"} removeDelete={true} route={route}>
      <Field
        title={"Jurusan"}
        name={"jurusan_nama"}
        type={"text"}
        value={item.jurusan_nama}
        onChange={handle}
      />
      <Field
        title={"Fakultas"}
        name={"fakultas_id"}
        type={"text"}
        value={item.fakultas_id}
        onChange={handle}
        selector={"multiple"}
        foreign={data.fakultas}
      />
      <Field
        title={"Status"}
        name={"jurusan_status"}
        value={item.jurusan_status}
        onChange={handle}
        selector={"boolean"}
        boolean={"Aktif/Non-Aktif"}
      />
    </Form>
  );
};
