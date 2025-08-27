import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Github,
  Linkedin,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { resumeData } from "../data/resumeData";

export function Resume() {
  return (
    <div className="max-w-4xl mx-auto bg-[rgba(255,255,255,1)] p-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="mb-2">{resumeData.contactInfo.name}</h1>
        <p className="text-muted-foreground mb-4">
          {resumeData.contactInfo.title}
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{resumeData.contactInfo.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <a
              href={`mailto:${resumeData.contactInfo.email}`}
              className="hover:text-primary transition-colors"
            >
              {resumeData.contactInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>{resumeData.contactInfo.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <Github className="w-4 h-4" />
            <a
              href={resumeData.contactInfo.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {resumeData.contactInfo.github.display}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-4 h-4" />
            <a
              href={resumeData.contactInfo.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {resumeData.contactInfo.linkedin.display}
            </a>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="mb-4">Professional Summary</h2>
        <Separator className="mb-4" />
        <p className="text-muted-foreground leading-relaxed">
          {resumeData.professionalSummary}
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="mb-4">Technical Skills</h2>
        <Separator className="mb-4" />

        <div className="space-y-4">
          <div>
            <h4 className="mb-2">Languages & Frameworks</h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.technicalSkills.languages.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2">Styling</h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.technicalSkills.styling.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.technicalSkills.technologies.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.technicalSkills.tools.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-8">
        <h2 className="mb-4">Professional Experience</h2>
        <Separator className="mb-4" />

        <div className="space-y-6">
          {resumeData.experience.map((job, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3>
                    <strong>{job.position}</strong>
                  </h3>
                  <p className="text-muted-foreground">
                    {job.companyUrl ? (
                      <strong>
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {job.company}
                        </a>
                      </strong>
                    ) : (
                      <strong>{job.company}</strong>
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{job.period}</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} dangerouslySetInnerHTML={{ __html: responsibility }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="mb-4">Education</h2>
        <Separator className="mb-4" />

        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3>
                <strong>
                  {resumeData.education.degree}
                </strong>
              </h3>
              <p className="text-muted-foreground">
                <strong>{resumeData.education.institution}</strong>
              </p>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{resumeData.education.period}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="mb-4">Languages</h2>
        <Separator className="mb-4" />

        <div className="space-y-2">
          {resumeData.languages.map((language, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{language.name}</span>
              <span className="text-sm text-muted-foreground">
                {language.proficiency}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
