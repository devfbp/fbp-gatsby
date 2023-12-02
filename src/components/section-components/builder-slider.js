import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { imgUrl} from "../../utils";
function BuilderSlider(props) {
    const qryData = useStaticQuery(graphql`
      query BuilderData {
        allStrapiBuilder(limit: 10) {
            nodes {
                Name      
                Image {
                file {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
                }
            }
        }
      }
    `);
    let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/';
    const BuilderData = qryData?.allStrapiBuilder?.nodes;
    return (
        <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1 pt-110 pb-110 plr--9 d-none---">
            <div className="container-fluid">
                <div className="row ltn__brand-logo-active">
                    {BuilderData &&
                        BuilderData.map((builder, index) => (
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src={imgUrl(builder?.Image)} alt={builder?.Name} width={200} height={100} />
                                </div>
                            </div>
                            
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default BuilderSlider;