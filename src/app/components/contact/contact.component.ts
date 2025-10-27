import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = { name: '', email: '', subject: '', message: '' };

  serviceID = environment.EMAILJS_SERVICE_ID;
  templateID = environment.EMAILJS_TEMPLATE_ID;
  publicKey = environment.EMAILJS_PUBLIC_KEY;

  sendMessage() {
    const templateParams = {
      user_name: this.formData.name,
      user_email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.publicKey)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
        this.formData = { name: '', email: '', subject: '', message: '' };
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send email. Please try again.');
      });
  }
}
