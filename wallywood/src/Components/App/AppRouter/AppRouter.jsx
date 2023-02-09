import { Routes, Route } from "react-router-dom";
import Home from "../../../Pages/Home/Home";
import NotFound from "../../../Pages/Notfound/Notfound";
import Login from "../../../Pages/Login/Login";
import {
  PosterDetails,
  PosterList,
  Posters,
} from "../../../Pages/Posters/Posters.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/posters" element={<Posters />}>
        <Route path=":slug" element={<PosterList />} />
        <Route path=":slug/:poster" element={<PosterDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
