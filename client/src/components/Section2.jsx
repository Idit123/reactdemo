import React from "react"
import image from "../assets/car-selling-img.svg"
import { Section2Style } from "../style/section2.style"

export default function Section2() {
  return (
    <Section2Style>
      <section>
        <div className="container">
          <div className="row">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="details">
              <h1>We are here to help</h1>
              <p className="text">
                Selling your car privately can be stressful and time consuming.
                But here at Brappy, we can help you with managing your sale, by
                being your point of contact for any potential buyers!
              </p>
              <button className="btn-primary" type="button">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </Section2Style>
  )
}
