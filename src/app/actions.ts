"use server";

import { generateInitialContactMessage } from '@/ai/flows/generate-initial-contact-message';
import { sendContactEmail } from '@/lib/email';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactFormAction(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      type: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
    };
  }

  try {
    await sendContactEmail(validatedFields.data as any);
    return {
      type: 'success',
      message: 'Thank you for your message! We will get back to you soon.',
    };
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return {
      type: 'error',
      message: error.message || 'An unexpected error occurred. Please try again later.',
    };
  }
}

export async function generateMessageAction(inquiryDescription: string) {
  if (!inquiryDescription) {
    return { draftMessage: '', error: 'Please provide a short description to generate a message.' };
  }
  try {
    const result = await generateInitialContactMessage({ inquiryDescription });
    return { draftMessage: result.draftMessage, error: null };
  } catch (e) {
    console.error(e);
    return { draftMessage: '', error: 'Failed to generate message. Please write your own.' };
  }
}
