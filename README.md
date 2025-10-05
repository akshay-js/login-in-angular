# Angular Login/Signup & Authentication Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/33458e69-a4a0-4725-8507-3b578ac92b71/deploy-status)](https://app.netlify.com/projects/angular-login-demo/deploys)

Check the live demo: [angular-login-demo.netlify.app](https://angular-login-demo.netlify.app/)

This repo is a minimal Angular app demonstrating login, signup, route protection, and HTTP interceptor usage against the public `reqres.in` API.

### What you’ll learn
- **Login & Signup** using `reqres.in` fake API
- **Auth state** tracking with `BehaviorSubject`
- **Route guard** to protect authenticated routes
- **HTTP interceptor** to attach headers and control caching
- **Cookie storage** demo for a simple session token

## Stack
- Angular 18 (CLI 18)
- RxJS 7
- Angular Material/CDK
- `ngx-cookie-service`

## Prerequisites
- Node.js 18+ recommended
- npm 9+

## Quickstart
```bash
git clone https://github.com/akshay-js/login-in-angular.git
cd login-in-angular
npm install
npm start
```
Then open `http://localhost:4200/`.

## Available scripts
- `npm start`: run dev server (`ng serve`)
- `npm run build`: production build to `dist/`
- `npm test`: unit tests (Karma)
- `npm run e2e`: end-to-end (Protractor)

## Authentication flow (how it works)
- The app uses `reqres.in` endpoints:
  - `POST https://reqres.in/api/login` for login
  - `POST https://reqres.in/api/register` for signup
- On successful login/register, `reqres.in` returns a JSON `{ token: string }`.
- `ApiService` updates an internal `BehaviorSubject<boolean>` to reflect login status and demonstrates setting a cookie named `currentUser`.
- `ApiInterceptor` attaches headers to every request:
  - `x-auth` from the `currentUser` cookie (if present)
  - `x-api-key: reqres-free-v1` for `reqres.in` calls
  - cache-control headers to avoid stale responses
- `AuthGuard` uses the auth state to allow/deny navigation to protected routes (e.g., dashboard/profile).

Notes:
- This demo intentionally keeps auth simple and client-side only. Do not use as-is for production.
- The `currentUser` cookie is a simple demo placeholder; in real apps, use secure, httpOnly cookies or other robust storage with a proper backend.

## App structure (high level)
- `src/app/login`: login form and flow
- `src/app/signup`: signup form and flow
- `src/app/profile/dashboard`: an example protected area
- `src/app/auth/api.service.ts`: API calls, auth state, logout
- `src/app/auth/api.interceptor.ts`: request headers and cache control
- `src/app/auth/auth.guard.ts`: route protection

## Using the demo
1. Start the dev server.
2. Go to Login and use any valid `reqres.in` credentials. Example (from their docs):
   - Login: email `eve.holt@reqres.in`, password `cityslicka`
   - Signup: email `eve.holt@reqres.in`, password `pistol`
3. After login, navigate to the dashboard to see a protected view.
4. Use the header to logout.

## Deployment (Netlify)
This repo includes a `_redirects` file for SPA routing (in `src/_redirects`, copied to `dist/` on build).

Steps:
1. `npm run build`
2. Deploy the `dist/login-in-angular` folder to Netlify
3. Ensure the `_redirects` file is present at the site root with this content:
```
/*    /index.html   200
```

## Troubleshooting
- If you see 404s on refresh in production hosting, confirm the `_redirects` file is present.
- If login seems not to persist after a full page reload, remember this is a minimal demo using a simple cookie; real apps require a proper session/JWT strategy with refresh/renewal.
- Make sure you are using supported Node and npm versions.

## Contributing
Issues and PRs are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
