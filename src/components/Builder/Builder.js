import * as React from "react"
//import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useStaticQuery, graphql } from "gatsby";
import { imgPublicUrl } from "../../utils";
import Image from 'react-bootstrap/Image';
import './Builder.scss'
import Row from "react-bootstrap/esm/Row";

function Builder(props) {
  const qryData = useStaticQuery(graphql`
        query BuilderData {
          allStrapiBuilder {
            nodes {
              id
              Name
              Image {
                file {
                  publicURL
                }
              }
            }
          }
        }
      `);
  const BuilderData = qryData?.allStrapiBuilder?.nodes;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="builder-div">
      <h2 className="bu-title">{props.title}</h2>
      <span className="separator"><hr /></span>
      <Row>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          {BuilderData && BuilderData.map((builder, index) => (
            <div>
              <Image className="d-block w-100 banner-image" src={imgPublicUrl(builder?.Image)} alt={"BannerImage"} width={300} height={210} />
              {builder?.Name &&
                <p>{builder?.Name}</p>
              }
            </div>
          ))}
        </Carousel>
      </Row>
    </div>
  );
}

export default Builder;