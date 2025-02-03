import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText } from "@mui/material";

const ServiceList = ({ services }) => {
  return (
    <List>
      {services.map((service, index) => (
        <ListItem key={index}>
          <ListItemText primary={service} />
        </ListItem>
      ))}
    </List>
  );
};

// PropTypes
ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServiceList;
