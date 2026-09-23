"use server";

import { db } from "@/lib/db";
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

    const validatedData = contactSchema.parse(rawData);

    await db.enquiry.create({
      data: validatedData,
    });

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
    const validatedData = quoteSchema.parse(rawData);

    await db.quoteRequest.create({
      data: validatedData,
    });

    return { success: true, message: "Quote request submitted successfully." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

const careerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(2, "Location is required"),
  position: z.string().min(2, "Position is required"),
  experience: z.string().min(1, "Experience is required"),
  qualification: z.string().min(2, "Qualification is required"),
  message: z.string().optional(),
});

export async function submitCareerApplication(prevState: any, formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries());
    const validatedData = careerSchema.parse(rawData);

    await db.careerApplication.create({
      data: validatedData,
    });

    return { success: true, message: "Application submitted successfully." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
