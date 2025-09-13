import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@/config'
import { MovieProvider } from '@/context'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <MovieProvider>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </MovieProvider>
    </QueryClientProvider>
  </BrowserRouter>
)
