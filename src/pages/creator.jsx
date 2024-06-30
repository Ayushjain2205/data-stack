import React, { useState } from "react";
import Page from "../components/Layout/Page";
import Trading from "../components/UI/Trading";

const TabIcon = ({ active, onClick, children }) => (
  <div
    className={`cursor-pointer pb-[5px] ${
      active ? "text-white border-b border-white" : "text-white/30"
    }`}
    onClick={onClick}
  >
    {children}
  </div>
);

const Creator = () => {
  const [activeTab, setActiveTab] = useState("grid");

  const tabs = [
    {
      id: "grid",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M6.35938 1.89941V4.89941H1.35938V1.89941H6.35938ZM1.35938 0.899414C1.09416 0.899414 0.839805 1.00477 0.652268 1.19231C0.464732 1.37984 0.359375 1.6342 0.359375 1.89941L0.359375 4.89941C0.359375 5.16463 0.464732 5.41898 0.652268 5.60652C0.839805 5.79406 1.09416 5.89941 1.35938 5.89941H6.35938C6.62459 5.89941 6.87895 5.79406 7.06648 5.60652C7.25402 5.41898 7.35938 5.16463 7.35938 4.89941V1.89941C7.35938 1.6342 7.25402 1.37984 7.06648 1.19231C6.87895 1.00477 6.62459 0.899414 6.35938 0.899414H1.35938ZM15.3594 12.8994V15.8994H10.3594V12.8994H15.3594ZM10.3594 11.8994C10.0942 11.8994 9.8398 12.0048 9.65227 12.1923C9.46473 12.3798 9.35938 12.6342 9.35938 12.8994V15.8994C9.35938 16.1646 9.46473 16.419 9.65227 16.6065C9.8398 16.7941 10.0942 16.8994 10.3594 16.8994H15.3594C15.6246 16.8994 15.8789 16.7941 16.0665 16.6065C16.254 16.419 16.3594 16.1646 16.3594 15.8994V12.8994C16.3594 12.6342 16.254 12.3798 16.0665 12.1923C15.8789 12.0048 15.6246 11.8994 15.3594 11.8994H10.3594ZM6.35938 8.89941V15.8994H1.35938V8.89941H6.35938ZM1.35938 7.89941C1.09416 7.89941 0.839805 8.00477 0.652268 8.19231C0.464732 8.37984 0.359375 8.6342 0.359375 8.89941L0.359375 15.8994C0.359375 16.1646 0.464732 16.419 0.652268 16.6065C0.839805 16.7941 1.09416 16.8994 1.35938 16.8994H6.35938C6.62459 16.8994 6.87895 16.7941 7.06648 16.6065C7.25402 16.419 7.35938 16.1646 7.35938 15.8994V8.89941C7.35938 8.6342 7.25402 8.37984 7.06648 8.19231C6.87895 8.00477 6.62459 7.89941 6.35938 7.89941H1.35938ZM15.3594 1.89941V8.89941H10.3594V1.89941H15.3594ZM10.3594 0.899414C10.0942 0.899414 9.8398 1.00477 9.65227 1.19231C9.46473 1.37984 9.35938 1.6342 9.35938 1.89941V8.89941C9.35938 9.16463 9.46473 9.41898 9.65227 9.60652C9.8398 9.79406 10.0942 9.89941 10.3594 9.89941H15.3594C15.6246 9.89941 15.8789 9.79406 16.0665 9.60652C16.254 9.41898 16.3594 9.16463 16.3594 8.89941V1.89941C16.3594 1.6342 16.254 1.37984 16.0665 1.19231C15.8789 1.00477 15.6246 0.899414 15.3594 0.899414H10.3594Z"
            fill="currentColor"
          />
        </svg>
      ),
      content: (
        <div className="flex flex-col gap-[16px]">
          <img
            className="w-[370px] h-[350px]"
            src="https://picsum.photos/370"
            alt=""
          />
          <img
            className="w-[370px] h-[350px]"
            src="https://picsum.photos/370"
            alt=""
          />
        </div>
      ),
    },
    {
      id: "chart",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.359375 0.899414H1.35938V15.8994H16.3594V16.8994H0.359375V0.899414ZM10.3594 4.39941C10.3594 4.26681 10.4121 4.13963 10.5058 4.04586C10.5996 3.95209 10.7268 3.89941 10.8594 3.89941H14.8594C14.992 3.89941 15.1192 3.95209 15.2129 4.04586C15.3067 4.13963 15.3594 4.26681 15.3594 4.39941V8.39941C15.3594 8.53202 15.3067 8.6592 15.2129 8.75297C15.1192 8.84674 14.992 8.89941 14.8594 8.89941C14.7268 8.89941 14.5996 8.84674 14.5058 8.75297C14.4121 8.6592 14.3594 8.53202 14.3594 8.39941V5.79941L10.7464 10.2164C10.7021 10.2704 10.6471 10.3145 10.5848 10.346C10.5225 10.3774 10.4543 10.3954 10.3846 10.3989C10.3149 10.4024 10.2452 10.3913 10.1801 10.3662C10.1149 10.3411 10.0558 10.3027 10.0064 10.2534L7.41937 7.66641L3.76338 12.6934C3.6834 12.7951 3.56711 12.8618 3.43896 12.8796C3.3108 12.8974 3.18076 12.8647 3.07615 12.7886C2.97154 12.7125 2.90051 12.5988 2.87799 12.4714C2.85546 12.344 2.8832 12.2128 2.95537 12.1054L6.95538 6.60541C6.99783 6.54693 7.05246 6.49834 7.1155 6.463C7.17855 6.42766 7.2485 6.40641 7.32055 6.4007C7.39259 6.395 7.46502 6.40499 7.53283 6.42997C7.60065 6.45495 7.66225 6.49434 7.71338 6.54541L10.3224 9.15541L13.8044 4.89941H10.8594C10.7268 4.89941 10.5996 4.84674 10.5058 4.75297C10.4121 4.6592 10.3594 4.53202 10.3594 4.39941Z"
            fill="currentColor"
          />
        </svg>
      ),
      content: (
        <div>
          <Trading />
        </div>
      ),
    },
  ];

  return (
    <Page>
      <div className="flex flex-col px-[10px] pb-[20px] w-full items-center justify-center">
        <img className="size-[80px] rounded-full" src="/images/dp.png" alt="" />
        <p className="text-[20px] mt-[4px]">ayushi jain</p>
        <div className="flex gap-[20px] mt-[20px]">
          <div className="flex flex-col ">
            <span className="text-[24px]">$50</span>
            <span className="text-[12px]">clout</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[24px]">50K</span>
            <span className="text-[12px]">community</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[24px]">40%</span>
            <span className="text-[12px]">growth</span>
          </div>
        </div>
        <button className="w-full p-[12px] bg-[#F7FC0D] text-black mt-[16px] rounded-[20px] ">
          Subscribe
        </button>
        {/* Tabs */}
        <div className="flex gap-[16px] mt-[20px]">
          {tabs.map((tab) => (
            <TabIcon
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
            </TabIcon>
          ))}
        </div>
        {/* Tab Content */}
        <div className="mt-[20px] w-full">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </Page>
  );
};

export default Creator;
