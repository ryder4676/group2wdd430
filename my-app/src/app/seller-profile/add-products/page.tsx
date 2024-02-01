import React, { useState, FormEvent } from 'react';

export default async function Form() {

    // WORKING ON THIS. NOT READY


    const [formData, setFormData] = useState({
        productName: "",
        productPrice: "",
      });
    
    const handleChange = ({event}:{event: FormEvent<HTMLFormElement>}) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };
    
    const handleSubmit = ({event}:{event: FormEvent<HTMLFormElement>}) => {
        event.preventDefault();
        console.log(formData);
      };
    
    return (
        <form onSubmit={handleSubmit}>
          <label>
            Product name:
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
            />
          </label>
          <label>
            productPrice:
            <input
              type="productPrice"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
}