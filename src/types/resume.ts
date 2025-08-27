// TypeScript interfaces for resume data structure

export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: {
    url: string;
    display: string;
  };
  linkedin: {
    url: string;
    display: string;
  };
}

export interface TechnicalSkills {
  languages: string[];
  styling: string[];
  technologies: string[];
  tools: string[];
}

export interface Experience {
  position: string;
  company: string;
  companyUrl?: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface ResumeData {
  contactInfo: ContactInfo;
  professionalSummary: string;
  technicalSkills: TechnicalSkills;
  experience: Experience[];
  education: Education;
  languages: Language[];
}
