import React from "react";

function Footer() {
  const date = new Date();
  const currentYear = date.getUTCFullYear();

  return (
    <div className="footer">
      <p>Copyright Anastasiia Zu {currentYear}</p>
    </div>
  );
}

export default Footer;
