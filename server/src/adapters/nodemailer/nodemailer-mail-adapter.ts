import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8d6e4b69931477",
    pass: "1938b210ac9b4e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendEmail({ subject, body }: SendMailData) {
    await transport.sendMail(({
      from: 'Equipe Feedget <contato@feedget.com>',
      to: 'Felipe Melo <felipefrmelo@hotmail.com>',
      subject,
      html: body,
    }))
  }
}