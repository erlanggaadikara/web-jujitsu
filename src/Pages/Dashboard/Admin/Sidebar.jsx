import React from "react";
import { Router, Link } from "@reach/router";
import { Container, RowContainer, Text } from "../../../honeylib/Component";

export default () => {
  return (
    <>
      <div>
        {SidebarItems.map((item) => (
          <Link style={{ textDecoration: "none" }} to={item.route}>
            <Text size="large">{item.name}</Text>
          </Link>
        ))}
      </div>
    </>
  );
};

const SidebarItems = [
  {
    name: "Fakultas",
    route: "/Pages/Dashboard/Admin/Fakultas/Table/",
  },
  {
    name: "Jurusan",
    route: "/Pages/Dashboard/Admin/Jurusan/Table/",
  },
];
