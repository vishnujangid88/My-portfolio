
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card mt-12 pt-4 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Made with ❤ by Vishnu. All rights reserved.
      </p>
      <a
        href="#home"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
