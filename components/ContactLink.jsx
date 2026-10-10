"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactLink({ children, className = "" }) {
  const handleClick = (e) => {
    if (window.location.pathname === "/") {
      const contact = document.getElementById("contact");

      if (contact) {
        e.preventDefault();

        contact.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", "/#contact");
      }
    }
  };

  return (
    <Link
      href="/#contact"
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}