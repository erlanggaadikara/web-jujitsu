import React, { useState, useEffect } from "react";
import axios from "axios";
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

const route = "Pages/Dashboard/Admin/Fakultas";

export default () => {
  const [data, setData] = useState([]);
  let result;

  useAsyncEffect(async () => {
    result = await viewData(
      "https://backend.jujitsu-upnvjatim.xyz/api/fakultas"
    );

    if (result) {
      setData(result);
    } else {
      console.log(result);
    }
  }, [result]);

  return (
    <Container>
      <Table data={data} title={"Fakultas"} route={route}>
        <TableColumn title={"Fakultas"} path={"fakultas_nama"} />
        <TableColumn
          title={"Status"}
          path={"fakultas_status"}
          boolean={"Aktif/Non-Aktif"}
        />
      </Table>
    </Container>
  );
};

export const CreateFakultas = () => {
  const [item, setItem] = React.useState("");

  const handle = (event) => {
    setItem(event.target.value);
  };

  const api = {
    url: "https://backend.jujitsu-upnvjatim.xyz/api/fakultas/insert",
    body: { nama_fakultas: item },
  };
  return (
    <Form formTitle={"Fakultas"} api={api} removeDelete={true} route={route}>
      <Field title={"Fakultas"} type={"text"} value={item} onChange={handle} />
    </Form>
  );
};

export const FormFakultas = (props) => {
  const { id } = props;
  let items = props.location.state.data;
  console.log(item);

  const [item, setItem] = React.useState(items);

  const handle = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <Form formTitle={"Fakultas"} removeDelete={true} route={route}>
      <Field
        title={"Fakultas"}
        name={"fakultas_nama"}
        type={"text"}
        value={item.fakultas_nama}
        onChange={handle}
      />
      <Field
        title={"Status"}
        name={"fakultas_status"}
        value={item.fakultas_status}
        onChange={handle}
        selector={"boolean"}
        boolean={"Aktif/Non-Aktif"}
      />
    </Form>
  );
};
