# Migration to Route-Based Navigation

## Context
The application currently uses state-driven conditional rendering to toggle between screens (Home, Contact, History, and Program Details). This approach prevents deep-linking, disables browser back/forward navigation for these screens, and couples screen visibility to `App.jsx` state. This migration will implement `react-router-dom` to treat screens as distinct routes, improving usability and architectural scalability.

## Implementation Plan

### 1. Setup
- Install `react-router-dom` using `pnpm add react-router-dom`.
- Wrap the `<App />` component in `<BrowserRouter>` within `src/main.jsx`.

### 2. Routing Configuration (`src/App.jsx`)
- Remove state variables: `isContactOpen`, `isHistoryOpen`, and `selectedProgram`.
- Replace conditional rendering blocks with `<Routes>` and `<Route>` components.
- **Route Map:**
    - `/` $\rightarrow$ `Home`
    - `/contact` $\rightarrow$ `Contact`
    - `/history` $\rightarrow$ `History`
    - `/program/:id` $\rightarrow$ `ProgramDetail`

### 3. Navigation Logic Updates
Replace state setters with `useNavigate` from `react-router-dom`:

- **`src/components/header/header.jsx`**: 
    - Replace `setContactOpen(true)` with `navigate('/contact')`.
- **`src/components/about/AboutUs.jsx`**: 
    - Replace `setHistoryOpen(true)` with `navigate('/history')`.
- **`src/components/cards/cards.jsx`**: 
    - Update `ProgramCard`'s click handler to navigate to `/program/${program.title}`.
- **`src/screens/home/home.jsx`**: 
    - Remove routing props (`setContactOpen`, etc.) and update child component calls.

### 4. Data Retrieval in `ProgramDetail` (`src/screens/program/ProgramDetail.jsx`)
- Remove the `program` prop.
- Use `useParams()` to get the `:id` from the URL.
- Import the `programs` array from `src/screens/home/constants.jsx` and find the program matching the ID.
- Update `onClose` to `navigate('/')` and `openContact` to `navigate('/contact')`.

### 5. Preserving Smooth Scrolling
- Internal links on the Home page using `scrollIntoView` will continue to function.
- For cross-page links to home sections, use hashes (e.g., `/#about`).
- Implement a `useEffect` in `Home.jsx` to handle scrolling to the URL hash on initial mount.

## Critical Files
- `src/main.jsx`
- `src/App.jsx`
- `src/screens/home/home.jsx`
- `src/screens/program/ProgramDetail.jsx`
- `src/components/header/header.jsx`
- `src/components/about/AboutUs.jsx`
- `src/components/cards/cards.jsx`

## Verification Plan
1. **Installation**: Verify `react-router-dom` is in `package.json`.
2. **Direct Access**: Navigate directly to `/contact`, `/history`, and `/program/[title]` via the browser address bar.
3. **Navigation Flow**:
    - Click "Contact Us" in Header $\rightarrow$ should go to `/contact`.
    - Click "Our History" in AboutUs $\rightarrow$ should go to `/history`.
    - Click "View More" on a Program Card $\rightarrow$ should go to the specific program route.
    - Click "Close" or "Home" in `ProgramDetail` $\rightarrow$ should return to `/`.
4. **Browser History**: Use the browser's Back button to navigate between the Home page and a screen.
5. **Smooth Scroll**: Verify that anchor links on the Home page still scroll smoothly to their sections.
