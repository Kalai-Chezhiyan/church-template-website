# Firebase Integration Plan & Execution

## Context
The goal is to transform the church template website from a static site with hardcoded data into a dynamic platform powered by Firebase. This allows church information (events, sermons, programs, leadership) to be managed in real-time, and introduces lead capture for the contact page.

**Administrative Note**: Administrative data entry will be handled via scripts rather than a UI-based admin dashboard, eliminating the need for login flows and authentication guards.

## 1. Environment & Configuration
- **Secrets Management**: API keys are stored in a `.env` file using Vite's `VITE_` prefix.
- **Configuration**: `src/firebaseConfig.js` initializes the Firebase app and exports `db`, `auth`, and `storage`.

## 2. Data Layer (Service Layer)
A centralized service layer exists at `src/services/firebase.js` to abstract Firestore operations.
- **Core Functions**: `getCollection`, `getDocument`, `addDocument`, `updateDocument`, `deleteDocument`, and `getCollectionQuery`.
- **Pattern**: Components should call these service methods rather than interacting with the Firebase SDK directly.

## 3. Firestore Data Structure
All data is stored in Firestore collections. Below is the defined schema for each:

### `general_settings` (Collection)
*Single document: `info`*
- `address`: string
- `generalEmail`: string
- `generalPhone`: string
- `serviceHours`: array of `{ day: string, time: string }`
- `faq`: array of `{ question: string, answer: string }`

### `leadership` (Collection)
- `name`: string
- `role`: string
- `phone`: string
- `email`: string
- `image`: string (URL)
- `bio`: string
- `order`: number (for sorting)

### `programs` (Collection)
- `title`: string
- `description`: string
- `type`: string ('Program', 'Event', 'Sermon')
- `category`: string (e.g., 'Youth', 'Adult', 'Outreach')
- `coordinator`: string (optional)
- `schedule`: string (for Programs)
- `date`: timestamp (for Events/Sermons)
- `location`: string (for Events)
- `speaker`: string (for Sermons)
- `series`: string (for Sermons)
- `audioUrl`: string (for Sermons)
- `videoUrl`: string (for Sermons)
- `transcript`: string (for Sermons)
- `image`: string (URL) (for Events)
- `link`: string (Registration link for Events)
- `tags`: array of strings
- `order`: number

### `playlists` (Collection)
- `title`: string
- `description`: string
- `tracks`: array of `{ title: string, url: string, duration: string }`

### `testimonials` (Collection)
- `author`: string
- `content`: string
- `role`: string (e.g., 'Member', 'Visitor')
- `date`: timestamp

### `contact_requests` (Collection)
- `name`: string
- `email`: string
- `subject`: string
- `message`: string
- `createdAt`: timestamp
- `status`: string ('new', 'contacted', 'resolved')

## 4. Rendering Logic
To render the saved data from Firebase, the following pattern will be used:

1. **Data Fetching**: Components will use a custom hook (e.g., `useFirestoreData`) or a `useEffect` block that calls `firebaseService.getCollection('collectionName')` on mount.
2. **Loading State**: A `loading` boolean will be used to show a skeleton screen or spinner while the async request is pending.
3. **Fallback Data**: To prevent the UI from breaking if a collection is empty, the existing hardcoded constants will be kept as `fallbackData`.
4. **Mapping**: Once the data array is returned from the service, the component will `.map()` through the results to render the UI components (e.g., mapping `sermons` to `SermonCard` components).
5. **Real-time Updates (Optional)**: For critical data, `onSnapshot` from Firebase can be used to update the UI instantly when a script changes the data.

## 5. Verification Plan
1. **Data Flow**: Update a document in the Firebase Console $\rightarrow$ Refresh the website $\rightarrow$ Verify the change is visible.
2. **Lead Capture**: Submit the contact form $\rightarrow$ Verify a new document appears in `contact_requests`.
3. **Script Integration**: Run a data-entry script $\rightarrow$ Verify the new entries are rendered correctly in the corresponding section.
