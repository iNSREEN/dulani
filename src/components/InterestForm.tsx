
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
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

const createFormSchema = (language: string) => z.object({
  name: z.string().min(1, language === 'en' ? 'Name is required' : 'الاسم مطلوب'),
  email: z.string().email(language === 'en' ? 'Please enter a valid email address' : 'يرجى إدخال عنوان بريد إلكتروني صحيح'),
  phone: z.string().min(1, language === 'en' ? 'Phone number is required' : 'رقم الهاتف مطلوب'),
  hearAboutUs: z.array(z.string()).min(1, language === 'en' ? 'Please select at least one option' : 'يرجى اختيار خيار واحد على الأقل'),
  otherDetails: z.string().optional(),
  comments: z.string().optional(),
  newsletter: z.boolean().optional(),
});

type FormData = z.infer<ReturnType<typeof createFormSchema>>;

const createHearAboutUsOptions = (language: string) => [
  { id: 'social-media', label: language === 'en' ? 'Social Media' : 'وسائل التواصل الاجتماعي' },
  { id: 'friends-family', label: language === 'en' ? 'Friends/Family' : 'الأصدقاء/العائلة' },
  { id: 'advertisements', label: language === 'en' ? 'Advertisements' : 'الإعلانات' },
  { id: 'search-engine', label: language === 'en' ? 'Search Engine (Google, Bing, etc.)' : 'محرك البحث (جوجل، بينغ، إلخ)' },
  { id: 'other', label: language === 'en' ? 'Other' : 'أخرى' },
];

interface InterestFormProps {
  children: React.ReactNode;
}

export function InterestForm({ children }: InterestFormProps) {
  const [open, setOpen] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  
  const formSchema = createFormSchema(language);
  const hearAboutUsOptions = createHearAboutUsOptions(language);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      hearAboutUs: [],
      otherDetails: '',
      comments: '',
      newsletter: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Submitting form data:', data);
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwI-fWi5XRZokXFk9izPCxxz3Rrphfs2XhuBA5c6gh2WXNstFO4ElqpAju0_BitBVk/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      // With no-cors mode, we can't check response, so assume success
      console.log('Form submitted successfully');
      
      toast({
        title: language === 'en' ? "Success!" : "نجح!",
        description: language === 'en' ? "Thank you for your interest! We'll be in touch soon." : "شكراً لاهتمامك! سنتواصل معك قريباً.",
      });
      
      setOpen(false);
      form.reset();
      setShowOtherInput(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: language === 'en' ? "Error" : "خطأ",
        description: language === 'en' ? "Failed to submit form. Please check your connection and try again." : "فشل في إرسال النموذج. يرجى التحقق من اتصالك وإعادة المحاولة.",
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
      <DialogContent className={`sm:max-w-[425px] max-h-[90vh] overflow-y-auto mx-4 ${language === 'ar' ? 'text-right' : ''} [&>button]:left-4 [&>button]:right-auto`}>
        <DialogHeader className="flex flex-row-reverse items-center justify-between">
          <DialogTitle style={{ color: '#001A6E' }}>
            {language === 'en' ? "We'd Love to Hear From You!" : "نحب أن نسمع منك!"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{language === 'en' ? 'Name' : 'الاسم'}</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={language === 'en' ? 'Your full name' : 'اسمك الكامل'} 
                      className={language === 'ar' ? 'text-right' : ''}
                      {...field} 
                    />
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
                  <FormLabel>{language === 'en' ? 'Email Address' : 'عنوان البريد الإلكتروني'}</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={language === 'en' ? 'your.email@example.com' : 'البريد.الالكتروني@مثال.com'} 
                      className={language === 'ar' ? 'text-right' : ''}
                      {...field} 
                    />
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
                  <FormLabel>{language === 'en' ? 'Phone Number' : 'رقم الهاتف'}</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+966 5X XXX XXXX" 
                      className={language === 'ar' ? 'text-right' : ''}
                      {...field} 
                    />
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
                  <FormLabel>{language === 'en' ? 'How did you hear about us?' : 'كيف سمعت عنا؟'}</FormLabel>
                  <div className="space-y-3">
                    {hearAboutUsOptions.map((option) => (
                      <div key={option.id} className={`flex items-center space-x-2 ${language === 'ar' ? 'justify-end' : ''}`}>
                        {language === 'ar' ? (
                          <>
                            <label
                              htmlFor={option.id}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-2"
                            >
                              {option.label}
                            </label>
                            <Checkbox
                              id={option.id}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange(option.id, checked as boolean)
                              }
                            />
                          </>
                        ) : (
                          <>
                            <Checkbox
                              id={option.id}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange(option.id, checked as boolean)
                              }
                            />
                            <label
                              htmlFor={option.id}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {option.label}
                            </label>
                          </>
                        )}
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
                    <FormLabel>{language === 'en' ? 'Please specify' : 'يرجى التوضيح'}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={language === 'en' ? 'Tell us how you heard about us...' : 'أخبرنا كيف سمعت عنا...'}
                        className={`resize-none ${language === 'ar' ? 'text-right' : ''}`}
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
                  <FormLabel>{language === 'en' ? 'Comments' : 'التعليقات'}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={language === 'en' ? 'Any additional comments or questions...' : 'أي تعليقات أو أسئلة إضافية...'}
                      className={`resize-none ${language === 'ar' ? 'text-right' : ''}`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem className={`flex flex-row items-start space-x-3 space-y-0 ${language === 'ar' ? 'justify-end' : ''}`}>
                  {language === 'ar' ? (
                    <>
                      <div className="space-y-1 leading-none">
                        <label className="text-sm leading-none">
                          أود تلقي آخر التحديثات والأخبار والعروض الترويجية
                        </label>
                      </div>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </>
                  ) : (
                    <>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <label className="text-sm leading-none">
                          I'd like to receive the latest updates, news, and promotions
                        </label>
                      </div>
                    </>
                  )}
                </FormItem>
              )}
            />

            <div className={`flex flex-col sm:flex-row ${language === 'ar' ? 'justify-start' : 'justify-end'} space-y-2 sm:space-y-0 sm:space-x-3`}>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isSubmitting}
                className="w-full sm:w-auto hover:bg-gray-100 hover:text-gray-700"
              >
                {language === 'en' ? 'Cancel' : 'إلغاء'}
              </Button>
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? (language === 'en' ? 'Submitting...' : 'جاري الإرسال...') : (language === 'en' ? 'Submit' : 'إرسال')}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
