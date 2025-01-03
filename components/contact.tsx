'use client'

import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'validationError'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    setStatus('loading')

    const serviceId = 'service_y11ysd1'
    const templateId = 'template_3zuj4ml'
    const userId = 'rEwE1cPHW28u0_OTG'

    emailjs.sendForm(serviceId, templateId, formRef.current, userId)
      .then(() => {
        setStatus('success')
        setTimeout(() => setStatus('idle'), 3000)
        setFormData({ name: '', email: '', message: '' })
      })
      .catch((error) => {
        if (error.status === 422) {
          setStatus('validationError')
        } else {
          setStatus('error')
        }
        setTimeout(() => setStatus('idle'), 3000)
      })
  }

  const getButtonContent = () => {
    switch (status) {
      case 'loading':
        return 'Sending...'
      case 'success':
        return '✓ Sent Successfully'
      case 'error':
        return '✕ Error Sending'
      case 'validationError':
        return '✕ Validation Error. Check your email and try again!'
      default:
        return 'Send Message'
    }
  }

  return (
    <section id="contact" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>Fill out the form below and submit. I'll get back to you as soon as possible to your email.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email (* to receive replies directly to your email)</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Enter your message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>
            <Button
              type="submit"
              className={`w-full ${
                status === 'success'
                  ? 'bg-green-500 hover:bg-green-600'
                  : status === 'error' || status === 'validationError'
                  ? 'bg-red-500 hover:bg-red-600'
                  : ''
              }`}
              disabled={status === 'loading'}
            >
              {getButtonContent()}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
