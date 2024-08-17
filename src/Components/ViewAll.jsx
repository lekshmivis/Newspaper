import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  return (
    <div>
      <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl.No:</th>
      <th scope="col">Name</th>
      <th scope="col">Phn no:</th>
      <th scope="col">District</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Lekshmi</td>
      <td>9745267749</td>
      <td>Pathanamthitta</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>8547717067</td>
      <td>Wayanad</td>
    </tr>
   <tr>
      <th scope="row">3</th>
      <td>Dev</td>
      <td>9207948067</td>
      <td>Kannur</td>
    </tr>
      <tr>
      <th scope="row">4</th>
      <td>Krishna</td>
      <td>9961093253</td>
      <td>Kasargod</td>
    </tr>
      <tr>
      <th scope="row">5</th>
      <td>Priya</td>
      <td>9495929097</td>
      <td>Kozhikode</td>
    </tr>
      <tr>
      <th scope="row">6</th>
      <td>Vishnu</td>
      <td>9605590140</td>
      <td>Malappuram</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Bineesh</td>
      <td>9995801606</td>
      <td>Palackad</td>
    </tr>
     <tr>
      <th scope="row">8</th>
      <td>Karthik</td>
      <td>0544571183</td>
      <td>Thrissur</td>
    </tr>
     <tr>
      <th scope="row">9</th>
      <td>Rishi</td>
      <td>8156807256</td>
      <td>Alappuzha</td>
    </tr >
    <tr>
      <th scope="row">10</th>
      <td>Parvathi</td>
      <td>9400600547</td>
      <td>Kottayam</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll