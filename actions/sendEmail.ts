'use server'
import React from 'react'
import { Resend } from 'resend'
import { getErrorMessage, validateString } from '@/lib/utils'
import ContactFormEmail from '@/email/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('senderMessage')
  const senderEmail = formData.get('senderEmail')

  if (!validateString(message, 5000))
    return {
      error: 'Invalid message',
    }

  if (!validateString(senderEmail, 100))
    return {
      error: 'Invalid email',
    }

  let data
  try {
    data = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: 'adross1027@gmail.com',
      subject: 'Portfolio Message',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    })
  } catch (e: unknown) {
    return {
      error: getErrorMessage(e),
    }
  }

  return {
    data,
  }
}
