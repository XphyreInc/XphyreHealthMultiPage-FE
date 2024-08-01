import React, { useState } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { states } from '../../Constants/constants';


export default function AppointmentForm() {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    state: '',
    monthlyCollections: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName' || name === 'lastName') {
      setFormData({
        ...formData,
        fullname: `${name === 'firstName' ? value : formData.fullname.split(' ')[0]} ${name === 'lastName' ? value : formData.fullname.split(' ')[1] || ''}`
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, ...rest } = formData;
    axios.post('http://localhost:3000/api/send_email', {
      // https://xphyre-health-be.netlify.app/.netlify/functions/api/send_email
      ...rest,
      fullname: `${formData.fullname.split(' ')[0]} ${formData.fullname.split(' ')[1] || ''}`,
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">First Name</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="David"
          name="firstName"
          onChange={handleChange}
          required
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Last Name</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="John"
          name="lastName"
          onChange={handleChange}
          required
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Email</label>
        <input
          type="email"
          className="cs_form_field"
          placeholder="example@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Phone Number</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="(123) 456 - 789"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">State</label>
        <select
          className="cs_form_field"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          {states.map((state) => (
            <option key={state.value} value={state.value}>
              {state.name}
            </option>
          ))}
        </select>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Monthly Collections</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Monthly Collections (Optional)"
          name="monthlyCollections"
          value={formData.monthlyCollections}
          onChange={handleChange}
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <button className="cs_btn cs_style_1" type="submit">
          <span>Submit</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
    </form>
  );
}
