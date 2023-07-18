import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import ErrorPage from "./ErrorPage";
import "./index.css";
import Login, { action as loginAction } from "./routes/Auth/Login";
import Signup, { action as signupAction } from "./routes/Auth/Signup";
import AddJob, { action as addJobAction } from "./routes/jobs/AddJob";
import EditJob, {
  action as editJobAction,
  loader as editJobLoader,
} from "./routes/jobs/editJob";
import Job, {
  loader as jobDetailLoader,
  action as notesAction,
} from "./routes/jobs/job";
import JobList, { loader as jobLoader } from "./routes/jobs/JobList";
import { action as destroyNoteAction } from "./routes/notes/destroyNote";
import { action as updateNoteAction } from "./routes/notes/updateNote";
import ProtectedRoute from "./routes/ProtectedRoute";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <JobList />
          </ProtectedRoute>
        ),
        loader: jobLoader,
      },
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/signup",
        element: <Signup />,
        action: signupAction,
      },
      {
        path: "jobs/new",
        element: <AddJob />,
        action: addJobAction,
      },
      {
        path: "jobs/byStatus/:status",
        element: <JobList />,
        loader: jobLoader,
      },
      {
        path: "jobs/:jobId",
        element: <Job />,
        errorElement: <ErrorPage />,
        loader: jobDetailLoader,
        action: notesAction,
      },
      {
        path: "jobs/:jobId/edit",
        element: <EditJob />,
        errorElement: <ErrorPage />,
        loader: editJobLoader,
        action: editJobAction,
      },
      {
        path: "notes/:noteId/destroy",
        action: destroyNoteAction,
      },
      {
        path: "notes/:noteId/edit",
        action: updateNoteAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
