import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img src="/assets/contact.png" alt="Contact Us"
              height="300px" width="300px" />
          </div>
          <div className="col-md-6">
            <form >
              <div className="mb-3">
                <label form="exampleform" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleform" placeholder="Trung Đứcc"/>
              </div>
              <div className="mb-3">
                <label form="exampleformControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleformControlInput1" placeholder="trantrungduc1211@gmail.com"/>
              </div>
              <div className="mb-3">
                <label form="exampleformControlTextarea1" className="form-label">Example</label>
                <textarea className="form-control" id="exampleformControlTextarea1" rows={5}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact