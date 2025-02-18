import React from 'react'
import './Bookhere.css'

const Bookhere = () => {
  return (
    <div>
      <section className='booking'>
        <div className='container'>
      <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationTooltip01" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationTooltip02" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltipUsername" class="form-label">Email</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
      <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
      <div class="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationTooltip03" required/>
    <div class="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">State</label>
    <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">Choose...</option>
      <option>Tamil Nadu</option>
      <option>Kerala</option>
      <option>Andhra Pradesh</option>
      <option>Telengana</option>
      <option>Karnataka</option>
    </select>
    <div class="invalid-tooltip">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationTooltip05" required/>
    <div class="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip05" class="form-label">Time</label>
    <input type="time" class="form-control" id="validationTooltip05" required/>
    <div class="invalid-tooltip">
      Please provide a valid time.
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip05" class="form-label">Date</label>
    <input type="date" class="form-control" id="validationTooltip05" required/>
    <div class="invalid-tooltip">
      Please provide a valid date.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Phone</label>
    <input type="number" class="form-control" id="validationTooltip05" required/>
    <div class="invalid-tooltip">
      Please provide a valid number.
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
      </div>
      </section>
    </div>
  )
}

export default Bookhere
