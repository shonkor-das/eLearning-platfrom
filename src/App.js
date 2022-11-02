import { Navigate, Route, Routes } from "react-router-dom";
import RequireAuth from "./component/Auth/RequireAuth";
import UserAuth from "./component/Auth/UserAuth";
import NavBar from "./component/shared/navBar/NavBar";
import BlogPage from "./page/blogPage/BlogPage";
import CourseDetailPage from "./page/CourseDetailPage";
import CoursePage from "./page/CoursePage";
import FaqPage from "./page/FaqPage";
import HomePage from "./page/HomePage";
import InstactorPages from "./page/InstactorPages";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MentorPage from "./page/MentorPage";
import Footer from "./component/footer/Footer";
import Profile from "./component/profile/Profile";


function App() {

  return (
    <div className="">
      
      <NavBar></NavBar>
      
      <Routes>
        <Route path="/" element={<Navigate to='/home'></Navigate>}/>
        <Route path="/home" element={<HomePage></HomePage>}/>

        <Route path="/course" element={<CoursePage></CoursePage>}/>
        <Route path="/course/:id" element={ <RequireAuth> <CourseDetailPage/></RequireAuth>  }/>     
        
        <Route path="/faq" element={<FaqPage></FaqPage>}></Route>
        <Route path="/instructor" element={<InstactorPages></InstactorPages>}></Route>
        <Route path="/blogs" element={<BlogPage></BlogPage>}></Route>
        <Route path="/about" element={<><MentorPage></MentorPage> <Footer></Footer></>}></Route>
        <Route path="/profile" element={<><Profile></Profile> <Footer></Footer></>}></Route>
        <Route path="/sign-in" element={<UserAuth><SignInPage></SignInPage></UserAuth>}></Route>
        <Route path="/sign-up" element={<UserAuth><SignUpPage></SignUpPage></UserAuth>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
