# Multi Step Form

This project is a multi-step Employee Onboarding Form built using:

## Tech Stack

- Next.js (App Router)
- React Hook Form
- Zod for validation
- TailwindCSS for styling
## Features

- Multi-step form (Personal Details, Address Details, Account Setup)
- Zod validation for each field
- Error messages for invalid inputs
- Local state management with useState
- Dark mode toggle with Sun/Moon icon (lucide-react)
- Responsive design for mobile users

## Screenshots

### Light Mode

![Light Mode Screenshot](./public/screenshot-light.png)


## Installation

```bash
git clone https://github.com/your-username/employee-onboarding-form.git
cd employee-onboarding-form
npm install
```

## Running the Project

```bash
npm run dev
```

Open your browser at:

```
http://localhost:3000
```

## Folder Structure

```
├── components
├── features/employee-onboarding
├── schema
├── public
│   ├── screenshot-light.png
│   ├── screenshot-dark.png
├── pages
└── styles
```

## Notes

- TailwindCSS is configured with Dark Mode using class strategy.
- No usage of `document` or `window` for dark mode toggle.

## License

MIT

