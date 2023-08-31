import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { createIconKey, kebabCaseToCompCase } from "./helpers";
import { SocialLink } from "./types";

const Icons = {
  ...FaIcons,
  ...SiIcons,
};

const SocialIcons = ({
  color = "text-black",
  socialIcons,
}: {
  color?: string;
  socialIcons: SocialLink[];
}) => {
  if (!socialIcons) return;

  return (
    <ul className={`flex justify-between gap-4 mx-auto my-4 w-fit ${color}`}>
      {socialIcons.map((link) => {
        if (!link.icon) return;
        const iconKey = createIconKey(link.icon.name, link.icon.provider);
        const Icon = Icons[kebabCaseToCompCase(iconKey) as keyof typeof Icons];
  
        return (
          <li key={link.icon.name} className="text-3xl">
            <a href={link.url} target="_blank">
              {!Icon ? <>{link.icon.name}</> : <Icon />}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
