import React from "react";
import { Router, Link } from "@reach/router";
import { Container, RowContainer, Text } from "../../../honeylib/Component";

export default (props) => {
  const { handleSwipe } = props;

  return (
    <div style={{ margin: "20px 0 0 10px" }}>
      {SidebarItems.map((item) => (
        <Link
          style={{ textDecoration: "none" }}
          to={item.route}
          onClick={handleSwipe}
        >
          <Text size="large">{item.name}</Text>
        </Link>
      ))}
    </div>
  );
};

const SidebarItems = [
  {
    name: "Member",
    route: "/Pages/Dashboard/Admin/User/Member/Table/",
  },
  {
    name: "Fakultas",
    route: "/Pages/Dashboard/Admin/Fakultas/Table/",
  },
  {
    name: "Jurusan",
    route: "/Pages/Dashboard/Admin/Jurusan/Table/",
  },
];
