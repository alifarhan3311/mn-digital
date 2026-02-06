'use client';

import { useState, useTransition } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Wand2, LoaderCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { submitContactFormAction, generateMessageAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import React from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="neumorphic" className="w-full rounded-full font-semibold" disabled={pending}>
      {pending ? <LoaderCircle className="animate-spin" /> : 'Send Message'}
    </Button>
  );
}

export function Contact() {
  const { toast } = useToast();
  const [message, setMessage] = useState('');
  const [isGenerating, startGenerating] = useTransition();

  const initialState = { type: null, message: null, errors: null };
  const [state, formAction] = useFormState(submitContactFormAction, initialState);

  React.useEffect(() => {
    if (state.type === 'success') {
      toast({
        title: 'Success!',
        description: state.message,
      });
      setMessage('');
    } else if (state.type === 'error') {
      toast({
        variant: 'destructive',
        title: 'Oops!',
        description: state.message,
      });
    }
  }, [state, toast]);

  const handleGenerateMessage = () => {
    startGenerating(async () => {
      const result = await generateMessageAction(message);
      if (result.error) {
        toast({
          variant: 'destructive',
          title: 'AI Generation Failed',
          description: result.error,
        });
      } else if (result.draftMessage) {
        setMessage(result.draftMessage);
      }
    });
  };

  return (
    <section id="contact" className="w-full py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="mx-auto max-w-xl shadow-neumorphic dark:shadow-neumorphic-dark">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Get in Touch</CardTitle>
            <CardDescription>Have a project in mind? We'd love to hear from you.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" />
                {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" />
                {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" />
                {state.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Info</Label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="e.g., I want to create a shoes website with categories, products, and Stripe integration."
                    className="min-h-[120px] pr-12"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-3 h-8 w-8 rounded-full"
                    onClick={handleGenerateMessage}
                    disabled={isGenerating || !message}
                    aria-label="Generate message with AI"
                  >
                    {isGenerating ? <LoaderCircle className="animate-spin" /> : <Wand2 />}
                  </Button>
                </div>
                {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
