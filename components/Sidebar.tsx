"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";
import Transition from "./Transition";

export default function Sidebar() {
  const [isRouting, isSetRouting] = useState(false);
  const [isActive, isSetActive] = useState("Home");
  const [prevPath, setPrevPath] = useState("/");

  const pathname = usePathname();

  useEffect(() => {
    if (prevPath !== pathname) {
      isSetRouting(true);
    }
  }, [pathname, prevPath]);

  useEffect(() => {
    setPrevPath(pathname);
    if (isRouting) {
      const timeout = setTimeout(() => {
        isSetRouting(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div>
      <AnimatePresence mode="sync">
        {isRouting && <Transition color={isActive} />}
        <div className="menu">
          {NavLinks.map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              onClick={() => isSetActive(nav.name)}
            >
              <Image
                src={nav.icon}
                alt={nav.name}
                width={120}
                height={120}
                className="item"
              />
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
