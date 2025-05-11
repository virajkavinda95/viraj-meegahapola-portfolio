"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { FaEarthAmericas } from "react-icons/fa6";

const LanguageSwitcher = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button
          onClick={() => changeLanguage("en")}
          className="px-4 py-2 cursor-pointer"
        >
          En
        </button>
      ),
    },
    // {
    //   key: "2",
    //   label: (
    //     <button
    //       onClick={() => changeLanguage("si")}
    //       className="px-4 py-2 cursor-pointer"
    //     >
    //       සිං
    //     </button>
    //   ),
    // },
    // {
    //   key: "3",
    //   label: (
    //     <button
    //       onClick={() => changeLanguage("ar")}
    //       className="px-4 py-2 cursor-pointer"
    //     >
    //       آر
    //     </button>
    //   ),
    // },
  ];

  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: Language) => {
    // Language type
    setLanguage(lang); // no error now

    const segments = pathname.split("/");
    segments[1] = lang;
    const newPath = segments.join("/") || "/";

    router.push(newPath);
  };

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <Button className="w-full uppercase">
            <FaEarthAmericas />
            {language}
          </Button>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default LanguageSwitcher;
