"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Message is too short"),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    contactSchema.parse(rawData);

    return { success: true, message: "Thank you for contacting us. We will get back to you shortly." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  city: z.string().optional(),
  service: z.string().min(2, "Service is required"),
  manpower: z.string().optional(),
  siteType: z.string().optional(),
  startDate: z.string().optional(),
  requirements: z.string().optional(),
});

export async function submitQuoteRequest(prevState: any, formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries());
    quoteSchema.parse(rawData);

    return { success: true, message: "Quote request submitted successfully." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

