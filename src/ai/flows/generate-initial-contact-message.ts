'use server';

/**
 * @fileOverview A flow to generate an initial contact message based on a brief description of the inquiry.
 *
 * - generateInitialContactMessage - A function that generates a draft message for the contact form.
 * - GenerateInitialContactMessageInput - The input type for the generateInitialContactMessage function.
 * - GenerateInitialContactMessageOutput - The return type for the generateInitialContactMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInitialContactMessageInputSchema = z.object({
  inquiryDescription: z
    .string()
    .describe('A brief description of the user inquiry.'),
});
export type GenerateInitialContactMessageInput = z.infer<
  typeof GenerateInitialContactMessageInputSchema
>;

const GenerateInitialContactMessageOutputSchema = z.object({
  draftMessage: z.string().describe('The generated draft message.'),
});
export type GenerateInitialContactMessageOutput = z.infer<
  typeof GenerateInitialContactMessageOutputSchema
>;

export async function generateInitialContactMessage(
  input: GenerateInitialContactMessageInput
): Promise<GenerateInitialContactMessageOutput> {
  return generateInitialContactMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInitialContactMessagePrompt',
  input: {schema: GenerateInitialContactMessageInputSchema},
  output: {schema: GenerateInitialContactMessageOutputSchema},
  prompt: `You are a helpful assistant. Your task is to take a user's inquiry, which may be informal and in languages like English or Roman Urdu, and refine it into a polite, well-structured, and professional message. The goal is to make the user's request clear and easy to understand for the business they are contacting. The output should be in professional English.

User's Info: {{{inquiryDescription}}}

Refined Message:`,
});

const generateInitialContactMessageFlow = ai.defineFlow(
  {
    name: 'generateInitialContactMessageFlow',
    inputSchema: GenerateInitialContactMessageInputSchema,
    outputSchema: GenerateInitialContactMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
