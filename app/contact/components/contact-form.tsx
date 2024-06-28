'use client'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import React from 'react';
import { useForm } from "react-hook-form";
import { formSchema, formData } from "../../c/live-resend/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { sendEmail } from "@/app/c/live-resend/action";
import { useToast } from "@/components/ui/use-toast";


export default function ContactForm() {
    const {toast} = useToast();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            body: '',
        }
    })

    const onSubmit = async (data: formData) => {
        await sendEmail(data);

        toast({
            title: 'Email sent!',
        });
    }
    
    return (
        <div className="container mx-auto pt-32">
            
            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                <h1 className="font-bold text-center text-primary/90 text-4xl mb-5 lg:text-6xl">Contact</h1>
                <p className="text-center text-muted-foreground mb-6">Give me feedbacks or questions!</p>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        name="name"
                        render={({field}) => (
                        <FormItem>
                            <FormLabel />
                            <FormControl>
                                <Input placeholder="Name" {...field}/>
                            </FormControl>
                        </FormItem>
                        )}
                    />

                    <FormField
                        name="email"
                        render={({field}) => (
                        <FormItem>
                            <FormLabel />
                            <FormControl>
                                <Input type="email" placeholder="Email" {...field}/>
                            </FormControl>
                        </FormItem>
                        )}
                    />

                    <FormField
                        name="body"
                        render={({field}) => (
                        <FormItem>
                            <FormLabel />
                            <FormControl>
                                <Textarea placeholder="Type your message here." {...field}/>
                            </FormControl>
                        </FormItem>
                        )}
                    />
                    <div className="flex justify-center pt-8">
                        <Button type="submit">Send</Button>
                    </div>
                    
                </form>
                </Form>

                <div className="flex flex-col items-center justify-center pt-32 gap-5">
                    <h2 className="font-bold text-2xl">SNS</h2>
                    <ul className="flex gap-3 items-center justify-center">
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin color="#0077b5"></Linkedin></a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter color="#1da1f2"></Twitter></a></li>
                        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github ></Github></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram color="#e1306c"></Instagram></a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
