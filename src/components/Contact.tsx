"use client";

import Image from "next/image";
//zod for form validation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Mail, Phone } from "lucide-react";
import Link from "next/link";
//define a from schema
const formSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your full name.",
    })
    .min(2, {
      message: "Your name must be at least 2 letters.",
    }),
  emailAddress: z
    .string({
      required_error: "Please enter a valid email address.",
    })
    .email(),
  subject: z.string({
    required_error: "Please select a subject to discuss.",
  }),
});

function ContactForm() {
  //  Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    //Resolver revalidates form data anytime data changes
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
    },
  });

  // submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-col md:flex-row min-h-fit w-full items-center justify-center px-4 sm:px-[64px] lg:px-[100px] py-16 gap-16 relative">
      <Image
        src={"/CONTACT_US_BACKGROUND.jpg"}
        alt="Contact Us"
        fill
        className="absolute -z-10 object-cover"
      />
      <div className="w-full h-full absolute -z-[9] bg-gradient-to-r from-black to-black/80 md:to-transparent"></div>
      <div className="w-full flex flex-col gap-8">
        <h2 className="text-3xl sm:text-5xl font-semibold">
          <span className="text-benzelBlue">REQUEST</span> A CALL BACK
        </h2>
        <p className="text-sm sm:text-base">
          Would you like to speak to one of our team over the phone? Just submit
          your details and we'll be in touch shortly. You can also email us if
          you would prefer.
        </p>
        <div className="flex flex-wrap md:flex-col gap-8 items-start justify-start">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center font-bold text-base sm:text-lgtext-lg">
              <Phone
                fill="var(--benzel-blue)"
                strokeWidth={1}
                stroke="black"
                size={24}
              />
              CALL SALES
            </div>
            <Link
              href="tel:061242038"
              className="text-primary-foreground/80 transition-colors text-sm sm:text-base hover:text-benzelRed"
            >
              +264 61 24 2038
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center font-bold text-base sm:text-lg">
              <Mail
                fill="var(--benzel-blue)"
                strokeWidth={1}
                stroke="black"
                size={24}
              />
              EMAIL US
            </div>
            <Link
              href="mailto:info@bpih.com.na"
              className="text-primary-foreground/80 transition-colors text-sm sm:text-base hover:text-benzelRed"
            >
              info@bpih.com.na
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center font-bold text-base sm:text-lg">
              <Clock
                fill="var(--benzel-blue)"
                strokeWidth={1}
                stroke="black"
                size={24}
              />
              BUSINESS HOURS
            </div>
            <p className="text-primary-foreground/80 text-sm sm:text-base">
              <span className="font-bold">Mon - Fri:</span> 8am - 5pm
            </p>
            <p className="text-primary-foreground/80 text-base">
              <span className="font-bold">Sat - Sun:</span> CLOSED
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Form {...form}>
          <form
            className="md:p-8 flex flex-col gap-4 w-full"
            // data-netlify="true"
            // method="POST"
            // name="contact"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* <input type="hidden" name="form-name" value="contact" /> */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="John Doe"
                        type="text"
                        className="bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="JohnDoe@gmail.com"
                        type="email"
                        className="bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-white text-black">
                          <SelectValue placeholder="Select a subject to discuss" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="investments">Investments</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="supplies">Supplies</SelectItem>
                        <SelectItem value="consultation">
                          Consultation
                        </SelectItem>
                        <SelectItem value="energy">Energy</SelectItem>
                        <SelectItem value="construction">
                          Construction
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Button
              type="submit"
              size="lg"
              className="w-fit rounded-full bg-primary"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
