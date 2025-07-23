
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  hearAboutUs: z.array(z.string()).min(1, 'Please select at least one option'),
  otherDetails: z.string().optional(),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const hearAboutUsOptions = [
  { id: 'social-media', label: 'Social Media' },
  { id: 'friends-family', label: 'Friends/Family' },
  { id: 'advertisements', label: 'Advertisements' },
  { id: 'search-engine', label: 'Search Engine (Google, Bing, etc.)' },
  { id: 'other', label: 'Other' },
];

interface InterestFormProps {
  children: React.ReactNode;
}

export function InterestForm({ children }: InterestFormProps) {
  const [open, setOpen] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      hearAboutUs: [],
      otherDetails: '',
      comments: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Submitting form data:', data);
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx9jgEsH_gdcQc6P7nqGcDeFjLJ7jMk4xX1AiHPv46K6N9Q7R31FHBmNXanrtYeo8g/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (response.ok) {
        const result = await response.json();
        console.log('Success result:', result);
        
        toast({
          title: "Success!",
          description: "Thank you for your interest! We'll be in touch soon.",
        });
        
        setOpen(false);
        form.reset();
        setShowOtherInput(false);
      } else {
        console.error('Response not ok:', response.status, response.statusText);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const currentValues = form.getValues('hearAboutUs');
    let newValues;
    
    if (checked) {
      newValues = [...currentValues, value];
    } else {
      newValues = currentValues.filter(v => v !== value);
    }
    
    form.setValue('hearAboutUs', newValues);
    
    // Show/hide other input based on "other" selection
    if (value === 'other') {
      setShowOtherInput(checked);
      if (!checked) {
        form.setValue('otherDetails', '');
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>We'd Love to Hear From You!</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+966 5X XXX XXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hearAboutUs"
              render={() => (
                <FormItem>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <div className="space-y-3">
                    {hearAboutUsOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(option.id, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={option.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {showOtherInput && (
              <FormField
                control={form.control}
                name="otherDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Please specify</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us how you heard about us..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comments</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any additional comments or questions..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
