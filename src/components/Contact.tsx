import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from 'react';
import * as emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs.send(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
       
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        time: new Date().toLocaleString(),
      } 
    )
    .then(() => {
      alert('Message sent successfully!');
      // Clear the form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Email Me",
      link: "mailto:wjoiner1706@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lubbock, TX",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://www.github.com/Craig-Joiner",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/william-joiner-334935204",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
           Whether it's a new role, a freelance project, or a technical 
           collaboration, I'm open to conversations that push meaningful ideas forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="border-slate-200 focus:border-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="border-slate-200 focus:border-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Input
                  placeholder="Subject"
                  className="border-slate-200 focus:border-blue-500"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="border-slate-200 focus:border-blue-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{info.title}</p>
                      <p className="text-slate-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-50 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-2">Let's Collaborate</h4>
              <p className="mb-4">
                I'm currently available for freelance work and full-time opportunities.
              </p>
              <a href="/Software_Dev_Resume.pdf" download>
                <Button
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}