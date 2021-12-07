import React from "react"
import image from "../assets/hero-img-1.svg"
import { Section1Style } from "../style/section1.style"

export default function Section1(props) {
  return (
    <Section1Style>
      <section>
        <div className="container">
          <div className="row">
            <div className="details">
              <h1>{props.title}</h1>
              <p className="text">
                For just <strong>£19.99</strong> per month, Brappy will handle
                enquiries on your car listing.
              </p>
              <button className="btn-primary" type="button">
                Buy Now
              </button>
            </div>
            <div className="image">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Section1Style>
  )
}
