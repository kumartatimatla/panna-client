/* eslint-disable react-hooks/exhaustive-deps */
import { Image } from "@nextui-org/image";
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Chip,
  Avatar,
  Select,
  SelectItem,
  Divider,
} from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { context } from "../App";
import TextInput from "./TextInput";
import logoutImg from "../images/logout.png";
// import { googleLogout } from "@stack-pulse/next-google-login";
import { GoogleLogout } from "@stack-pulse/next-google-login";

const Sidebar = () => {
  const ctx = useContext(context);
  const { t } = useTranslation();
  const {
    libraryData,
    language,
    setLanguage,
    setChatResponse,
    setOpenModal,
    closeModal,
    setCloseModal,
    activePage,
    signerData,
    setEnteredPrompt,
  } = ctx;
  const [toggleLib, setToggleLib] = useState(true);
  const [toggleSidebar, setToggleSidebar] = useState("close");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const toggleMenu = (data) => {
    setToggleSidebar(data);
  };
  console.log("side", toggleSidebar);
  const navigateHome = (route) => {
    setChatResponse([]);
    setEnteredPrompt("");
    navigate(`/${route}`);
  };
  useEffect(() => {
    if (isOpen) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [isOpen]);
  useEffect(() => {
    if (closeModal) {
      onClose();
      setCloseModal(false);
    }
  }, [closeModal]);

  const handleLinkClick = (data) => {
    setChatResponse([data]);
  };
  const languages = [
    { value: "English", code: "en-US" },
    { value: "Spanish", code: "es-US" },
  ];
  const getInitials = (name) => {
    const words = name?.split(" ");
    const initials = words?.map((word) => word?.charAt(0)).join("");
    return initials;
  };
  // console.log("signerData", signerData);
  const handleLogout = () => {
    // googleLogout();
    // console.log("first", googleLogout());
  };
  const menuSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="25px"
      height="30px"
      viewBox="0,0,256,256"
    >
      <g
        fill="#1fa363"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M5,7h2h12c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2h-12h-2c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2z"></path>
          <path d="M19,10h-3h-11c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2h11h3c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2z"></path>
          <path d="M19,17h-6h-8c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2h8h6c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2z"></path>
        </g>
      </g>
    </svg>
  );
  const closeSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20px"
      height="20px"
      viewBox="0,0,256,256"
    >
      <g
        fill="#1fa363"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(8.53333,8.53333)">
          <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
        </g>
      </g>
    </svg>
  );
  return (
    <div className="height h-full col-span-1 sm:col-span-3 lg:col-span-2 grid">
      <div
        className={`grid sm:hidden cursor-pointer relative ${
          toggleSidebar === "open" ? "hidden" : "block"
        }`}
      >
        <span
          onClick={() => toggleMenu("open")}
          className="sticky self-start top-[10px] pl-1"
        >
          {toggleSidebar === "close" && menuSvg()}
        </span>
      </div>
      <div
        className={`sticky self-start top-0 h-screen flex flex-col justify-between pb-5 z-[100] ${
          toggleSidebar === "open"
            ? "block bg-pxty-dark-mid shadow shadow-2xl"
            : "hidden"
        } sm:flex sm:shadow-none`}
      >
        <div className="relative">
          <div
            onClick={() => toggleMenu("close")}
            className="pt-0 sm:hidden cursor-pointer absolute right-[10px] top-[10px]"
          >
            {toggleSidebar === "open" && closeSvg()}
          </div>
          <div className="flex items-center gap-x-1 p-4 ">
            <Image
              src={Logo}
              width="40px"
              height="40px"
              className="rounded-full border border-1 border-[#000]"
            />
            <span className="font-bold text-white text-[12px] sm:text-[] md:text-[16px] ml-2">
              {t("Paññā (Knowledge)")}
            </span>
          </div>
          <div className="my-4 text-white px-4 pb-4">
            <div className="flex justify-end w-full">
              <Select
                aria-label="Language"
                defaultSelectedKeys={[language]}
                // className="max-w-xs"
                size={"sm"}
                classNames={{
                  base: ["width", "w-full"],
                  trigger: [
                    "bg-pxty-mid",
                    "text-white",
                    "hover:bg-pxty-mid",
                    "hover:text-[#000]",
                  ],
                }}
                onChange={(e) => setLanguage(e.target.value)}
              >
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code}>
                    {language.value}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="my-4 text-white px-4">
            <Button
              onPress={onOpen}
              onClick={() => setChatResponse([])}
              className="bg-pxty-dark rounded-full border border-3 w-full border-pxty-light flex justify-start text-pxty-light-text hover:border-pxty-hover-cyan"
            >
              {t("New Thread")}
            </Button>
            <Modal
              backdrop="blur"
              size="3xl"
              hideCloseButton
              className="bg-pxty-dark-mid"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              classNames={{
                backdrop: ["z-[250]"],
                wrapper: ["z-[250]"],
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalBody>
                      <TextInput />
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
          <div className="px-1">
            <Button
              onClick={() => navigateHome("home")}
              className={`width w-full bg-pxty-dark-mid  ${
                activePage === "home"
                  ? "text-pxty-hover-cyan"
                  : "text-pxty-light-text"
              } text-base justify-start hover:text-pxty-hover-cyan`}
              startContent={
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              }
            >
              {t("Home")}
            </Button>
            <Button
              onClick={() => navigateHome("discover")}
              className={`width w-full bg-pxty-dark-mid  ${
                activePage === "discover"
                  ? "text-pxty-hover-cyan"
                  : "text-pxty-light-text"
              } text-base justify-start hover:text-pxty-hover-cyan`}
              startContent={
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </span>
              }
            >
              {t("Discover")}
            </Button>
            <div className="relative">
              <Button
                onClick={() => setToggleLib((prev) => !prev)}
                className={`width w-full bg-pxty-dark-mid  ${
                  activePage === "library"
                    ? "text-pxty-hover-cyan"
                    : "text-pxty-light-text"
                } text-base justify-start hover:text-pxty-hover-cyan`}
                startContent={
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 transform rotate-90 scale-x-[-1]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                  </span>
                }
              >
                {t("Library")}
              </Button>
              {toggleLib && (
                <div className="text-xs absolute left-[15%] top-[100%] border border-pxty-light border-y-0 border-r-0 pl-[10px] leading-7 ">
                  {libraryData.map((item) => {
                    return (
                      <div className="hover:text-pxty-hover-cyan">
                        <Link
                          key={item.id}
                          onClick={() => handleLinkClick(item)}
                          to="/results"
                          className="cursor-pointer"
                        >
                          {item.question}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <Divider className="bg-[#73AB96]" />
          <div className="w-full grid grid-cols-12 h-[50px] rounded-full p-2 mt-2">
            <div className="grid col-span-2  flex justify-center items-center">
              <span className="rounded-full h-[30px] w-[30px] flex justify-center items-center bg-[#0066DB] text-white">
                {getInitials(signerData?.name) || "kt"}
              </span>
            </div>
            <div className="grid col-span-8 flex justify-center items-center text-white px-3">
              {signerData?.name || "kumar tatimatla"}
            </div>
            <div className="grid col-span-2 flex justify-center items-center">
              <span className="border rounded-full h-[30px] w-[30px] flex justify-center items-center">
                <Button
                  isIconOnly
                  className="rounded-full min-w-[10px] w-[30px] h-[30px]"
                  // color="primary"
                  onClick={handleLogout}
                >
                  <Image
                    src={logoutImg}
                    width="30x"
                    height="30px"
                    className="rounded-full border border-1 border-[#000]"
                  />
                </Button>
                {/* <GoogleLogout
                clientId="412833534919-5etl75bd9mmfnelsibi9efvpdk5ejmkl.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={(resp) => console.log("logout", resp)}
                onFailure={(resp) => console.log("logout", resp)}
              ></GoogleLogout> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
