'use client';

import Image from "next/image";
import React from 'react';
import ThemeSwitcher from "./ThemeSwitcher"
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/lib/hooks';
import { cn } from '@/lib/utils';

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-700`,
        {
          'border-b border-gray-200 bg-gray-500/75 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-gray-500': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
                      <span className="h-7 w-7 bg-gray-500 rounded-lg">
          <Image
              src="/Logo.png"
              alt="barry portrait"
              width="15"
              height="15"
              quality="95"
              priority={true}
              className="h-7 w-7 rounded-full object-cover border-[0.35rem]  shadow-xl"
            />
            </span> 
            <span className="font-bold text-xl flex ">Op_business</span>
          </Link>
        </div>

       
      </div>
    </div>
  );
};

export default Header;