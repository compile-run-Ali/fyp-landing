import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="border-t border-[#380c7c] py-4 text-[#380c7c] text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Wander. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
