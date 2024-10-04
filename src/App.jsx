import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Notification from "./components/Notification";
import Register from "./components/Register";
import { createContext, useEffect, useState } from "react";
import Sidebar2 from "./components/Sidebar2";

export const AppContext = createContext();

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [wrapped, setWrapped] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({
    names: "",
    username: "",
    email: "",
    location: "",
    gender: "",
  });
  const [image, setImage] = useState(null);
  const [isLogged, setIsLogged] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserData(storedUser);
    }
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImagePreview(savedImage);
    }
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    setUserData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const uploadImage = () => {
    console.log(userData.img);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert the file to Base64
      reader.onloadend = () => {
        setImage(reader.result); // Set the image to Base64 string
      };
    }
  };

  const saveImageToLocalStorage = () => {
    if (image) {
      localStorage.setItem("uploadedImage", image);
      userData.img = image;
      alert("Image saved to localStorage!");
    }
  };
  const handleSubmit = () => {
    if (isLogin) {
      // Check if user exists in local storage
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        (storedUser.email === userData.email ||
          storedUser.username === userData.email) &&
        storedUser.password === userData.password
      ) {
        alert("Login successful!");
        setIsLogged(true);
        setUserData(storedUser);
        navigate("/");
      } else {
        alert("Invalid username or password.");
      }
    } else {
      // Save user to local storage
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Signup successful! You can now log in.");
      console.log(userData);
      saveImageToLocalStorage();
      setIsLogged(true);
    }
  };
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLogged(true);
    }
  }, []);
  return (
    <>
      <Navbar
        username={userData.username}
        isLogged={isLogged}
        imagePreview={imagePreview}
      />
      <Sidebar wrapped={wrapped} setWrapped={setWrapped} />
      <div
        className={`relative max-w-full pt-16 bg-zinc-200 ${
          wrapped ? "sm:pl-[6rem] pl-[4rem]" : "max-sm:pl-[4rem] pl-[15rem]"
        } lg:pr-[12rem]`}
      >
        <AppContext.Provider
          value={{
            handleAddUser,
            handleSubmit,
            uploadImage,
            userData,
            wrapped,
            setWrapped,
            handleImageChange,
            isLogged,
            setIsLogin,
          }}
        >
          <Routes>
            <Route
              exact
              path="/"
              element={
                isLogged ? (
                  <Hero />
                ) : (
                  <Navigate replace to={"/register/sign_up"} />
                )
              }
            />
            <Route path="/profile/notification" element={<Notification />} />
            <Route path="/register/:logType" element={<Register />} />
          </Routes>
        </AppContext.Provider>
      </div>
      {location === "/" && (
        <Sidebar2 wrapped={wrapped} setWrapped={setWrapped} />
      )}
    </>
  );
}

export default App;
