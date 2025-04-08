"use client";
import { Globe2 } from "lucide-react";
import Link from "next/link";

import { linksResponse } from "@/app/lib/consts";
import { LinksResponse } from "@/app/types";

import { useActiveSection } from "./use-active-section.hook";

export default function NavLinks() {
  const currentLinks: LinksResponse = linksResponse
  const activeHash = useActiveSection(currentLinks);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
              <Globe2 className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-xl font-bold">Carlos Astete</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="ml-10 flex items-center space-x-8" role="list">
              {currentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${activeHash === link.href
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                      }`}
                    aria-current={activeHash === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
