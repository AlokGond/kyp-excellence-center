import { Course, FacultyMember, Testimonial, NavLinkItem, StatItem, HeroSlide } from './types';
import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaSmile, FaBullseye, FaLightbulb, FaCertificate, FaUserTie } from 'react-icons/fa';


export const APP_NAME = "KYP Kateya";

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide1',
    imageUrl: 'https://i.ibb.co/DDDnb6Yy/banner1.png', // User provided banner
    altText: 'KYP Banner - Youth Empowerment',
  },
  {
    id: 'slide2',
    imageUrl: 'https://i.ibb.co/kVRKdWJ1/banner2.jpg',
    altText: 'Students in a KYP classroom',
  },
  {
    id: 'slide3',
    imageUrl: 'https://i.ibb.co/BVQV1qDp/banner3.jpg',
    altText: 'Successful KYP graduates',
    
  }
];

export const HOME_ABOUT_CONTENT = {
  title: "About Kushal Yuva Program (KYP)",
  subtitle: "Empowering Bihar's Youth with Essential Skills",
  description: "The Kushal Yuva Program (KYP) is a flagship skill development initiative by the Government of Bihar, aimed at enhancing the employability of the youth. It focuses on equipping young individuals with crucial IT literacy, communication skills, and soft skills, making them ready for the modern job market.",
  features: [
    {
      icon: FaLightbulb,
      title: "BS-CIT (Bihar State Certificate in Information Technology)",
      text: "Master essential computer operations, MS Office suite, internet browsing, and digital citizen services."
    },
    {
      icon: FaUserTie,
      title: "BS-CLS (Bihar State Certificate in Language Skills)",
      text: "Improve your English and Hindi communication, enhancing both spoken and written language proficiency."
    },
    {
      icon: FaCertificate,
      title: "BS-CSS (Bihar State Certificate in Soft Skills)",
      text: "Develop critical soft skills including self-management, problem-solving, teamwork, and professional etiquette."
    }
  ],
  benefitsTitle: "Why Choose KYP at Kateya Excellence Center?",
  benefits: [
    "Government recognized certification enhancing your resume.",
    "Practical, hands-on training methodology.",
    "Improved job prospects and career advancement opportunities.",
    "Development of overall personality and confidence.",
    "Affordable and accessible quality skill training."
  ]
};


export const MOCK_COURSES: Course[] = [
  { 
    id: 'c1', 
    title: 'KYP - IT Literacy (BS-CIT)', 
    description: 'Master fundamental computer skills, MS Office suite, and effective internet usage for daily tasks.', 
    duration: '120 Hours', 
    image: 'https://i.ibb.co/Xxhm4wP7/one.jpg', 
    status: 'Upcoming', 
    batchName: 'August Intake 2024', 
    highlights: ['Windows OS', 'MS Word, Excel, PowerPoint', 'Internet & Email'],
    detailedLearningOutcomes: [
      { moduleTitle: 'Module 1: Introduction to Computers', outcomes: ['Understanding computer hardware and software components.', 'Basics of Operating Systems (Windows).', 'File and folder management.'] },
      { moduleTitle: 'Module 2: Microsoft Word', outcomes: ['Creating, editing, and formatting documents.', 'Working with tables, images, and mail merge.', 'Page layout and printing.'] },
      { moduleTitle: 'Module 3: Microsoft Excel', outcomes: ['Understanding spreadsheets, cells, rows, and columns.', 'Using formulas and basic functions (SUM, AVERAGE, etc.).', 'Creating charts and graphs.'] },
      { moduleTitle: 'Module 4: Microsoft PowerPoint', outcomes: ['Designing effective presentations.', 'Working with slides, themes, animations, and transitions.', 'Delivering presentations.'] },
      { moduleTitle: 'Module 5: Internet & Email', outcomes: ['Browsing the web and using search engines effectively.', 'Creating and managing email accounts.', 'Email etiquette and online safety practices.'] },
      { moduleTitle: 'Module 6: Digital Citizen Services', outcomes: ['Awareness of e-Governance services.', 'Introduction to online payments and digital transactions.', 'Understanding cyber hygiene.'] },
    ]
  },
  { 
    id: 'c2', 
    title: 'KYP - Language Skills (BS-CLS)', 
    description: 'Enhance your English communication, develop soft skills, and boost your personality for professional success.', 
    duration: '80 Hours', 
    image: 'https://i.ibb.co/v6h2ctW0/two.jpg', 
    status: 'Ongoing', 
    batchName: 'July Current Batch', 
    highlights: ['Spoken English', 'Presentation Skills', 'Interview Techniques'],
    detailedLearningOutcomes: [
      { moduleTitle: 'Module 1: Fundamentals of Communication', outcomes: ['Understanding the communication process.', 'Verbal and non-verbal communication.', 'Barriers to effective communication.'] },
      { moduleTitle: 'Module 2: English Grammar & Vocabulary', outcomes: ['Parts of speech, tenses, sentence construction.', 'Building everyday vocabulary.', 'Common phrases and idioms.'] },
      { moduleTitle: 'Module 3: Listening Skills', outcomes: ['Active listening techniques.', 'Comprehending spoken English in various contexts.', 'Note-taking from lectures/talks.'] },
      { moduleTitle: 'Module 4: Speaking Skills', outcomes: ['Improving pronunciation and fluency.', 'Participating in group discussions and debates.', 'Giving short presentations.'] },
      { moduleTitle: 'Module 5: Reading Skills', outcomes: ['Reading comprehension strategies.', 'Identifying main ideas and supporting details.', 'Improving reading speed.'] },
      { moduleTitle: 'Module 6: Writing Skills', outcomes: ['Writing clear and concise sentences and paragraphs.', 'Basic letter and email writing.', 'Resume building basics.'] },
    ]
  },
  { 
    id: 'c3', 
    title: 'KYP - Soft Skills (BS-CSS)', 
    description: 'Learn essential professional skills including Tally, GST, and office management for career growth.', 
    duration: '100 Hours', 
    image: 'https://i.ibb.co/MyBHkRZy/three.png', 
    status: 'Upcoming', 
    batchName: 'September Fast-Track', 
    highlights: ['Tally ERP 9', 'GST Compliance', 'Office Etiquette'],
    detailedLearningOutcomes: [
      { moduleTitle: 'Module 1: Self-Management Skills', outcomes: ['Time management and prioritization.', 'Goal setting and action planning.', 'Stress management techniques.', 'Personal grooming and hygiene.'] },
      { moduleTitle: 'Module 2: Professional Communication Skills', outcomes: ['Effective verbal and non-verbal communication in the workplace.', 'Active listening and providing constructive feedback.', 'Presentation skills and public speaking basics.'] },
      { moduleTitle: 'Module 3: Interpersonal & Teamwork Skills', outcomes: ['Building positive workplace relationships.', 'Working effectively in a team environment.', 'Conflict resolution and negotiation basics.'] },
      { moduleTitle: 'Module 4: Workplace Etiquette', outcomes: ['Understanding professional conduct and office decorum.', 'Telephone and email etiquette.', 'Meeting manners and participation.'] },
      { moduleTitle: 'Module 5: Problem Solving & Decision Making', outcomes: ['Identifying problems and analyzing root causes.', 'Creative thinking and generating solutions.', 'Basic decision-making frameworks.'] },
      { moduleTitle: 'Module 6: Customer Service Orientation', outcomes: ['Understanding customer needs and expectations.', 'Handling customer inquiries and complaints professionally.'] },
      { moduleTitle: 'Module 7: Interview Preparation', outcomes: ['Crafting an effective resume and cover letter.', 'Common interview questions and how to answer them.', 'Mock interview practice.'] },
    ]
  },
  { 
    id: 'c4', 
    title: 'Digital Marketing Essentials', 
    description: 'Explore SEO, SEM, social media marketing, and content strategy to thrive in the digital age.', 
    duration: '90 Hours', 
    image: '/courseimages/fourimage.jpg', 
    status: 'Completed', 
    highlights: ['SEO Basics', 'Social Media Strategy', 'Content Creation'],
    detailedLearningOutcomes: [
        { moduleTitle: 'Module 1: Introduction to Digital Marketing', outcomes: ['Understanding the digital marketing landscape.', 'Key channels and strategies.'] },
        { moduleTitle: 'Module 2: Search Engine Optimization (SEO)', outcomes: ['On-page and off-page SEO techniques.', 'Keyword research and analysis.'] },
    ]
  },
];

