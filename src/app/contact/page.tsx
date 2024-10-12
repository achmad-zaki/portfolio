import FormInput from "@/components/FormInput";
import MotionSection from "@/components/MotionSection";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

export default function ContactPage() {
    return (
        <div className="space-y-16">
            <MotionSection>
                <h1 className="text-4xl text-text font-bold">Contact</h1>
                <p className="text-text-foreground mt-3">I&apos;m always excited to collaborate on innovative and exciting projects!</p>

                <div className="w-full h-[1px] bg-border my-10"></div>

                <div className="flex flex-col md:flex-row gap-y-5 gap-x-28">
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
            </MotionSection>

            <MotionSection delay={0.3}>
                <div className="pb-8">
                    <h1 className="text-2xl text-text font-bold mb-5">Send a message</h1>
                    <FormInput />
                </div>
            </MotionSection>
        </div>
    )
}
