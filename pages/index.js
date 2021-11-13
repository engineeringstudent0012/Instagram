// To Run This Project Type npm run dev
//npm install @heroicons/react
//npm install @tailwindcss/forms & put  plugins: require('@tailwindcss/forms') in tailwind.config.js See https://github.com/tailwindlabs/tailwindcss-forms,
// npm i faker to install faker.js
// npm install --save-dev tailwind-scrollbar for tailwind scrollbar
// npm install tailwind-scrollbar-hide to hide scrollbar
//npm install next-auth@beta for next-auth authentication
//npm i firebase to install firebase and continue at firebase.google.com
//npm install recoil to install recoil which is a state management library
//npm install @headlessui/react  to install headless component https://www.npmjs.com/package/@headlessui/react
//npm i react moment

//left at 4:33:25

import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0 </title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      {/*Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
     <Modal/>

    </div>
  );
}
