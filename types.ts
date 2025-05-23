export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  status?: 'Upcoming' | 'Ongoing' | 'Completed';
  highlights?: string[];
  batchName?: string; // Added for specific batch identification
  detailedLearningOutcomes?: Array<{
    moduleTitle: string;
    outcomes: string[];
  }>;
}

export interface FacultyMember {
  id:string;
  name: string;
  subject: string;
  profile: string;
  imageUrl: string;
  experience?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  text: string;
  avatarUrl?: string;
  initials: string;
}

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon?: React.ElementType;
}

export interface HeroSlide {
  id: string;
  imageUrl: string;
  altText: string;
  title?: string; // Optional title for the slide
  subtitle?: string; // Optional subtitle
}