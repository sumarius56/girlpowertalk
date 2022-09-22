import React from "react";
import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const FooterNext = () => {
  return (
    <Footer container={true}>
      <div className="w-full tracking-widest">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://girlpowertalk.com/"
              src="https://girlpowertalk.in/wp-content/uploads/2021/10/GPT-logo.png"
              alt="GPT Logo"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="https://girlpowertalk.com/">
                  Girl Power Talk
                </Footer.Link>
                <Footer.Link href="https://girlpowertalk.com/our-leaders/">
                  Our Team
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="https://github.com/sumarius56/girlpowertalk">
                  Github
                </Footer.Link>
                <Footer.Link href="https://girlpowertalk.com/apply-now/">
                  Apply Now
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="https://girlpowertalk.com/privacy-policy/">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="https://girlpowertalk.com/events/">
                  Events
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="https://github.com/sumarius56"
            by="by Suciu Marius™ 
             for Girl Power Talk"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/girlpowertalk"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/girlpowertalk/?hl=en"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/girlpowertalk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              icon={BsTwitter}
            />
            <Footer.Icon href="https://github.com/sumarius56" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterNext;
