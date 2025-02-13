React Native Senior Developer Assignment
Objective
Build a React Native app that dynamically renders UI components based on a JSON configuration.
📌 Scenario: Dynamic Form & List App
You are developing a low-code mobile app builder that allows users to define UI screens via JSON. Your task is to build a React Native app that:

- Reads a JSON-based UI definition.
- Dynamically renders components (e.g., Text, TextInput, Button, FlatList).
- Supports dynamic navigation based on the JSON configuration.
  📱 Example App Overview
  The app consists of two screens:
  1️⃣ Form Screen → Displays a user registration form dynamically.
  2️⃣ List Screen → Displays a list of users dynamically.

🛠 Requirements
1️⃣ Implement Dynamic UI Rendering

- Parse JSON and render components accordingly.
- Support nested components.
  2️⃣ Navigation Should Be Dynamic
- JSON should define which page is the home page.
- Navigation should be based on page names from JSON.
- Buttons should navigate using 'navigateTo' instead of hardcoding screen names.
  🔄 Functional Requirements
- Parse JSON and dynamically render UI components.
- Implement navigation dynamically using 'home' and 'navigateTo'.
- Manage state efficiently for form inputs.
- Handle actions like:
  - 'onPress': 'handleSubmit' → Log form data.
  - 'navigateTo': 'ListScreen' → Navigate to List Screen.
  - 'showUserDetails' → Show an alert with user details.
    🎯 Evaluation Criteria
    ✅ Correct JSON Parsing & UI Rendering
    ✅ Proper Dynamic Navigation Handling
    ✅ Performance Optimizations (Avoid Unnecessary Re-renders)
    ✅ Clean & Maintainable Code
    ✅ State Management & Event Handling
    📦 Deliverables
- A GitHub repository (or ZIP file) with:
  - React Native project.
    📅 Expected Completion Time: 3 Hours
