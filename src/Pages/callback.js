// // pages/api/auth/callback.js
// import { NextApiResponse, NextApiRequest } from 'next';
// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       name: 'Credentials',
//       credentials: {
//         username: { label: 'Username', type: 'text' },
//         password: {  label: 'Password', type: 'password' },
//       },
//       async authorize(credentials, req) {
//         const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
//         if (user) {
//           return Promise.resolve(user);
//         } else {
//           return Promise.resolve(null);
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt(token, user) {
//       // Add JWT token logic here (e.g., store user data in the token)
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session(session, token) {
//       // Modify the session object here (e.g., add user data to the session)
//       session.user = token;
//       return session;
//     },
//   },
// });
