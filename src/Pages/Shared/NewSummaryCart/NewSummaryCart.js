import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewSummaryCart = ({ news }) => {
  const { _id, author, details, image_url, title, rating, total_view } = news;
  console.log(news)
  return (

    <div>
      <Card className='mb-5'>
        <Card.Header>
          <div className='d-flex justify-content-between aling-item-center' >
            <Image
              src={author.img}
              roundedCircle
              style={{ height: '60px' }}
            ></Image>

            <div>
              <FaRegBookmark></FaRegBookmark>
              <FaShareAlt></FaShareAlt>
            </div>
          </div>

        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {
              details.length > 250 ?
                <p>{details.slice(0, 250) + '....'} <Link to={`/news/${_id}`}>Read more</Link></p>
                :
                <p>{details}</p>
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between aling-item-center">
          <div>
            <FaStar className='text-warning'></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye></FaEye>
            <span>{total_view}</span>
          </div>

        </Card.Footer>
      </Card>
    </div>

  );
};

export default NewSummaryCart;