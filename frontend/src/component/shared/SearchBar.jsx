import React, { useState } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "./../../units/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [formData, setFormData] = useState({
    location: "",
    distance: "",
    maxGroupSize: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value })); // Update state
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const { location, distance, maxGroupSize } = formData;

    if (!location || !distance || !maxGroupSize) {
      return alert("All fields are required!");
    }

    try {
      const res = await fetch(
        `${BASE_URL}/tours/search/getTourBySearch?city=${encodeURIComponent(
          location
        )}&distance=${encodeURIComponent(
          distance
        )}&maxGroupSize=${encodeURIComponent(maxGroupSize)}`
      );

      if (!res.ok) throw new Error("Something went wrong");

      const result = await res.json();
      navigate(
        `/tours/search?city=${encodeURIComponent(
          location
        )}&distance=${encodeURIComponent(
          distance
        )}&maxGroupSize=${encodeURIComponent(maxGroupSize)}`,
        { state: result.data }
      );
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Col xs="12" sm="12" md="12" lg="12">
      <div className="search__bar">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Form onSubmit={searchHandler} className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <label htmlFor="location">
                <h6>Location</h6>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Where are you going?"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <label htmlFor="distance">
                <h6>Distance</h6>
              </label>
              <input
                type="number"
                id="distance"
                name="distance"
                placeholder="Distance k/m"
                value={formData.distance}
                onChange={handleInputChange}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <label htmlFor="maxGroupSize">
                <h6>Max People</h6>
              </label>
              <input
                type="number"
                id="maxGroupSize"
                name="maxGroupSize"
                placeholder="0"
                value={formData.maxGroupSize}
                onChange={handleInputChange}
              />
            </div>
          </FormGroup>
          <button className="search__icon" type="submit">
            <i className="ri-search-line"></i>
          </button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
