
import React from 'react';

function Footer() {
  return (
    <div id="footer_container" className=" w-screen bg-gray-950 text-white text-lg">
      <div className="">
        <div id="footer-new">                           
          <div className="footer-body">
            <div className=" flex">
              <div className="ft-about">
                <div className=" font-bold " role="heading" aria-level="2">
                  <a href="https://explore.zoom.us/en/about/">About</a>
                </div>
                <ul>
                  <li><a href="https://blog.zoom.us" className="text-blue-500">Zoom Blog</a></li>
                  <li><a href="https://explore.zoom.us/en/customer/all/" className="text-white ">Customers</a></li>
                  <li><a href="https://explore.zoom.us/en/team/" className="text-white ">Our Team</a></li>
                  <li><a href="https://careers.zoom.us/home" className="text-white ">Careers</a></li>
                  <li><a href="https://marketplace.zoom.us/" className="text-white ">Integrations</a></li>
                  <li><a href="https://partner.zoom.us/" className="text-white ">Partners</a></li>
                  <li><a href="https://investors.zoom.us/" className="text-white ">Investors</a></li>
                  <li><a href="https://news.zoom.us/" className="text-white ">Press</a></li>
                  <li><a href="https://explore.zoom.us/en/zoom-esg/" className="text-white ">Sustainability & ESG</a></li>
                  <li><a href="https://zoomcares.zoom.us" className="text-white ">Zoom Cares</a></li>
                  <li><a href="https://explore.zoom.us/en/media-kit/" className="text-white ">Media Kit</a></li>
                  <li><a href="https://learn-zoom.us/show-me" className="text-white ">How to Videos</a></li>
                  <li><a href="https://developers.zoom.us/" className="text-white ">Developer Platform</a></li>
                  <li><a href="https://explore.zoom.us/en/zoom-ventures/" className="text-white ">Zoom Ventures</a></li>
                  <li><a href="https://shophappy.zoom.us" className="text-white ">Zoom Merchandise Store</a></li>
                </ul>
              </div>
              <div className="ft-download">
                <div className="h4 font-bold" role="heading" aria-level="2">
                  <a href="https://us05web.zoom.us/download" className="text-white ">Download</a>
                </div>
                <ul>
                  <li><a href="https://us05web.zoom.us/download#client_4meeting" className="text-white ">Zoom Desktop Client</a></li>
                  <li><a href="https://us05web.zoom.us/download#room_client" className="text-white ">Zoom Rooms Client</a></li>
                  <li><a href="https://us05web.zoom.us/download#chrome_ext" className="text-white ">Browser Extension</a></li>
                  <li><a href="https://us05web.zoom.us/download#outlook_plugin" className="text-white ">Outlook Plug-in</a></li>
                  <li><a href="https://us05web.zoom.us/download#lync_plugin" className="text-white ">Lync Plug-in</a></li>
                  <li><a href="https://us05web.zoom.us/download#mobile_app" className="text-white ">Android App</a></li>
                  <li><a href="https://explore.zoom.us/en/virtual-backgrounds/" className="text-white ">Zoom Virtual Backgrounds</a></li>
                </ul>
              </div>
              <div className="ft-sales">
      <div className="h4" role="heading" aria-level="2">
        <a href="https://explore.zoom.us/en/contactsales/" className="text-blue-500">Sales</a>
      </div>
      <ul>
        <li>
          <a href="tel:1.888.799.9666" className="support-phone">1.888.799.9666</a>
        </li>
        <li>
          <a href="https://explore.zoom.us/en/contactsales/" className="text-blue-500">Contact Sales</a>
        </li>
        <li>
          <a href="/pricing" className="text-blue-500">Plans & Pricing</a>
        </li>
        <li>
          <a href="https://explore.zoom.us/en/livedemo/" className="text-blue-500" tracking-id="footerRequestDemo" tracking-category="NavFooter">Request a Demo</a>
        </li>
        <li>
          <a href="https://us05web.zoom.us/events" className="text-blue-500" tracking-id="footerWebinars" tracking-category="NavFooter">Webinars and Events</a>
        </li>
      </ul>
    </div>

    <div className="ft-support">
      <div className="h4" role="heading" aria-level="2">
        <a href="/zendesk/sso?return_to=https://support.zoom.us/hc/en-us" 
           className="text-blue-500" 
           target="_blank" 
           rel="noopener noreferrer"
           tracking-id="footerSupport" 
           tracking-category="NavFooter">
          Support
        </a>
      </div>
      <ul>
        <li><a href="https://us05web.zoom.us/test" className="text-blue-500">Test Zoom</a></li>
        <li><a href="https://us05web.zoom.us/account" className="text-blue-500">Account</a></li>
        <li>
          <a href="/zendesk/sso?return_to=https://support.zoom.us/hc/en-us" 
             className="text-blue-500" 
             target="_blank" 
             rel="noopener noreferrer"
             tracking-id="footerSupport2" 
             tracking-category="NavFooter">
            Support Center
          </a>
        </li>
        <li><a href="https://learning.zoom.us/learn" className="text-blue-500">Learning Center</a></li>
        <li><a href="https://community.zoom.com" className="text-blue-500">Zoom Community</a></li>
        <li style={{ cursor: 'pointer' }}><a id="feedback-link" className="feedback-show-dialog text-blue-500" role="button" tabIndex="0">Feedback</a></li>
        <li><a href="https://explore.zoom.us/en/contact" className="text-blue-500">Contact Us</a></li>
        <li><a href="https://explore.zoom.us/en/accessibility/" className="text-blue-500">Accessibility</a></li>
        <li><a href="https://devsupport.zoom.us/hc/en-us" className="text-blue-500">Developer Support</a></li>
        <li>
          <a href="https://explore.zoom.us/en/trust/legal-compliance/" 
             className="text-blue-500" 
             target="_blank" 
             rel="noopener noreferrer">
            Privacy, Security, Legal Policies, and Modern Slavery Act Transparency Statement
          </a>
        </li>
      </ul>
    </div>


    <div className="cm-language">
      <div className="h4" role="heading" aria-level="2">
        <span className="text-gray-300">Language</span>
      </div>
      <ul className="clearfix">
        <li>
          <div className="dropdown-language dropdown" role="presentation">
            <a role="button" href="javascript:;" className="dropdown-toggle text-white" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-haspopup="listbox">
              <span className="text-white">Language</span>
              <span className="caret"></span>
            </a>
            <select className="dropdown-menu pull-right bg-gray-900 text-white">
              <option className="active"><a href="javascript:;" data-locale="en-US">English</a></option>
              <option className=""><a href="javascript:;" data-locale="es-ES">Español</a></option>
              <option className=""><a href="javascript:;" data-locale="de-DE">Deutsch</a></option>
              <option className=""><a href="javascript:;" data-locale="zh-CN">简体中文</a></option>
              <option className=""><a href="javascript:;" data-locale="zh-TW">繁體中文</a></option>
              <option className=""><a href="javascript:;" data-locale="fr-FR">Français</a></option>
              <option className=""><a href="javascript:;" data-locale="pt-PT">Português</a></option>
              <option className=""><a href="javascript:;" data-locale="jp-JP">日本語</a></option>
              <option className=""><a href="javascript:;" data-locale="ru-RU">Русский</a></option>
              <option className=""><a href="javascript:;" data-locale="ko-KO">한국어</a></option>
              <option className=""><a href="javascript:;" data-locale="it-IT">Italiano</a></option>
              <option className=""><a href="javascript:;" data-locale="vi-VN">Tiếng Việt</a></option>
              <option className=""><a href="javascript:;" data-locale="pl-PL">Polski</a></option>
              <option className=""><a href="javascript:;" data-locale="tr-TR">Türkçe</a></option>
              <option className=""><a href="javascript:;" data-locale="id-ID">Bahasa Indonesia</a></option>
              <option className=""><a href="javascript:;" data-locale="nl-NL">Nederlands</a></option>
              <option className=""><a href="javascript:;" data-locale="sv-SE">Svenska</a></option>
            </select>
          </div>
        </li>
      </ul>
      <div className="h4" role="heading" aria-level="2">
        <span className="text-gray-300">Currency</span>
      </div>
      <ul className="clearfix">
        <li>
          <div className="dropdown-currency dropdown" role="presentation">
            <a role="button" href="javascript:;" className="dropdown-toggle text-white" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-haspopup="listbox">
              <span className="text-white">Indian Rupee ₹</span>
              <span className="caret"></span>
            </a>
            <ul className="dropdown-menu pull-right">
              <li className=""><a href="javascript:;" data-currency="USD">US Dollars $</a></li>
              <li className="active"><a href="javascript:;" data-currency="INR">Indian Rupee ₹</a></li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="info-icons flex">
        <a href="https://blog.zoom.us" className="icon mr-2" target="_blank" tracking-id="footerBlogIcon" tracking-category="NavFooter">
          <span className="sr-only">Zoom on Blog</span>
          <span className="wordpress"></span>
        </a>
        <a href="https://www.linkedin.com/company/zoom-video-communications/" className="icon mr-2" target="_blank">
          <span className="sr-only">Zoom on LinkedIn</span>
          <span className="linkedin"></span>
        </a>
        <a href="https://twitter.com/zoom" className="icon mr-2" target="_blank">
          <span className="sr-only">Zoom on Twitter</span>
          <span className="twitter"></span>
        </a>
        <a href="https://www.youtube.com/zoommeetings" className="icon mr-2" target="_blank">
          <span className="sr-only">Zoom on Youtube</span>
          <span className="youtube-play"></span>
        </a>
        <a href="https://www.facebook.com/zoom" className="icon mr-2" target="_blank">
          <span className="sr-only">Zoom on Facebook</span>
          <span className="facebook"></span>
        </a>
        <a href="https://www.instagram.com/zoom/" className="icon" target="_blank">
          <span className="sr-only">Zoom on Instagram</span>
          <span className="instagram"></span>
        </a>
      </div>
    </div>
              {/* Add other sections like ft-sales, ft-support, cm-language */}
            </div>
            <div className="footer-copyright">
              <div className="info">
                Copyright ©2024 Zoom Video Communications, Inc. All rights reserved.
                <a href="https://explore.zoom.us/en/terms/" className="text-white ">Terms</a>
                <a href="https://explore.zoom.us/en/privacy/" className="text-white ">Privacy</a>
                {/* Add other links */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
