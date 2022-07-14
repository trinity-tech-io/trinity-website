import React from 'react';
import ConicGradiSection from '../components/ConicGradiSection';

const Contact = () => {
    return (
        <>
            <ConicGradiSection title="Contact us"/>
            <section className="section pt-4" id="contact">
                <div className="container padding-t-30" style={{maxWidth: 800}}>
                    {/* <form> */}
                        <div className="row justify-content-center margin-t-50">
                            <div className="col-sm-12" style={{paddingBottom: 30}}>
                                <h2 className="text-white">
                                    Fill in your details
                                </h2>
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" placeholder="First name..." />
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" placeholder="Last name..." />
                            </div>
                            <div className="col-sm-12">
                                <input type="text" className="form-control" placeholder="E-mail address..." />
                            </div>
                            <div className="col-sm-12">
                                <textarea rows={10} className="form-control" placeholder="Your message..." />
                            </div>
                            <button className="btn btn-send">Send</button>
                        </div>
                    {/* </form> */}
                </div>
            </section>
        </>
    );
}

export default Contact;