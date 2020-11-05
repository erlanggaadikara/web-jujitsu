import React, { useState, useContext } from "react";
import {
  Container,
  Form,
  Table,
  TableColumn,
  Field,
} from "../../../../honeylib/Component";
import { DataContext } from "../index";

const route = "Pages/Dashboard/Admin/User/Member";

export default () => {
  const data = useContext(DataContext);
  return (
    <Container>
      <Table data={data.member} title={"Anggota"} route={route}>
        <TableColumn title={"NPM"} path={"member_npm"} />
        <TableColumn title={"Nama"} path={"member_nama"} />
        <TableColumn
          title={"Jurusan"}
          path={"jurusan_id"}
          foreign={data.jurusan}
        />
        <TableColumn title={"Tempat Lahir"} path={"member_tempatlahir"} />
        <TableColumn title={"Tanggal Lahir"} path={"member_tanggallahir"} />
        <TableColumn title={"No HP"} path={"member_nohp"} />
        <TableColumn title={"Nama Orang tua/Wali"} path={"member_otw_nama"} />
        <TableColumn title={"No HP Orang tua/Wali"} path={"member_otw_nohp"} />
        <TableColumn
          title={"Alumni"}
          path={"member_status_alumni"}
          boolean={"Alumni/Belum Alumni"}
        />
        <TableColumn
          title={"Pelatih"}
          path={"member_status_pelatih"}
          boolean={"Pelatih/Bukan Pelatih"}
        />
        <TableColumn
          title={"Status"}
          path={"member_status"}
          boolean={"Aktif/Non-Aktif"}
        />
      </Table>
    </Container>
  );
};

export const RegisterMember = () => {
  const data = useContext(DataContext);

  const [item, setItem] = useState({
    jurusan_id: "",
    nama: "",
    npm: "",
    password: "",
    foto: "",
    alamat: "",
    tempatlahir: "",
    tanggallahir: "",
    nohp: "",
    otw_nama: "",
    otw_nohp: "",
    status_alumni: 0,
    status_pelatih: 0,
  });

  const handle = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const api = {
    url: "https://backend.jujitsu-upnvjatim.xyz/api/register_member",
    body: item,
  };

  return (
    <Form
      formTitle={"Register Member"}
      api={api}
      removeDelete={true}
      route={route}
    >
      <Field
        title={"NPM/KTP"}
        type={"text"}
        name={"npm"}
        value={item.npm}
        onChange={handle}
      />
      <Field
        title={"Jurusan"}
        type={"text"}
        name={"jurusan_id"}
        value={item.jurusan_id}
        onChange={handle}
        selector={"multiple"}
        foreign={data.jurusan}
      />
      <Field
        title={"Nama"}
        type={"text"}
        name={"nama"}
        value={item.nama}
        onChange={handle}
      />
      <Field
        title={"Password"}
        type={"password"}
        name={"password"}
        value={item.password}
        onChange={handle}
      />
    </Form>
  );
};

export const FormMember = (props) => {
  const data = useContext(DataContext);
  let items = props.location.state.data;

  const [item, setItem] = useState(items);
  console.log(item);

  const handle = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <Form
      formTitle={"Update Member"}
      //api={api}
      removeDelete={true}
      route={route}
    >
      <Field
        title={"NPM/KTP"}
        type={"text"}
        name={"member_npm"}
        value={item.member_npm}
        onChange={handle}
      />
      <Field
        title={"Jurusan"}
        type={"text"}
        name={"jurusan_id"}
        value={item.jurusan_id}
        onChange={handle}
        selector={"multiple"}
        foreign={data.jurusan}
      />
      <Field
        title={"Nama"}
        type={"text"}
        name={"member_nama"}
        value={item.member_nama}
        onChange={handle}
      />
    </Form>
  );
};
