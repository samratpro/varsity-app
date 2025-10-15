import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <h5>UniversityRankings</h5>
                    <p>Find the best universities worldwide with comprehensive rankings and detailed information to help you make informed decisions about your education.</p>
                    <div className="mt-3">
                        <a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="me-3"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-4">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2"><a href="#">Home</a></li>
                        <li className="mb-2"><a href="#">Universities</a></li>
                        <li className="mb-2"><a href="#">News</a></li>
                        <li className="mb-2"><a href="#">About Us</a></li>
                        <li className="mb-2"><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <h5>Popular Subjects</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2"><a href="#">Computer Science</a></li>
                        <li className="mb-2"><a href="#">Business & Management</a></li>
                        <li className="mb-2"><a href="#">Engineering</a></li>
                        <li className="mb-2"><a href="#">Medicine</a></li>
                        <li className="mb-2"><a href="#">Arts & Humanities</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <h5>Newsletter</h5>
                    <p>Subscribe to our newsletter for the latest updates on university rankings and educational news.</p>
                    <form className="mt-3">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Your email" aria-label="Email" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; 2025 UniversityRankings. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
