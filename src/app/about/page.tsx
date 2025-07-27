"use client";

import React, { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IoIosFolder } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import HtmlCodeBlock from "@/components/HtmlCodeBlock";

const initExplorer = [
  {
    label: "personal-info",
    isOpened: true,
    children: [
      {
        label: "bio",
        type: "file",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Me</title>
  </head>
<body>
  <section>
    <h1 style="font-size: 1.75rem; font-weight: bold;">About Me</h1>
    <p style="font-size: 1rem; line-height: 1.6;">
      I’m a <strong>software engineer</strong> with 
      <strong>2 years of professional experience</strong>, primarily focused on building 
      <strong>scalable and optimized frontend applications</strong>.
      I’ve <strong>architected micro-frontend-based systems</strong> and worked extensively with 
      <strong>third-party integrations</strong>, while continuously exploring and researching 
      new frontend technologies.
    </p>
    <p style="font-size: 1rem; line-height: 1.6; margin-top: 1rem;">
      Recently, I’ve expanded into <strong>backend development</strong> using 
      <strong>Node.js</strong>, where I’ve built <strong>RESTful APIs</strong> with 
      <strong>PostgreSQL</strong> and explored <strong>event-driven systems</strong> using 
      <strong>Kafka</strong>. I also enjoy building <strong>Android applications</strong> and 
      <strong>full-stack web apps</strong>, always looking for opportunities to grow and 
      contribute to <strong>end-to-end product development</strong>.
    </p>
  </section>
</body>
</html>`,
      },
      {
        label: "experience",
        type: "file",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Experience</title>
</head>
<body>
  <section style="font-size: 1rem; line-height: 1.6;">
    <div style="margin-bottom: 1.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 600;">Software Engineer</h3>
      <p style="font-size: 0.875rem; color: gray;">Apr 2025 – Present</p>
      <ul style="margin-top: 0.5rem; padding-left: 1rem;">
        <li>Started full-stack journey using Node.js</li>
        <li>Developed backend APIs with PostgreSQL</li>
        <li>Explored Kafka and event-driven architecture</li>
        <li>Contributed to real-world production features</li>
        </ul>
        </div>
        <div>
        <h3 style="font-size: 1.25rem; font-weight: 600;">Software Developer</h3>
        <p style="font-size: 0.875rem; color: gray;">Jun 2023 – Apr 2025</p>
        <ul style="margin-top: 0.5rem; padding-left: 1rem;">
        <li>Developed scalable and optimized frontend applications</li>
        <li>Worked on various third-party integrations</li>
        <li>Contributed to micro-frontend projects</li>
        </ul>
        </div>
        </section>
        </body>
</html>`,
      },
      {
        label: "education",
        type: "file",
        code: `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Education</title>
        </head>
        <body>
        <section style="font-size: 1rem; line-height: 1.6;">
        <h3 style="font-size: 1.25rem; font-weight: bold;">Education</h3>
    <div style="margin-top: 1rem;">
      <h4 style="font-size: 1.1rem; font-weight: 600; margin: 0;">MVPS’s KBT College of Engineering</h4>
      <p style="margin: 0;">Nashik, Maharashtra</p>
      <p style="margin: 0;">Bachelor of Engineering in Computer Engineering</p>
      <p style="margin: 0;">Graduated: May 2023</p>
      <p style="margin: 0;">CGPA: <strong>8.84</strong></p>
      </div>
      <div style="margin-top: 1rem;">
      <h4 style="font-size: 1.1rem; font-weight: 600; margin: 0;">KTHM College</h4>
      <p style="margin: 0;">Nashik, Maharashtra</p>
      <p style="margin: 0;">Higher Secondary Education (HSC)</p>
      <p style="margin: 0;">Percentage: <strong>71.38%</strong></p>
      </div>
      </section>
      </body>
      </html>`,
      },
    ],
  },
  {
    label: "contacts",
    isOpened: true,
    children: [
      {
        label: "kiranbendkoli24@gmail.com",
        type: "file",
        code: `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email</title>
</head>
<body>
  <p>Email: <a href="mailto:kiranbendkoli24@gmail.com">kiranbendkoli24@gmail.com</a></p>
</body>
</html>`,
      },
      {
        label: "+91 8530628606",
        type: "file",
        code: `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Phone</title>
  </head>
  <body>
  <p>Phone: <a href="tel:+918530628606">+91 8530628606</a></p>
  </body>
  </html>`,
},
],
  },
];

