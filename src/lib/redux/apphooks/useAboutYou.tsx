import { useAppSelector } from "../hooks";

export const useAboutYou = () => {
  const name = useAppSelector((state) => state.aboutYou.name);
  const age = useAppSelector((state) => state.aboutYou.age);
  const phone = useAppSelector((state) => state.aboutYou.phone);
  const gender = useAppSelector((state) => state.aboutYou.gender);

  return { name, age, phone, gender };
};
