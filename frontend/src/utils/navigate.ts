import { useNavigate } from "react-router";

export const navigator = () => {
  const navigate = useNavigate();
  return { navigate };
};
