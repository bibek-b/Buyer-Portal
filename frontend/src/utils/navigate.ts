import { useNavigate } from "react-router";

export const navigate = () => {
  const nav = useNavigate();
  return { nav };
};
