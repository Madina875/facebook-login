import React from "react";

const Footer = () => {
  return (
    <section className="h-[100px] pb-[40px]">
      <div className="container m-auto my-[20px] w-[100%] h-[100px] text-[#8a8d91] text-[12px]">
        <p className="flex gap-[10px] place-items-center">
          English (US) Русский O'zbek Türkçe 한국어 Deutsch Français (France)
          العربية Italiano Español Português (Brasil)
          <button className=" border border-gray-400 bg-[#f2f4f7] w-[30px] h-[20px] place-items-center text-center">
            +
          </button>
        </p>
        <hr className="text-gray-300 mt-[10px]" />
        <p
          style={{ wordSpacing: "15px" }}
          className="text-justify word-spacing-[5px] text-[13px] mt-[10px] mb-[20px]"
        >
          Sign UpLog InMessengerFacebook LiteVideoMeta PayMeta StoreMeta
          QuestRay-Ban MetaMeta AIMeta AI more contentInstagramThreadsVoting
          Information CenterPrivacy PolicyPrivacy CenterAboutCreate adCreate
          PageDevelopersCareersCookiesAd choicesTermsHelpContact Uploading &
          Non-UsersSettingsActivity log
        </p>
        <p className="mt-[12px]">Meta © 2025</p>
      </div>
    </section>
  );
};

export default memo(Footer);
