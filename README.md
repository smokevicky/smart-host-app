# Smart Host - Room Occupancy Optimization Tool

A modern, high-performance React application designed to optimize hotel room occupancy and maximize revenue. This tool intelligently allocates Premium and Economy guests relative to room availability, implementing scarcity-based upgrade logic to ensure the highest possible yield.

![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![Tech Stack](https://img.shields.io/badge/stack-React%20%7C%20Redux%20%7C%20MUI-blue)

## 🚀 Live Demo

- **Main Application**: [https://smokevicky.github.io/smart-host-app/](https://smokevicky.github.io/smart-host-app/)
- **Storybook Documentation**: [https://smokevicky.github.io/smart-host-app/storybook/](https://smokevicky.github.io/smart-host-app/storybook/)

## ✨ Features

- **Revenue Optimization Algorithm**: Automatically sorts guests and allocates rooms to maximize total payout.
- **Smart Upgrades**: Upgrades high-paying Economy guests to Premium rooms only when Economy supply is exhausted.
- **Real-time Dashboard**: Instant feedback on occupancy utilization and revenue generation.
- **Input Validation**: Robust validation ensures data integrity for room counts.
- **Atomic Design**: Component architecture structured into Atoms, Molecules, and Templates for maximum reusability.

## 🛠 Tech Stack

- **Core**: React 19, TypeScript, Vite
- **State Management**: Redux Toolkit
- **UI Framework**: Material UI (MUI v5)
- **Testing**: Jest, React Testing Library
- **Documentation**: Storybook v8

## 📦 Installation

Ensure you have Node.js installed. Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd smart-host-app
npm install
```

## 💻 Usage Commands

### Run Development Server
Starts the application locally on port 4020.
```bash
npm start
# OR
npm run dev
```
Access the app at: `http://localhost:4020`

### Run Storybook
Launches the interactive component documentation using Storybook 8.
```bash
npm run storybook
```
Access Storybook at: `http://localhost:6006`

### Run Tests
Executes the test suite with Jest.
```bash
npm test
```

## 📂 Project Structure

This project follows the **Atomic Design** methodology:

```
src/
├── app/
│   ├── customHooks/       # Logic encapsulation (useRoomState)
│   ├── dataUtilities/     # Core Business Logic (calculateOccupancy)
│   ├── pages/             # Main Views (OccupancyDashboard)
│   ├── slices/            # Redux Slices (roomsSlice)
│   └── store.ts           # Redux Store Configuration
├── story/
│   ├── atoms/             # Basic building blocks (NumberInput, StatisticItem)
│   ├── molecules/         # Compound components (RevenueRow, RoomInput)
│   └── templates/         # Page layouts (DashboardLayout)
└── assignment-input/      # Configuration data (guestData.ts)
```

## 🧪 Testing Strategy

Logic is verified against critical test cases:
1.  **Balanced**: Equal rooms and demand.
2.  **Surplus**: More rooms than guests.
3.  **Scarcity**: More guests than rooms (Triggers upgrades).
4.  **Empty State**: proper handling of zero allocation.

Run `npm test` to view the full coverage report.