export const MOCK_FACULTY: FacultyMember[] = [
  { id: 'f1', name: 'Chhotan Prajapati', subject: 'Information Technology', profile: 'PhD in Computer Science with 12+ years in IT training. Specializes in making complex tech accessible.', imageUrl: 'https://picsum.photos/seed/faculty_aarav/300/300', experience: '12+ Years' },
  { id: 'f2', name: 'Ms. Priya Mehta', subject: 'Communication & Soft Skills', profile: 'Certified corporate trainer with a Masters in English Literature. Expert in grooming students for professional environments.', imageUrl: 'https://picsum.photos/seed/faculty_priya/300/300', experience: '8+ Years' },
  { id: 'f3', name: 'Mr. Rohan Verma', subject: 'Accounting & Finance', profile: 'Chartered Accountant with extensive industry experience. Passionate about teaching practical accounting with Tally & GST.', imageUrl: 'https://picsum.photos/seed/faculty_rohan/300/300', experience: '10+ Years' },
  { id: 'f4', name: 'Ms. Sneha Reddy', subject: 'Digital Marketing', profile: 'Dynamic digital marketer with 7 years of agency experience. Focuses on real-world campaign strategies.', imageUrl: 'https://picsum.photos/seed/faculty_sneha/300/300', experience: '7+ Years' },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Rahul Kumar', course: 'KYP - IT Literacy', text: 'The IT Literacy course at KYP Excellence Center was a game-changer! I now feel confident using computers for my studies and future job.', initials: 'RK', avatarUrl: 'https://picsum.photos/seed/avatar_rahul/100/100' },
  { id: 't2', name: 'Anjali Singh', course: 'KYP - Communication Skills', text: 'My communication skills have improved drastically. The trainers are amazing and the environment is very supportive. Thank you KYP!', initials: 'AS', avatarUrl: 'https://picsum.photos/seed/avatar_anjali/100/100' },
  { id: 't3', name: 'Vikash Patel', course: 'KYP - Professional Skills', text: 'Learning Tally and GST has opened up new career opportunities for me. The practical approach to teaching is fantastic.', initials: 'VP' },
];

export const CONTACT_DETAILS = {
  address: "KYP Kateya Center, Near Main Market, Kateya, Gopalganj, Bihar - 841437",
  phone: "+91 85400 79390",
  email: "chhotankypsir@gmail.com",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57278.93799901494!2d84.06110284863283!3d26.523081700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993170757c83933%3A0x9ff5f194ec2cb05!2sKateya%2C%20Bihar%20841437!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const MOCK_STATS: StatItem[] = [
    { value: '5000+', label: 'Students Trained', icon: FaUsers },
    { value: '03', label: 'Core KYP Courses', icon: FaBookOpen },
    { value: '10+', label: 'Expert Trainers', icon: FaChalkboardTeacher },
    { value: '95%', label: 'Skill Enhancement', icon: FaSmile }
];