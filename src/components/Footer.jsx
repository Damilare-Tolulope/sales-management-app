/** @format */
import facebook from "../assets/images/svg/facebook.svg";
import instagram from "../assets/images/svg/instagram.svg";
import linkedin from "../assets/images/svg/linkedin.svg";
import twitter from "../assets/images/svg/twitter.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="m-0" id="footer">
      <div className="p-5 lg:p-12 m-0 footer bg-[#0052CC] w-full flex flex-row justify-center flex-wrap lg:flex-nowrap text-white columns-5 md:columns-6 ">
        <div className="footer__title lg:w-[40%] w-full lg:ml-2 ">
          <h1 className="font-bold">MSF Sales</h1>
          <p className="my-2.5 ml-0">
            <Link to="#">Tel: 01 234 567 890</Link>
          </p>

          <p className="my-2.5 ml-0">
            Email:
            <a href="mailto:cs@msfsales.com">cs@msfsales.com</a>
          </p>
        </div>

        <div className="footer__help w-[50%] lg:w-[15%] lg:ml-">
          <h6 className="font-bold">Help</h6>

          <p className="my-2.5 ml-0">
            <Link to="#">Support</Link>
          </p>

          <p className="my-2.5 ml-0">
            <Link to="#">FAQs</Link>
          </p>

          <p className="my-2.5 ml-0">
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
          </p>
        </div>

        <div className="footer__services w-[50%] lg:w-[15%] lg:ml-0 ">
          <h6 className="font-bold">Services</h6>

          <p className="my-2.5 ml-0">
            <Link to="#">Record sales</Link>
          </p>

          <p className="my-2.5 ml-0">
            <Link to="#">Track sales</Link>
          </p>

          <p className="my-2.5 ml-0">
            <Link to="#">Sales inventory</Link>
          </p>

          <p className="my-2.5 ml-0">
            <Link to="#">Manage Stocks</Link>
          </p>
        </div>

        <div className="footer__about-us w-[50%] lg:w-[15%] lg:ml-0">
          <h6 className="font-bold">About Us</h6>

          <p className="my-2.5 ml-0">
            <Link to="#">Weekly themes</Link>
          </p>

          <p className="my-2.5 ml-0">
            <Link to="#">Testimonials</Link>
          </p>

          <p className="my-2.5 ml-0">
            <Link to="#">Contact us</Link>
          </p>
        </div>

        <div className="footer__company w-[50%] lg:w-[15%] lg:ml-0 ">
          <h6 className="font-bold">Company</h6>

          <p className="my-2.5 ml-0">
            <Link to="#">Media center</Link>
          </p>

          <p className="my-2.5 ml-0">
            <Link to="#">Partners</Link>
          </p>

          <p className="my-2.5 ml-0">
            <Link to="#">Our communities</Link>
          </p>
        </div>
      </div>

      <div className="footer bg-[#0052CC] footer_horizontal-line w-full flex justify-center p-1 m-0">
        <div className="footer__hr h-px w-[90%] mx-1 bg-white"></div>
      </div>

      <div className="footer bg-[#0052CC] footer_social-icons-container w-full flex flex-col justify-center py-4 m-0">
        <div className="flex justify-center flex-row align-center">
          <ul className="list-none flex justify-center align-center text-center">
            <li className="text-lg m-[4px] text-white">
              <Link to="#">
                <img src={linkedin} alt="linkedin" />
              </Link>
            </li>

            <li className="text-lg m-[4px] text-white">
              <Link to="#">
                <img src={facebook} alt="facebook" />
              </Link>
            </li>

            <li className="text-lg m-[4px] text-white">
              <Link to="#">
                <img src={instagram} alt="instagram" />
              </Link>
            </li>

            <li className="text-lg m-[4px] text-white">
              <Link to="#">
                <img src={twitter} alt="twitter" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="my-2.5 mx-0 mt-[12px] text-white text-center">
          &copy; 2022 MSF Sales
        </div>
      </div>
    </div>
  );
}
