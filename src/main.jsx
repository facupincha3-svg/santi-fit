import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://956874677171aa2ecf2e2e1e3f07f229@o4511660214583296.ingest.us.sentry.io/4511660220284928",
  environment: "production",
});

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
