import { socialImgs } from "../constants";

const socialLinks = {
  git: "https://github.com/MilanTyagi2004", // Replace with your real profile
  x: "https://x.com/milantyagi2004", // Replace with your real profile
  linkedin: "https://www.linkedin.com/in/milan-tyagi-b15a8526b/", // Replace with your real profile
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="/terms" className="underline hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
            Terms & Conditions
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialLinks[socialImg.name] || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt={socialImg.name + " icon"} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Milan Tyagi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
