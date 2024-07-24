import React from "react";
import FooterSection from "./components/FooterSection";
import {
  footerLinkItemList,
  footerPictureItemList,
} from "../../constants/footerItemList";
import ChangeCountryAndTrustImages from "./components/ChangeCountryAndTrustImages";
import Footnotes from "./components/Footnotes";

function Footer() {
  return (
    <div className="  mx-auto pt-10  bg-black ">
      {/* <div className="max-w-[1200px] mx-auto mb-8  grid grid-cols-4 "> */}
      <div className="sm:max-w-96 md:max-w-[1200px] mx-auto mb-8  grid grid-cols-4  ">
        {/* Links */}
        {footerLinkItemList.map((item, key) => (
          <FooterSection key={key} item={item} />
        ))}

        {/* Pictures */}
        {footerPictureItemList.map((item, key) => (
          <FooterSection key={key} item={item} />
        ))}

        {/* Change Country and Trust Images */}
        <ChangeCountryAndTrustImages />
      </div>

      {/* FootNotes */}
      <Footnotes />
    </div>
  );
}

export default Footer;