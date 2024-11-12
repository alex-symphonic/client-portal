// import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'

// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

// export const onRequest = clerkMiddleware((auth, context) => {
//   const { redirectToSignIn, userId } = auth()

//   if (!isPublicRoute(context.request) && !userId) {
//     return redirectToSignIn()
//   }
// })



// import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'

// const isProtectedRoute = createRouteMatcher(['/tasks(.*)'])

// export const onRequest = clerkMiddleware((auth, context) => {
//   const { redirectToSignIn, userId } = auth()

//   if (!userId && isProtectedRoute(context.request)) {
//     // Add custom logic to run before redirecting

//     return redirectToSignIn()
//   }
// })