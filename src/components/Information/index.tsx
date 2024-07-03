import Image from "next/image";

import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";
import { TypeAnimation } from "react-type-animation";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-8">
        <div className="relative flex shrink gap-8 items-center">
          {information.imgSrc && (
            <div className="hidden md:flex relative w-40 shrink-0 h-40 items-center justify-around">
              <div className="w-[100%] h-[100%] p-[3px] items-center justify-center rounded-full bg-gradient-to-tl from-GRADIENT_FROM via-PRIMARY to-GRADIENT_TO">
                <Image
                  className="w-[100%] h-[100%] rounded-full"
                  src={information.imgSrc}
                  height={100}
                  width={100}
                  alt="img"
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="leading-[1.15]">
            <TypeAnimation
              sequence={["안녕하세요,", 1000, "소통하며 사고하는,", 1000]}
              wrapper="span"
              speed={1}
              style={{ display: "inline-block" }}
              repeat={0}
              cursor={false}
              preRenderFirstString
            />
            <br /> 프론트엔드 개발자{" "}
            <span className="text-PRIMARY font-semibold">{information.name}</span>
            입니다.
          </h1>
          <div className="flex gap-1">
            {information.contact.map((contact) => (
              <ContactItem
                key={contact.id}
                className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                {...contact}
              >
                {contact.name}
              </ContactItem>
            ))}
          </div>
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
