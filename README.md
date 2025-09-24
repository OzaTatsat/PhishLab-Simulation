# PhishLab Simulator (Safe Demo)

PhishLab is a React-based phishing awareness training simulator. It features realistic phishing login pages mimicking popular platforms to educate users about phishing attacks in a controlled environment.

## Features

- Multiple phishing simulation platforms:
  - ZenithAuth (Corporate login impersonation)
  - QuantumFlow (Developer platform impersonation)
  - StellarConnect (Professional network impersonation)
  - Gmail (Google account phishing simulation)
- Realistic UI designs closely mimicking brand identities
- Two-step Gmail authentication flow
- Backend server (Flask + SQLite) collecting simulated credentials with metadata
- Dashboard interface to monitor captured data in real-time
- CSV export of logged phishing attempts
- Educational error messaging mimicking real-world phishing failures

## Technology Stack

- Frontend: React, Tailwind CSS
- Backend: Flask (Python), SQLite database
- Localhost communication for development and safe testing

## Setup

### Backend

1. Navigate to the backend folder (if separated).
2. Create and activate a Python virtual environment.
3. Install dependencies:
4. Initialize the database:
5. Run the Flask server:

### Frontend

1. Navigate to the frontend folder.
2. Install dependencies:
3. Start React development server:

## Usage

- Open the React app in your browser.
- Use the navigation buttons to switch between different phishing simulations.
- Submit credentials in the fake login forms.
- Navigate to the Dashboard to review logged attempts.
- Export logged data as CSV for analysis and training reports.

## Security & Disclaimer

- **This tool is for educational purposes only.**
- It simulates phishing attacks to aid cybersecurity awareness and training.
- The application must **never be deployed** in production or on public-facing servers.
- All data is stored locally in SQLite and should be handled responsibly.
- Users must be clearly informed that this is a safe training environment.

## Contributing

Contributions are welcome! Feel free to fork the project and submit pull requests for adding new phishing simulations or improving existing components.

## License

MIT License

---

**PhishLab Simulator** is a powerful training tool designed to help organizations and individuals recognize and resist phishing attacks by demonstrating how convincing phishing pages can be.

