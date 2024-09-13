'use client'
import Image from "next/image";
import bookingFormComponent from "@/app/components/bookingFormComponent";
import environmentStatusComponent from "@/app/components/environmentStatusComponent";
import {useState} from "react";
import {environmentData} from "@/app/types/environmentData";
import {initialEnvironmentData} from "@/app/resources/initialEnvironmentData";

const pageClassName = "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]";
const mainClassName = "flex flex-row gap-8 row-start-2 items-center sm:items-start";
const bookingFormClassName = "flex gap-4 items-center flex-col sm:flex-col border-2";
const tableClassName = "flex gap-4 items-center flex-col sm:flex-col border-2";
const h2ClassName = "font-bold";
const footerClassName = "row-start-3 flex gap-6 flex-wrap items-center justify-center";

export default function Home() {
  const [environmentRows] = useState<environmentData[]>(initialEnvironmentData);

  return (
    <div className={pageClassName}>
      <main className={mainClassName}>
        <div className={bookingFormClassName}>
          <h2 className={h2ClassName}>Booking form</h2>
          {bookingFormComponent()}
        </div>
        <div className={tableClassName}>
          <h2 className={h2ClassName}>Environment Status</h2>
          {environmentStatusComponent(environmentRows)}
        </div>
      </main>
      <footer className={footerClassName}>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
