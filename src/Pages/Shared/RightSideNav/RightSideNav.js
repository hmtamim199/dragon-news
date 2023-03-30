import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaWhatsapp,
} from "react-icons/fa";
import BrandCarusal from "../BrandCarusal/BrandCarusal";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary">
          <FaGoogle></FaGoogle> Login via google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Singin via github
        </Button>
      </ButtonGroup>
      <div>
        <h5 className="mt-4">find us </h5>
        <ListGroup>
          <ListGroup.Item> {" "}<FaFacebook /> Facebook </ListGroup.Item>
          <ListGroup.Item>{" "}<FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item>  {" "} <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item> {" "} <FaWhatsapp /> WhatsApps
          </ListGroup.Item> <ListGroup.Item> terms and condition</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarusal></BrandCarusal>
      </div>
    </div>
  );
};

export default RightSideNav;
