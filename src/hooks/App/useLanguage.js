import { LANGUAGES } from "library/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRefresh } from "store/reducers/setting/settingSlice";

const useLanguage = () => {
  const lang = useSelector((state) => state.setting.lang);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRefresh(Math.random()));

    document.documentElement.setAttribute(
      "dir",
      LANGUAGES?.[lang]?.dir || "ltr"
    );

    if (lang === "en") {

      document.title = "Dexpal - DEX aggregator on Ethereum, Binance Smart Chain, Polygon";

      document.body.classList.remove("font-fa")
    }

    if (lang === "fa") {

      document.title = "دکس پال - اولین صرافی غیر متمرکز ارزهای دیجیتال در ایران - Dexpal";

      document.body.classList.add("font-fa")
    }

  }, [lang, dispatch]);
};

export default useLanguage;
