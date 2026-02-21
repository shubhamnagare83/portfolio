import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h3 className="text-xl font-bold gradient-text mb-4">Shubham N. Nagare</h3>
                        <p className="text-sm text-foreground/60 max-w-xs">
                            Transforming Ideas into Intelligent AI-Driven Solutions.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/shubhamnagare83" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/shubham-n-nagare-71006331b" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:shubhamnagare83@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-foreground/40">
                    <p>© {new Date().getFullYear()} Shubham N. Nagare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
