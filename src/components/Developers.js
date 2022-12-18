import React from "react";
import "./Developers.css";

function Developers() {
  return (
    <div>
      <h1 class="small-headers">Developers</h1>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="https://www.peopletools.dk/wp-content/uploads/Mette-Holmgaard-2021.jpg" alt="Freja" class="image-width"/>
            <div class="container">
              <h2>Freja Ulla Kristensen</h2>
              <p class="title">Developer & Scrum Master</p>
              <p>Sed porttitor laoreet finibus. Vivamus turpis lacus, viverra nec rhoncus ut, ultrices in ipsum. Curabitur sed diam vel magna elementum aliquet. Sed ullamcorper elit odio, sed pellentesque eros porttitor vitae.</p>
              <p class="title">fuk@ir.dk</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="https://pbs.twimg.com/ext_tw_video_thumb/1580118669698519040/pu/img/6-srTtEtx72QpCt4.jpg" alt="Jonathan" class="image-width"/>
            <div class="container">
              <h2>Jonathan Marslev</h2>
              <p class="title">Developer</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a leo mi. In at tempus nisi. Quisque et orci eget lorem bibendum rutrum. Nullam vitae ex quis metus aliquam consequat at at ex.</p>
              <p class="title">jm@ir.dk</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="https://assets.gqindia.com/photos/5cdc2e6b5e4ee6ae8c14bbfd/1:1/w_1080,h_1080,c_limit/Work-from-home.jpg" alt="Morten" class="image-width"/>
            <div class="container">
              <h2>Morten Pedersen</h2>
              <p class="title">Developer</p>
              <p>Maecenas non eros odio. Praesent quis lorem pulvinar turpis eleifend pharetra et et tortor. Pellentesque nibh justo, tempus eu cursus sed, sodales eget velit. Aenean sodales justo eget volutpat ultrices.</p>
              <p class="title">mp@ir.dk</p>
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

export default Developers;
