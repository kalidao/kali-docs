# Tutorial for Legal Document Automation 

### Introduction

Professionals in the legal sector know that lawyering often involves paperwork. That’s where document automation comes in. Document automation allows you to automate document creation with the help of smart templates. In general, document automation helps in creating documents in a short period of time with consistent results.

Legal document automation is essential for improving and optimizing the way lawyers run their practice, and especially important for Kali to offer as a DAO self-help tool. With it, Kali ensures that the document is easily accessible, sharable, and well organized.

### Kali

Kali is a legal DAO deployer; it is different from other DAO frameworks in that Kali wraps DAOs with bespoke legal instruments at inception. 

Ultimately, we envision Kali automating legal documents for DAOs to effortlessly manage and process legal tasks, conduct commercial activities in meatspace, DAO2DAO collaborations in the metaverse, and many more. 

### Document Automation, the Kali Wei

**1. Set up a drafting environment**

Much like using Microsoft Word as the environment to draft legal documents, we need a specific environment to draft the legal templates for document automation purposes. To auto-generate legal documents, Kali uses [Javascript programming language](https://en.wikipedia.org/wiki/JavaScript) and the [React framework](https://reactjs.org/). 

No worries if you're not familiar with the Javascript language or programming in general. All you'll need to do is to download an integrated development environment (IDE), a.k.a. code editor, to "program" legal templates.

At Kali, we recommend downloading [Visual Studio Code](https://code.visualstudio.com/).

**2. Draft legal template**

Once a code editor is set up, we can start drafting our legal document. For convenience, we've prepared a [BlankTemplate.js file](https://github.com/audsssy/kali-docs/blob/document-automation/docs/template/BlankTemplate.js) for you to get started. 

Locate the line that says `YOUR LEGAL TEMPLATE GOES HERE`, and paste your legal template starting on the line below (line 76).

![](https://i.imgur.com/lC0yes7.png)


**3. Define template-specific variables**

In drafting legal documents, legal professionals often borrow boilerplate text with placeholders and fill them with case-specific information, *e.g.*, names and dates. A boilerplace with placeholders may look like this: 

`This agreement is made and entered into effective as of ______, by and between ______, a limited liability company, located at ______...`

For document automation purposes, we want to give each placeholder (*i.e.*, `_____`) a name or variable so that the Kali document generator may recognize and replace placeholders with corresponding user inputs.  

An updated version of the above example with placeholders may look like below, where `[DATE]`, `[PARTY A]` and `[ADDRESS]` are the variables to be replaced with user inputs. 

`This agreement is made and entered into effective as of [DATE], by and between [PARTY A], a limited liability company, located at [ADDRESS] ...`

Lastly, we must insert all the variables within the `{ }` at line 71 of BlankTemplate.js. 

![](https://i.imgur.com/eK8a61e.png)


In case you're unfamiliar with this process, here are some examples of legal templates for reference:  

| Document | Link | Variables |
| -------- | -------- | -------- |
| Delaware LLC Operating Agreement     | [Link](https://github.com/audsssy/kali-legal/blob/main/formation/llc/DelawareOAtemplate.js)     | `name`, `chain`, `date`, `arbitrator`, `ethAddress`      |
| Delaware series LLC Operating Agreement     | [Link](https://github.com/audsssy/kali-legal/blob/main/formation/llc/series/RicardianTemplate.js)     | `ricardianId`      |
| Delaware Investment Club Operating Agreement     | [Link](https://github.com/audsssy/kali-legal/blob/main/formation/llc/DelawareInvestmentClubTemplate.js)     | `name`, `chain`, `client`, `network`, `address`, `code`, `reference`      |
| Wyoming LLC Operating Agreement     | [Link](https://github.com/audsssy/kali-legal/blob/main/formation/llc/WyomingOAtemplate.js)     | `name`, `date`, `email`, `ethAddress`, `id`      |

**4. Stylize the legal template**

Once the legal template is drafted in a Javascript file, we can stylize the content with tags shown in the table below. 

| tag | style | usecase |
| -------- | -------- | -------- | 
| heading1     | underlined, center alignment, all caps | title
| heading2     | center alignment, all caps     | subtitle |
| heading3     | center alignment     | section title|
| text     | justified alignment     | paragraph |
| numbered_list     | justified alignment, first line indent     | enumerated list |
| bulleted_list     | justified alignment, first line indent     | enumerated list |
| `<Br />`     | single linkbreak     | new line |
| `<Tab />`     | spacer     | spacer

[VIDEO WALKTHROUGH]

For those unfamiliar with tags, we recommend visiting the following for reference:
| Document | Link | 
| -------- | -------- |
| Delaware LLC Operating Agreement     | [Link](https://github.com/audsssy/kali-legal/blob/main/formation/llc/DelawareOAtemplate.js)     | 
| Delaware series LLC Operating Agreement     | [Link](https://github.com/audsssy/kali-legal/blob/main/formation/llc/series/RicardianTemplate.js)     | 
| Delaware Investment Club Operating Agreement     | [Link](https://github.com/audsssy/kali-legal/blob/main/formation/llc/DelawareInvestmentClubTemplate.js)     |
| Wyoming LLC Operating Agreement     | [Link](https://github.com/audsssy/kali-legal/blob/main/formation/llc/WyomingOAtemplate.js)     | 

**5. Build a form for user to input dynamic data**

Great job following along, we're almost done! 

Thus far, you've set up a code editor, created a Javascript .js file, filled it with legal template and placeholders, given placeholders meaningful names, and stylized the template. Phew, that was a lot. 

Now that you've done most of the heavy-lifting, we'll help you get through this last part. Simply fill out this Google Form and Kali will set up a form like below on the front end so that user may supply case-specific information for Kali document generator to fill the placeholders in the legal template with. 

![](https://i.imgur.com/BWI5bkI.png)

Once you submit the Google Form, pop into the [KaliDAO Discord](https://discord.gg/fRK8dvTkHM) and let us know how you wish to use your legal templates! 

## Get Involved
We welcome feature requests and feedback on our vision for more affordable and efficient DAO-run businesses.

[Lurk on our Twitter](https://twitter.com/_KaliDAO)
[Join LexDAO](https://discord.com/invite/lexdao)















