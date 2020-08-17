import React from "react";
import { useMediaQuery } from "@material-ui/core";

export const isDesktop = useMediaQuery("(min-width:1224px)");

export const isMobile = useMediaQuery("(max-width: 1224px)");
