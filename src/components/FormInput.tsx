'use client'

import { Button, Input, Label, Textarea } from "./ui"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
})

const FormInput = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <div className="bg-card border dark:border-neutral-600 rounded-lg p-8">
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <div className="space-y-1">
                            <Label htmlFor={field.name}>Name</Label>
                            <Input type="text" {...field} id="name" placeholder="Enter your name" />
                        </div>
                    )}
                />

                <Controller
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <div className="space-y-1">
                            <Label htmlFor={field.name}>Email</Label>
                            <Input type="text" {...field} id="Email" placeholder="example@gmail.com" />
                        </div>
                    )}
                />

                <Controller
                    name="message"
                    control={form.control}
                    render={({ field }) => (
                        <div className="space-y-1">
                            <Label htmlFor={field.name}>Message</Label>
                            <Textarea id="message" {...field} placeholder="How can I help you?" />
                        </div>
                    )}
                />

                <Button type="submit" className="w-full">Submit</Button>
            </form>
        </div>
    )
}

export default FormInput