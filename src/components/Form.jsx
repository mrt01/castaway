import React, { useState } from "react";
import "../styles/Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можно обработать отправку данных на сервер или выполнить другую логику после отправки формы
    console.log("Form data:", formData);
  };
  return (
    <div className="Form">
      <div className="Form_left">
        <p className="Form_title">Email Newsletter</p>
        <p className="Form_Main">
          Subscribe <br />
          for updates
        </p>
      </div>
      <div className="Form_right">
        <form onSubmit={handleSubmit}>
          <div>
            
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
