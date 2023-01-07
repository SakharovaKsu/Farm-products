import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// при каждой отрисовке новой страницы нужно выполнять код window.scrollTo(0, 0);, который сбросит значение прокрутки до нуля.
// Обнулять scroll следует при открытии новой страницы, то есть при изменении pathname, поэтому pathname указано в зависимостях для useEffect.
// useLocation — кастомный хук, предоставляемый react-router-dom. Он возвращает pathname текущего URL.
