"use client";
import { Globe2 } from "lucide-react";
import Link from "next/link";
import { linksResponse } from "@/app/lib/consts";

export default function FooterSection() {

  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Globe2 className="h-8 w-8" />
              <span className="text-xl font-bold">Carlos Astete</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Building the future of digital experiences, one pixel at a time.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Links</h4>
            <ul className="mt-4 space-y-2">
              {linksResponse.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">carlosastetearana@gmail.com</li>
              <li className="text-gray-400">+51955838525</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Carlos Astete. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
