import React, { useState, useEffect } from "react";
import { useAsyncEffect } from "use-async-effect";
import {
  Container,
  Form,
  Table,
  TableColumn,
  Field,
} from "../../../honeylib/Component";
import { viewData } from "../../../Api/backend";

const json = require("../../../api.json");

const route = "Pages/Dashboard/Admin/Jurusan";

export default () => {
  const [data, setData] = useState([]);
  const [dataFakultas, setDataFakultas] = useState([]);

  useAsyncEffect(async () => {
    let result = await viewData(
      "https://backend.jujitsu-upnvjatim.xyz/api/jurusan"
    );

    if (result) {
      setData(result);
    }

    let result_fakultas = await viewData(
      "https://backend.jujitsu-upnvjatim.xyz/api/fakultas"
    );

    if (result_fakultas) {
      setDataFakultas(result_fakultas);
    }
  }, []);

  return (
    <Container>
      <Table data={data} title={"Jurusan"} route={route}>
        <TableColumn title={"Jurusan"} path={"jurusan_nama"} />
        <TableColumn
          title={"Fakultas"}
          path={"fakultas_id"}
          foreign={dataFakultas}
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
  const [dataFakultas, setDataFakultas] = useState([]);
  const [item, setItem] = React.useState({
    nama_jurusan: "",
    fakultas_id: 0,
  });

  useAsyncEffect(async () => {
    let result_fakultas = await viewData(
      "https://backend.jujitsu-upnvjatim.xyz/api/fakultas"
    );

    if (result_fakultas) {
      setDataFakultas(result_fakultas);
    }
  }, []);

  const handle = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const api = {
    url: "https://backend.jujitsu-upnvjatim.xyz/api/jurusan/insert",
    body: item,
  };
  console.log(item.nama_jurusan, item.fakultas_id);
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
        foreign={dataFakultas}
      />
    </Form>
  );
};

export const FormJurusan = (props) => {
  const { id } = props;
  let items = props.location.state.data;

  const [item, setItem] = React.useState(items);
  const [dataFakultas, setDataFakultas] = useState([]);

  useAsyncEffect(async () => {
    let result_fakultas = await viewData(
      "https://backend.jujitsu-upnvjatim.xyz/api/fakultas"
    );

    if (result_fakultas) {
      setDataFakultas(result_fakultas);
    }
  }, []);

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
        foreign={dataFakultas}
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
