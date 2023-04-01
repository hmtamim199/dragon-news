import React, { useContext } from "react";
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
import { AuthContext } from "../../../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";


const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSingin = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.error(error))
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSingin} className="mb-3" variant="outline-primary">
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
