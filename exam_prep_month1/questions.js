const questions = [

    // ════════════════════════════════════════════
    // WEB 101 — HTML FUNDAMENTALS
    // ════════════════════════════════════════════
  
    {
      unit: "WEB101 · HTML Basics",
      question: "What are the three core technologies of every web page, and what role does each play?",
      options: [
        "HTML = style, CSS = structure, JS = behaviour",
        "HTML = structure, CSS = style, JS = behaviour",
        "HTML = behaviour, CSS = style, JS = structure",
        "HTML = structure, JS = style, CSS = behaviour"
      ],
      answer: 1,
      explanation: "HTML provides structure (the skeleton), CSS controls appearance (the clothes), and JavaScript adds behaviour (the muscles that make things move)."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "Which of the following is a self-closing (void) HTML element?",
      options: ["&lt;p&gt;", "&lt;div&gt;", "&lt;img&gt;", "&lt;span&gt;"],
      answer: 2,
      explanation: "<code>&lt;img&gt;</code> is self-closing — it has no content between opening and closing tags. <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, and <code>&lt;span&gt;</code> are normal elements that wrap content."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "What does the <code>alt</code> attribute on an <code>&lt;img&gt;</code> tag do?",
      options: [
        "Sets the image width in pixels",
        "Provides alternative text if the image fails to load and for screen readers",
        "Adds a tooltip on hover",
        "Links the image to another page"
      ],
      answer: 1,
      explanation: "<code>alt</code> provides a text description used when the image cannot load and by screen readers for accessibility. Always include it."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "What is the correct nesting rule for HTML elements?",
      options: [
        "Elements can overlap — the browser will fix it",
        "The last tag opened must be the first tag closed",
        "Closing tags are optional in modern HTML5",
        "Child elements must always come before parent elements"
      ],
      answer: 1,
      explanation: "HTML nesting works like brackets: the last one opened must be the first one closed. <code>&lt;outer&gt;&lt;inner&gt;&lt;/inner&gt;&lt;/outer&gt;</code> is correct. Overlapping tags produce broken HTML."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "What is the purpose of <code>&lt;!DOCTYPE html&gt;</code>?",
      options: [
        "It imports the HTML library from the server",
        "It tells the browser this is an HTML5 document and should be the very first line",
        "It creates the root HTML element",
        "It defines the character encoding"
      ],
      answer: 1,
      explanation: "<code>&lt;!DOCTYPE html&gt;</code> must be the very first line — it tells the browser to render the page in HTML5 standards mode."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "Which HTML element contains all the visible content of a web page?",
      options: ["&lt;head&gt;", "&lt;html&gt;", "&lt;body&gt;", "&lt;main&gt;"],
      answer: 2,
      explanation: "The <code>&lt;body&gt;</code> contains all content users see. The <code>&lt;head&gt;</code> contains metadata that the browser uses but does not display."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "What is the difference between <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>?",
      options: [
        "<code>&lt;ul&gt;</code> is for bold text; <code>&lt;ol&gt;</code> is for italic text",
        "<code>&lt;ul&gt;</code> creates bullet points; <code>&lt;ol&gt;</code> creates a numbered list",
        "<code>&lt;ul&gt;</code> is unordered and hidden; <code>&lt;ol&gt;</code> is ordered and visible",
        "Both create the same type of list — they are interchangeable"
      ],
      answer: 1,
      explanation: "<code>&lt;ul&gt;</code> (unordered list) uses bullet points. <code>&lt;ol&gt;</code> (ordered list) uses numbers. Both contain <code>&lt;li&gt;</code> items."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "Which attribute makes a form link open in a new browser tab?",
      options: [
        "<code>rel=\"noopener\"</code>",
        "<code>target=\"_blank\"</code>",
        "<code>href=\"new\"</code>",
        "<code>open=\"tab\"</code>"
      ],
      answer: 1,
      explanation: "<code>target=\"_blank\"</code> on an <code>&lt;a&gt;</code> tag opens the link in a new tab or window."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "How do you create a link that opens the user's email client?",
      options: [
        "<code>&lt;a href=\"email:hello@example.com\"&gt;</code>",
        "<code>&lt;a href=\"mail:hello@example.com\"&gt;</code>",
        "<code>&lt;a href=\"mailto:hello@example.com\"&gt;</code>",
        "<code>&lt;a href=\"send:hello@example.com\"&gt;</code>"
      ],
      answer: 2,
      explanation: "The <code>mailto:</code> scheme in the <code>href</code> attribute opens the user's default email application with the address pre-filled."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "What does the <code>required</code> attribute do on an input field?",
      options: [
        "Adds a red border to the input",
        "Prevents the form from submitting if the field is empty",
        "Makes the field read-only",
        "Sets a default placeholder value"
      ],
      answer: 1,
      explanation: "<code>required</code> enables basic client-side validation — the browser will not submit the form if the field is left empty."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "What is the difference between <code>GET</code> and <code>POST</code> as form methods?",
      options: [
        "GET sends data in the URL; POST sends data in the request body",
        "GET encrypts form data; POST does not",
        "POST sends data in the URL; GET hides it in the body",
        "There is no functional difference — use either one"
      ],
      answer: 0,
      explanation: "<code>GET</code> appends form data to the URL (visible, bookmarkable, limited size). <code>POST</code> sends data in the request body (hidden from URL, used for sensitive or large data)."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "Which input type triggers a date-picker calendar widget in the browser?",
      options: [
        "<code>type=\"calendar\"</code>",
        "<code>type=\"picker\"</code>",
        "<code>type=\"date\"</code>",
        "<code>type=\"datetime\"</code>"
      ],
      answer: 2,
      explanation: "<code>&lt;input type=\"date\"&gt;</code> renders a native date-picker widget in modern browsers."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "What does DNS stand for, and what does it do?",
      options: [
        "Dynamic Node Server — manages backend connections",
        "Domain Name System — converts domain names to IP addresses",
        "Direct Network Signal — routes packets between servers",
        "Data Network Standard — encrypts internet traffic"
      ],
      answer: 1,
      explanation: "DNS (Domain Name System) is the internet's phone book — it translates human-readable domain names like <code>google.com</code> into numerical IP addresses like <code>142.250.80.46</code>."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "Which attribute on the <code>&lt;video&gt;</code> tag makes the browser display play/pause controls?",
      options: ["<code>play</code>", "<code>controls</code>", "<code>autoplay</code>", "<code>display</code>"],
      answer: 1,
      explanation: "The <code>controls</code> attribute renders the browser's native video controls bar — play, pause, volume, and seek."
    },
    {
      unit: "WEB101 · HTML Basics",
      question: "How does the <code>download</code> attribute on an <code>&lt;a&gt;</code> tag change link behaviour?",
      options: [
        "It opens the file in a new tab instead of the current one",
        "It tells the browser to save the file to disk rather than opening it",
        "It validates that the file exists before navigation",
        "It compresses the file before downloading"
      ],
      answer: 1,
      explanation: "Adding <code>download</code> to an anchor tag triggers a file save dialog instead of opening the file. It only works for same-origin files."
    },
  
    // ════════════════════════════════════════════
    // WEB 102 — GIT & GITHUB
    // ════════════════════════════════════════════
  
    {
      unit: "WEB102 · Git & GitHub",
      question: "What is the key difference between Git and GitHub?",
      options: [
        "Git is a website; GitHub is a command-line tool",
        "Git is a local version control tool on your computer; GitHub is a cloud hosting service for Git repositories",
        "Git handles JavaScript files; GitHub handles HTML files",
        "They are the same thing — different names for the same product"
      ],
      answer: 1,
      explanation: "Git is software installed on your machine that tracks changes locally — it works offline. GitHub is a website (owned by Microsoft) that hosts Git repositories in the cloud for backup and collaboration."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "What do the three areas of Git represent? (Working Tree → Staging Area → Repository)",
      options: [
        "Files on the internet → files on your computer → files deleted",
        "Files you are editing → files chosen for the next commit → permanent commit history",
        "Old files → current files → future files",
        "Local files → shared files → archived files"
      ],
      answer: 1,
      explanation: "Working Tree = files you are actively editing. Staging Area = files selected for the next commit (the basket). Repository = the permanent history stored in the <code>.git</code> folder."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "What does <code>git add .</code> do?",
      options: [
        "Creates a new commit with all changes",
        "Stages ALL changed files in the current directory and subfolders",
        "Pushes all files to GitHub",
        "Adds a new branch called '.' to the repository"
      ],
      answer: 1,
      explanation: "<code>git add .</code> moves all changed files from the Working Tree to the Staging Area. You still need to run <code>git commit</code> to save the snapshot."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "What is a Git commit?",
      options: [
        "A branch of the repository",
        "A saved snapshot of your project at a specific moment, with a unique ID and message",
        "A connection between your local repo and GitHub",
        "A request to merge two branches"
      ],
      answer: 1,
      explanation: "A commit is a permanent snapshot stored in the repository. Each commit has a unique hash ID, a timestamp, the author's name, and a message describing what changed."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "What is <code>HEAD</code> in Git?",
      options: [
        "The first commit ever made in the repository",
        "A pointer showing which commit you are currently at",
        "The name of the main branch",
        "The remote GitHub repository"
      ],
      answer: 1,
      explanation: "HEAD is a pointer that tells Git 'this is where you currently are'. It normally points to the latest commit on your active branch and moves forward with each new commit."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "Which command creates a new branch AND switches to it in one step?",
      options: [
        "<code>git branch new-feature</code>",
        "<code>git checkout new-feature</code>",
        "<code>git switch -c new-feature</code>",
        "<code>git create new-feature</code>"
      ],
      answer: 2,
      explanation: "<code>git switch -c branch-name</code> creates and switches in one command. <code>git branch name</code> only creates; you then need <code>git switch name</code> separately."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "What happens when you use <code>git reset --hard HEAD~1</code>?",
      options: [
        "It undoes the last commit but keeps the changes in your files",
        "It permanently deletes the last commit AND discards the file changes",
        "It creates a new commit that reverses the last one",
        "It moves HEAD to the first commit"
      ],
      answer: 1,
      explanation: "<code>--hard</code> discards both the commit and any file changes. Use with extreme caution — this cannot be undone. <code>--soft</code> keeps the file changes while removing the commit."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "What is a merge conflict, and when does it occur?",
      options: [
        "When you try to push to a private repository without permission",
        "When two branches changed the same line differently and Git cannot auto-decide which to keep",
        "When the remote repository is ahead of your local one",
        "When you delete a branch that has unmerged commits"
      ],
      answer: 1,
      explanation: "A merge conflict occurs when two branches have made different changes to the same line. Git marks the conflicting section and asks you to manually resolve which version to keep."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "What is the difference between <code>git pull</code> and <code>git fetch</code>?",
      options: [
        "They are identical commands with different names",
        "<code>git fetch</code> downloads changes and merges them; <code>git pull</code> only downloads",
        "<code>git pull</code> downloads AND merges; <code>git fetch</code> only downloads without merging",
        "<code>git pull</code> uploads files; <code>git fetch</code> downloads files"
      ],
      answer: 2,
      explanation: "<code>git fetch</code> downloads changes from GitHub but does not integrate them — lets you review first. <code>git pull</code> downloads and immediately merges into your current branch."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "For GitHub Pages to work, what must your homepage file be named?",
      options: ["home.html", "main.html", "index.html", "default.html"],
      answer: 2,
      explanation: "GitHub Pages automatically serves <code>index.html</code> as the homepage. A differently-named file will result in a 404 error when visitors go to your site URL."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "Why does GitHub Pages require all filenames to be lowercase?",
      options: [
        "Lowercase files load faster on GitHub's servers",
        "GitHub Pages runs on Linux servers which are case-sensitive — Photo.jpg and photo.jpg are different files",
        "GitHub's file system does not support uppercase letters",
        "It is a styling convention only — there is no technical reason"
      ],
      answer: 1,
      explanation: "Linux file systems are case-sensitive. A file named <code>Photo.jpg</code> referenced as <code>photo.jpg</code> works on Windows (case-insensitive) but breaks on the Linux server that hosts GitHub Pages."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "Why did GitHub stop accepting passwords for HTTPS authentication in 2021?",
      options: [
        "Passwords were too long for GitHub's systems",
        "Passwords are insecure for automated workflows — Personal Access Tokens (PATs) replaced them",
        "GitHub switched to SSH-only authentication",
        "Two-factor authentication made passwords redundant"
      ],
      answer: 1,
      explanation: "GitHub deprecated password authentication for HTTPS in August 2021. You must now use a Personal Access Token (PAT) as the password, or set up SSH key authentication."
    },
    {
      unit: "WEB102 · Git & GitHub",
      question: "What does <code>git init</code> do?",
      options: [
        "Downloads an existing repository from GitHub",
        "Turns the current folder into a Git repository by creating a hidden .git folder",
        "Configures your global Git username and email",
        "Creates the first commit in a repository"
      ],
      answer: 1,
      explanation: "<code>git init</code> initialises a new local repository. Git creates a hidden <code>.git</code> folder where all version history will be stored. Run it once per project."
    },
  
    // ════════════════════════════════════════════
    // WEB 103 — CSS
    // ════════════════════════════════════════════
  
    {
      unit: "WEB103 · CSS",
      question: "In the CSS rule <code>h1 { color: blue; }</code>, what is <code>h1</code> called?",
      options: ["Property", "Value", "Selector", "Declaration"],
      answer: 2,
      explanation: "The selector picks which HTML element to style. Here, <code>h1</code> targets all <code>&lt;h1&gt;</code> tags on the page."
    },
    {
      unit: "WEB103 · CSS",
      question: "What is the specificity order from lowest to highest score?",
      options: [
        "Element → Class → ID → Inline style",
        "Inline style → ID → Class → Element",
        "ID → Class → Element → Inline style",
        "Class → Element → ID → Inline style"
      ],
      answer: 0,
      explanation: "Element selector scores 1, class selector scores 10, ID selector scores 100, inline style scores 1000. Higher score wins when rules conflict."
    },
    {
      unit: "WEB103 · CSS",
      question: "In the CSS Box Model, which layer is outermost?",
      options: ["Content", "Padding", "Border", "Margin"],
      answer: 3,
      explanation: "From outside in: Margin → Border → Padding → Content. Margin pushes other elements away; padding creates space inside the border around the content."
    },
    {
      unit: "WEB103 · CSS",
      question: "What does <code>box-sizing: border-box</code> do?",
      options: [
        "Adds a border automatically to every element",
        "Makes the element's width include padding and border, not add on top",
        "Removes all default margins from the element",
        "Makes the element a flex container"
      ],
      answer: 1,
      explanation: "With <code>border-box</code>, the declared <code>width</code> already includes padding and border — far more predictable. Always add <code>* { box-sizing: border-box; }</code>."
    },
    {
      unit: "WEB103 · CSS",
      question: "Which CSS property is recommended for font sizes to respect browser accessibility settings?",
      options: ["px", "pt", "rem", "vh"],
      answer: 2,
      explanation: "<code>rem</code> scales relative to the browser's root font size — respecting user accessibility preferences. Fixed <code>px</code> values ignore those settings."
    },
    {
      unit: "WEB103 · CSS",
      question: "Which Flexbox property controls alignment along the <strong>main axis</strong>?",
      options: ["align-items", "align-content", "justify-content", "flex-direction"],
      answer: 2,
      explanation: "<code>justify-content</code> aligns items along the main axis (horizontal by default). <code>align-items</code> aligns along the cross axis (vertical by default)."
    },
    {
      unit: "WEB103 · CSS",
      question: "What does <code>grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))</code> achieve?",
      options: [
        "Creates exactly 260 columns",
        "Automatically adjusts the number of columns based on available screen width with no media queries",
        "Sets all grid rows to a minimum height of 260px",
        "Fills empty cells with placeholder content"
      ],
      answer: 1,
      explanation: "<code>auto-fill</code> packs as many columns as fit. <code>minmax(260px, 1fr)</code> makes each column at least 260px but flexible — a fully responsive grid with zero media queries."
    },
    {
      unit: "WEB103 · CSS",
      question: "What is the mobile-first approach to CSS?",
      options: [
        "Write desktop styles first, then override with <code>max-width</code> queries for smaller screens",
        "Write base CSS for mobile, then add <code>min-width</code> media queries for larger screens",
        "Write separate stylesheets for each device",
        "Use JavaScript to inject styles based on screen size"
      ],
      answer: 1,
      explanation: "Mobile-first: base CSS targets mobile screens. Then <code>@media (min-width: ...)</code> progressively enhances for tablets (600px) and desktops (1024px+)."
    },
    {
      unit: "WEB103 · CSS",
      question: "Which two CSS properties should you prefer animating for the best performance?",
      options: [
        "<code>width</code> and <code>height</code>",
        "<code>margin</code> and <code>padding</code>",
        "<code>transform</code> and <code>opacity</code>",
        "<code>color</code> and <code>font-size</code>"
      ],
      answer: 2,
      explanation: "<code>transform</code> and <code>opacity</code> are GPU-accelerated and do not trigger layout recalculations — guaranteeing smooth 60fps animations on all devices."
    },
    {
      unit: "WEB103 · CSS",
      question: "Where should CSS custom properties (variables) typically be declared for global use?",
      options: ["body", ":root", ":global", "html > *"],
      answer: 1,
      explanation: "Declaring variables in <code>:root</code> makes them available to every element on the page, since <code>:root</code> targets the top-level <code>&lt;html&gt;</code> element."
    },
  
    // ════════════════════════════════════════════
    // WEB 104 — JAVASCRIPT FUNDAMENTALS
    // ════════════════════════════════════════════
  
    {
      unit: "WEB104 · JavaScript Fundamentals",
      question: "Which keyword should you use by default when declaring a variable in JavaScript?",
      options: ["var", "let", "const", "def"],
      answer: 2,
      explanation: "Use <code>const</code> by default for values that will not change. Switch to <code>let</code> only when you need to reassign. Avoid <code>var</code> — it has confusing scoping behaviour."
    },
    {
      unit: "WEB104 · JavaScript Fundamentals",
      question: "What is the output of <code>typeof null</code> in JavaScript?",
      options: ["'null'", "'undefined'", "'object'", "'boolean'"],
      answer: 2,
      explanation: "<code>typeof null</code> returns <code>'object'</code> — this is a well-known JavaScript bug that has been kept for backward compatibility. <code>null</code> is not actually an object."
    },
    {
      unit: "WEB104 · JavaScript Fundamentals",
      question: "What is the difference between <code>===</code> and <code>==</code> in JavaScript?",
      options: [
        "They are identical — use either one",
        "<code>==</code> checks value AND type; <code>===</code> only checks value",
        "<code>===</code> checks value AND type; <code>==</code> only checks value and converts types",
        "<code>===</code> is used for numbers; <code>==</code> is used for strings"
      ],
      answer: 2,
      explanation: "<code>===</code> (strict equality) checks both value AND type: <code>'5' === 5</code> is <code>false</code>. <code>==</code> coerces types: <code>'5' == 5</code> is <code>true</code>. Always use <code>===</code>."
    },
    {
      unit: "WEB104 · JavaScript Fundamentals",
      question: "What is a template literal and how is it written?",
      options: [
        "A string in double quotes that auto-capitalises text",
        "A string wrapped in backticks that allows embedding variables with <code>${expression}</code>",
        "A reusable HTML snippet stored in a JavaScript variable",
        "A string concatenated with the <code>+</code> operator"
      ],
      answer: 1,
      explanation: "Template literals use backticks (<code>`</code>) and allow embedding expressions: <code>`Hello, ${name}!`</code> — much cleaner than <code>'Hello, ' + name + '!'</code>."
    },
    {
      unit: "WEB104 · JavaScript Fundamentals",
      question: "What is the difference between <code>undefined</code> and <code>null</code>?",
      options: [
        "They are identical and can be used interchangeably",
        "<code>undefined</code> means a variable was declared but not assigned; <code>null</code> is deliberately set to 'empty' by a programmer",
        "<code>null</code> means a variable was declared but not assigned; <code>undefined</code> is set intentionally",
        "<code>undefined</code> is a string type; <code>null</code> is a number type"
      ],
      answer: 1,
      explanation: "JavaScript sets <code>undefined</code> automatically on unassigned variables. <code>null</code> is intentional — a programmer explicitly sets a variable to 'no value'."
    },
    {
      unit: "WEB104 · JavaScript Fundamentals",
      question: "What does the ternary operator <code>age >= 18 ? 'Adult' : 'Minor'</code> do?",
      options: [
        "It creates a new variable called 'Adult'",
        "It is shorthand for an if/else — returns 'Adult' if the condition is true, 'Minor' if false",
        "It checks if age equals 18 or 'Minor'",
        "It throws an error if age is not defined"
      ],
      answer: 1,
      explanation: "The ternary <code>condition ? valueIfTrue : valueIfFalse</code> is a one-line if/else. Useful for simple yes/no assignments."
    },
    {
      unit: "WEB104 · JavaScript Fundamentals",
      question: "What is the key difference between a <code>while</code> loop and a <code>do...while</code> loop?",
      options: [
        "There is no difference — they produce identical results",
        "<code>while</code> checks the condition before each run; <code>do...while</code> always runs the code at least once before checking",
        "<code>do...while</code> checks the condition before running; <code>while</code> runs at least once",
        "<code>while</code> is used for arrays; <code>do...while</code> is used for objects"
      ],
      answer: 1,
      explanation: "<code>while</code> may never execute if the condition is false from the start. <code>do...while</code> always runs at least once — the check happens after the first execution."
    },
    {
      unit: "WEB104 · JavaScript Fundamentals",
      question: "When should you use <code>for...of</code> vs <code>for...in</code>?",
      options: [
        "<code>for...of</code> is for objects; <code>for...in</code> is for arrays",
        "<code>for...of</code> iterates over values in an array/string; <code>for...in</code> iterates over keys in an object",
        "They are interchangeable — both work on arrays and objects",
        "<code>for...of</code> is the old syntax; <code>for...in</code> is modern"
      ],
      answer: 1,
      explanation: "<code>for...of</code> gives you each value directly from an array or string. <code>for...in</code> gives you each key name from an object."
    },
    {
      unit: "WEB104 · JavaScript Fundamentals",
      question: "What is the difference between a function declaration and an arrow function?",
      options: [
        "Arrow functions cannot accept parameters",
        "Function declarations use the <code>function</code> keyword; arrow functions use <code>=&gt;</code> and are typically shorter",
        "Arrow functions create new scope; function declarations do not",
        "Function declarations are stored in memory; arrow functions are not"
      ],
      answer: 1,
      explanation: "Arrow functions (<code>const add = (a, b) => a + b</code>) are a shorter ES6 syntax. Both work similarly for most cases, though arrow functions differ in their handling of <code>this</code>."
    },
    {
      unit: "WEB104 · JavaScript Fundamentals",
      question: "What is a closure in JavaScript?",
      options: [
        "When a function is called without any arguments",
        "When an inner function remembers and accesses variables from its outer function's scope, even after the outer function has finished",
        "When a function closes the browser tab",
        "When a loop variable is reused across iterations"
      ],
      answer: 1,
      explanation: "A closure occurs when an inner function retains a reference to variables from its surrounding scope. The inner function 'closes over' those variables, keeping them alive in memory."
    },
    {
      unit: "WEB104 · JavaScript Fundamentals",
      question: "What is the difference between block scope (<code>let</code>/<code>const</code>) and function scope (<code>var</code>)?",
      options: [
        "<code>var</code> is only accessible inside the block it was declared in; <code>let</code>/<code>const</code> are accessible anywhere in the function",
        "<code>let</code>/<code>const</code> are only accessible inside the <code>{ }</code> they were declared in; <code>var</code> is accessible anywhere in the enclosing function",
        "Both <code>var</code> and <code>let</code> are globally scoped by default",
        "There is no difference in modern JavaScript"
      ],
      answer: 1,
      explanation: "<code>let</code> and <code>const</code> are block-scoped — they die when their <code>{ }</code> block ends. <code>var</code> leaks out of blocks and is scoped to the entire function, causing confusing bugs."
    },
  
    // ════════════════════════════════════════════
    // WEB 105 — ARRAYS, DOM, BOM & EVENTS
    // ════════════════════════════════════════════
  
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What does <code>arr.map(fn)</code> return?",
      options: [
        "The first element that passes the test",
        "A new array with each item transformed by the function",
        "The original array modified in place",
        "A boolean indicating whether all items pass the test"
      ],
      answer: 1,
      explanation: "<code>map()</code> always returns a NEW array — it does not modify the original. Each item is transformed by the provided function. The new and old arrays have the same length."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What is the difference between <code>arr.map()</code> and <code>arr.forEach()</code>?",
      options: [
        "<code>map()</code> modifies the original array; <code>forEach()</code> returns a new one",
        "<code>map()</code> returns a new transformed array; <code>forEach()</code> returns nothing",
        "They are identical — use either one",
        "<code>forEach()</code> can only be used with strings; <code>map()</code> with numbers"
      ],
      answer: 1,
      explanation: "<code>map()</code> returns a new array. <code>forEach()</code> returns <code>undefined</code> — use it when you only need side effects like logging, not when you need a new array."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What is a JavaScript <code>Set</code> and how does it differ from an Array?",
      options: [
        "A Set is a sorted array; an Array is unsorted",
        "A Set only stores unique values and uses <code>.size</code> not <code>.length</code>; Arrays allow duplicates",
        "A Set stores key-value pairs; an Array stores single values",
        "A Set is faster than an Array for all operations"
      ],
      answer: 1,
      explanation: "A <code>Set</code> automatically removes duplicates — adding the same value twice is ignored. It uses <code>.size</code>, not <code>.length</code>, and lacks index-based access."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What is the DOM?",
      options: [
        "A CSS framework for styling HTML",
        "The JavaScript engine inside the browser",
        "A live JavaScript representation of the HTML page that JavaScript can read and modify",
        "A server-side database of web documents"
      ],
      answer: 2,
      explanation: "The DOM (Document Object Model) is a tree of JavaScript objects the browser builds from your HTML. JavaScript interacts with the DOM — not the HTML file directly — to update the page."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What is the difference between <code>querySelector</code> and <code>querySelectorAll</code>?",
      options: [
        "<code>querySelector</code> uses CSS selectors; <code>querySelectorAll</code> uses XPath",
        "<code>querySelector</code> returns the first matching element; <code>querySelectorAll</code> returns all matches as a NodeList",
        "<code>querySelectorAll</code> is faster but less accurate",
        "Both return the same type — the difference is only in syntax"
      ],
      answer: 1,
      explanation: "<code>querySelector</code> returns one element (the first match). <code>querySelectorAll</code> returns a NodeList of all matches, which you can loop with <code>forEach</code>."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What is the difference between <code>textContent</code> and <code>innerHTML</code>?",
      options: [
        "They are identical — the name is different but the behaviour is the same",
        "<code>textContent</code> sets plain text safely; <code>innerHTML</code> parses and renders HTML tags",
        "<code>innerHTML</code> is read-only; <code>textContent</code> is writable",
        "<code>textContent</code> only works on <code>&lt;p&gt;</code> tags; <code>innerHTML</code> works on all elements"
      ],
      answer: 1,
      explanation: "<code>textContent</code> treats everything as literal text — safe. <code>innerHTML</code> parses HTML, so <code>'&lt;b&gt;hi&lt;/b&gt;'</code> renders bold. Never set <code>innerHTML</code> from user input — it creates XSS vulnerabilities."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "Why is <code>addEventListener</code> preferred over using <code>element.onclick = fn</code>?",
      options: [
        "addEventListener works on all browsers; onclick does not",
        "addEventListener allows multiple listeners on the same element; onclick overwrites the previous one",
        "onclick is deprecated and removed from modern browsers",
        "addEventListener is faster because it uses native events"
      ],
      answer: 1,
      explanation: "Assigning to <code>onclick</code> replaces any previous handler. <code>addEventListener</code> stacks multiple handlers — all run when the event fires."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What does <code>event.preventDefault()</code> do?",
      options: [
        "Removes the event listener from the element",
        "Stops the event from bubbling up to parent elements",
        "Prevents the browser's default behaviour — such as a form reloading on submit",
        "Prevents the event from firing more than once"
      ],
      answer: 2,
      explanation: "<code>event.preventDefault()</code> cancels the browser's default action. For forms, it stops the page reload. For links, it stops navigation. This is essential for custom form handling."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What is event bubbling?",
      options: [
        "Events fire only on the element they are attached to",
        "After an event fires on the target, it travels upward through each parent element",
        "Events fire on all child elements simultaneously",
        "An event fires repeatedly until stopped"
      ],
      answer: 1,
      explanation: "When you click an element, the event fires on that element first, then bubbles up through each ancestor. Use <code>event.stopPropagation()</code> to prevent this."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What is event delegation, and why is it useful?",
      options: [
        "Assigning one event listener per element for maximum control",
        "Attaching one listener to a parent that handles events from all its children — even ones added later",
        "Delegating event handling to the server instead of the browser",
        "Copying event listeners from one element to another"
      ],
      answer: 1,
      explanation: "Event delegation uses one parent listener and <code>event.target</code> to identify which child triggered it. It's efficient and automatically handles dynamically added elements."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What is the difference between <code>DOMContentLoaded</code> and <code>window load</code>?",
      options: [
        "<code>DOMContentLoaded</code> fires after images load; <code>load</code> fires when HTML is parsed",
        "<code>DOMContentLoaded</code> fires when HTML is parsed (faster); <code>load</code> fires after all images and assets are loaded",
        "They fire at exactly the same time",
        "<code>load</code> only works on Internet Explorer"
      ],
      answer: 1,
      explanation: "<code>DOMContentLoaded</code> fires as soon as the HTML is ready — use this for most JS setup. <code>window load</code> waits for images and all resources, which is much slower."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What does array destructuring <code>const [a, b, ...rest] = arr</code> do?",
      options: [
        "Creates a new array from <code>a</code>, <code>b</code>, and <code>rest</code>",
        "Assigns the first item to <code>a</code>, second to <code>b</code>, and collects remaining items into <code>rest</code>",
        "Spreads all items into three separate arrays",
        "Checks if the array has at least three elements"
      ],
      answer: 1,
      explanation: "Destructuring unpacks array values by position. The rest parameter <code>...rest</code> collects all remaining items into a new array."
    },
    {
      unit: "WEB105 · DOM, Arrays & Events",
      question: "What does <code>setInterval(fn, 1000)</code> do, and how do you stop it?",
      options: [
        "Runs <code>fn</code> once after 1 second; stops automatically",
        "Runs <code>fn</code> every 1 second indefinitely; stop it with <code>clearInterval(id)</code>",
        "Runs <code>fn</code> exactly 1000 times then stops",
        "Pauses execution for 1 second then continues"
      ],
      answer: 1,
      explanation: "<code>setInterval</code> repeats <code>fn</code> every 1000ms until stopped. Save its return value as an ID and call <code>clearInterval(id)</code> when you want it to stop."
    },
  
    // ════════════════════════════════════════════
    // WEB 106 — ASYNC JS, PROMISES, FETCH
    // ════════════════════════════════════════════
  
    {
      unit: "WEB106 · Async JS & Fetch",
      question: "What does 'asynchronous' mean in the context of JavaScript?",
      options: [
        "Code that runs in a separate browser window",
        "Code that starts a slow task and moves on without waiting, coming back when the task completes",
        "Code that always executes in random order",
        "Code that requires a server to execute"
      ],
      answer: 1,
      explanation: "Asynchronous code does not block — slow tasks (like fetching data) are handed off and JavaScript continues executing. When the task finishes, a callback or Promise handles the result."
    },
    {
      unit: "WEB106 · Async JS & Fetch",
      question: "What is 'callback hell' and why is it a problem?",
      options: [
        "When too many events fire at the same time",
        "Deeply nested callbacks required for sequential async tasks — making code hard to read, debug, and maintain",
        "When a callback function is called without any arguments",
        "When setInterval runs indefinitely"
      ],
      answer: 1,
      explanation: "Callback hell occurs when sequential async operations require nesting callbacks inside callbacks. The code indents deeper and deeper, becoming unreadable. Promises were invented to solve this."
    },
    {
      unit: "WEB106 · Async JS & Fetch",
      question: "What are the three possible states of a JavaScript Promise?",
      options: [
        "Loading, Loaded, Failed",
        "Pending, Fulfilled, Rejected",
        "Waiting, Success, Error",
        "Init, Running, Done"
      ],
      answer: 1,
      explanation: "A Promise starts as <strong>Pending</strong>. It settles into either <strong>Fulfilled</strong> (success — <code>resolve()</code> was called) or <strong>Rejected</strong> (failure — <code>reject()</code> was called). It never goes back."
    },
    {
      unit: "WEB106 · Async JS & Fetch",
      question: "In a Promise chain, what must you do inside <code>.then()</code> when calling the next async function?",
      options: [
        "Call <code>await</code> before the function",
        "Return the next Promise — otherwise the chain breaks and the next <code>.then()</code> gets <code>undefined</code>",
        "Wrap it in a <code>try/catch</code> block",
        "Call <code>resolve()</code> manually"
      ],
      answer: 1,
      explanation: "Inside <code>.then()</code>, always <code>return</code> the next Promise: <code>.then(data => return nextCall(data))</code>. Forgetting the <code>return</code> breaks the chain."
    },
    {
      unit: "WEB106 · Async JS & Fetch",
      question: "What is the advantage of <code>Promise.all()</code>?",
      options: [
        "It makes Promises run in strict sequence one after another",
        "It runs multiple Promises simultaneously and resolves when all succeed, saving total wait time",
        "It retries failed Promises automatically",
        "It converts callbacks into Promises"
      ],
      answer: 1,
      explanation: "<code>Promise.all([p1, p2, p3])</code> starts all three at once. Total time equals the slowest one — much faster than running them sequentially. If any rejects, the whole <code>Promise.all</code> rejects."
    },
    {
      unit: "WEB106 · Async JS & Fetch",
      question: "What does the <code>async</code> keyword do to a function?",
      options: [
        "Makes the function run on a separate thread",
        "Allows <code>await</code> to be used inside it and automatically makes it return a Promise",
        "Makes all code inside it run synchronously",
        "Prevents the function from being called more than once"
      ],
      answer: 1,
      explanation: "An <code>async</code> function always returns a Promise (wrapping the return value automatically) and unlocks the use of <code>await</code> inside it."
    },
    {
      unit: "WEB106 · Async JS & Fetch",
      question: "What does <code>await</code> do inside an <code>async</code> function?",
      options: [
        "Pauses the ENTIRE browser until the Promise resolves",
        "Pauses execution of the async function only until the Promise settles, then gives you the resolved value",
        "Converts a synchronous function into an async one",
        "Runs the Promise in a background worker thread"
      ],
      answer: 1,
      explanation: "<code>await</code> pauses only the enclosing <code>async</code> function — the rest of the page remains interactive. It then 'unwraps' the Promise and gives you the resolved value directly."
    },
    {
      unit: "WEB106 · Async JS & Fetch",
      question: "Why must you check <code>response.ok</code> after a <code>fetch()</code> call?",
      options: [
        "Because <code>fetch()</code> always returns a string that must be validated",
        "Because <code>fetch()</code> only rejects on network failure — HTTP errors like 404 still resolve, so you must manually check <code>response.ok</code>",
        "Because <code>response.ok</code> enables JSON parsing",
        "Because <code>fetch()</code> returns <code>undefined</code> without this check"
      ],
      answer: 1,
      explanation: "<code>fetch()</code> only throws if there is a network failure (no internet). A 404 or 500 response still resolves the Promise with a Response object where <code>response.ok</code> is <code>false</code>. Always check it."
    },
    {
      unit: "WEB106 · Async JS & Fetch",
      question: "Why are there two <code>await</code> calls needed when using <code>fetch()</code>?",
      options: [
        "Because the first <code>await</code> fetches HTML and the second fetches CSS",
        "Because <code>fetch()</code> first resolves to a Response object, then <code>response.json()</code> resolves to the actual data — each is a separate Promise",
        "Because network requests always require two round trips",
        "It is a best practice but only one is technically required"
      ],
      answer: 1,
      explanation: "First <code>await fetch(url)</code> gives a Response object. Then <code>await response.json()</code> reads the body and parses it as JSON. Two Promises, two <code>await</code> calls."
    },
    {
      unit: "WEB106 · Async JS & Fetch",
      question: "When making a POST request with <code>fetch()</code>, what must you include in the options object?",
      options: [
        "Only the URL and a body string",
        "<code>method: 'POST'</code>, a <code>Content-Type</code> header, and <code>body: JSON.stringify(data)</code>",
        "Only <code>method: 'POST'</code> — the rest is optional",
        "<code>type: 'POST'</code> and <code>data: JSON.stringify(data)</code>"
      ],
      answer: 1,
      explanation: "A POST needs: <code>method: 'POST'</code>, a <code>headers</code> object with <code>Content-Type: application/json</code>, and <code>body: JSON.stringify(data)</code> to convert your JS object to a JSON string."
    },
  
    // ════════════════════════════════════════════
    // WEB 107 — OOP IN JAVASCRIPT
    // ════════════════════════════════════════════
  
    {
      unit: "WEB107 · OOP in JavaScript",
      question: "In OOP, what is the difference between a class and an instance?",
      options: [
        "A class is the real object; an instance is the blueprint",
        "A class is the blueprint (written once); an instance is a real object created from it (created with <code>new</code>)",
        "They are identical — 'class' and 'instance' are synonyms",
        "A class stores data; an instance stores methods"
      ],
      answer: 1,
      explanation: "A class defines the shape — properties and methods. Instances are the actual objects built from that blueprint with <code>new ClassName()</code>. You write one class but can create many instances."
    },
    {
      unit: "WEB107 · OOP in JavaScript",
      question: "What is the <code>constructor</code> method in a class?",
      options: [
        "A method that destroys an instance when it is no longer needed",
        "A special method that runs automatically when a new instance is created, used to set initial properties",
        "A method that copies one instance to another",
        "A static method for validating class data"
      ],
      answer: 1,
      explanation: "The <code>constructor</code> runs automatically when you call <code>new ClassName()</code>. It receives the arguments you pass and uses <code>this</code> to assign initial properties to the new object."
    },
    {
      unit: "WEB107 · OOP in JavaScript",
      question: "Inside a class, what does <code>this</code> refer to?",
      options: [
        "The class itself",
        "The specific instance that called the method",
        "The parent class",
        "The global <code>window</code> object"
      ],
      answer: 1,
      explanation: "<code>this</code> always refers to the current instance. When <code>alice.greet()</code> runs, <code>this</code> is <code>alice</code>. When <code>bob.greet()</code> runs, <code>this</code> is <code>bob</code>."
    },
    {
      unit: "WEB107 · OOP in JavaScript",
      question: "What is a static method, and how is it different from a regular method?",
      options: [
        "A static method is called on an instance; a regular method is called on the class",
        "A static method is called on the class directly and has no access to instance data; a regular method is called on an instance",
        "Static methods are inherited; regular methods are not",
        "Static methods run faster because they are cached"
      ],
      answer: 1,
      explanation: "Static methods belong to the class, not instances: <code>Student.passMark()</code> not <code>alice.passMark()</code>. They cannot use <code>this</code> to access instance data — useful for utility functions."
    },
    {
      unit: "WEB107 · OOP in JavaScript",
      question: "What does the <code>extends</code> keyword do in a class definition?",
      options: [
        "It adds more methods to an existing instance",
        "It creates a child class that inherits all properties and methods from the parent class",
        "It copies the parent class into the child file",
        "It allows two classes to merge into one"
      ],
      answer: 1,
      explanation: "<code>class Dog extends Animal</code> makes <code>Dog</code> inherit everything from <code>Animal</code>. Dog instances can use Animal's methods without redefining them."
    },
    {
      unit: "WEB107 · OOP in JavaScript",
      question: "Why must you call <code>super()</code> first in a child class constructor?",
      options: [
        "To import the parent class file",
        "Because using <code>this</code> before <code>super()</code> throws an error — <code>super()</code> sets up the parent portion of the object first",
        "To override the parent's constructor",
        "To prevent the parent class from running its own code"
      ],
      answer: 1,
      explanation: "If a child class has a constructor, JavaScript requires <code>super()</code> to be called before <code>this</code> is used. It runs the parent's constructor, setting up the inherited properties."
    },
    {
      unit: "WEB107 · OOP in JavaScript",
      question: "What is method overriding in inheritance?",
      options: [
        "Deleting a method from the parent class",
        "A child class defining a method with the same name as the parent, replacing the parent's version",
        "Calling a method with the wrong number of arguments",
        "Making a method run twice for each instance"
      ],
      answer: 1,
      explanation: "When a child class defines a method with the same name as the parent, the child's version takes priority. The parent's version can still be accessed via <code>super.methodName()</code>."
    },
    {
      unit: "WEB107 · OOP in JavaScript",
      question: "What does <code>instanceof</code> check?",
      options: [
        "Whether a variable is of a specific primitive type",
        "Whether an object was created from a specific class or any of its parent classes",
        "Whether a class has been instantiated at all",
        "Whether two instances are identical"
      ],
      answer: 1,
      explanation: "<code>rex instanceof Dog</code> is <code>true</code>. Because <code>Dog extends Animal</code>, <code>rex instanceof Animal</code> is also <code>true</code>. A child instance is also an instance of all parent classes."
    },
    {
      unit: "WEB107 · OOP in JavaScript",
      question: "What is a getter in a JavaScript class?",
      options: [
        "A method that sets a property value with validation",
        "A method defined with <code>get</code> that is accessed like a property (no parentheses) and can compute a value on demand",
        "A static method that returns the class name",
        "A constructor parameter with a default value"
      ],
      answer: 1,
      explanation: "Getters use the <code>get</code> keyword: <code>get letterGrade() { ... }</code>. You access them like properties — <code>alice.letterGrade</code> not <code>alice.letterGrade()</code>. They can compute values dynamically."
    },
    {
      unit: "WEB107 · OOP in JavaScript",
      question: "In the school system example, why is <code>average</code> implemented as a getter rather than a regular property?",
      options: [
        "Because getters are faster than regular properties",
        "So the average is always calculated fresh from current grades — instead of being stored and potentially going stale",
        "Because regular properties cannot hold numeric values",
        "Because getters are required when using <code>extends</code>"
      ],
      answer: 1,
      explanation: "If <code>average</code> were stored as a property, it would go out of date when grades are added. As a getter, it recalculates from <code>this._grades</code> each time it is accessed — always accurate."
    }
  
  ];