const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 mt-10 w-screen">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">INVSMA</h2>
            <p className="text-sm">
              Jl. Cipinang Besar No.3A, RT.4/RW.6, Cipinang Besar Sel.,
              Kecamatan Jatinegara, Daerah Khusus Ibukota Jakarta 13410
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <ul className="text-sm">
              <li>
                <a href="tel:081292300803">Telephone: 0812-9230-0803</a>
              </li>
              <li>
                <a href="mailto:admin@invsma.com">Email: admin@invsma.com</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold mb-2">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          <p>&copy; 2024 INVSMA. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
