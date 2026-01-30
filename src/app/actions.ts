"use server";

import { generateInitialContactMessage } from '@/ai/flows/generate-initial-contact-message';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactFormAction(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      type: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
    };
  }

  // Here you would typically save the data to Firebase
  console.log("Form data submitted:", validatedFields.data);

  return {
    type: 'success',
    message: 'Thank you for your message! We will get back to you soon.',
  };
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
