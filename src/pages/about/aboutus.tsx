import React from 'react';
import Avatar from '../../img/avatar.png';
const AboutUs = () => {
  return (
    <section className="py-5">
      <div className="container mb-3">
        <h1 className="text-center mb-5">Team 6</h1>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <a href="/member1" className="text-decoration-none">
              <div className="card">
                <img src={Avatar} className="card-img-top" alt="Member 1" />
                <div className="card-body">
                  <h5 className="card-title">Nguyễn Thành Đạt</h5>
                  <p className="card-text">Position: Member</p>
                  <p className='card-text'>MSSV: 23-0-00161</p>

                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 mb-3">
            <a href="/member2" className="text-decoration-none">
              <div className="card">
                <img src={Avatar} className="card-img-top" alt="Member 2" />
                <div className="card-body">
                  <h5 className="card-title">Nguyễn Thanh Nguyên Chánh Trực</h5>
                  <p className="card-text">Position: Leader</p>
                  <p className='card-text'>MSSV: 23-0-00259</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 mb-3">
            <a href="/member3" className="text-decoration-none">
              <div className="card">
                <img src={Avatar} className="card-img-top" alt="Member 3" />
                <div className="card-body">
                  <h5 className="card-title">Phan Trọng Chí</h5>
                  <p className="card-text">Position: Member</p>
                  <p className='card-text'>MSSV: 23-0-00208</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutUs;
