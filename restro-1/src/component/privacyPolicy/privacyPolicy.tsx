import React from "react";

const PrivacyPolicy = (props: any) => {
  const langData = props.langData;
  const title=langData.heading

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
            <h1 className="text-4xl text-[#800000] font-bold mb-8 text-center">{title}</h1>
      {langData.policy.map((section:any, index:any) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl text-[#f5a524] font-semibold mb-4">{section.section}</h2>
          
          {section.content.map((contentItem:any, contentIndex:any) => (
            <div key={contentIndex} className="mb-4">
              <h3 className="text-xl text-[#800000] font-semibold">{contentItem.title}</h3>
              <p className="text-base leading-7 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: contentItem.details }}/>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