export const runtime = 'edge';

const About: React.FC = () => {
  const [explorer, setExplorer] = useState(initExplorer);
  const [activeFile, setActiveFile] = useState({
    folder: initExplorer[0].label,
    child: initExplorer[0].children[0].label,
    code: initExplorer[0].children[0].code,
  });
  
  const toggleFolder = (label: string) => {
    setExplorer((prev) =>
      prev.map((node) =>
        node.label === label ? { ...node, isOpened: !node.isOpened } : node
      )
    );
  };

  const selectFile = (
    folderLabel: string,
    child: { label: string; code: string }
  ) => {
    setActiveFile({
      folder: folderLabel,
      child: child.label,
      code: child.code,
    });
  };
  const fileTitle = useMemo(() => activeFile.child, [activeFile]);

  return (
    <div className="flex flex-col min-h-[80vh] border-b border-gray-600 overflow-hidden">
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden w-full">
        {/* Explorer Sidebar */}
        <aside className="w-full md:w-1/5 p-2 overflow-auto border-b md:border-b-0 md:border-r border-gray-600">
          <div className="flex items-center mb-2">
            <IoIosFolder className="mr-1" />
            <span className="font-semibold">Explorer</span>
          </div>
          {explorer.map((folder) => (
            <div key={folder.label} className="mb-3">
              <div
                className="flex items-center p-1 rounded cursor-pointer hover:bg-gray-700"
                onClick={() => toggleFolder(folder.label)}
              >
                <FaCaretDown
                  className={twMerge(
                    "size-5 mr-1",
                    folder.isOpened ? "transform rotate-90" : ""
                  )}
                />
                <span className="font-medium">{folder.label}</span>
              </div>
              {folder.isOpened && (
                <ul className="pl-6 mt-1">
                  {folder.children.map((item) => (
                    <li
                      key={item.label}
                      className={twMerge(
                        "cursor-pointer p-1 rounded",
                        activeFile.child === item.label
                          ? "bg-gray-700 text-white"
                          : "hover:bg-gray-700 text-gray-300"
                      )}
                      onClick={() => selectFile(folder.label, item)}
                    >
                      {folder.label === "personal-info"
                        ? `${item.label}.html`
                        : item.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>

        <section className="flex flex-col flex-1 w-full md:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[80vh] border-r border-gray-600">
              <div className="px-4 py-2 border-b  border-gray-600 bg-gray-800/40">
                <span className="font-semibold">
                  {activeFile.folder === "personal-info"
                    ? `${activeFile.child}.html`
                    : activeFile.child}
                </span>
              </div>
              <HtmlCodeBlock htmlCode={activeFile.code} />
            </div>
            <div className="border mt-5 sm:mt-0 border-zinc-700 bg-opacity-30 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden">
              {/* Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-0 border-b border-zinc-700">
                <div className="text-sm font-medium capitalize text-white relative">
                  {fileTitle}
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Address Bar */}
              <div className="px-4 py-2 text-sm text-gray-300 bg-opacity-40 border-b border-zinc-700">
                http://127.0.0.1:3000/
                {activeFile.folder === "personal-info"
                  ? `${activeFile.child}.html`
                  : "contact.html"}
              </div>

              {/* Preview Content */}
              <div className="flex-1 flex">
                <div
                  className="prose prose-invert max-w-none overflow-auto p-4"
                  dangerouslySetInnerHTML={{ __html: activeFile.code }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
