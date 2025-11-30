
import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/HomeLayout";
import HomePage from "./components/Home/HomePage";
import GPACalculator from "./components/GPACalculator";
import SubjectList from "./components/PastPapers/SubjectList";
import SubjectDetail from "./components/PastPapers/SubjectDetail";
import JournalList from "./components/Journals/JournalList";
import JournalDetail from "./components/Journals/JournalDetail";
// import JournalCreatePage from "./components/Journals/JournalCreate";

// import AboutMe from "./components/AboutMe";
// import ContactPage from "./components/Contact";
import HomeLayout from "./components/HomeLayout";
import MainLayout from "./components/MainLayout";

// import ExtraTestLayout from "./components/ExtraTestLayout";



const router=createBrowserRouter([
  {
    path:"/",element:<HomeLayout/>,
    children:[
      {index:true,element: <HomePage />}
    ],
  },
  {
    path:"/",element:<MainLayout/>,
    children:[
      { path: "gpa-calculator", element: <GPACalculator /> },
      { path: "past-papers", element: <SubjectList shouldFetchSubject={true} /> },
      { path: "past-papers/:slug", element: <SubjectDetail /> },
      { path: "journals", element: <JournalList shouldFetchJournals={true} /> },
      { path: "journals/:slug", element: <JournalDetail /> },
      // { path: "journals/create", element: <JournalCreatePage /> },
      // { path: "login", element: <LoginPage /> },
      // { path: "signup", element: <SignupPage /> },
      // { path: "about", element: <AboutMe /> },
      // { path: "contact", element: <ContactPage /> },
    ],
  },

  // CAN USE THIS TYPE OF EXTRA LAYOUT IF WANT EXTRA LAYOUT LIKE NO NAVBAR ON SOME PAGES
  // {
  //   path:"/",element:<ExtraTestLayout/>,
  //   children:[
  //     // { path: "gpa-calculator", element: <GpaCalculatorPage /> },
  //     { path: "past-papers", element: <PastPapersPage /> },
  //     { path: "past-papers/:subjectIdSlug", element: <PastPaperDetailPage /> },
  //     { path: "journals", element: <JournalsPage /> },
  //     { path: "login", element: <LoginPage /> },
  //     { path: "signup", element: <SignupPage /> },
  //     { path: "about", element: <AboutPage /> },
  //     { path: "contact", element: <ContactPage /> },
  //   ],
  // },



]);

export default router;




// First route (HomeLayout) has only an index route, meaning it is used only when URL is exactly /
// Second route (MainLayout) has child paths like /about, /contact, /journals etc.

// It checks the most specific match first.
// If URL is /, it uses HomeLayout + HomePage.
// If URL is /about, it looks for a child about under MainLayout.


//   Same parent path (/) is fine because children define the actual routes rendered.
// Index route (index: true) is for the default route of that layout.
