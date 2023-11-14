import { useEffect } from "react";

function SkypeIntegration() {
  useEffect(() => {
    // Initialize Skype Web Control here
    const script = document.createElement("script");
    script.src = "https://swc.cdn.skype.com/sdk/v1/sdk.min.js";
    script.onload = () => {
      Skype.ui({
        name: "chat",
        element: "skype-button",
        participants: ["skype-username"],
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div className="skype-button" data-contact-id="skype-username"></div>
      <div className="skype-button chat" data-contact-id="skype-username"></div>
    </div>
  );
}

export default SkypeIntegration;
