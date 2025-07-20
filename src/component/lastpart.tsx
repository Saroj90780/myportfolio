import { FloatingDock } from "../components/ui/floating-dock";
import home from '../image/home_10079366.png'
import linkdin from '../image/linkedin_3536505.png'
import insta from '../image/social_15707749.png'
import git from '../image/github_3291667.png'
import X from '../image/logos_14417709.png'

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <img
          src={home}
          width={40}
          height={40}
          alt="home"
        />
      ),
      href: "#",
    },

    {
      title: "GitHub",
      icon: (
<img
          src={git}
          width={40}
          height={40}
          alt="github"
        />      ),
      href: "https://github.com/Saroj90780",
    },
    {
      title: "X",
      icon: (
<img
          src={X}
          width={40}
          height={40}
          alt="X"
        />      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <img
          src={insta}
          width={40}
          height={40}
          alt="instagram"
        />
      ),
      href: "https://www.instagram.com/mr._highness/",
    },
    {
      title: "Linkdin",
      icon:(
      <img
          src={linkdin}
          width={40}
          height={40}
          alt="Linkdin"
        />),
      href: "https://www.linkedin.com/in/saroj-padhi-50024a189/",
    }
  ];
  return (
    <div className="flex items-center justify-center h-[12rem] w-full z-10">
      <FloatingDock
        mobileClassName="translate-y-2" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
export default FloatingDockDemo