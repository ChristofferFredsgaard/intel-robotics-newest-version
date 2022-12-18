import React from "react";
import "./Presidents.css";

function Employees() {
  return (
    <div>
      <h1 class="small-headers">Presidents</h1>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="/images/BilledeMig.jpg" alt="Christoffer" class="image-width"/>
            <div class="container">
              <h2>Christoffer Louis Fredsgaard</h2>
              <p class="title">CEO & Founder</p>
              <p>In charge of the development team.</p>
              <p class="title">clf@ir.dk</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="https://eastendot.com/wp-content/uploads/2020/08/Untitled-design-2020-08-12T120441.987.png" alt="David" class="image-width"/>
            <div class="container">
              <h2>David Szelmeczi</h2>
              <p class="title">CEO & Founder</p>
              <p>In charge of server management and server team.</p>
              <p class="title">ds@ir.dk</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="https://img.bantoa.com/images/landing/143-default.jpg" alt="Alexander" class="image-width"/>
            <div class="container">
              <h2>Alexander T M Petersen</h2>
              <p class="title">CEO & Founder</p>
              <p>In charge of GDPR, Rules and Shipping management.</p>
              <p class="title">atmp@ir.dk</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
