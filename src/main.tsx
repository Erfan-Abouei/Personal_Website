import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.tsx'
import LoadingScreen from './components/layout/LoadingScreen.tsx'
import { Bounce, ToastContainer } from 'react-toastify'
import AnimatedCursor from 'react-animated-cursor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <App />
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="255, 229, 176"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={7}
        showSystemCursor={false}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl
        limit={10}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} />
    </Suspense>
  </StrictMode >,
)
