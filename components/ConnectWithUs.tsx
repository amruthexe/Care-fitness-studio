import React from 'react';

const mapContainerStyle = {
  width: '100%',
  height: '300px',
};

const ConnectWithUs: React.FC = () => {
  return (
    <>
      <div className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                <span className="text-white text-transparent bg-clip-text">
                  Our Location
                </span>
              </h3>
              {/* Embed the new Google Maps link as the map */}
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.456256525032!2d77.9398751!3d13.006591499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bade30010f7f925%3A0x4b1e4132bae8196!2sCARE%20FITNESS%20STUDIO!5e0!3m2!1sen!2sin!4v1741683593245!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: '0', width: '100%', height: '300px' }}
                 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Care Fitness Studio Location"
                ></iframe>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mt-10 mb-6">
                <span className="bg-white bg-clip-text">
                  Opening Hours
                </span>
              </h3>
              <p className="mb-2">Sunday: 10:00 AM - 6:00 PM</p>
              <h3 className="text-xl font-semibold mb-4 mt-8">
                <span className="bg-white text-transparent bg-clip-text">
                  Contact Information
                </span>
              </h3>
              <p className="mb-2">Phone: 8861989463, 7026131447</p>
              <p className="mb-2">Email: info@carefitness.com</p>
              <p className="mb-2">
                Address: Kolar Main Road, MBM Complex 3rd Floor, Malur 563130
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWithUs;
