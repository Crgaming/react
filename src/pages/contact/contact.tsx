import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
function contact() {
  return (
    <div className="container mt-5 mb-5">
      <h2>Contact Us</h2>
      <form>
        {/* Name input */}
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email input */}
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message input */}
        <div className="form-group mb-3">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={4}
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Send Your Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default contact;
