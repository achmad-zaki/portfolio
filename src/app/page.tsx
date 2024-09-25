import { PiMapPin } from "react-icons/pi";

export default function HomePage() {
  return (
    <section className="">
      <h1 className="text-4xl font-semibold dark:text-neutral-100 text-neutral-800">Hello! I&apos;m Zaki</h1>
      <div className="flex flex-wrap gap-3">
        <h3 className="text-3xl font-medium dark:text-indigo-300 text-indigo-600 mt-1">Frontend Developer</h3>
        <div className="dark:bg-neutral-800 bg-neutral-200 dark:text-neutral-400 text-neutral-600 font-medium rounded-xl flex items-center px-3 py-2 gap-1">
          <PiMapPin className="size-5" />
          <span className="text-sm">Indonesia</span>
        </div>
      </div>
      <div>
        <p className="mt-6 dark:text-neutral-400 text-lg">Frontend developer with a year of experience, specializing in slicing website layouts to create precise, responsive designs.</p>
      </div>
    </section>
  );
}
