export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  console.log('Submitting form data to backend:', formData);
  // In a real application, this would be an API call to a serverless function
  // which would then use the SendGrid API to send an email.
  // e.g., await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate a successful submission
      resolve({ success: true, message: 'Thank you for your message. We will get back to you shortly.' });
      
      // To simulate an error, you would resolve with:
      // resolve({ success: false, message: 'There was an error sending your message. Please try again.' });
    }, 1000);
  });
};
