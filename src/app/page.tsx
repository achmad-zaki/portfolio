import { PiMapPin } from "react-icons/pi";
import MotionSection from "@/components/MotionSection";
import Button from "@/components/ui/button";
import { IoCopyOutline } from "react-icons/io5";
import Link from "next/link";
import CardProject from "@/components/ui/card-project";
import { LIST_PROJECTS } from "@/constants/project";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <MotionSection delay={0.15}>
        <h1 className="text-4xl font-bold text-text">Hello! I&apos;m Zaki</h1>
        <div className="flex flex-wrap gap-3">
          <h3 className="text-3xl font-medium dark:text-indigo-300 text-indigo-600 mt-1">Frontend Developer</h3>
          <div className="dark:bg-neutral-800 bg-neutral-200 dark:text-neutral-400 text-neutral-600 font-medium rounded-xl flex items-center px-3 py-2 gap-1">
            <PiMapPin className="size-5" />
            <span className="text-sm">Indonesia</span>
          </div>
        </div>
        <div>
          <p className="mt-6 text-text-foreground text-lg">Frontend developer with a year of experience, specializing in slicing website layouts to create precise, responsive designs.</p>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
          <Link href="/about" className="block w-full md:w-auto">
            <Button
              size="md"
              className="w-full md:w-auto"
            >
              About
            </Button>
          </Link>
          <Button
            icon={<IoCopyOutline className="size-5 text-neutral-500" />}
            size="md"
            variant="outline"
            className="w-full md:w-auto"
          >
            Copy Email
          </Button>
        </div>
      </MotionSection>

      <MotionSection delay={0.3}>
        <h1 className="text-2xl font-semibold text-text">Latest Project</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {LIST_PROJECTS.map((project, index) => (
            <CardProject
              key={index}
              title={project.title}
              desc={project.desc}
              icons={project.icons}
              image={project.image}
            />
          ))}
        </div>
      </MotionSection>

      <MotionSection delay={0.5}>
        <h1 className="text-2xl font-semibold text-text">Tools that I have used</h1>
      </MotionSection>
    </div>
  );
}
