G.M. Naimul Quader - Personal Portfolio

This is the source code for my personal portfolio website, built with modern web technologies to showcase my skills, experience, and projects.



Technologies Used

Vite: A next-generation frontend tooling that provides a faster and leaner development experience.



React: A JavaScript library for building user interfaces.



TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.



Tailwind CSS: A utility-first CSS framework for rapid UI development.



shadcn/ui: A collection of re-usable components built using Radix UI and Tailwind CSS.



Gemini API: Used for AI-powered features like the "About Me" assistant and intelligent contact form responses.



EmailJS: A service that allows sending emails directly from client-side JavaScript.



Getting Started: Local Development

Follow these steps to get the project running on your local machine.



Prerequisites

Node.js and npm: You need to have Node.js (version 18 or higher) and npm installed on your computer. You can install them using nvm (Node Version Manager).



Installation \& Setup

Create Project Folder:

Create a new folder on your computer for the project (e.g., my-portfolio).



Place Files:

Place all the files I've provided into their correct folders as described in the project structure.



Navigate to the project directory:

Open your terminal or command prompt and navigate into your project folder.



cd my-portfolio



Install Dependencies:

Run the following command to install all the necessary packages listed in package.json.



npm install



Start the Development Server:

This command will start the Vite development server. It will automatically open the website in your default web browser and will reload the page whenever you make a change to a file.



npm run dev



Your site should now be running at http://localhost:5173 (or another port if 5173 is in use).



How to Push to Your GitHub Repository

Once you have the project running locally, you can upload it to your own GitHub repository.



Create a New Repository on GitHub:



Go to GitHub and log in.



Click the "+" icon in the top-right corner and select "New repository".



Give your repository a name (e.g., my-portfolio-website).



Make sure it's a public repository.



Do not initialize it with a README, .gitignore, or license. You already have these files.



Click "Create repository".



Initialize Git in Your Local Project:

In your terminal (while inside your project folder), run this command:



git init



Add and Commit Your Files:

Add all the files to the git repository and make your first commit.



git add .

git commit -m "Initial commit: Set up portfolio project"



Connect Your Local Repository to GitHub:

On the new repository page on GitHub, you'll see a section titled "...or push an existing repository from the command line". Copy the commands from there. They will look like this (but with your username and repository name):



git remote add origin \[https://github.com/YOUR\_USERNAME/YOUR\_REPOSITORY\_NAME.git](https://github.com/YOUR\_USERNAME/YOUR\_REPOSITORY\_NAME.git)

git branch -M main

git push -u origin main



Push Your Code:

Run the commands you just copied. This will upload all your files to your GitHub repository.



That's it! Your portfolio is now on GitHub. You can continue to make changes locally, and whenever you're ready, just add, commit, and push your changes.

