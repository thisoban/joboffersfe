// import { signIn } from 'next-auth/react';

// export default function Login() {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const username = e.target.username.value;
//     const password = e.target.password.value;

//     // Use the signIn function to authenticate with NextAuth.js
//     const result = await signIn('credentials', { redirect: false, username, password });

//     if (result.error) {
//       console.error('Authentication failed:', result.error);
//     } else {
//       // Redirect to the home page or any other page upon successful login
//       window.location.href = '/';
//     }
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" name="username" required />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" name="password" required />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
