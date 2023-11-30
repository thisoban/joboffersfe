// // pages/api/auth/[...nextauth].js
// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       // The name to display on the sign-in form (e.g., 'Sign in with...')
//       name: 'Credentials',
//       credentials: {
//         username: { label: 'Username', type: 'text' },
//         password: {  label: 'Password', type: 'password' },
//       },
//       async authorize(credentials, req) {
//         // Add custom logic to validate credentials and return a user object
//         const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
//         if (user) {
//           return Promise.resolve(user);
//         } else {
//           return Promise.resolve(null);
//         }
//       },
//     }),
//     // Add other providers as needed (e.g., Google, GitHub, etc.)
//   ],
//   session: {
//     jwt: true,
//   },
// });
