import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { useState, useEffect } from "react";
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"
import $ from 'jquery';

function SearchForm(props) {
	const [area, setArea] = useState();
	const [location, setLocation] = useState();
	let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
	let imagealt = 'image'
	const qryData = useStaticQuery(graphql`
      query SearchFormQry {
        allStrapiPropertyLocation {
			nodes {
				Name
			}
		}
		allStrapiPropertyArea {
			nodes {
			  Name
			  Location {
				Name
			  }
			}
		  }
		allStrapiPropertyType {
			nodes {
				Name
			}
		}
      }
    `);
	const SelectLocation = qryData?.allStrapiPropertyLocation?.nodes;
	const SelectArea = qryData?.allStrapiPropertyArea?.nodes;
	useEffect(() => {
		sessionStorage.setItem("search_location", "");
		sessionStorage.setItem("search_area", "");
		sessionStorage.setItem("search_properytype", "");
		setArea(SelectArea)
	}, [SelectArea]);
	const SelectPropertyTYpe = qryData?.allStrapiPropertyType?.nodes;

	function onLocationChanges(e) {
		setArea([]);
		setLocation(e.target.value);
		sessionStorage.setItem("search_location", e.target.value);
		var filterArea = [];
		SelectArea.map((sarea) => {
			if (sarea?.Location?.Name == e.target.value) {
				filterArea.push(sarea);
			}
		})
		setArea(filterArea);
	}

	function onAreaChange(e) {
		sessionStorage.setItem("search_area", e.target.value);
	}

	function onPropertyTypeChange(e) {
		sessionStorage.setItem("search_properytype", e.target.value);
	}
	return (
		<div className="ltn__car-dealer-form-area mt--65 mt-120 pb-115---">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="ltn__car-dealer-form-tab">
							<div className="ltn__tab-menu  text-uppercase d-none">
								<div className="nav">
									<a className="active show" data-bs-toggle="tab" href="#ltn__form_tab_1_1"><i className="fas fa-car" />Find A Car</a>
									<a data-bs-toggle="tab" href="#ltn__form_tab_1_2" ><i className="far fa-user" />Get a Dealer</a>
								</div>
							</div>
							<div className="tab-content bg-white box-shadow-1 position-relative pb-10">
								<div className="tab-pane fade active show" id="ltn__form_tab_1_1">
									<div className="car-dealer-form-inner">
										<form action="#" className="ltn__car-dealer-form-box row">
											<div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
												<select className="nice-select location-options" onChange={onLocationChanges}>
													<option value="all">Choose Location</option>
													{SelectLocation &&
														SelectLocation.map((location, index) => (
															<option value={location?.Name}>{location?.Name}</option>
														))
													}
												</select>
											</div>
											<div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
												<select className="nice-select area-options" onChange={onAreaChange}>
													<option>Choose Area</option>
													{area &&
														area.map((area, index) => (
															<option value={area?.Name}>{area?.Name}</option>
														))
													}
												</select>
											</div>
											<div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
												<select className="nice-select" onChange={onPropertyTypeChange}>
													<option>Property Type</option>
													{SelectPropertyTYpe &&
														SelectPropertyTYpe.map((ptype, index) => (
															<option value={ptype?.Name}>{ptype?.Name}</option>
														))
													}
												</select>
											</div>
											<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
												<div className="btn-wrapper text-center mt-0 go-top">
													{/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
													<a href="/property-results" className="btn theme-btn-1 btn-effect-1 text-uppercase">Find Now</a>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div className="tab-pane fade" id="ltn__form_tab_1_2">
									<div className="car-dealer-form-inner">
										<form action="#" className="ltn__car-dealer-form-box row">
											<div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
												<select className="nice-select">
													<option>Choose Area</option>
													<option>chicago</option>
													<option>London</option>
													<option>Los Angeles</option>
													<option>New York</option>
													<option>New Jersey</option>
												</select>
											</div>
											<div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
												<select className="nice-select">
													<option>Property Status</option>
													<option>Open house</option>
													<option>Rent</option>
													<option>Sale</option>
													<option>Sold</option>
												</select>
											</div>
											<div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
												<select className="nice-select">
													<option>Property Type</option>
													<option>Apartment</option>
													<option>Co-op</option>
													<option>Condo</option>
													<option>Single Family Home</option>
												</select>
											</div>
											<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
												<div className="btn-wrapper text-center mt-0 go-top">
													{/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
													<a href="/go-top" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Properties</a>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchForm