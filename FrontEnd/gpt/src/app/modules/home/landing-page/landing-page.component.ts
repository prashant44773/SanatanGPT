import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  features = [
    {
      icon: 'verified',
      title: 'Authenticity',
      description: 'Learn from trusted translations and commentaries.',
    },
    {
      icon: 'question_answer',
      title: 'Interactivity',
      description: 'Ask questions and get precise answers.',
    },
    {
      icon: 'devices',
      title: 'Accessibility',
      description: 'Explore anytime, anywhere.',
    },
  ];

  scriptures = [
    {
      name: 'Bhagavad Gita',
      image: 'assets/images/geeta.jfif',
      imageHeight: this.calculateHeight('Bhagavad Gita'),
    },
    {
      name: 'Vedas',
      image: 'assets/images/veda.jfif',
      imageHeight: this.calculateHeight('Vedas'),
    },
    {
      name: 'Ramayana',
      image: 'assets/images/ramayan.jfif',
      imageHeight: this.calculateHeight('Ramayana'),
    },
    {
      name: 'Mahabharat',
      image: 'assets/images/mahabharat.jfif',
      imageHeight: this.calculateHeight('Mahabharat'),
    },
  ];

  faqs = [
    {
      question: 'What is Sanatan GPT?',
      answer:
        'Sanatan GPT is an AI-driven platform that provides knowledge of ancient scriptures.',
    },
    {
      question: 'Is it free to use?',
      answer: 'Yes, Sanatan GPT is free for everyone.',
    },
    {
      question: 'What scriptures are included?',
      answer: 'We cover Bhagavad Gita, Vedas, Ramayana, Upanishads, and more.',
    },
    {
      question: 'Can I search for specific verses?',
      answer:
        'Yes, you can search for specific verses, chapters, or keywords from the scriptures.',
    },
    {
      question: 'Is the content accurate?',
      answer:
        'We strive to provide the most accurate and authentic information from verified sources.',
    },
    {
      question: 'How is AI used in Sanatan GPT?',
      answer:
        'AI processes queries and provides insights by referencing ancient texts and teachings.',
    },
    {
      question: 'Can I use this platform offline?',
      answer:
        'Currently, Sanatan GPT is an online platform and requires an internet connection.',
    },
    {
      question: 'Is there a mobile app for Sanatan GPT?',
      answer: 'We are working on a mobile app to enhance user accessibility.',
    },
    {
      question: 'Who can benefit from Sanatan GPT?',
      answer:
        'Anyone curious about the wisdom of Sanatan Dharma, including students, scholars, and spiritual seekers.',
    },
    {
      question: 'Can I contribute to Sanatan GPT?',
      answer:
        'We welcome contributions, suggestions, and feedback to improve the platform.',
    },
    {
      question: 'What languages are supported?',
      answer:
        'Currently, we support English, but we plan to include other languages like Hindi and Sanskrit soon.',
    },
    {
      question: 'How do I report errors or inaccuracies?',
      answer:
        'You can use the “Report Issue” option on the website to notify us of any issues.',
    },
    {
      question: 'Can I share the insights on social media?',
      answer:
        'Yes, you can share quotes, verses, and teachings directly from the platform.',
    },
    {
      question: 'How is this platform funded?',
      answer:
        'Sanatan GPT is a non-commercial initiative supported by donations and voluntary contributions.',
    },
  ];

  private calculateHeight(name: string): number {
    // if (name.length > 10) {
    //   return 400; // Example: Longer names have larger cards
    // } else {
    return 300; // Shorter names have smaller cards
    // }
  }
}

export interface Feature {
  title: string;
  description: string;
}
