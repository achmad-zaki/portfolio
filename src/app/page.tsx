import { PiMapPin } from "react-icons/pi";
import MotionSection from "@/components/MotionSection";
import Button from "@/components/ui/button";
import { IoCopyOutline } from "react-icons/io5";
import Link from "next/link";
import CardProject from "@/components/ui/card-project";
import { LIST_PROJECTS } from "@/constants/project";
import { Badge } from "@/components/ui";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { LIST_TECHS } from "@/constants/tech";
import ButtonEmail from "@/components/ButtonEmail";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <MotionSection>
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
          <ButtonEmail />
        </div>
      </MotionSection>

      <MotionSection delay={0.3}>
        <h1 className="text-2xl font-semibold text-text">Tools that I have used</h1>
        <div
          className="grid grid-cols-2 md:flex md:flex-wrap gap-2 mt-5">
          {LIST_TECHS.map((tech, index) => (
            <Badge
              key={index}
              name={tech.name}
              icon={tech.icon}
            />
          ))}
        </div>
      </MotionSection>

      <MotionSection delay={0.5}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-text">Latest Project</h1>
          <Link href="/projects" className="text-text-foreground">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {LIST_PROJECTS.filter((project) => project.created_at > "2024-10-03").map((project, index) => (
            <CardProject
              key={index}
              {...project}
            />
          ))}
        </div>
      </MotionSection>

      <MotionSection delay={0.7}>
        <h1 className="text-2xl font-semibold text-text">Got questions?</h1>
        <p className="mt-3 text-text-foreground text-lg">I&apos;m always excited to collaborate on innovative and exciting projects!</p>

        <div className="flex-col md:flex-row">
          <div className="flex flex-col md:flex-row gap-y-5 gap-x-28 mt-6">
            <div className="flex items-center">
              <div className="rounded-full dark:bg-neutral-700 bg-neutral-200 size-12 flex items-center justify-center border dark:border-neutral-600 border-neutral-300">
                <MdAlternateEmail className="size-5 text-text-foreground" />
              </div>
              <div className="ml-3">
                <h5 className="text-text-foreground font-medium">E-mail</h5>
                <p className="text-sm">achmadzaky9d@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="rounded-full dark:bg-neutral-700 bg-neutral-200 size-12 flex items-center justify-center border dark:border-neutral-600 border-neutral-300">
                <FiPhone className="size-5 text-text-foreground" />
              </div>
              <div className="ml-3">
                <h5 className="text-text-foreground font-medium">Phone</h5>
                <p className="text-sm">+62 859 999 0000</p>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="w-full md:w-auto"
          >
            <Button variant="outline" className="mt-8 w-full md:w-auto">Contact me</Button>
          </Link>
        </div>
      </MotionSection>
    </div>
  );
}
