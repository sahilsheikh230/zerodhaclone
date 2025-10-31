import React from "react";
export default function Footer() {
  return (
    <div className="container-fluid d-flex justify-content-around w-100 footer">
      <div className="row gap-5">
        <div className="col mt-4 footerlogo">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="zerodha"
            className="logo mb-3 mt-2"
          />
          <p className="footerlogo">
            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
          </p>
          <div className="d-flex justify-content-center gap-3 footermedia">
            <a href="/"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="/"><i className="fa-brands fa-facebook"></i></a>
            <a href="/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="/"><i className="fa-brands fa-instagram"></i></a>
          </div>
          <hr />
          <div className="d-flex justify-content-center gap-3 footermedia">
            <a href="/"><i className="fa-brands fa-youtube"></i></a>
            <a href="/"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="/"><i className="fa-brands fa-telegram"></i></a>
          </div>
        </div>

        <div className="col">
          <ul className="list-unstyled d-flex flex-column justify-content-center gap-3 footerul">
            <li className="mx-3"><h4 className="ml-5">Account</h4></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Open demat account</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Minor demat Account</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Nri demat account</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Commodity</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Dematerialisation</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Fund transfer</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">MTF</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Referral program</a></li>
          </ul>
        </div>

        <div className="col">
          <ul className="list-unstyled d-flex flex-column justify-content-center gap-3 footerul">
            <li className="mx-3"><h4 className="ml-5">Support</h4></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Contact us</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Support portal</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">How to file a complaint?</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Status of my complaints</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Bulletin</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Circular</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Z-Connect blogr</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Downloads</a></li>
          </ul>
        </div>

        <div className="col">
          <ul className="list-unstyled d-flex flex-column justify-content-center gap-3 footerul">
            <li className="mx-3"><h4 className="ml-5">Company</h4></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">About </a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Philosophy</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Press & media</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Careers</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Zerodha Cares (CSR)</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Zerodha.tech</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Open source</a></li>
          </ul>
        </div>

        <div className="col">
          <ul className="list-unstyled d-flex flex-column justify-content-center gap-3 footerul">
            <li className="mx-3"><h4 className="ml-5">Quick links</h4></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Upcoming IPOs</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Brokerage charges</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Market holidays</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Economic calendar</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Calculators</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Markets</a></li>
            <li className="mx-3"><a href="/" className="text-decoration-none">Sectors</a></li>
          </ul>
        </div>

        <div className="footerp">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name, PAN,
            Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
            Speedy redressal of the grievances
          </p>
          <p>
            <a href="/"> Smart Online Dispute Resolution | </a>
            <a href="/">Grievances Redressal Mechanism</a>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1. Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2. Update your e-mail and phone number with
            your stock broker / depository participant and receive OTP directly
            from depository on your e-mail and/or mobile number to create pledge.
            3. Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.
          </p>

          <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive information
            of your transactions directly from Exchange on your mobile/email at
            the end of the day. Issued in the interest of investors. KYC is one
            time exercise while dealing in securities markets - once KYC is done
            through a SEBI registered intermediary (broker, DP, Mutual Fund etc.),
            you need not undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO, there
            is no need to issue a cheque. Please write the Bank account number
            and sign the IPO application form to authorize your bank to make
            payment in case of allotment. In case of non allotment the funds will
            remain in your bank account. As a business we don't give stock tips,
            and have not authorized anyone to trade on behalf of others. If you
            find anyone claiming to be part of Zerodha and offering such services,
            please create a ticket here.
          </p>
        </div>

        <div className="d-flex justify-content-center gap-4 mb-3 footera">
          <a href="/">NSE </a>
          <a href="/">BSE </a>
          <a href="/">MCX </a>
          <a href="/">Terms & conditions </a>
          <a href="/">Policies & procedures </a>
          <a href="/">Privacy policy </a>
          <a href="/">Disclosure </a>
          <a href="/">For investor's attention </a>
          <a href="/">Investor charter</a>
        </div>
      </div>
    </div>
  );
}
