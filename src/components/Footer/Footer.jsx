import React from "react";
import Social_Icons from "../Social_Icons";

const Footer = () => {
    return (
        <footer>
            <section className="grid md:grid-cols-4 bg-slate-100 px-4 md:px-10 py-7">
                <div>
                    <h2 className="text-xl font-bold">Top brands</h2>
                    <hr className="my-2" />
                    <h2>
                        <a href="/#" className="link link-hover">Apple</a>
                    </h2>
                    <h2>
                        <a href="/#" className="link link-hover">Lenovo</a>
                    </h2>
                    <h2>
                        <a href="/#" className="link link-hover">Dell</a>
                    </h2>
                    <h2>
                        <a href="/#" className="link link-hover">Asus</a>
                    </h2>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Company</h2>
                    <hr className="my-2" />
                    <h2>
                        <a href="/#" className="link link-hover">About us</a>
                    </h2>
                    <h2>
                        <a href="/#" className="link link-hover">Contact</a>
                    </h2>
                    <h2>
                        <a href="/#" className="link link-hover">Jobs</a>
                    </h2>
                    <h2>
                        <a href="/#" className="link link-hover">Press kit</a>
                    </h2>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Terms and condition</h2>
                    <hr className="my-2" />
                    <h2>
                        <a href="/#" className="link link-hover">Privacy policy</a>
                    </h2>
                    <h2>
                        <a href="/#" className="link link-hover">Cookie policy</a>
                    </h2>
                </div>
                <div>
                    <h2 className="text-xl font-bold ">Newsletter</h2>
                    <hr className="my-2" />
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Stay connect with us</span>
                            <Social_Icons />
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer footer-center p-4 bg-primary text-white border drop-shadow font-bold">
                <div>
                    <p>Copyright © 2022 - All right reserved by ElectroShop E-commerce Ltd</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;