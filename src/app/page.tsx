'use client';
import { motion } from 'framer-motion';
import { Coffee, Rocket, Award, Users, Mail, Phone, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: <Rocket className='w-8 h-8 text-blue-600' />,
    title: 'Artisan Coffee',
    description: 'Handcrafted espresso, made from premium beans roasted to perfection.',
  },
  {
    icon: <Award className='w-8 h-8 text-yellow-500' />,
    title: 'Award-Winning Pastries',
    description: 'Enjoy our freshly baked croissants, cakes, and Italian-inspired treats.',
  },
  {
    icon: <Users className='w-8 h-8 text-green-600' />,
    title: 'Welcoming Spaces',
    description: 'Relax or work in a warm, inviting atmosphere across all our locations.',
  },
];

const faqs = [
  {
    question: 'What coffee beans do you use?',
    answer: 'We use a unique blend of premium beans sourced ethically from select farms, roasted exclusively for Caffè Nero.',
  },
  {
    question: 'Do you offer dairy alternatives?',
    answer: 'Yes! We offer oat, almond, and soy milk for all our drinks at no extra charge.',
  },
  {
    question: 'Can I work from your cafe?',
    answer: 'Absolutely. We provide free Wi-Fi and plenty of plug sockets—make yourself at home!',
  },
];

const testimonials = [
  {
    name: 'Emma L.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'Best cappuccino in town. The staff are always so friendly!',
  },
  {
    name: 'David R.',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    quote: 'My go-to spot for meetings and a quick bite. Love the ambiance.',
  },
  {
    name: 'Sophia K.',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    quote: 'Croissants are out of this world. Highly recommend the mocha!',
  },
];

const LandingPage: React.FC = () => {
  return (
    <main className='font-sans'>
      {/* HERO SECTION */}
      <section id='hero' className='bg-gradient-to-b from-blue-50 to-white'>
        <div className='container mx-auto px-4 py-20 flex flex-col items-center text-center gap-6'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className='mb-4 px-4 py-2 text-base bg-blue-600 text-white rounded-full font-semibold'>
              <span className='inline-flex items-center gap-2'>
                <Coffee className='w-5 h-5 inline-block' /> Welcome to Caffè Nero
              </span>
            </Badge>
            <h1 className='text-4xl sm:text-5xl font-bold mb-4 tracking-tight'>
              A Taste of Italy in Every Cup
            </h1>
            <p className='text-lg text-gray-700 max-w-xl mx-auto mb-8'>
              Discover artisan coffee, fresh pastries, and a space to connect. Experience the heart of the Italian café culture, wherever you are.
            </p>
            <Button size='lg' className='bg-blue-600 text-white hover:bg-blue-700 font-semibold flex items-center gap-2'>
              Find Your Nearest Nero <ArrowRight className='w-5 h-5' />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id='features' className='py-16'>
        <div className='container mx-auto px-4'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h2 className='text-3xl font-bold text-center mb-8'>Why Choose Caffè Nero?</h2>
            <div className='grid gap-8 md:grid-cols-3'>
              {features.map((feature, idx) => (
                <Card key={idx} className='shadow-md border-0 hover:shadow-lg transition'>
                  <CardHeader className='flex flex-col items-center'>
                    {feature.icon}
                    <CardTitle className='mt-4 text-lg font-semibold'>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='text-center text-gray-600'>
                    {feature.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id='testimonials' className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h2 className='text-3xl font-bold text-center mb-8'>What Our Customers Say</h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {testimonials.map((t, idx) => (
                <Card key={idx} className='shadow border-0'>
                  <CardHeader className='flex flex-col items-center pb-2'>
                    <Avatar className='mb-3 w-16 h-16'>
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className='text-lg font-semibold'>{t.name}</CardTitle>
                  </CardHeader>
                  <CardContent className='text-center text-gray-700 italic flex flex-col items-center gap-2'>
                    <Heart className='w-6 h-6 text-red-500 mb-2' />
                    &quot;{t.quote}&quot;
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id='faq' className='py-16'>
        <div className='container mx-auto px-4 max-w-2xl'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h2 className='text-3xl font-bold text-center mb-8'>Frequently Asked Questions</h2>
            <Accordion type='single' collapsible>
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id='contact' className='bg-blue-50 py-16'>
        <div className='container mx-auto px-4 max-w-xl'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h2 className='text-3xl font-bold text-center mb-8'>Contact Us</h2>
            <form className='space-y-6 bg-white rounded-lg shadow-md p-8'>
              <div>
                <Label htmlFor='name' className='mb-1 block'>Name</Label>
                <Input id='name' name='name' placeholder='Your Name' required />
              </div>
              <div>
                <Label htmlFor='email' className='mb-1 block'>Email</Label>
                <Input id='email' name='email' type='email' placeholder='you@example.com' required />
              </div>
              <div>
                <Label htmlFor='message' className='mb-1 block'>Message</Label>
                <Textarea id='message' name='message' rows={4} placeholder='How can we help you?' required />
              </div>
              <Button type='submit' className='bg-blue-600 text-white hover:bg-blue-700 font-semibold w-full'>
                Send Message
              </Button>
              <div className='flex items-center gap-4 mt-2 text-gray-600'>
                <Mail className='w-5 h-5' />
                <span>hello@caffenero.com</span>
                <Phone className='w-5 h-5 ml-4' />
                <span>+44 20 1234 5678</span>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;